// OurFavorites.js
import React from 'react';
import './OurFavorites.css';
import colorBar from '../assets/color-bar.png';

// Replace with actual import paths for your images
import vanillaImage from '../assets/menu-tems/web/Coconut_Milk_Indonesian_Vanilla_Bean-web.jpg';
import chocolateImage from '../assets/menu-tems/web/Dark_Chocolate-web.jpg';
import espressoImage from '../assets/menu-tems/web/Caramello_Chocolate_Crunch-web.jpg';

const favorites = [
    {
        namePart1: 'MADAGASCAR',
        namePart2: 'VANILLA BEAN',
        image: vanillaImage,
        vegan: true
    },
    {
        namePart1: 'DARK',
        namePart2: 'CHOCOLATE',
        image: chocolateImage
    },
    {
        namePart1: 'ESPRESSO',
        namePart2: 'BEAN',
        image: espressoImage
    },
    // Duplicate the first three to make six, as per your setup
    {
        namePart1: 'MADAGASCAR',
        namePart2: 'VANILLA BEAN',
        image: vanillaImage,
    },
    {
        namePart1: 'DARK',
        namePart2: 'CHOCOLATE',
        image: chocolateImage
    },
    {
        namePart1: 'ESPRESSO',
        namePart2: 'BEAN',
        image: espressoImage
    }
    // Add more favorites as needed
];

const OurFavorites = () => {
    return (
        <div className="favorites">
            <div className="title-container">
                <h1 className="favorites-lowercase">our</h1>
                <h1 className="favorites-uppercase">FAVORITES</h1>
            </div>
            <p className="favorites-subtitle">Always available, always delicious</p>
            <div className="favorites-grid">
                {favorites.map((favorite, index) => (
                    <div key={index} className="favorite-item">
                        <img src={favorite.image} alt={`${favorite.namePart1} ${favorite.namePart2}`} className="favorite-image" />
                        <div className="favorite-label">
                            <h2 className="favorite-name">
                                <span className="flavor-part">{favorite.namePart1}</span>
                                <span className="flavor-part">{favorite.namePart2}</span>
                            </h2>
                            {favorite.vegan && index % 3 === 0 && <div className="favorite-checkmark">V</div>}
                        </div>
                    </div>
                ))}
            </div>
            <img src={colorBar} alt="Decorative color bar" className="color-bar" />

        </div>
    );
};

export default OurFavorites;
