import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useModal } from '../../context/ModalContext';
import Stepper, { Step } from '../react-bits/stepper/Stepper';
import styles from './JoinTheMovement.module.css';
import { toast } from 'react-hot-toast';
import Logo from '../../assets/navbar/wordmark.svg';
import { logEvent } from '../../utils/analytics';

const ICONS = {
    beginners: (
        <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.9904 0L17.9523 12.1353L25.9808 22.5L12.9904 20.7295L5.72205e-06 22.5L8.0285 12.1353L12.9904 0Z" fill="currentColor"/>
        </svg>
    ),
    hobbyists: (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 0L19.0514 10.9486L30 15L19.0514 19.0514L15 30L10.9486 19.0514L0 15L10.9486 10.9486L15 0Z" fill="currentColor"/>
        </svg>
    ),
    athletes: (
        <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.2659 0L17.6336 10.3647H28.5317L19.7149 16.7705L23.0826 27.1353L14.2659 20.7295L5.44909 27.1353L8.8168 16.7705L2.09808e-05 10.3647H10.8982L14.2659 0Z" fill="currentColor"/>
        </svg>
    ),
    everyone: (
        <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.9904 0L15.8551 10.0381L25.9807 7.5L18.7198 15L25.9807 22.5L15.8551 19.9619L12.9904 30L10.1256 19.9619L-2.47955e-05 22.5L7.26087 15L-2.47955e-05 7.5L10.1256 10.0381L12.9904 0Z" fill="currentColor"/>
        </svg>
    ),
    morning: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.125 4.875C7.49365 4.49573 8.47485 3 9 3M9 3C9.52515 3 10.5064 4.49573 10.875 4.875M9 3V7.5" stroke="currentColor" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.7726 7.97681L12.7119 9.03753" stroke="currentColor" strokeWidth="1.125" strokeLinecap="round"/>
            <path d="M2.25 12.75H3.75" stroke="currentColor" strokeWidth="1.125" strokeLinecap="round"/>
            <path d="M4.22754 7.97668L5.2882 9.03733" stroke="currentColor" strokeWidth="1.125" strokeLinecap="round"/>
            <path d="M15.75 12.75H14.25" stroke="currentColor" strokeWidth="1.125" strokeLinecap="round"/>
            <path d="M15.75 15H2.25" stroke="currentColor" strokeWidth="1.125" strokeLinecap="round"/>
            <path d="M12 12.75C12 11.0932 10.6568 9.75 9 9.75C7.34314 9.75 6 11.0932 6 12.75" stroke="currentColor" strokeWidth="1.125" strokeLinecap="round"/>
        </svg>
    ),
    noon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.75 9C12.75 11.071 11.071 12.75 9 12.75C6.92893 12.75 5.25 11.071 5.25 9C5.25 6.92893 6.92893 5.25 9 5.25C11.071 5.25 12.75 6.92893 12.75 9Z" stroke="currentColor" strokeWidth="1.125"/>
            <path d="M9 1.5V2.625M9 15.375V16.5M14.3031 14.3035L13.5076 13.5079M4.49195 4.49195L3.69645 3.69645M16.5 9H15.375M2.625 9H1.5M14.3035 3.69653L13.5079 4.49203M4.49231 13.508L3.69682 14.3035" stroke="currentColor" strokeWidth="1.125" strokeLinecap="round"/>
        </svg>
    ),
    evening: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.125 5.625C7.49365 6.00427 8.47485 7.5 9 7.5M9 7.5C9.52515 7.5 10.5064 6.00427 10.875 5.625M9 7.5V3" stroke="currentColor" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.7726 7.97681L12.7119 9.03753" stroke="currentColor" strokeWidth="1.125" strokeLinecap="round"/>
            <path d="M2.25 12.75H3.75" stroke="currentColor" strokeWidth="1.125" strokeLinecap="round"/>
            <path d="M4.22754 7.97668L5.2882 9.03733" stroke="currentColor" strokeWidth="1.125" strokeLinecap="round"/>
            <path d="M15.75 12.75H14.25" stroke="currentColor" strokeWidth="1.125" strokeLinecap="round"/>
            <path d="M15.75 15H2.25" stroke="currentColor" strokeWidth="1.125" strokeLinecap="round"/>
            <path d="M12 12.75C12 11.0932 10.6568 9.75 9 9.75C7.34314 9.75 6 11.0932 6 12.75" stroke="currentColor" strokeWidth="1.125" strokeLinecap="round"/>
        </svg>
    )
};

