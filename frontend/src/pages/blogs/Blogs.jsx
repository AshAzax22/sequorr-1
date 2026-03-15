import React from 'react'
import styles from './Blogs.module.css'

import { GridScan } from '../../components/react-bits/gridScan/GridScan.jsx'
import Movement from '../../components/movement/Movement'
import Footer from '../../components/footer/Footer'

const Blogs = () => {
    const handleJoinClick = () => {
        console.log('Join the Movement clicked');
    }

    return (
        <>
            {/* Blogs Hero section */}
            <section className={styles.blogsHeroSection}>
                <div className={styles.blogsHeroBackground}>
                    <GridScan
                        sensitivity={0.55}
                        lineThickness={1}
                        linesColor="#2eee34"
                        gridScale={0.1}
                        scanColor="#2EEE34"
                        scanOpacity={0.4}
                        enablePost
                        bloomIntensity={0.6}
                        chromaticAberration={0.002}
                        noiseIntensity={0.01}
                    />
                </div>

                <div className={styles.blogsHeroContent}>
                    <div className={styles.blogsHeroTagline}>
                        <p className={styles.taglineText}>Written for real life, not perfect routines.</p>
                    </div>

                    <div className={styles.blogsHeroText}>
                        <h1 className={styles.blogsHeroTitle}>Sequorr</h1>

                        <h3 className={styles.blogsHeroSubtitle}>Thoughts, experiences, and reflections on staying active — together.</h3>
                    </div>

                    <div className={styles.blogsHeroButtonGroup}>
                        <button onClick={handleJoinClick} className={styles.btnPrimary}>Join the Movement</button>
                    </div>
                </div>
            </section>

            {/* Movement Section */}
            < Movement />

            {/* Footer Section */}
            < Footer />
        </>
    )
}

export default Blogs