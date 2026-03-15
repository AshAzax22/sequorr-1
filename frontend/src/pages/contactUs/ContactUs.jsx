import React, { useState, useRef, useEffect } from 'react'
import styles from './ContactUs.module.css'

import DropDownArrow from '../../assets/contactUs/arrow.svg'
import Believe from '../../components/believe/Believe'
import Footer from '../../components/footer/Footer'

const ContactUs = () => {
    const [selectedReason, setSelectedReason] = useState("");
    const [open, setOpen] = useState(false);
    const [error, setError] = useState({
        name: "",
        email: "",
        reachOut: "",
        message: ""
    });
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        reachOut: "",
        message: ""
    });

    const selectRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const options = [
        { value: "general", label: "General Inquiry" },
        { value: "partnership", label: "Partnership Opportunity" },
        { value: "feedback", label: "Feedback/Suggestions" },
        { value: "other", label: "Other" }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        // Clear error for the specific field
        setError((prev) => ({
            ...prev,
            [name]: ""
        }));
    };

    const handleSubmitClick = (e) => {
        e.preventDefault();

        // Reset errors
        setError({
            name: "",
            email: "",
            reachOut: "",
            message: ""
        });

        let hasError = false;

        if (!formData.name.trim()) {
            setError((prev) => ({ ...prev, name: "Name is required." }));
            hasError = true;
        }
        if (!formData.email.trim()) {
            setError((prev) => ({ ...prev, email: "Email is required." }));
            hasError = true;
        }
        if (!selectedReason) {
            setError((prev) => ({ ...prev, reachOut: "Please select a reason." }));
            hasError = true;
        }
        if (!formData.message.trim()) {
            setError((prev) => ({ ...prev, message: "Message is required." }));
            hasError = true;
        }

        if (hasError) return;

        const data = {
            name: formData.name,
            email: formData.email,
            reachOut: selectedReason,
            message: formData.message
        };

        console.log(data);
    }

    return (
        <>
            {/* Contact Us Form section */}
            <section className={styles.contactUsSection}>
                <form onSubmit={handleSubmitClick} className={styles.contactUsForm}>
                    <div className={styles.contactUsIntro}>
                        <h1 className={styles.formHeading}>
                            Get in -<br />
                            Touch with us
                        </h1>
                        <p className={styles.formDescription}>Questions, ideas, or partnerships — we're always happy to hear from you.</p>
                        <p className={styles.formContactInfo}>
                            Email:<br />
                            team@sequorr.com
                        </p>
                        <p className={styles.formResponseTime}>We usually respond within 24-48 hours.</p>
                    </div>

                    <div className={styles.contactUsFields}>
                        <div className={styles.fieldContainer}>
                            <input
                                className={styles.input}
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <div className={styles.errorSpace}>
                                {error.name && <p className={styles.errorMessage}>{error.name}</p>}
                            </div>
                        </div>

                        <div className={styles.fieldContainer}>
                            <input
                                className={styles.input}
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <div className={styles.errorSpace}>
                                {error.email && <p className={styles.errorMessage}>{error.email}</p>}
                            </div>
                        </div>

                        <div className={styles.fieldContainer}>
                            <div className={styles.customSelect} ref={selectRef}>

                                <div
                                    className={styles.selectHeader}
                                    onClick={() => setOpen(!open)}
                                >
                                    <p>{selectedReason
                                        ? options.find(o => o.value === selectedReason).label
                                        : "Reason for reaching out"}</p>
                                        <img className={`${styles.selectDropDownIcon} ${open ? styles.rotated : ''}`} src={DropDownArrow} alt="Drop down arrow" />
                                </div>

                                {open && (
                                    <ul className={styles.selectDropdown}>
                                        {options.map((option) => (
                                            <li
                                                key={option.value}
                                                className={styles.selectOption}
                                                onClick={() => {
                                                    setSelectedReason(option.value);
                                                    setOpen(false);
                                                    setError((prev) => ({ ...prev, reachOut: "" })); // Clear error on selection
                                                }}
                                            >
                                                {option.label}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                            </div>
                            <div className={styles.errorSpace}>
                                {error.reachOut && <p className={styles.errorMessage}>{error.reachOut}</p>}
                            </div>
                        </div>

                        <div className={styles.fieldContainer}>
                            <textarea
                                className={styles.textarea}
                                name="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                            />
                            <div className={styles.errorSpace}>
                                {error.message && <p className={styles.errorMessage}>{error.message}</p>}
                            </div>
                        </div>

                        <button className={styles.submitButton} type="submit">Submit</button>
                    </div>
                </form>
            </section>

            {/* Belive Section */}
            < Believe />

            {/* Footer Section */}
            < Footer />
        </>
    )
}

export default ContactUs