import React from 'react'
import styles from './Audience.module.css'

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
    return (
        <section className={styles.audienceSection}>
            <div className="sectionTitleContainer">
                <p className="sectionTitleText">Not Just Fitness. A Shared Experience.</p>
            </div>

            <div className="sectionDescriptionContainer">
                <p className="sectionDescriptionText">Sequorr brings people, movement, and motivation together — so staying active feels natural, social, and sustainable.</p>
            </div>

            <div className={styles.personasGrid}>
                <div className={styles.glowEffect}></div>

                {PERSONAS.map((persona) => (
                    <div key={persona.id} className={styles.personaCard} style={{ backgroundImage: `url(${persona.backgroundImage})` }}>
                        <img className={styles.cardIcon} src={persona.icon} alt={`${persona.title} icon`} />
                        <h2 className={styles.cardTitle}>{persona.title}</h2>
                        <p className={styles.cardDescription}>{persona.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Audience