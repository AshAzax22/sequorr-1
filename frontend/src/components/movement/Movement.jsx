import React from 'react'
import styles from './Movement.module.css'

import Pointer from '../../assets/movement/pointer.svg'

const Movement = () => {
    return (
        <>
            {/* WorkItem Section */}
            <section className={styles.movementSection}>
                <div className="sectionTitleContainer">
                    <p className="sectionTitleText">More Than an App. A Movement.</p>
                </div>

                <div className="sectionDescriptionContainer">
                    <p className="sectionDescriptionText">This is where progress feels lighter, because you're moving together. It's shared through everyday wins, group energy, and collection motivation.</p>
                </div>

                <div className={styles.movementShowcase}>
                    <p className={styles.missionHeading}>Launching with community at ita core, Sequorr is designed to grow through shared journey, not isolated stats.</p>

                    <p className={styles.communityTag}><img src={Pointer} alt="" />pullup camp</p>
                    <p className={styles.communityTag}><img src={Pointer} alt="" />dive n drive</p>
                    <p className={styles.communityTag}><img src={Pointer} alt="" />morning walk crew</p>
                    <p className={styles.communityTag}><img src={Pointer} alt="" />21 days challenge</p>
                    <p className={styles.communityTag}><img src={Pointer} alt="" />marathon maniacs</p>
                    <p className={styles.communityTag}><img src={Pointer} alt="" />200m sprinters</p>

                    <button className={styles.movementButton}>Join the Movement</button>
                </div>
            </section>
        </>
    )
}

export default Movement