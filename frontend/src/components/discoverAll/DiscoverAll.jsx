import React, { useState, useEffect } from 'react';
import styles from './DiscoverAll.module.css';
import BlogCard from '../blogCard/BlogCard';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const DiscoverAll = () => {
  const [blogs, setBlogs] = useState([]);
  const [availableTags, setAvailableTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // debounced search query state to prevent too many requests
  const [debouncedSearch, setDebouncedSearch] = useState('');

  useScrollAnimation();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 500);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  // Reset page and blogs when filters change
  useEffect(() => {
    setPage(1);
    setBlogs([]);
  }, [debouncedSearch, selectedTag]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/tags`);
        const data = await response.json();
        if (data.success) {
          setAvailableTags(data.data || []);
        }
      } catch (err) {
        console.error('Error fetching tags:', err);
      }
    };
    fetchTags();
  }, []);

  const fetchBlogs = async (currentPage, isLoadMore = false) => {
    try {
      if (isLoadMore) {
        setLoadingMore(true);
      } else {
        setLoading(true);
      }
      setError(null);

      const params = new URLSearchParams({
        page: currentPage,
        limit: 10,
      });

      if (debouncedSearch) {
        params.append('search', debouncedSearch);
      }

      if (selectedTag) {
        params.append('tags', selectedTag);
      }

      const response = await fetch(`${import.meta.env.VITE_API_URL}/blog?${params.toString()}`);
      const data = await response.json();

      if (data.success) {
        if (isLoadMore) {
          setBlogs(prev => [...prev, ...data.data]);
        } else {
          setBlogs(data.data);
        }
        setTotalPages(data.totalPages);
      } else {
        throw new Error('Failed to fetch blogs');
      }
    } catch (err) {
      setError(err.message);
      console.error('Error fetching blogs:', err);
    } finally {
      if (isLoadMore) {
        setLoadingMore(false);
      } else {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchBlogs(page, page > 1);
  }, [page, debouncedSearch, selectedTag]);

  const toggleTag = (tagSlug) => {
    setSelectedTag(prev => prev === tagSlug ? '' : tagSlug);
    // Optionally close dropdown upon selection:
    // setIsDropdownOpen(false);
  };

  const handleLoadMore = () => {
    if (page < totalPages) {
      setPage(prev => prev + 1);
    }
  };

  return (
    <section id="discover-all" className={styles.discoverAllSection}>
      <div className={styles.header}>
        <h2 className={`${styles.title} reveal`}>Discover All</h2>
      </div>

      <div className={styles.controlsContainer}>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search blogs... (e.g. fitness, diet)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>

        <div className={styles.dropdownContainer}>
          <button 
            className={styles.dropdownButton}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {selectedTag ? availableTags.find((t) => t.slug === selectedTag)?.name || 'Categories' : 'Categories'}
            <span className={styles.dropdownIcon}>{isDropdownOpen ? '▲' : '▼'}</span>
          </button>
          
          {isDropdownOpen && availableTags.length > 0 && (
            <div className={styles.dropdownMenu}>
              <button
                className={`${styles.dropdownItem} ${!selectedTag ? styles.activeItem : ''}`}
                onClick={() => toggleTag('')}
              >
                All Categories
              </button>
              {availableTags.map(tag => (
                <button
                  key={tag._id}
                  className={`${styles.dropdownItem} ${selectedTag === tag.slug ? styles.activeItem : ''}`}
                  onClick={() => toggleTag(tag.slug)}
                >
                  {tag.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {error && <div className={styles.error}>Error: {error}</div>}

      <div className={styles.blogsWrapper}>
        <div className={styles.blogsGrid}>
          {loading && !loadingMore ? (
            <div className={styles.loading}>Loading blogs...</div>
          ) : blogs.length === 0 ? (
            <div className={styles.noBlogs}>No blogs found matching your criteria.</div>
          ) : (
            blogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))
          )}
        </div>

        {/* Load More Section with Blur Effect */}
        {page < totalPages && (
          <div className={styles.loadMoreContainer}>
            <div className={styles.blurOverlay}></div>
            <button 
              className={styles.loadMoreButton}
              onClick={handleLoadMore}
              disabled={loadingMore}
            >
              {loadingMore ? 'Loading...' : 'Load More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default DiscoverAll;
