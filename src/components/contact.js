import React, { useRef, useState } from 'react';
import './contact.css';
import contactImage from '../assets/contact-image.jpg';
import emailjs from 'emailjs-com';

const ContactPage = () => {
    const form = useRef();
    // State to manage submission status and message
    const [submissionStatus, setSubmissionStatus] = useState({ message: '', type: '' });

    const sendEmail = (e) => {
        e.preventDefault();

        // Update 'your-user-token' with your actual EmailJS user token
        emailjs.sendForm('service_fj7dt93', 'template_azx9qwb', form.current, 'CLQoNfQmZ3BsycBFw')
            .then((result) => {
                setSubmissionStatus({ message: "Message sent successfully!", type: 'success' });
                form.current.reset(); // Reset the form fields after successful submission
            }, (error) => {
                setSubmissionStatus({ message: "Failed to send message, please try again.", type: 'error' });
            });
    };

    return (
        <div className="contact-page-container">
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
                    <input type="text" name="name" id="name" placeholder="Your Name" />

                    <label className="form-label" htmlFor="phone">PHONE</label>
                    <input type="tel" name="phone" id="phone" placeholder="Your Phone Number" />

                    <label className="form-label" htmlFor="email">EMAIL</label>
                    <input type="email" name="email" id="email" placeholder="Your Email Address" />

                    <label className="form-label" htmlFor="message">MESSAGE</label>
                    <textarea name="message" id="message" placeholder="Your Message"></textarea>

                    <button type="submit">SEND</button>
                </form>
                {/* Display submission message */}
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
