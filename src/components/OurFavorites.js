import React from 'react';
import './OurFavorites.css';
import image1 from '../assets/menu-tems/web/Cashew_Milk_Himalayan_Salted_Caramel-web.jpg'; // Import your images
import image2 from '../assets/menu-tems/web/Affogato-web.jpg';
import image3 from '../assets/menu-tems/web/Caramello_Chocolate_Crunch-web.jpg';
import image4 from '../assets/menu-tems/web/Chocolate_Strawberry-web.jpg';
import image5 from '../assets/menu-tems/web/Coconut_Milk_Indonesian_Vanilla_Bean-web.jpg';
import image7 from '../assets/menu-tems/web/Dark_Chocolate-web.jpg';
import image8 from '../assets/menu-tems/web/Honey_Lavender-web.jpg';
import image9 from '../assets/menu-tems/web/Limoncello-web.jpg';
import image11 from '../assets/menu-tems/web/Pistachio-web.jpg';
import image12 from '../assets/menu-tems/web/Stracchiatella-web.jpg';
import image13 from '../assets/menu-tems/web/Crème_Brûlée-web.jpg';


// Import more images as needed

const OurFavorites = () => {
    const favorites = [
        { flavor: 'PB Cashew Milk Himalayan Salted Caramel', name: 'Vegan', description: 'A savory-sweet fusion of peanut butter and salted caramel, balanced with the nuttiness of cashew milk.', image: image1 },

        { flavor: 'PB Coconut Milk Indonesian Vanilla Bean', name: 'Vegan', description: 'An exotic escape featuring the depth of Indonesian vanilla and dark peanut butter, lightened by coconut milk.', image: image5 },

        { flavor: 'PB Strawberry Almond Crisp', name: 'Vegan', description: 'A fruity concoction of strawberries and almond crisp, perfected with a swirl of peanut butter.', image: image4 },

        { flavor: 'Stracciatella', name: 'Single, Double, or Triple Scoop', description: 'Italian-inspired gelato with slivers of chocolate, creating a delicate yet rich textural delight.', image: image12 },

        { flavor: 'Chocolate Strawberry', name: 'Single, Double, or Triple Scoop', description: 'A classic pairing of rich chocolate and ripe strawberries, blended into a creamy and indulgent treat.', image: image4 },

        { flavor: 'Dark Chocolate', name: 'Single, Double, or Triple Scoop', description: 'Indulge in the deep, rich flavors of dark chocolate - a timeless classic for the discerning palate.', image: image7 },

        { flavor: 'Pistachio', name: 'Single, Double, or Triple Scoop', description: 'A silky-smooth gelato infused with the finest pistachios for a distinctly nutty and luxurious taste.', image: image11 },

        { flavor: 'Limoncello', name: 'Single, Double, or Triple Scoop', description: 'Zesty limoncello liqueur meets creamy gelato for a refreshing and spirited Italian treat.', image: image9 },

        { flavor: 'Caramello Chocolate Crunch', name: 'Single, Double, or Triple Scoop', description: 'The ultimate treat combining gooey caramel and crunchy chocolate pieces in a creamy base.', image: image3 },

        { flavor: 'Honey Lavender', name: 'Single, Double, or Triple Scoop', description: 'Floral notes of lavender paired with sweet honey create a serene and sophisticated flavor profile.', image: image8 },

        // Crème_Brûlée flavor
        { flavor: 'Crème Brûlée', name: 'Single, Double, or Triple Scoop', description: 'A decadent dessert in gelato form, featuring a rich custard base and a caramelized sugar topping.', image: image13 },

        { flavor: 'Bavarian Mint', name: 'Single, Double, or Triple Scoop', description: 'A cool breath of mint infused into a rich and creamy Bavarian-style gelato.', image: image1 },

        { flavor: 'Nonie’s Spumoni', name: 'Single, Double, or Triple Scoop', description: 'A tribute to tradition, this spumoni twists cherry, pistachio, and chocolate into a symphony of flavor.', image: image2 },
    ]



    return (
        <div className="favorites-container">
            <h1>Our Favorites</h1>
            <p>Always available, Always Delicious</p>
            <a href={process.env.PUBLIC_URL + "/GDC-Menu.pdf"} download>
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