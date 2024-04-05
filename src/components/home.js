import React from 'react';
import HeroCarousel from './HeroCarousel';
import About from './about';
import OurFavoritesMenu from './OurFavorites';
import OurSpecials from './OurSpecials';
import SpecialEvents from './specialEvents'; // Import SpecialEvents
import Contact from './contact';

const Home = () => {
    return (
        <>
            <HeroCarousel />
            <About />
            <OurFavoritesMenu />
            <OurSpecials />
            <SpecialEvents /> {/* Add SpecialEvents here */}
            <Contact />
        </>
    );
};

export default Home;