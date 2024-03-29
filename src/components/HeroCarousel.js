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
        slidesToShow: 3, // Default to 3 slides for large screens
        slidesToScroll: 3,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024, // Tablet and below
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600, // Mobile and below
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
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
                    <img src={menuImage1} alt="Exterior of Gelateria Del Centro in Fresno, CA showing the front door with the shop's logo and a welcoming entrance." />
                </div>
                <div>
                    <img src={menuImage2} alt="Exterior of Gelateria Del Centro in Fresno, CA. A happy customer is seen enjoying a scoop of Italian Gelato outside the shop on a sunny day." />
                </div>
                <div>
                    <img src={menuImage3} alt="Exterior of Gelateria Del Centro in Fresno, CA during its grand opening in November 2023. The shop is decorated with balloons and a crowd is gathered outside." />
                </div>
                <div>
                    <img src={menuImage4} alt="Close-up of Gelateria Del Centro's amazing gelato ice cream showing a variety of colorful gelato flavors in the display case." />
                </div>
                <div>
                    <img src={menuImage5} alt="Gelateria Del Centro grand opening at Warnors Theatre in Downtown Fresno, California showing a crowd of people celebrating the event." />
                </div>
            </Slider>
        </div>
    );
}

export default HeroCarousel;