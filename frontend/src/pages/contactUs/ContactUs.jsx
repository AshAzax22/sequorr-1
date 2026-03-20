import React, { useState, useRef, useEffect } from 'react'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import Navbar from '../../components/navbar/Navbar'
import styles from './ContactUs.module.css'
import toast from 'react-hot-toast'

import LightRays from '../../components/react-bits/lightRays/LightRays'

import DropDownArrow from '../../assets/contactUs/arrow.svg'
import Believe from '../../components/believe/Believe'
import FeaturedBlogs from '../../components/featuredBlogs/FeaturedBlogs'
import Footer from '../../components/footer/Footer'

const ContactUs = () => {
    const [selectedReason, setSelectedReason] = useState("");
    useScrollAnimation();
    const [open, setOpen] = useState(false);
    const [error, setError] = useState({
        name: "",
        email: "",
        reason: "",
        message: ""
    });
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        reason: "",
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
        { value: "General Inquiry", label: "General Inquiry" },
        { value: "Technical Support / Bug Report", label: "Technical Support / Bug Report" },
        { value: "Partnership Opportunity", label: "Partnership Opportunity" },
        { value: "Feedback & Suggestions", label: "Feedback & Suggestions" },
        { value: "Media Inquiry", label: "Media Inquiry" }
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

    const handleSubmitClick = async (e) => {
        e.preventDefault();

        // Reset errors
        setError({
            name: "",
            email: "",
            reason: "",
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
            setError((prev) => ({ ...prev, reason: "Please select a reason." }));
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
            reason: selectedReason,
            message: formData.message
        };

        console.log(data);

        try{
            const response = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (result.success) {
                toast.success(result.message || "Your message has been sent successfully!");
                setFormData({
                    name: "",
                    email: "",
                    reason: "",
                    message: ""
                });
                setSelectedReason("");
            } else {
                if (result.errors && Array.isArray(result.errors)) {
                    // Validation errors
                    result.errors.forEach(error => {
                        toast.error(error);
                        console.error("Validation error:", error);
                    });
                } else {
                    // General error
                    toast.error(result.message || "There was an error sending your message. Please try again later.");
                }
            }

        } catch (error) {
            console.error("Error submitting contact form:", error);
            toast.error("Network error. Please check your connection and try again.");
        }
    }

    return (
        <>
            <Navbar />
            {/* Contact Us Form section */}
            <section className={styles.contactUsSection}>
                <form onSubmit={handleSubmitClick} className={styles.contactUsForm}>
                    <div className={styles.formBackground}>
                        <LightRays
                            raysOrigin="top-center"
                            raysColor="#00ff00"
                            raysSpeed={1}
                            lightSpread={1}
                            rayLength={5}
                            followMouse={true}
                            mouseInfluence={0.1}
                            noiseAmount={0}
                            distortion={0}
                            className="custom-rays"
                            pulsating={false}
                            fadeDistance={20}
                            saturation={1}
                        />
                    </div>

                    <div className={styles.contactUsIntro}>
                        <h1 className={styles.formHeading}>
                            Get in -<br />
                            Touch with us
                        </h1>
                        <p className={`${styles.formDescription} reveal`}>Questions, ideas, or partnerships — we're always happy to hear from you.</p>
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
                                    className={`${styles.selectHeader} ${selectedReason ? styles.selected : ''}`}
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
                                                    setError((prev) => ({ ...prev, reason: "" })); // Clear error on selection
                                                }}
                                            >
                                                {option.label}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                            </div>
                            <div className={styles.errorSpace}>
                                {error.reason && <p className={styles.errorMessage}>{error.reason}</p>}
                            </div>
                        </div>

                        <div className={styles.fieldContainer}>
                            <textarea
                                className={styles.textarea}
                                name="message"
                                placeholder="We are excited to hear from you...?"
                                value={formData.message}
                                onChange={handleChange}
                                maxLength="2000"
                            />

                            <div className={styles.errorSpace}>
                                <p className={styles.errorMessage} aria-hidden={!error.message}>
                                    {error.message || '\u00A0'}
                                </p>
                                <p className={styles.charCount}>Max 2000 characters</p>
                            </div>
                        </div>

                        <button className={styles.submitButton} type="submit">Submit</button>
                    </div>
                </form>
            </section>

            {/* Belive Section */}
            < Believe />

            {/* Featured Blogs Section */}
            < FeaturedBlogs />

            {/* Footer Section */}
            < Footer />
        </>
    )
}

export default ContactUs