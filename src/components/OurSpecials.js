// OurSpecials.js
import React from 'react';
import './OurSpecials.css';

// Replace with actual import paths for your images
import specialImage1 from '../assets/menu-tems/web/Coconut_Milk_Indonesian_Vanilla_Bean-web.jpg';
import specialImage2 from '../assets/menu-tems/web/Dark_Chocolate-web.jpg';
import specialImage3 from '../assets/menu-tems/web/Cashew_Milk_Himalayan_Salted_Caramel-web.jpg';

const specials = [
    {
        namePart1: 'COCUNUT MILK',
        namePart2: 'INDONESIAN VANILLA BEAN',
        image: specialImage1,
    },
    {
        namePart1: 'DARK',
        namePart2: 'CHOCOLATE',
        image: specialImage2,
    },
    {
        namePart1: 'CASHEW MILK',
        namePart2: 'HIMALAYAN SALT CARMEL',
        image: specialImage3,
    },
    // This array only contains 3 items
];

const OurSpecials = () => {
    return (
        <div className="specials">
            <div className="title-container">
                <div className="title-line">
                    <h1 className="specials-lowercase">seasonal</h1>
                    <h1 className="specials-uppercase">SPECIALS</h1>
                </div>
                <p className="specials-subtitle">Get them while they're here!</p>
            </div>
            <div className="specials-grid">
                {specials.map((special, index) => (
                    <div key={index} className="special-item">
                        <img src={special.image} alt={`${special.namePart1} ${special.namePart2}`} className="special-image" />
                        <div className="special-label">
                            <h2 className="special-name">
                                <span className="flavor-part">{special.namePart1}</span>
                                <span className="flavor-part">{special.namePart2}</span>
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurSpecials;