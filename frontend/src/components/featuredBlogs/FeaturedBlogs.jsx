import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './FeaturedBlogs.module.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import BlogCard from '../blogCard/BlogCard';

const FeaturedBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useScrollAnimation();

  const handleDiscoverClick = () => {
    if (window.location.pathname === '/blogs') {
      const el = document.getElementById('discover-all');
      if (el) {
        // Adjust scroll position to account for navbar height
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      navigate('/blogs');
      setTimeout(() => {
        const el = document.getElementById('discover-all');
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 500);
    }
  };

  useEffect(() => {
    const fetchFeaturedBlogs = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch featured blogs from the dedicated endpoint
        const response = await fetch(`${import.meta.env.VITE_API_URL}/blog/featured`);

        const data = await response.json();

        if (data.success) {
          setBlogs(data.data);
          console.log('Fetched featured blogs:', data.data);
        } else {
          throw new Error('API returned success: false');
        }
      } catch (err) {
        setError(err.message);
        console.error('Error fetching blogs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedBlogs();
  }, []);

  if (loading) {
    return (
      <section className={styles.featuredBlogsSection}>
        <div className={styles.featuredBlogsHeader}>
          <h2 className={styles.featuredBlogsTitle}>Featured Blogs</h2>
          <button onClick={handleDiscoverClick} className={styles.discoverButton}>
            Discover All
          </button>
        </div>
        <div className={styles.featuredBlogsContainer}>
          <div className={styles.loading}>Loading featured blogs...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.featuredBlogsSection}>
        <div className={styles.featuredBlogsHeader}>
          <h2 className={styles.featuredBlogsTitle}>Featured Blogs</h2>
          <button onClick={handleDiscoverClick} className={styles.discoverButton}>
            Discover All
          </button>
        </div>
        <div className={styles.featuredBlogsContainer}>
          <div className={styles.error}>Error loading blogs: {error}</div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.featuredBlogsSection}>
      <div className={styles.featuredBlogsHeader}>
        <h2 className={`${styles.featuredBlogsTitle} reveal`}>Featured Blogs</h2>
        <button onClick={handleDiscoverClick} className={styles.discoverButton}>
          Discover All
        </button>
      </div>

      <div className={styles.featuredBlogsContainer}>
        {blogs.length === 0 ? (
          <div className={styles.noBlogs}>No featured blogs available</div>
        ) : 
        (
            blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))
        )}
      </div>
    </section>
  );
};

export default FeaturedBlogs;