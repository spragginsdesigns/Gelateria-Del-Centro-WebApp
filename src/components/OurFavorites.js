import React from 'react';
import './OurFavorites.css';
import image1 from '../assets/sharon-tay-V6z3C3ru9zQ-unsplash.jpg'; // Import your images
import image2 from '../assets/rosa-rafael-Nag3E3yzygU-unsplash.jpg';
import image3 from '../assets/alana-harris-g8gB5FKFAP4-unsplash.jpg';
import image4 from '../assets/kyle-hinkson-H75RvPCvkik-unsplash.jpg';
// Import more images as needed

const OurFavorites = () => {
    const favorites = [
        { flavor: 'PB Cashew Milk Himalayan Salted Caramel', name: 'Vegan', description: 'A savory-sweet fusion of peanut butter and salted caramel, balanced with the nuttiness of cashew milk.', image: image3 },
        { flavor: 'PB Coconut Milk Indonesian Vanilla Bean', name: 'Vegan', description: 'An exotic escape featuring the depth of Indonesian vanilla and dark peanut butter, lightened by coconut milk.', image: image4 },
        { flavor: 'PB Strawberry Almond Crisp', name: 'Vegan', description: 'A fruity concoction of strawberries and almond crisp, perfected with a swirl of peanut butter.', image: image1 },
        { flavor: 'Stracciatella', name: 'Single, Double, or Triple Scoop', description: 'Italian-inspired gelato with slivers of chocolate, creating a delicate yet rich textural delight.', image: image2 },
        { flavor: 'Dark Chocolate', name: 'Single, Double, or Triple Scoop', description: 'Indulge in the deep, rich flavors of dark chocolate - a timeless classic for the discerning palate.', image: image3 },
        { flavor: 'Pistachio', name: 'Single, Double, or Triple Scoop', description: 'A silky-smooth gelato infused with the finest pistachios for a distinctly nutty and luxurious taste.', image: image4 },
        { flavor: 'Limoncello', name: 'Single, Double, or Triple Scoop', description: 'Zesty limoncello liqueur meets creamy gelato for a refreshing and spirited Italian treat.', image: image1 },
        { flavor: 'Caramello Chocolate Crunch', name: 'Single, Double, or Triple Scoop', description: 'The ultimate treat combining gooey caramel and crunchy chocolate pieces in a creamy base.', image: image2 },
        { flavor: 'Honey Lavender', name: 'Single, Double, or Triple Scoop', description: 'Floral notes of lavender paired with sweet honey create a serene and sophisticated flavor profile.', image: image3 },
        { flavor: 'Bavarian Mint', name: 'Single, Double, or Triple Scoop', description: 'A cool breath of mint infused into a rich and creamy Bavarian-style gelato.', image: image4 },
        { flavor: 'Oatmilk Strawberry Almond Crisp', name: 'Single, Double, or Triple Scoop', description: 'Vegan delight with the sweetness of strawberries and the crunch of almonds, all in creamy oat milk gelato.', image: image1 },
        { flavor: 'Nonie’s Spumoni', name: 'Single, Double, or Triple Scoop', description: 'A tribute to tradition, this spumoni twists cherry, pistachio, and chocolate into a symphony of flavor.', image: image2 },
        { flavor: 'Coconut Milk Vanilla Bean', name: 'Vegan', description: 'An indulgent blend of tropical coconut milk and rich vanilla beans for a smooth and exotic treat.', image: image3 },
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