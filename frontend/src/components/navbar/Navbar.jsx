import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import Logo from '../../assets/navbar/logo.svg'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const navRef = React.useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    React.useEffect(() => {
        if (!isMenuOpen) return;

        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    return (
        <nav ref={navRef} className={`${styles.navbar} ${isMenuOpen ? styles.navActive : ''}`} aria-label="Main Navigation">
            <div className={styles.navLogo}>
                <img src={Logo} alt="Sequorr logo" />
            </div>

            <button
                className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
                onClick={toggleMenu}
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation menu"
            >
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </button>

            <div
                className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}
                role="navigation"
            >
                <Link to="/" className={styles.navLink} onClick={closeMenu}>Home</Link>
                <Link to="/about" className={styles.navLink} onClick={closeMenu}>About</Link>
                <Link to="/features" className={styles.navLink} onClick={closeMenu}>Features</Link>
                <Link to="/blogs" className={styles.navLink} onClick={closeMenu}>Blogs</Link>
                <Link to="/contact" className={styles.navLink} onClick={closeMenu}>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar