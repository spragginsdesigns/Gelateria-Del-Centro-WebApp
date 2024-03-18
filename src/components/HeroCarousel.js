import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HeroCarousel.css';

// Import images
import menuImage1 from '../assets/8920982294.jpg';
import menuImage2 from '../assets/8920982294.jpg';
import menuImage3 from '../assets/8920982294.jpg';
import menuImage4 from '../assets/8920982294.jpg';

function HeroCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <div className="hero-carousel">
            <h1 className="carousel-heading">
                <span className="text-large">Gelateria</span>
                <span className="text-small">Del</span>
                <span className="text-large">Centro</span>
            </h1>
            <Slider {...settings}>
                <div>
                    <img src={menuImage1} alt="Menu Item 1" />
                </div>
                <div>
                    <img src={menuImage2} alt="Menu Item 2" />
                </div>
                <div>
                    <img src={menuImage3} alt="Menu Item 3" />
                </div>
                <div>
                    <img src={menuImage4} alt="Menu Item 4" />
                </div>
            </Slider>
        </div>
    );
}

export default HeroCarousel;