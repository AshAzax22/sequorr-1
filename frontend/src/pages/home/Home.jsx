import React from 'react'
import styles from './Home.module.css'

import Dither from '../../components/react-bits/dither/Dither'
import Audience from '../../components/audience/Audience'
import Movement from '../../components/movement/Movement'
import Motivation from '../../components/motivation/Motivation'
import FeaturedBlogs from '../../components/featuredBlogs/FeaturedBlogs'
import Footer from '../../components/footer/Footer'

const Home = () => {
    const handleJoinClick = () => {
        console.log('Join the Movement clicked');
    }

    return (
        <>
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
                        <p className={styles.taglineText}>Train. Track. Connect. Stay consistent.</p>
                    </div>

                    <div className={styles.heroText}>
                        <h1 className={styles.heroTitle}>Sequorr</h1>

                        <h3 className={styles.heroSubtitle}>Fitness, Together.</h3>

                        <p className={styles.heroDescription}>A community-first fitness app built for everyday movement — not just numbers.</p>
                    </div>

                    <div className={styles.buttonGroup}>
                        <button onClick={handleJoinClick} className={styles.btnPrimary}>Join the Movement</button>
                        <button onClick={handleJoinClick} className={styles.btnSecondary}>Explore Features</button>
                    </div>
                </div>
            </section>

            {/* About section */}
            <section className={styles.aboutSection}>
                <div className="sectionTitleContainer">
                    <p className="sectionTitleText">Not Just Fitness. A Shared Experience.</p>
                </div>

                <div className="sectionDescriptionContainer">
                    <p className="sectionDescriptionText">Sequorr brings people, movement, and motivation together — so staying active feels natural, social, and sustainable.</p>
                </div>

                <div className={styles.aboutBentoGrid}>
                    <div className={`${styles.bentoItem} ${styles.aboutBentoItemOne}`}>
                        <h1 className={styles.aboutBentoTitle}>Fitness Together</h1>
                        <p className={styles.aboutBentoDescription}>Sequorr is built around shared movement, encouragement, and showing up together.</p>
                    </div>

                    <div className={`${styles.bentoItem} ${styles.aboutBentoItemTwo}`}>
                        <h1 className={styles.aboutBentoTitle}>Simple. Human. Real.</h1>
                        <p className={styles.aboutBentoDescription}>No complicated setup. Just movement that fits into everyday life.</p>
                    </div>

                    <div className={`${styles.bentoItem} ${styles.aboutBentoItemThree}`}>
                        <h1 className={styles.aboutBentoTitle}>Movement that feels lighter.</h1>
                        <p className={styles.aboutBentoDescription}>When fitness feels social and supportive, staying active becomes easier to enjoy.</p>
                    </div>

                    <div className={`${styles.bentoItem} ${styles.aboutBentoItemFour}`}>
                        <div className={styles.aboutBentoButton}>
                            <p className={styles.aboutBentoButtonText}>Explore Features</p>
                        </div>
                    </div>

                    <div className={`${styles.bentoItem} ${styles.aboutBentoItemFive}`}>
                        <h1 className={styles.aboutBentoTitle}>Consistency that lasts.</h1>
                        <p className={styles.aboutBentoDescription}>Small efforts, shared regularly, turn into meaningful progress over time.</p>
                    </div>

                    <div className={`${styles.bentoItem} ${styles.aboutBentoItemSix}`}>
                        <h1 className={styles.aboutBentoTitle}>Move with us.</h1>
                        <p className={styles.aboutBentoDescription}>Join early and experience a more connected way to stay active.</p>
                        <div className={styles.aboutBentoButton}>
                            <p className={styles.aboutBentoButtonText}>Join the Waitlist</p>
                        </div>
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
        </>
    )
}

export default Home