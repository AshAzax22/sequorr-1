import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BlogCard.module.css';

const BlogCard = ({ blog }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear().toString().slice(-2);
    return `${day} ${month} ${year}`;
  };

  return (
    <Link to={`/blog/${blog.slug}`} className={styles.blogCard}>
      {blog.thumbnailImage && (
        <img 
          src={blog.thumbnailImage} 
          alt={blog.title || 'Blog thumbnail'} 
          className={styles.cardImage} 
          loading="lazy" 
        />
      )}
      <div className={styles.cardOverlay}></div>
      <div className={styles.cardContent}>
        {blog.tags && blog.tags.length > 0 && (
          <div className={styles.blogTags}>
            {blog.tags.slice(0, 2).map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}

        <h3 className={`${styles.blogTitle} reveal`}>{blog.title}</h3>

        <div className={styles.blogMeta}>
          <div className={styles.blogStats}>
            <span className={styles.readTime}>
              {blog.averageReadTime} min read
            </span>
          </div>

          <div className={`${styles.blogDate} reveal`}>
            {formatDate(blog.createdAt)}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
