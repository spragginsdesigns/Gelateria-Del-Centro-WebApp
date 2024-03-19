import React from 'react';
import './OurFavorites.css';
import image1 from '../assets/DALLE2~1.WEB'; // Import your images
import image2 from '../assets/image0.png';
// Import more images as needed

const OurFavorites = () => {
    const favorites = [
        { flavor: 'Pistachio', name: 'Single, Double, or Triple Scoop', description: 'A rich and creamy gelato made with high-quality pistachios for a nutty and sweet flavor.', image: image1 },
        { flavor: 'Stracciatella', name: 'Single, Double, or Triple Scoop', description: 'A classic Italian gelato flavor featuring creamy vanilla gelato with fine, crunchy strands of dark chocolate.', image: image2 },
        { flavor: 'Mango', name: 'Single, Double, or Triple Scoop', description: 'A refreshing and tangy gelato made with ripe and juicy mangoes for a tropical delight.', image: image1 },
        { flavor: 'Dark Chocolate', name: 'Single, Double, or Triple Scoop', description: 'A decadent and velvety gelato made with rich dark chocolate for an indulgent treat.', image: image2 },
        { flavor: 'Raspberry', name: 'Single, Double, or Triple Scoop', description: 'A sweet and tart gelato made with fresh raspberries for a fruity and refreshing flavor.', image: image1 },
        { flavor: 'Caramel', name: 'Single, Double, or Triple Scoop', description: 'A sweet and creamy gelato made with caramel for a rich and buttery flavor.', image: image2 },
    ]


    return (
        <div className="favorites-container">
            <h1>Our Favorites</h1>
            <p>Always available, Always Delicious</p>
            <a href="/GDC-Menu.pdf" download>
                <button className="download-button">Download Menu</button>
            </a>
            <div className="favorites-grid">
                {favorites.map((favorite, index) => (
                    <div key={index} className="favorite-card">
                        <img src={favorite.image} alt={favorite.flavor} /> {/* Display the image */}
                        <h2>{favorite.flavor}</h2>
                        <h3>{favorite.name}</h3>
                        <p>{favorite.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurFavorites;