import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Logo from '../../assets/navbar/wordmark.svg'
import styles from './Blogs.module.css'

import { GridScan } from '../../components/react-bits/gridScan/GridScan.jsx'
import FeaturedBlogs from '../../components/featuredBlogs/FeaturedBlogs'
import DiscoverAll from '../../components/discoverAll/DiscoverAll'
import Movement from '../../components/movement/Movement'
import Footer from '../../components/footer/Footer'
import JoinButton from '../../components/joinButton/JoinButton'

const Blogs = () => {
    return (
        <>
            <Navbar />
            {/* Blogs Hero section */}
            <section className={styles.blogsHeroSection}>
                <div className={styles.blogsHeroBackground}>
                    <GridScan
                        className={styles.gridScan}
                        scanColor="#00ff00"
                        scanSpeed={1.0}
                        gridColor="#111"
                    />
                </div>

                <div className={styles.blogsHeroContent}>
                    <div className={styles.blogsHeroTagline}>
                        <p className={styles.taglineText}>Written for real life, not perfect routines.</p>
                    </div>

                    <div className={styles.blogsHeroText}>
                        <img src={Logo} alt="Sequorr" className={styles.blogsHeroTitle} />

                        <h3 className={styles.blogsHeroSubtitle}>Thoughts, experiences, and reflections on staying active — together.</h3>
                    </div>

                    <div className={styles.blogsHeroButtonGroup}>
                        <JoinButton />
                    </div>
                </div>
            </section>

            {/* Featured Blogs Section */}
            < FeaturedBlogs />

            {/* Movement Section */}
            < Movement />

            {/* Discover All Blogs Section */}
            < DiscoverAll />

            {/* Footer Section */}
            < Footer />
        </>
    )
}

export default Blogs