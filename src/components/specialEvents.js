import React from 'react';
import './specialEvents.css';
import gelatoBikeImage from '../assets/gelato-bike.jpeg';
import { Link as ScrollLink } from 'react-scroll';

const SpecialEvents = () => {
    return (
        <div id="specialEvents" className="special-events-container">
            <div className="special-events-image">
                <img src={gelatoBikeImage} alt="Gelato Bike" />
            </div>
            <div className="special-events-text">
                <h1>
                    <span className="text-italic">your</span>
                    <span className="text-bold"> SPECIAL EVENT,</span>
                </h1>
                <h1>
                    <span className="text-italic">our</span>
                    <span className="text-bold"> DELICIOUS GELATO.</span>
                </h1>
                <p className="about-description-text">
                    Gelateria Del Centro proudly brings the authentic taste of Italian gelato right to your neighborhood in Fresno with our charming gelato bike. This delightful feature enables us to serve our delicious, artisanal gelato at various locations throughout the city, making it easier for you to enjoy our wide range of flavors on the go. Our gelato bike is not just a hit on the streets; it's also available for private events, providing a unique and memorable touch to weddings, corporate gatherings, birthday parties, and more. We offer a customizable menu tailored to your event's needs, ensuring that your guests experience the best of Italian gelato without leaving Fresno. To make your next event unforgettable with our gelato bike and catering services, please contact us at Gelateria Del Centro. We look forward to bringing a taste of Italy to your special occasion!
                </p>
                <ScrollLink to="contact" smooth={true} duration={500} className="contact-link">
                    Contact us
                </ScrollLink>
            </div>
        </div>
    );
};

export default SpecialEvents;
