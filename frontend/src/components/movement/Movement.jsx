import styles from './Movement.module.css'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import SectionHeader from '../sectionHeader/SectionHeader'

import Pointer from '../../assets/movement/pointer.svg'
import JoinButton from '../joinButton/JoinButton'

const Movement = () => {
    useScrollAnimation();
    return (
        <>
            {/* WorkItem Section */}
            <section className={styles.movementSection}>
                <SectionHeader
                    title="Real movement, not just workouts"
                    description="Fitness isn't just about PRs or gym routines. In Sequorr, everything counts."
                />

                <div className={styles.movementShowcase}>
                    <p className={`${styles.missionHeading} reveal`}>Launching with community at it's core, Sequorr is designed to grow through shared journey, not isolated stats.</p>

                    <p className={styles.communityTag}><img src={Pointer} alt="" />pullup camp</p>
                    <p className={styles.communityTag}><img src={Pointer} alt="" />dive n drive</p>
                    <p className={styles.communityTag}><img src={Pointer} alt="" />morning walk crew</p>
                    <p className={styles.communityTag}><img src={Pointer} alt="" />21 days challenge</p>
                    <p className={styles.communityTag}><img src={Pointer} alt="" />marathon maniacs</p>
                    <p className={styles.communityTag}><img src={Pointer} alt="" />200m sprinters</p>

                    <JoinButton />
                </div>
            </section>
        </>
    )
}

export default Movement