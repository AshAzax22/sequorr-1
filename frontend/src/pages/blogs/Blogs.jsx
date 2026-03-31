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
import Hero from '../../components/hero/Hero'
import SEO from '../../components/seo/SEO'

const Blogs = () => {
    return (
        <>
            <SEO 
                title="Blog" 
                description="Thoughts, experiences, and reflections on staying active — together. Written for real life, not perfect routines."
                url="https://sequorr.com/blogs"
            />
            <Navbar />
            {/* Blogs Hero section */}
            <div className={styles.blogsContainer}>
                <Hero 
                background={
                    <GridScan
                        className={styles.gridScan}
                        scanColor="#00ff00"
                        scanSpeed={1.0}
                        gridColor="#111"
                    />
                }
                tagline="Written for real life, not perfect routines."
                title={<img src={Logo} alt="Sequorr" />}
                subtitle="Thoughts, experiences, and reflections on staying active — together."
                actions={<JoinButton />}
                className={styles.blogsHeroSection}
                contentClassName={styles.blogsHeroContent}
            />

            {/* Featured Blogs Section */}
            < FeaturedBlogs />

            {/* Movement Section */}
            < Movement />

            {/* Discover All Blogs Section */}
            < DiscoverAll />

            {/* Footer Section */}
            < Footer />
            </div>
        </>
    )
}

export default Blogs