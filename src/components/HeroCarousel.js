import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HeroCarousel.css';

// Import images
import menuImage1 from '../assets/shop-exterior-1.jpg';
import menuImage2 from '../assets/shop-interior-2.jpg';
import menuImage3 from '../assets/shop-exterior-3.jpg';
import menuImage4 from '../assets/gelato-placeholder-1.jpg';
import menuImage5 from '../assets/exterior-2.jpeg';

function HeroCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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
                <div>
                    <img src={menuImage5} alt="Menu Item 5" />
                </div>
            </Slider>
        </div>
    );
}

export default HeroCarousel;