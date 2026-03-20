import styles from './Audience.module.css'
import useScrollAnimation from '../../hooks/useScrollAnimation'

// Import Icons
import beginnersIcon from '../../assets/homeAudience/beginnersIcon.svg'
import hobbyistsIcon from '../../assets/homeAudience/hobbyistsIcon.svg'
import athletesIcon from '../../assets/homeAudience/atheletesIcon.svg'
import everyoneIcon from '../../assets/homeAudience/everyoneIcon.svg'

// Import Background Images
import beginnersBg from '../../assets/homeAudience/beginners.svg'
import hobbyistsBg from '../../assets/homeAudience/hobbyists.svg'
import athletesBg from '../../assets/homeAudience/atheletes.svg'
import everyoneBg from '../../assets/homeAudience/everyone.svg'
// import Image2 from '../../assets/audience/image2.svg'
// import Image3 from '../../assets/audience/image3.png'
import SectionHeader from '../sectionHeader/SectionHeader'

const PERSONAS = [
    {
        id: 'beginners',
        title: 'Beginners',
        description: "Just starting out or getting back into it? We'll help you build momentum, one move at a time.",
        icon: beginnersIcon,
        backgroundImage: beginnersBg
    },
    {
        id: 'hobbyists',
        title: 'Hobbyists',
        description: "Staying active around work, studies, and life. Sequorr keeps fitness flexible, social, and enjoyable.",
        icon: hobbyistsIcon,
        backgroundImage: hobbyistsBg
    },
    {
        id: 'athletes',
        title: 'Athletes',
        description: "Pushing limits and chasing performance. We provide the community and tools to elevate your game.",
        icon: athletesIcon,
        backgroundImage: athletesBg
    },
    {
        id: 'everyone',
        title: 'Everyone',
        description: "No pressure. No labels. Just a community that helps you show up every day.",
        icon: everyoneIcon,
        backgroundImage: everyoneBg
    },
];

const Audience = () => {
    useScrollAnimation();
    return (
        <section className={styles.audienceSection}>
            <SectionHeader 
                title="A space for every kind of active"
                description={<>Not everyone wants to train for a marathon. Some people just want to move more often.<br />Sequorr is the community for the rest of us.</>}
            />
            <div className={styles.personasGrid}>
                <div className={styles.glowEffect}></div>

                {PERSONAS.map((persona) => (
                    <div key={persona.id} className={styles.personaCard} style={{ backgroundImage: `url(${persona.backgroundImage})` }}>
                        <img className={styles.cardIcon} src={persona.icon} alt={`${persona.title} icon`} />
                        <h2 className={`${styles.cardTitle} reveal`}>{persona.title}</h2>
                        <p className={`${styles.cardDescription} reveal`}>{persona.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Audience