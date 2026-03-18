import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Logo from '../../assets/navbar/wordmark.svg'
import styles from './Features.module.css'

import Graphics from '../../assets/feature/mobileGraphic.svg'

import DarkVeil from '../../components/react-bits/darkVeil/DarkVeil'
import Motivation from '../../components/motivation/Motivation'
import Footer from '../../components/footer/Footer'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import JoinButton from '../../components/joinButton/JoinButton'
import SectionHeader from '../../components/sectionHeader/SectionHeader'

// morning
import MorningGrid1 from '../../assets/feature/gallery/morning/grid1.svg'
import MorningGrid2 from '../../assets/feature/gallery/morning/grid2.svg'
import MorningGrid3 from '../../assets/feature/gallery/morning/grid3.svg'
import MorningGrid5 from '../../assets/feature/gallery/morning/grid5.svg'
import MorningGrid6 from '../../assets/feature/gallery/morning/grid6.svg'
import MorningGrid7 from '../../assets/feature/gallery/morning/grid7.svg'
import MorningGrid8 from '../../assets/feature/gallery/morning/grid8.svg'

// noon
import NoonGrid1 from '../../assets/feature/gallery/noon/grid1.svg'
import NoonGrid2 from '../../assets/feature/gallery/noon/grid2.svg'
import NoonGrid3 from '../../assets/feature/gallery/noon/grid3.svg'
import NoonGrid5 from '../../assets/feature/gallery/noon/grid5.svg'
import NoonGrid6 from '../../assets/feature/gallery/noon/grid6.svg'
import NoonGrid7 from '../../assets/feature/gallery/noon/grid7.svg'
import NoonGrid8 from '../../assets/feature/gallery/noon/grid8.svg'

