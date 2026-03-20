import React from 'react';
import styles from './BlogCardSkeleton.module.css';

const BlogCardSkeleton = () => {
  return (
    <div className={styles.skeletonCard}>
      <div className={styles.shimmerOverlay}></div>
      
      <div className={styles.skeletonTags}>
        <div className={styles.skeletonTag}></div>
        <div className={styles.skeletonTag}></div>
      </div>

      <div className={styles.skeletonTitle}></div>
      <div className={styles.skeletonTitleShort}></div>

      <div className={styles.skeletonMeta}>
        <div className={styles.skeletonStat}></div>
        <div className={styles.skeletonDate}></div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
