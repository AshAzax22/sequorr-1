import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import Logo from '../../assets/navbar/wordmark.svg'
import styles from './Home.module.css'

import Dither from '../../components/react-bits/dither/Dither'
import Audience from '../../components/audience/Audience'
import Movement from '../../components/movement/Movement'
import Motivation from '../../components/motivation/Motivation'
import FeaturedBlogs from '../../components/featuredBlogs/FeaturedBlogs'
import Footer from '../../components/footer/Footer'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import JoinButton from '../../components/joinButton/JoinButton'
import SectionHeader from '../../components/sectionHeader/SectionHeader'

const Home = () => {
    const navigate = useNavigate();

    useScrollAnimation();

    return (
        <>
            <Navbar />
            <div className={styles.heroContainer}>
                {/* Hero section */}
            <section className={styles.heroSection}>
                <div className={styles.heroBackground}>
                    <Dither
                        waveColor={[0.5, 0.8, 0.5]}
                        disableAnimation={false}
                        enableMouseInteraction
                        mouseRadius={0.1}
                        waveAmplitude={0.3}
                        waveFrequency={2.4}
                        waveSpeed={0.05}
                    />
                </div>

                <div className={styles.heroContent}>
                    <div className={styles.heroTagline}>
                        <p className={styles.taglineText}>Track it. Share it. Own it.</p>
                    </div>

                    <div className={styles.heroText}>
                        <img src={Logo} alt="Sequorr" className={styles.heroTitle} />

                        <h3 className={styles.heroSubtitle}>Prove it.</h3>

                        <p className={styles.heroDescription}>A community-first fitness app built for everyday movement, not just numbers.</p>
                    </div>

                    <div className={styles.buttonGroup}>
                        <JoinButton />
                        <button onClick={() => { window.scrollTo(0,0); navigate('/features'); }} className={styles.btnSecondary}>Explore Features</button>
                    </div>
                </div>
            </section>

            {/* About section */}
            <section className={styles.aboutSection}>
                <SectionHeader 
                    title="Not Just Fitness. A Shared Experience."
                    description="Sequorr brings people, movement, and motivation together, staying active feels natural, social, and sustainable."
                />

                <div className={styles.aboutBentoGrid}>
                    <div className={`${styles.bentoItem} ${styles.aboutBentoItemOne}`}>
                        <h1 className={`${styles.aboutBentoTitle} reveal`}>Fitness Together</h1>
                        <p className={`${styles.aboutBentoDescription} reveal`}>Sequorr is built around shared movement, encouragement, and showing up together.</p>
                    </div>

                    <div className={`${styles.bentoItem} ${styles.aboutBentoItemTwo}`}>
                        <h1 className={`${styles.aboutBentoTitle} reveal`}>Simple. Human. Real.</h1>
                        <p className={`${styles.aboutBentoDescription} reveal`}>No complicated setup. Just movement that fits into everyday life.</p>
                    </div>

                    <div className={`${styles.bentoItem} ${styles.aboutBentoItemThree}`}>
                        <h1 className={`${styles.aboutBentoTitle} reveal`}>Movement that feels lighter.</h1>
                        <p className={`${styles.aboutBentoDescription} reveal`}>When fitness feels social and supportive, staying active becomes easier to enjoy.</p>
                    </div>

                    <div className={`${styles.bentoItem} ${styles.aboutBentoItemFour}`}>
                        <div className={styles.aboutBentoButton} onClick={() => { window.scrollTo(0,0); navigate('/features'); }} style={{ cursor: 'pointer' }}>
                            <p className={styles.aboutBentoButtonText}>Explore Features</p>
                        </div>
                    </div>

                    <div className={`${styles.bentoItem} ${styles.aboutBentoItemFive}`}>
                        <h1 className={`${styles.aboutBentoTitle} reveal`}>Consistency that lasts.</h1>
                        <p className={`${styles.aboutBentoDescription} reveal`}>Small efforts, shared regularly, turn into meaningful progress over time.</p>
                    </div>

                    <div className={`${styles.bentoItem} ${styles.aboutBentoItemSix}`}>
                        <h1 className={`${styles.aboutBentoTitle} reveal`}>Move with us.</h1>
                        <p className={`${styles.aboutBentoDescription} reveal`}>Join early and experience a more connected way to stay active.</p>
                        <JoinButton />
                    </div>
                </div>
            </section>

            {/* Audience Section */}
            <Audience />

            {/* Movement Section */}
            <Movement />

            {/* Motivation Section */}
            <Motivation />

            {/* Featured Blogs Section */}
            <FeaturedBlogs />

            {/* Footer Section */}
            <Footer />
            </div>

        </>
    )
}

export default Home