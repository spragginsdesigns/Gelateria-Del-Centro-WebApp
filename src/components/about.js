import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import logo from '../assets/Gelateria Del Centro STAMP.png'; // Import your logo

const About = () => {
    return (
        <div>
            <div className="about-container">
                <div className="description">
                    <img src={logo} alt="Gelateria Del Centro logo, featuring a stylized ice cream cone." className="store-logo" />
                    <p>Welcome to Gelateria Del Centro, your go-to destination for authentic Italian gelato in Fresno, California. Located in the bustling heart of the city, our shop is a sanctuary for gelato aficionados and dessert lovers.</p>
                    <p>Our gelato is made fresh daily, using only the finest ingredients. We offer a wide variety of flavors, including classics like Stracciatella and Pistachio, as well as unique flavors like Lavender and Olive Oil. We also offer a selection of sorbets and vegan options.</p>
                    {/* Rest of the description */}
                </div>
                <div className="sidebar">
                    <h2>Hours</h2>
                    <ul>
                        <li>Open Daily - 12:00pm - 8:30 pm</li>
                        <li>Available for Pickup and Delivery</li>
                    </ul>
                    <h2>Special Events at Gelateria Del Centro</h2>
                    <p>Looking for a unique venue for your next private event? Or perhaps you're interested in our special events that bring the community together? At Gelateria Del Centro, we offer more than just the best gelato in town. Click the button below to discover how we can make your next event unforgettable.</p>
                    <Link to="/events">
                        <button className="learnMore-button">Discover Our Events</button>
                    </Link>
                    <h2>Why Choose Gelateria Del Centro?</h2>
                    <h3>Our Mission</h3>
                    <p>At Gelateria Del Centro, our mission goes beyond serving the best gelato. We strive to create an exceptional gelato experience that brings joy to everyone who visits our shop. From our carefully selected ingredients to our friendly service, every aspect of our business is designed with you in mind...</p>
                    {/* Rest of the "Our Why?" section */}
                </div>
            </div>
            <hr />
        </div>
    );
}

export default About;