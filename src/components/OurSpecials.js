import React from 'react';
import './OurSpecials.css';
import image1 from '../assets/sharon-tay-V6z3C3ru9zQ-unsplash.jpg'; // Import your images
import image2 from '../assets/rosa-rafael-Nag3E3yzygU-unsplash.jpg';
// Import more images as needed

const OurSpecials = () => {
    const specials = [
        { flavor: 'Peach Cobbler Amaretto', name: 'Seasonal', description: 'A delightful blend of juicy peaches and a hint of amaretto, wrapped in a sweet, cobbler-inspired gelato.', image: image1 },
        { flavor: 'White Peppermint Bark', name: 'Seasonal', description: 'Minty and festive, this gelato marries the coolness of peppermint with the sweetness of white chocolate bark.', image: image2 },
        // Add more specials as needed
    ];

    return (
        <div className="specials-container">
            <h1>Seasonal Specials</h1>
            <p>Always available, Always Delicious</p>
            <div className="specials-grid">
                {specials.map((special, index) => (
                    <div key={index} className="special-card">
                        <img src={special.image} alt={special.flavor} />
                        <h2>{special.flavor}</h2>
                        <h3>{special.name}</h3>
                        <p>{special.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurSpecials;