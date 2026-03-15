import React, { useState } from 'react'
import styles from './Believe.module.css'

import Pointer from '../../assets/movement/pointer.svg'
import Option1 from '../../assets/believe/option1.svg'
import Option2 from '../../assets/believe/option2.svg'
import Option3 from '../../assets/believe/option3.svg'
import Option4 from '../../assets/believe/option4.svg'
import Option5 from '../../assets/believe/option5.svg'

const Believe = () => {
    const believes = [
        {
            title: "Community over Intensity",
            description: "Movement feels more sustainable when it's shared. Seeing others show up — imperfectly, consistently, honestly — creates encouragement without pressure.",
            image: Option1
        },
        {
            title: "Consistency Over Intensity",
            description: "Long-term movement isn't built on perfect routines or extreme effort. It's built on returning, again and again, even when energy is low or schedules change.",
            image: Option2
        },
        {
            title: "Fitness Should Fit Real Life",
            description: "Life is unpredictable. Some days are active. Some days are quiet. Fitness should adapt to that rhythm, not demand rigid plans or perfect timing.",
            image: Option3
        },
        {
            title: "Everyone Belongs",
            description: "You don't need to reach a certain level, look a certain way, or hit specific numbers to belong here.",
            image: Option4
        },
        {
            title: "Progress Is Personal",
            description: "Progress isn't one-size-fits-all. For some, it's more energy. For others, it's consistency. Sometimes, it's simply showing up.",
            image: Option5
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const activeBelief = believes[activeIndex];

    return (
        <>
            {/* What We Believe Section */}
            <section className={styles.believeSection}>
                <div className={styles.believeHeader}>
                    <div className="sectionTitleContainer">
                        <p className="sectionTitleText">What we believe</p>
                    </div>

                    <div className="sectionDescriptionContainer">
                        <p className="sectionDescriptionText">These beliefs guide how Sequorr is designed — and how it should feel to use.</p>
                    </div>
                </div>

                <div className={styles.believeContent}>
                    <div className={styles.believeBlockNav}>
                        {believes.map((belief, index) => (
                            <button
                                key={index}
                                className={`${styles.believeBlockNavBtn} ${activeIndex === index ? styles.active : ''}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                {activeIndex === index && (
                                    <img className={styles.believeBlockNavImage} src={Pointer} alt="pointer" />
                                )}
                                {belief.title}
                            </button>
                        ))}
                    </div>

                    <div className={styles.believeBlockContent}>
                        <img className={styles.believeBlockContentImage} src={activeBelief.image} alt={activeBelief.title} />
                        <div className={styles.believeBlockContentOverlay}>
                            <p className={styles.believeBlockContentText}>{activeBelief.description}</p>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Believe