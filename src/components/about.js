import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import logo from '../assets/Gelateria Del Centro STAMP.png';
import colorBar from '../assets/color-bar.png';

const About = () => {
    return (
        <>
            <div className="about-container">
                <div className="about-section">
                    <img src={logo} alt="Gelateria Del Centro" className="store-logo" />
                    <p className="about-description">
                        Welcome to Gelateria Del Centro, your go-to destination for authentic Italian gelato in Fresno, California. Located in the bustling heart of the city, our shop is a sanctuary for gelato aficionados and dessert lovers.
                    </p>
                </div>
                <div className="info-section">
                    <h2>HOURS</h2>
                    <p>Open Daily: 12p-8:30p</p>
                    <h2>SPECIAL EVENTS?</h2>
                    <Link to="/events" className="lets-talk">
                        <span className="special-events-text">Let's Talk!</span>
                    </Link>
                    <h2>OUR WHY?</h2>
                    <p>Bring delicious Italian-Style gelato to Downtown Fresno</p>
                </div>
            </div>
            <img src={colorBar} alt="Decorative color bar" className="color-bar" />
        </>
    );
};

export default About;