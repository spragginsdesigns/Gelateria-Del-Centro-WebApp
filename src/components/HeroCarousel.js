import React from 'react';
import './HeroCarousel.css';
import heroImage from '../assets/carousel-image.jpg'; // Make sure the path is correct

const HeroCarousel = () => {
    return (
        <div className="heroCarousel-container">
            <div className="heroCarousel-title">
                Gelateria <span className="smaller">Del</span> Centro
            </div>
            <img src={heroImage} alt="Gelateria Del Centro" className="heroCarousel-image" />
        </div>
    );
};

export default HeroCarousel;
