import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './FeaturedBlogs.module.css';

const FeaturedBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFeaturedBlogs = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch featured blogs from the dedicated endpoint
        const response = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/blog/featured`);

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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear().toString().slice(-2);
    return `${day} ${month} ${year}`;
  };

  if (loading) {
    return (
      <section className={styles.featuredBlogsSection}>
        <div className={styles.featuredBlogsHeader}>
          <h2 className={styles.featuredBlogsTitle}>Featured Blogs</h2>
          <button onClick={() => navigate('/blogs')} className={styles.discoverButton}>
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
          <button onClick={() => navigate('/blogs')} className={styles.discoverButton}>
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
        <h2 className={styles.featuredBlogsTitle}>Featured Blogs</h2>
        <button onClick={() => navigate('/blogs')} className={styles.discoverButton}>
          Discover All
        </button>
      </div>

      <div className={styles.featuredBlogsContainer}>
        {blogs.length === 0 ? (
          <div className={styles.noBlogs}>No featured blogs available</div>
        ) : 
        (
            blogs.map((blog) => (
            <div
              key={blog._id}
              className={styles.blogCard}
              onClick={() => navigate(`/blog/${blog.slug}`)}
              style={{
                backgroundImage: blog.thumbnailImage ? `url(${blog.thumbnailImage})` : 'none',
              }}
            >
                {blog.tags && blog.tags.length > 0 && (
                    <div className={styles.blogTags}>
                    {blog.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className={styles.tag}>
                        {tag}
                        </span>
                    ))}
                    </div>
                )}

                <h3 className={styles.blogTitle}>{blog.title}</h3>

                <div className={styles.blogMeta}>
                    <div className={styles.blogStats}>
                    <span className={styles.readTime}>
                        {blog.averageReadTime} min read
                    </span>
                    </div>

                    <div className={styles.blogDate}>
                    {formatDate(blog.createdAt)}
                    </div>
                </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default FeaturedBlogs;