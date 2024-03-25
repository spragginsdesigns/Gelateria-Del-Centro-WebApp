import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import logo from '../assets/Gelateria Del Centro STAMP.png'; // Import your logo

const About = () => {
    return (
        <div>
            <div className="about-container">
                <div className="description">
                    <img src={logo} alt="Store Logo" className="store-logo" />
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
                    <h2>Special Events</h2>
                    <p>Check out our special events!</p>
                    <Link to="/events" className="learnMore-button">Learn More</Link>
                    <h2>Our Why?</h2>
                    <p>Our mission is to provide the best gelato experience...</p>
                    {/* Rest of the "Our Why?" section */}
                </div>
            </div>
            <hr />
        </div>
    );
}

export default About;