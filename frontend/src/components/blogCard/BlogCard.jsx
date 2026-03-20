import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './BlogCard.module.css';

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear().toString().slice(-2);
    return `${day} ${month} ${year}`;
  };

  return (
    <div
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
  );
};

export default BlogCard;
