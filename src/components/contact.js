import React, { useRef, useState, useEffect } from 'react';
import './contact.css';
import contactImage from '../assets/contact-image.jpg';
import emailjs from 'emailjs-com';

const ContactPage = () => {
    const form = useRef();
    const [submissionStatus, setSubmissionStatus] = useState({ message: '', type: '' });

    // useEffect hook to clear the message after a delay
    useEffect(() => {
        let timer;
        if (submissionStatus.message) {
            // Clear the message after 4 seconds (4000 milliseconds)
            timer = setTimeout(() => {
                setSubmissionStatus({ message: '', type: '' });
            }, 4000);
        }
        // Cleanup function to clear the timer if the component unmounts
        // or if another message is set before the timer expires
        return () => clearTimeout(timer);
    }, [submissionStatus.message]);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fj7dt93', 'template_azx9qwb', form.current, process.env.REACT_APP_EMAILJS_KEY)
            .then((result) => {
                setSubmissionStatus({ message: "Message sent! We'll get back to you within 24 hours.", type: 'success' });
                form.current.reset();
            }, (error) => {
                setSubmissionStatus({ message: "Oops! Something went wrong. Please try sending your message again.", type: 'error' });
            });
    };

    return (
        <div id="contact" className="contact-page-container">
            <div className="contact-image-container">
                <img src={contactImage} alt="Gelateria Del Centro" className="contact-image" />
            </div>
            <div className="contact-form-container">
                <h2 className="message-title">
                    leave us a <span className="sweet-word">sweet</span> message
                </h2>
                <p>
                    General inquiries, special events, or a note for the team.<br />We’ll get back to you right away.
                </p>
                <form ref={form} className="contact-form" onSubmit={sendEmail}>
                    <label className="form-label" htmlFor="name">NAME</label>
                    <input type="text" name="name" id="name" placeholder="Your Name" required />

                    <label className="form-label" htmlFor="phone">PHONE</label>
                    <input type="tel" name="phone" id="phone" placeholder="Your Phone Number" required />

                    <label className="form-label" htmlFor="email">EMAIL</label>
                    <input type="email" name="email" id="email" placeholder="Your Email Address" required />

                    <label className="form-label" htmlFor="message">MESSAGE</label>
                    <textarea name="message" id="message" placeholder="Your Message" required></textarea>

                    <button type="submit">SEND</button>
                </form>
                {submissionStatus.message && (
                    <p className={`submission-message ${submissionStatus.type}`}>
                        {submissionStatus.message}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ContactPage;