const JoinTheMovement = () => {
    const { isJoinModalOpen, closeJoinModal } = useModal();
    const [started, setStarted] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [submissionError, setSubmissionError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        goal: '',
        time: 'Morning'
    });
    const [currentStep, setCurrentStep] = useState(1);

    // Reset state when modal closes
    useEffect(() => {
        if (!isJoinModalOpen) {
            // Re-enable background scrolling
            document.body.style.overflow = 'auto'; 
            
            const timer = setTimeout(() => {
                setStarted(false);
                setCompleted(false);
                setSubmissionError(null);
                setIsSubmitting(false);
                setCurrentStep(1);
                setFormData({ email: '', goal: '', time: 'Morning' });
            }, 300);
            return () => clearTimeout(timer);
        } else {
            // Prevent background scrolling
            document.body.style.overflow = 'hidden';
        }
    }, [isJoinModalOpen]);


    // Re-enable scrolling on cleanup
    useEffect(() => {
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    if (!isJoinModalOpen) return null;

    const handleStart = () => setStarted(true);

    const handleSubmit = async () => {
        // Basic validation
        if (!formData.email || !formData.goal || !formData.time) {
            toast.error('Please complete all steps first.');
            return;
        }

        setIsSubmitting(true);
        const loadingToast = toast.loading('Adding you to the waitlist...');
        setSubmissionError(null);

        try {
            // Map internal IDs to labels/descriptions for the API
            const goalLabels = {
                starting: 'Just Starting Out',
                consistent: 'Staying Consistent',
                serious: 'Training seriously',
                fun: 'Moving for fun'
            };

            const API_BASE_URL = import.meta.env.VITE_API_URL || '';
            // Ensure we don't double up on /api or miss it
            const apiBase = API_BASE_URL.endsWith('/api') ? API_BASE_URL : `${API_BASE_URL.replace(/\/$/, '')}/api`;
            const fetchUrl = `${apiBase}/waitlist`;

            const response = await fetch(fetchUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    email: formData.email,
                    description: goalLabels[formData.goal] || formData.goal,
                    usualMoveTime: formData.time
                })
            });

            const data = await response.json();

            if (response.ok || data.success === true) {
                toast.success(data.message || 'You have been added to the waitlist! 🎉', { id: loadingToast });
                
                // Track Waitlist Registration
                logEvent({
                    category: 'Waitlist',
                    action: 'Joined',
                    label: goalLabels[formData.goal] || formData.goal
                });

                setCompleted(true);
                setSubmissionError(null);
            } else {
                // The API might return errors in 'errors' array or 'message' string
                const errorMsg = data.message || (data.errors && data.errors[0]) || 'Something went wrong. Please try again.';
                toast.error(errorMsg, { id: loadingToast });
                setSubmissionError(errorMsg);
            }
        } catch (error) {
            console.error('Submission error:', error);
            const msg = 'Network error. Our servers might be busy — please try again later.';
            toast.error(msg, { id: loadingToast });
            setSubmissionError(msg);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleFinalStep = () => {
        handleSubmit();
    };

    const getFooterNote = () => {
        if (completed) return 'Fitness feels better together.';
        if (submissionError) return 'We couldn’t quite make the move.';
        if (!started) return 'Join early and move with people like you.';
        
        switch (currentStep) {
            case 1: return 'We’ll only reach out when Sequorr is ready for you.';
            case 2: return 'There’s no right answer — just what feels true today.';
            case 3: return 'Movement counts — no matter when it happens.';
            default: return 'Movement counts — no matter when it happens.';
        }
    };

    return (
        <div className={styles.modalOverlay} onClick={closeJoinModal}>
            <motion.div
                layout
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
            >
                <button className={styles.closeButton} onClick={closeJoinModal} aria-label="Close modal">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <header className={styles.header}>
                    <img src={Logo} alt="Sequorr" className={styles.logo} />
                </header>

                <main className={styles.body}>
                    <div className={styles.contentWrapper}>
                        <AnimatePresence mode="wait">
                            {!started ? (
                                <motion.div
                                    key="welcome"
                                    className={styles.welcomeContainer}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                >
                                    <h1 className={styles.mainTitle}>Be part of the first move.</h1>
                                    <p className={styles.description}>
                                        Sequorr is building fitness that feels human, social, and pressure-free.
                                        Join early and move with people like you.
                                    </p>
                                    <button className={styles.btnPrimary} onClick={handleStart} disabled={isSubmitting}>
                                        {isSubmitting ? 'Joining...' : 'Let\'s move'}
                                    </button>
                                </motion.div>
                            ) : completed ? (
                                <motion.div
                                    key="success"
                                    className={styles.welcomeContainer}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                                >
                                    <div className={styles.successIcon}>
                                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <motion.path 
                                                d="M4 12L9 17L20 6" 
                                                stroke="#2EEE34" 
                                                strokeWidth="3" 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round"
                                                initial={{ pathLength: 0 }}
                                                animate={{ pathLength: 1 }}
                                                transition={{ duration: 0.5, delay: 0.2 }}
                                            />
                                        </svg>
                                    </div>
                                    <h1 className={styles.mainTitle}>Congrats, you are in ;)</h1>
                                    <p className={styles.description}>
                                        Check your inbox — we've sent you a little welcome note. 
                                        We'll reach out again as soon as Sequorr is ready for your first move.
                                    </p>
                                    <button className={styles.btnPrimary} onClick={closeJoinModal}>
                                        Explore what's coming
                                    </button>
                                </motion.div>
                            ) : submissionError ? (
                                <motion.div
                                    key="error"
                                    className={styles.welcomeContainer}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                >
                                    <div className={styles.errorIcon}>
                                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="12" r="10" stroke="#ff4d4d" strokeWidth="2.5" />
                                            <line x1="12" y1="8" x2="12" y2="12" stroke="#ff4d4d" strokeWidth="2.5" strokeLinecap="round" />
                                            <circle cx="12" cy="16" r="1.25" fill="#ff4d4d" />
                                        </svg>
                                    </div>
                                    <h1 className={styles.mainTitle}>Move interrupted.</h1>
                                    <p className={`${styles.description} ${styles.errorText}`}>
                                        {submissionError}
                                    </p>
                                    <div className={styles.errorButtons}>
                                        <button className={styles.btnPrimary} onClick={() => setSubmissionError(null)}>
                                            Try again
                                        </button>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="stepper"
                                    className={styles.stepperContainer}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <Stepper
                                        onBackAtFirstStep={() => setStarted(false)}
                                        onStepChange={setCurrentStep}
                                        onFinalStepCompleted={handleFinalStep}
                                        stepCircleContainerClassName={styles.stepperInner}
                                        canMove={(step) => {
                                            if (step === 1) {
                                                if (!formData.email) {
                                                    toast.error('Please enter your email.');
                                                    return false;
                                                }
                                                // Simple email regex
                                                if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
                                                    toast.error('Please enter a valid email address.');
                                                    return false;
                                                }
                                            }
                                            if (step === 2 && !formData.goal) {
                                                toast.error('Please select an option.');
                                                return false;
                                            }
                                            if (step === 3 && !formData.time) {
                                                toast.error('Please select a time.');
                                                return false;
                                            }
                                            return true;
                                        }}
                                    >
                                        <Step>
                                            <div className={styles.stepContent}>
                                                <h2 className={styles.question}>Where should we send your invite?</h2>
                                                <input
                                                    type="email"
                                                    placeholder="you@domain.com"
                                                    className={styles.emailInput}
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                />
                                            </div>
                                        </Step>

                                        <Step>
                                            <div className={styles.stepContent}>
                                                <h2 className={styles.question}>What best describes you right now?</h2>
                                                <div className={styles.optionsGrid}>
                                                    {[
                                                        { id: 'starting', label: 'Just Starting Out', icon: ICONS.beginners},
                                                        { id: 'consistent', label: 'Staying Consistent', icon: ICONS.hobbyists },
                                                        { id: 'serious', label: 'Training seriously', icon: ICONS.athletes },
                                                        { id: 'fun', label: 'Moving for fun', icon: ICONS.everyone }
                                                    ].map(opt => (
                                                        <div
                                                            key={opt.id}
                                                            className={`${styles.option} ${formData.goal === opt.id ? styles.selected : ''}`}
                                                            onClick={() => setFormData({ ...formData, goal: opt.id })}
                                                        >
                                                            <span>{opt.icon}</span>
                                                            {opt.label}
                                                        </div>
                                                    ))}
                                                </div>
                                                <p className={styles.subtext}>
                                                    {formData.goal === 'starting' && 'You’re exactly who we built this for.'}
                                                    {formData.goal === 'consistent' && 'Consistency feels better when it’s shared.'}
                                                    {formData.goal === 'serious' && 'Community strengthens commitment at every level.'}
                                                    {formData.goal === 'fun' && 'Joy is a valid — and powerful — goal.'}
                                                    {!formData.goal && "You're exactly who we built this for ;)"}
                                                </p>
                                            </div>
                                        </Step>

                                        <Step>
                                            <div className={styles.stepContent}>
                                                <h2 className={styles.question}>When do you usually move?</h2>
                                                <div className={styles.timeOptions}>
                                                    {[
                                                        { id: 'Morning', icon: ICONS.morning },
                                                        { id: 'Noon', icon: ICONS.noon },
                                                        { id: 'Evening', icon: ICONS.evening }
                                                    ].map(opt => (
                                                        <div
                                                            key={opt.id}
                                                            className={`${styles.timeOption} ${formData.time === opt.id ? styles.selected : ''}`}
                                                            onClick={() => setFormData({ ...formData, time: opt.id })}
                                                        >
                                                            <span>{opt.icon}</span>
                                                            {opt.id}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </Step>
                                    </Stepper>
                                </motion.div>
                            )}

                        </AnimatePresence>
                    </div>
                    <AnimatePresence mode="wait">
                        <motion.p 
                            key={getFooterNote()}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className={completed ? styles.footerNoteSuccess : styles.footerNote}
                            style={completed ? { marginTop: '30px' } : {}}
                        >
                            {getFooterNote()}
                        </motion.p>
                    </AnimatePresence>
                </main>
            </motion.div>
        </div>
    );
};


export default JoinTheMovement;
