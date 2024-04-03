// ContactPage.js
import React from 'react';
import './contact.css';
import contactImage from '../assets/contact-image.jpg';

const ContactPage = () => {
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
                <form className="contact-form">
                    <label className="form-label" htmlFor="name">NAME</label>
                    <input type="text" id="name" placeholder="" />

                    <label className="form-label" htmlFor="phone">PHONE</label>
                    <input type="tel" id="phone" placeholder="" />

                    <label className="form-label" htmlFor="email">EMAIL</label>
                    <input type="email" id="email" placeholder="" />

                    <label className="form-label" htmlFor="message">MESSAGE</label>
                    <textarea id="message" placeholder=""></textarea>

                    <button type="submit">SEND</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
