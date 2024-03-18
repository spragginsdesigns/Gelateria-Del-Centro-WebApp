import React from 'react';
import './OurSpecials.css';
import image1 from '../assets/DALLE2~1.WEB'; // Import your images
import image2 from '../assets/image0.png';
// Import more images as needed

const OurSpecials = () => {
    const specials = [
        { flavor: 'Madagascar Vanilla Bean', name: 'Single, Double or Triple Scoop', description: 'Description 1', image: image1 },
        { flavor: 'Dark Chocolate', name: 'Single, Double or Triple Scoop', description: 'Description 2', image: image2 },
        { flavor: 'Expresso Bean', name: 'Single, Double or Triple Scoop', description: 'Description 3', image: image1 },
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