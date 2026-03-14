import React, { useState, useEffect } from 'react'
import styles from './Believe.module.css'

import Pointer from '../../assets/movement/pointer.svg'

const Believe = () => {
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
                        <p className={styles.believeBlockNavText}><img className={styles.believeBlockNavImage} src={Pointer} alt="pointer" />Community over Intensity</p>
                        <p className={styles.believeBlockNavText}><img className={styles.believeBlockNavImage} src={Pointer} alt="pointer" />Consistency Over Intensity</p>
                        <p className={styles.believeBlockNavText}><img className={styles.believeBlockNavImage} src={Pointer} alt="pointer" />Fitness Should Fit Real Life</p>
                        <p className={styles.believeBlockNavText}><img className={styles.believeBlockNavImage} src={Pointer} alt="pointer" />Everyone Belongs</p>
                        <p className={styles.believeBlockNavText}><img className={styles.believeBlockNavImage} src={Pointer} alt="pointer" />Progress Is Personal</p>
                    </div>

                    <div className={styles.believeBlockContent}>
                        <img className={styles.believeBlockContentImage} src="" alt="" />
                        <p className={styles.believeBlockContentText}>Movement feels more sustainable when it's shared. Seeing others show up — imperfectly, consistently, honestly — creates encouragement without pressure.</p>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Believe