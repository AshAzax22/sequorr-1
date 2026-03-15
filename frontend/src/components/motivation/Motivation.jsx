import React, { useState } from 'react'
import styles from './Motivation.module.css'

import Pointer from '../../assets/movement/pointer.svg'
import Box8Button from '../../assets/motivation/box8button.svg'
import Stepper, { Step } from '../../components/react-bits/stepper/Stepper'

const Motivation = () => {
    const [activePhase, setActivePhase] = useState('Morning')
    const [activityIndex, setActivityIndex] = useState(0)

    const activities = ['Running', 'Swimming', 'Cycling', 'Yoga']

    const handleNextActivity = () => {
        setActivityIndex((prev) => (prev + 1) % activities.length)
    }

    const phases = [
        { name: 'Morning', description: 'Kickstart your day with a quick stretch or a mindful walk. Get that early win and set the tone for a productive day.' },
        { name: 'Noon', description: 'A break between classes or work. Log a quick activity, join a casual challenge, or get a nudge from your community.' },
        { name: 'Evening', description: 'Wind down or push your limits. Reflect on your progress, cheer for your friends, and prepare for a restful night.' }
    ]

    return (
        <>
            {/* Motivation Section */}
            <section className={styles.motivationSection}>
                <div className="sectionTitleContainer">
                    <p className="sectionTitleText">What you will experience</p>
                </div>

                <div className="sectionDescriptionContainer">
                    <p className="sectionDescriptionText">Not just features — real feelings that keep you coming back.</p>
                </div>

                <div className={styles.motivationShowcase}>
                    <div className={styles.motivationCard}>
                        <h2 className={styles.cardTitle}>Consistency Without Burnout</h2>
                        <p className={styles.cardTagline}>You'll feel more consistent</p>
                        <p className={styles.cardDescription}>Small wins start to add up when fitness fits into your life not the other way around.</p>
                        <p className={styles.cardHighlightText}>Progress, at your pace.</p>
                    </div>

                    <div className={styles.motivationCard}>
                        <h2 className={styles.cardTitle}>Progress You  Feel</h2>
                        <p className={styles.cardTagline}>Its not just about numbers.</p>
                        <div className={styles.cardBarContainer}>
                            <div className={styles.cardBar}></div>
                            <div className={styles.cardBar}></div>
                            <div className={styles.cardBar}></div>
                            <div className={styles.cardBar}></div>
                            <div className={styles.cardBar}></div>
                        </div>
                        <p className={styles.cardHighlightText}>Growth beyond metrics.</p>
                    </div>

                    <div className={styles.motivationCard}>
                        <h2 className={styles.cardTitle}>Your day with Sequorr</h2>
                        <div className={styles.daySchedule}>
                            <div className={styles.dayPhaseNav}>
                                {phases.map((phase) => (
                                    <p
                                        key={phase.name}
                                        className={`${styles.dayPhaseNavItem} ${activePhase === phase.name ? styles.active : ''}`}
                                        onClick={() => setActivePhase(phase.name)}
                                    >
                                        {phase.name}
                                    </p>
                                ))}
                            </div>
                            <div className={styles.dayPhaseNavDescriptionContainer}>
                                <p className={styles.dayPhaseNavDescription}>
                                    {phases.find(p => p.name === activePhase)?.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.motivationCard}>
                        <h2 className={styles.cardTitle}>Motivation That Lasts</h2>
                        <p className={styles.cardTagline}>You'll stay motivated longer</p>
                        <p className={styles.cardDescription}>Shared challenges and visible effort keep the spark alive — even on low-energy days.</p>
                        <p className={styles.cardHighlightText}>Your journey, your rules.</p>
                    </div>

                    <div className={styles.motivationCard}>
                        <h2 className={styles.cardTitle}>What's holding you back</h2>
                        {/* <p className={styles.cardTagline}>Lack of motivation</p> */}
                        <Stepper
                            initialStep={1}
                            onStepChange={(step) => {
                                console.log(step);
                            }}
                            onFinalStepCompleted={() => console.log("All steps completed!")}
                            backButtonText="Previous"
                            nextButtonText="Next"
                        >
                            <Step>
                                <p className={styles.cardDescription}>Lack of motivation</p>
                            </Step>

                            <Step>
                                <p className={styles.cardDescription}>Inconsistent routines</p>
                            </Step>

                            <Step>
                                <p className={styles.cardDescription}>Fear of starting alone</p>
                            </Step>

                            <Step>
                                <p className={styles.cardDescription}>Complex metrics</p>
                            </Step>
                        </Stepper>

                        <p className={styles.cardHighlightText}>Movement becomes a habit.</p>
                    </div>

                    <div className={styles.motivationCard}>
                        <h2 className={styles.cardTitle}>Get your life moving</h2>
                    </div>

                    <div className={styles.motivationCard}>
                        <h2 className={styles.cardTitle}>Community Over Isolation</h2>
                        <p className={styles.cardTagline}>No ranks. No gatekeeping.</p>
                    </div>

                    <div className={styles.motivationCard}>
                        <h2 className={styles.cardTitle}>Explore all activities</h2>
                        <p className={styles.cardTagline}>Fitness has its own options</p>
                        <div className={styles.activityLoopContainer}>
                            <div className={styles.activityTextContainer}>
                                <p className={styles.activityText}>{activities[activityIndex]}</p>
                            </div>
                            <img
                                src={Box8Button}
                                alt="button"
                                className={styles.activityButton}
                                onClick={handleNextActivity}
                            />
                        </div>
                        <p className={styles.cardHighlightText}>Try your options.</p>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Motivation