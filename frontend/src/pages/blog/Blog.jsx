import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import styles from "./Blog.module.css";

const Blog = () => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/blog/${slug}`,
        );
        const data = await response.json();

        if (data.success) {
          setBlog(data.data);
        } else {
          throw new Error(data.message || "API returned success: false");
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching blog:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  // ScrollSpy Implementation
  useEffect(() => {
    if (!blog?.sections) return;

    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -80% 0px', // Detect when section is near the top
      threshold: 0
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe all sections
    blog.sections.forEach((_, index) => {
      const element = document.getElementById(`section-${index}`);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [blog, loading]);


  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "short", year: "2-digit" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Adjust based on navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (loading) {
    return (
      <section className={styles.blogSection}>
        <div className={styles.loadingContainer}>
          <div className={styles.loader}></div>
          <span>Loading your story...</span>
        </div>
      </section>
    );
  }

  if (error || !blog) {
    return (
      <section className={styles.blogSection}>
        <div className={styles.errorContainer}>
          <h2>Oops!</h2>
          <p>{error || "Blog not found"}</p>
          <button onClick={() => navigate(-1)} className={styles.backButton}>
            Go Back
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.blogSection}>
      <Navbar />
      <div className={styles.topNavigation}>
        <button
          onClick={() => navigate(-1)}
          className={styles.moveToPreviousPage}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back
        </button>
      </div>

      <article className={styles.blogWrapper}>
        <header className={styles.blogHeader}>
          <div className={styles.tags}>
            {blog.tags?.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
          <h1 className={styles.title}>{blog.title}</h1>
          <div className={styles.metaInfo}>
            <span>{blog.averageReadTime} min read</span>
            <span className={styles.dot}>•</span>
            <span>{formatDate(blog.createdAt)}</span>
          </div>
        </header>

        <div className={styles.coverImageFrame}>
          <img
            src={blog.coverImage}
            alt={blog.title}
            className={styles.coverImage}
          />
        </div>

        <div className={styles.contentGrid}>
          <aside className={styles.sidebar}>
            <div className={styles.stickyNav}>
              <h3>Contents</h3>
              <nav>
                <ul>
                  {blog.sections?.map((section, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleScrollTo(`section-${index}`)}
                        className={`${styles.navItem} ${activeSection === `section-${index}` ? styles.activeNavItem : ''}`}
                      >
                        {section.subHeading}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          <main className={styles.mainContent}>
            <p className={styles.description}>{blog.description}</p>

            {blog.sections?.map((section, index) => (
              <div
                key={index}
                id={`section-${index}`}
                className={styles.section}
              >
                {section.imageUrl && (
                  <figure className={styles.sectionImageFrame}>
                    <img
                      src={section.imageUrl}
                      alt={section.imageCaption || section.subHeading}
                    />
                    {section.imageCaption && (
                      <figcaption>{section.imageCaption}</figcaption>
                    )}
                  </figure>
                )}
                <h2 className={styles.subHeading}>{section.subHeading}</h2>
                <div className={styles.sectionContent}>{section.content}</div>
              </div>
            ))}
          </main>
        </div>
      </article>
    </section>
  );
};

export default Blog;
