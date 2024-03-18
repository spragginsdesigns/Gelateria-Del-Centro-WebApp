// Navbar.js
// ** Navbar Description:**

//     The navbar is a horizontal element that extends across the full width of the wireframe.It features a dual - tone background: the main section has a dark teal color, while the right - end button is coral.There is a decorative pattern running along the lower edge of the teal section consisting of half - circles in a lighter teal shade, creating a scalloped look.The pattern adds a playful yet sophisticated touch to the design.

// On the left side of the navbar, in capitalized and bold white text, is the address "2017 TUOLUMNE ST in DOWNTOWN FRESNO," clearly indicating the location of the business.The text is aligned with the left edge of the navbar, leaving a generous amount of space to the right.

// The right side of the navbar contains a coral - colored call - to - action button labeled "ORDER NOW," written in white uppercase text.The button is rectangular with a slight cushioned appearance, suggesting a clickable element meant to stand out against the dark teal background.

// Begin Navbar Code
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // assuming you will create a corresponding CSS file

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-address">
                2017 TUOLUMNE ST in DOWNTOWN FRESNO
            </div>
            {/* Removed the button and replaced it with a link */}
            <Link to="/#order" className="navbar-link">
                ORDER NOW
            </Link>
        </nav>
    );
}

export default Navbar;
