import React from 'react';
import './HeroCarousel.css';
import heroImage from '../assets/carousel-image.jpg'; // Make sure the path is correct

const HeroCarousel = () => {
    return (
        <div className="heroCarousel-container">
            <h1 className="heroCarousel-title">
                Gelateria <span className="smaller">Del</span> CentrO
            </h1>
            <img src={heroImage} alt="Gelateria Del Centro" className="heroCarousel-image" />
        </div>
    );
};

export default HeroCarousel;