// evening
import EveningGrid1 from '../../assets/feature/gallery/evening/grid1.svg'
import EveningGrid2 from '../../assets/feature/gallery/evening/grid2.svg'
import EveningGrid3 from '../../assets/feature/gallery/evening/grid3.svg'
import EveningGrid5 from '../../assets/feature/gallery/evening/grid5.svg'
import EveningGrid6 from '../../assets/feature/gallery/evening/grid6.svg'
import EveningGrid7 from '../../assets/feature/gallery/evening/grid7.svg'
import EveningGrid8 from '../../assets/feature/gallery/evening/grid8.svg'

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
    const [activeTime, setActiveTime] = useState('Morning')

    const galleryImages = {
        Morning: {
            grid1: MorningGrid1,
            grid2: MorningGrid2,
            grid3: MorningGrid3,
            grid5: MorningGrid5,
            grid6: MorningGrid6,
            grid7: MorningGrid7,
            grid8: MorningGrid8,
        },
        Noon: {
            grid1: NoonGrid1,
            grid2: NoonGrid2,
            grid3: NoonGrid3,
            grid5: NoonGrid5,
            grid6: NoonGrid6,
            grid7: NoonGrid7,
            grid8: NoonGrid8,
        },
        Evening: {
            grid1: EveningGrid1,
            grid2: EveningGrid2,
            grid3: EveningGrid3,
            grid5: EveningGrid5,
            grid6: EveningGrid6,
            grid7: EveningGrid7,
            grid8: EveningGrid8,
        }
    }

    useScrollAnimation();

    return (
        <>
            <Navbar />
            <div className={styles.featuresContainer}>
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
                        <img src={Logo} alt="Sequorr" className={styles.featuresTitle} />

                        <h3 className={styles.featuresSubtitle}>No pressure. No complexity. Just consistency.</h3>

                        <p className={styles.featuresDescription}>Sequorr combines movement, motivation, and community into one simple experience designed for real life.</p>
                    </div>

                    <div className={styles.featuresButtonGroup}>
                        <JoinButton />
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

            {/* Features Type Section */}
            <section className={`${styles.featuresSection} ${styles.featuresTypeSection}`}>
                <div className={styles.typeHeader}>
                    <SectionHeader 
                        title="Designed for consistency, not overwhelm."
                        description="Every feature in Sequorr is built to help you show up more often — without pressure or perfection. Instead of pushing harder, Sequorr focuses on making movement feel lighter, social, and sustainable."
                    />
                </div>

                <div className={styles.graphicContainer}>
                    <img src={Graphics} alt="graphics" />
                </div>

                <div className={styles.typeDetail}>
                    <h3 className={`${styles.typeDetailTitle} reveal`}>{featureTypes[activeTab].title}</h3>
                    <p className={`${styles.typeDetailDescription} reveal`}>{featureTypes[activeTab].description}</p>
                    <p className={`${styles.typeDetailNote} reveal`}>{featureTypes[activeTab].note}</p>

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

            {/* Features Gallery Section */}
            <section className={styles.featuresGallerySection}>
                <div className={styles.typeHeader}>
                    <SectionHeader 
                        title="Built to fit into real life."
                        description={<>Fitness doesn't live in a single moment — it flows through your day.<br />Sequorr supports movement whenever it happens, whether it's a morning walk, a quick break, or a weekend activity.</>}
                    />
                </div>

                <div className={styles.featuresGalleryGrid}>
                    <div className={`${styles.featuresGalleryGridItem} ${styles.galleryImageItem} ${styles.featuresGalleryGridItemOne}`}>
                        <img src={galleryImages[activeTime].grid1} alt="GridImageOne" />
                    </div>
                    <div className={`${styles.featuresGalleryGridItem} ${styles.galleryImageItem} ${styles.featuresGalleryGridItemTwo}`}>
                        <img src={galleryImages[activeTime].grid2} alt="GridImageTwo" />
                    </div>
                    <div className={`${styles.featuresGalleryGridItem} ${styles.galleryImageItem} ${styles.featuresGalleryGridItemThree}`}>
                        <img src={galleryImages[activeTime].grid3} alt="GridImageThree" />
                    </div>
                    <div className={`${styles.featuresGalleryGridItem} ${styles.featuresGalleryGridItemFour}`}>
                        <p
                            className={`${styles.featuresGalleryGridItemFourText} ${activeTime === 'Morning' ? styles.activeTimeText : ''}`}
                            onClick={() => setActiveTime('Morning')}
                        >
                            Morning
                        </p>
                        <p
                            className={`${styles.featuresGalleryGridItemFourText} ${activeTime === 'Noon' ? styles.activeTimeText : ''}`}
                            onClick={() => setActiveTime('Noon')}
                        >
                            Noon
                        </p>
                        <p
                            className={`${styles.featuresGalleryGridItemFourText} ${activeTime === 'Evening' ? styles.activeTimeText : ''}`}
                            onClick={() => setActiveTime('Evening')}
                        >
                            Evening
                        </p>
                    </div>
                    <div className={`${styles.featuresGalleryGridItem} ${styles.galleryImageItem} ${styles.featuresGalleryGridItemFive}`}>
                        <img src={galleryImages[activeTime].grid5} alt="GridImageFive" />
                    </div>
                    <div className={`${styles.featuresGalleryGridItem} ${styles.galleryImageItem} ${styles.featuresGalleryGridItemSix}`}>
                        <img src={galleryImages[activeTime].grid6} alt="GridImageSix" />
                    </div>
                    <div className={`${styles.featuresGalleryGridItem} ${styles.galleryImageItem} ${styles.featuresGalleryGridItemSeven}`}>
                        <img src={galleryImages[activeTime].grid7} alt="GridImageSeven" />
                    </div>
                    <div className={`${styles.featuresGalleryGridItem} ${styles.galleryImageItem} ${styles.featuresGalleryGridItemEight}`}>
                        <img src={galleryImages[activeTime].grid8} alt="GridImageEight" />
                    </div>
                </div>
            </section>

            {/* Motivation Section */}
            <Motivation />

            {/* Footer Section */}
            <Footer />
            </div>
        </>
    )
}

export default Features