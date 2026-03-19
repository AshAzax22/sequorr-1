import React, { useState, useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Logo from '../../assets/navbar/wordmark.svg'
import styles from './About.module.css'

import FitBoxOne from '../../assets/about/aboutFitness/box1.svg'
import FitBoxTwo1 from '../../assets/about/aboutFitness/boxTwo1.svg'
import FitBoxTwo2 from '../../assets/about/aboutFitness/boxTwo2.svg'
import FitBoxThree from '../../assets/about/aboutFitness/box3.svg'
import FitBoxFour from '../../assets/about/aboutFitness/box4.jpeg'
import FitRing from '../../assets/about/aboutFitness/ring.svg'

import Threads from '../../components/react-bits/threads/Threads'
import Audience from '../../components/audience/Audience'
import Believe from '../../components/believe/Believe'
import Movement from '../../components/movement/Movement'
import Footer from '../../components/footer/Footer'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import JoinButton from '../../components/joinButton/JoinButton'
import SectionHeader from '../../components/sectionHeader/SectionHeader'
import Hero from '../../components/hero/Hero'

const About = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const reactiveAmplitude = windowWidth <= 480 ? 1 : windowWidth <= 768 ? 2 : 3;

    useScrollAnimation();

    return (
        <>
            <Navbar />
            
            <div className={styles.aboutContainer}>
                {/* About Hero section */}
                <Hero 
                    background={
                        <Threads
                            amplitude={reactiveAmplitude}
                            distance={-0.5}
                            enableMouseInteraction
                            color={[0, 1, 0]}
                        />
                    }
                    tagline="Built for movement. Powered by community."
                    title={<img src={Logo} alt="Sequorr" />}
                    subtitle="Sequorr is a community-based fitness app created to make movement feel social, motivating, and sustainable — for everyday people."
                    description="Not just for athletes. Built for anyone who wants to show up more often."
                    actions={<JoinButton />}
                    className={styles.aboutHeroSection}
                    contentClassName={styles.aboutHeroContent}
                />

            {/* About Fitness Section */}
            <section className={styles.aboutFitnessSection}>
                <div className={styles.aboutFitnessHeader}>
                    <SectionHeader 
                        title="What we think about fitness"
                        description="Not as a goal to chase — but as a habit to return to."
                    />
                </div>

                <div className={styles.fitnessContent}>
                    <div className={`${styles.fitnessBlock} ${styles.fitnessBlock1}`}>
                        <div className={styles.fitnessTextContent}>
                            <h1 className={`${styles.fitnessBlockTitle} reveal`}>Reframing Fitness</h1>
                            <p className={`${styles.fitnessBlockText} reveal`}>
                                Fitness is often treated as something you achieve.<br />
                                A finish line. A peak. A result.<br />
                                But in real life, movement doesn't work that way.
                            </p>
                            <p className={`${styles.fitnessBlockText} reveal`}>
                                Some days you feel energetic.<br />
                                Some days you don't.<br />
                                Some weeks are consistent. Others aren't.
                            </p>
                        </div>
                        <div className={styles.fitnessMediaContent}>
                            <img src={FitBoxOne} alt="box1" className={styles.fitnessImage} />
                        </div>
                    </div>

                    <div className={`${styles.fitnessBlock} ${styles.fitnessBlock2}`}>
                        <div className={styles.fitnessMediaContent}>
                            <img src={FitBoxTwo1} alt="boxTwo1" className={styles.fitnessImage} />
                            <img src={FitBoxTwo2} alt="boxTwo2" className={styles.fitnessImage} />
                        </div>
                        <div className={styles.fitnessTextContent}>
                            <h1 className={`${styles.fitnessBlockTitle} reveal`}>Fitness as Continuity</h1>
                            <p className={`${styles.fitnessBlockText} reveal`}>
                                What matters most isn't how hard you push in a single moment.<br />
                                It's whether movement feels approachable enough to come back to.</p>
                            <p className={`${styles.fitnessBlockText} reveal`}>Sequorr focuses on continuity — helping people stay connected to movement over time, even when life shifts, motivation dips, or routines change.</p>
                        </div>
                    </div>

                    <div className={`${styles.fitnessBlock} ${styles.fitnessBlock3}`}>
                        <div className={styles.fitnessTextContent}>
                            <h1 className={`${styles.fitnessBlockTitle} reveal`}>The Role of Community</h1>
                            <p className={`${styles.fitnessBlockText} reveal`}>
                                Movement becomes easier to return to when it isn't carried alone.<br />
                                Seeing others show up — imperfectly, honestly, consistently — creates a quiet form of motivation.</p>
                            <p className={`${styles.fitnessBlockText} reveal`}>Not pressure. Not comparison. Just presence.</p>
                        </div>
                        <div className={styles.fitnessMediaContent}>
                            <img src={FitBoxThree} alt="boxThree" className={styles.fitnessImage} />
                        </div>
                    </div>

                    <div className={`${styles.fitnessBlock} ${styles.fitnessBlock4}`}>
                        <div className={styles.fitnessMediaContent}>
                            <img src={FitBoxFour} alt="fitBoxFour" className={styles.fitnessImage} />
                        </div>
                        <div className={styles.fitnessTextContent}>
                            <h1 className={`${styles.fitnessBlockTitle} reveal`}>Redefining Progress</h1>
                            <p className={`${styles.fitnessBlockText} reveal`}>
                                Progress doesn't look the same for everyone.<br />
                                Sometimes it's moving more.<br />
                                Sometimes it's feeling better.<br />
                                Sometimes it's simply not stopping.
                            </p>
                        </div>
                    </div>
                </div>
            </section >

            {/* Why Sequorr Section */}
            <section className={styles.whySequorrSection}>
                    <SectionHeader 
                        title="Why we're building Sequorr"
                        description={<>Every feature in Sequorr is built to help you show up more often — without pressure or perfection.<br />Instead of pushing harder, Sequorr focuses on making movement feel lighter, social, and sustainable.</>}
                    />
                

                <div className={styles.whySequorrContent}>
                    <div className={styles.whySequorrBlock}>
                        <h3 className={`${styles.whySequorrBlockTitle} reveal`}>Movement has always been a part of everyday life.</h3>
                        <p className={`${styles.whySequorrBlockText} reveal`}>Over time, fitness tools became more structured, more detailed, and more focused on measuring outcomes. For many people, that made staying active feel like something you had to opt into — rather than something that naturally fits into life.</p>
                    </div>

                    <div className={styles.whySequorrBlock}>
                        <h3 className={`${styles.whySequorrBlockTitle} reveal`}>We noticed that what most people struggle with isn't effort — it's continuity.</h3>
                        <p className={`${styles.whySequorrBlockText} reveal`}>
                            Not showing up perfectly.<br />
                            Not hitting goals every time.<br />
                            But simply staying connected to movement over time.
                        </p>
                    </div>

                    <div className={styles.whySequorrBlock}>
                        <h3 className={`${styles.whySequorrBlockTitle} reveal`}>Sequorr exists to support a different relationship with fitness.</h3>
                        <p className={`${styles.whySequorrBlockText} reveal`}>One where movement feels shared instead of solitary. Where encouragement matters as much as tracking. And where consistency grows naturally through community and support.</p>
                    </div>
                </div>
            </section >

            {/* Audience Section */}
            < Audience />

            {/* Belive Section */}
            < Believe />

            {/* Movement Section */}
            < Movement />
            </div>

            

            {/* Footer Section */}
            < Footer />
        </>
    )
}

export default About