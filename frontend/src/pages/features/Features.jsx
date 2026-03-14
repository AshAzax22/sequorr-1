import React, { useState } from 'react'
import styles from './Features.module.css'

import Graphics from '../../assets/feature/mobileGraphic.svg'

import DarkVeil from '../../components/react-bits/darkVeil/DarkVeil'
import Motivation from '../../components/motivation/Motivation'
import Footer from '../../components/footer/Footer'

const featureTypes = [
    {
        tag: 'Social',
        title: 'Track movement, together.',
        description: 'Log walks, workouts, or everyday activities and see others moving alongside you. Sequorr turns tracking into a shared experience — where showing up feels motivating, not isolating.',
        note: 'You don\'t just record activity — you feel supported while doing it.',
    },
    {
        tag: 'Inspired',
        title: 'Stay inspired, effortlessly.',
        description: 'Discover new ways to move through curated content, community highlights, and gentle nudges that keep you going — without burning out.',
        note: 'Motivation that meets you where you are.',
    },
    {
        tag: 'Challenges',
        title: 'Fun challenges, real progress.',
        description: 'Join community challenges that celebrate showing up over performance. Whether it\'s a 7-day streak or a group goal, every step counts.',
        note: 'Compete with kindness, grow with consistency.',
    },
    {
        tag: 'Flexible',
        title: 'Your pace, your way.',
        description: 'No rigid plans. Sequorr adapts to your life — log any activity, set your own goals, and move on your terms without guilt or pressure.',
        note: 'Flexibility is the foundation of lasting habits.',
    },
    {
        tag: 'Progressive',
        title: 'Small steps, big results.',
        description: 'Sequorr tracks your journey over time, celebrating milestones and showing how small, consistent efforts add up to real transformation.',
        note: 'Progress isn\'t perfection — it\'s persistence.',
    },
]

const Features = () => {
    const [activeTab, setActiveTab] = useState(0)

    const handleJoinClick = () => {
        console.log('Join the Movement clicked');
    }

    return (
        <>
            {/* Features Hero section */}
            <section className={styles.featuresSection}>
                <div className={styles.featuresBackground}>
                    <DarkVeil
                        hueShift={112}
                        noiseIntensity={0}
                        scanlineIntensity={0}
                        speed={1.9}
                        scanlineFrequency={0}
                        warpAmount={0}
                    />
                </div>

                <div className={styles.featuresContent}>
                    <div className={styles.featuresTagline}>
                        <p className={styles.taglineText}>Everything you need to move — together.</p>
                    </div>

                    <div className={styles.featuresText}>
                        <h1 className={styles.featuresTitle}>Sequorr</h1>

                        <h3 className={styles.featuresSubtitle}>No pressure. No complexity. Just consistency.</h3>

                        <p className={styles.featuresDescription}>Sequorr combines movement, motivation, and community into one simple experience designed for real life.</p>
                    </div>

                    <div className={styles.buttonGroup}>
                        <button onClick={handleJoinClick} className={styles.btnPrimary}>Join the Movement</button>
                    </div>

                    <div className={styles.featuresAnimationContainer}>
                        <div className={styles.featuresAnimation}></div>
                        <div className={styles.cssTextRing} style={{ '--total': 39 }}>
                            {Array.from("motivation · consistency · community · ").map((char, index) => (
                                <span key={index} style={{ '--index': index }}>
                                    {char === ' ' ? '\u00A0' : char}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Type section */}
            <section className={`${styles.featuresSection} ${styles.featuresTypeSection}`}>
                <div className={styles.typeHeader}>
                    <div className="sectionTitleContainer">
                        <p className="sectionTitleText">Designed for consistency, not overwhelm.</p>
                    </div>

                    <div className="sectionDescriptionContainer">
                        <p className="sectionDescriptionText">Every feature in Sequorr is built to help you show up more often — without pressure or perfection. Instead of pushing harder, Sequorr focuses on making movement feel lighter, social, and sustainable.</p>
                    </div>
                </div>

                <div className={styles.graphicContainer}>
                    <img src={Graphics} alt="graphics" />
                </div>

                <div className={styles.typeDetail}>
                    <h3 className={styles.typeDetailTitle}>{featureTypes[activeTab].title}</h3>
                    <p className={styles.typeDetailDescription}>{featureTypes[activeTab].description}</p>
                    <p className={styles.typeDetailNote}>{featureTypes[activeTab].note}</p>

                    <div className={styles.typeTags}>
                        {featureTypes.map((feature, index) => (
                            <p
                                key={feature.tag}
                                className={`${styles.typeTagItem} ${activeTab === index ? styles.typeTagItemActive : ''}`}
                                onClick={() => setActiveTab(index)}
                            >
                                {feature.tag}
                            </p>
                        ))}
                    </div>
                </div>
            </section>

            {/* Motivation Section */}
            <Motivation />

            {/* Footer Section */}
            <Footer />
        </>
    )
}

export default Features