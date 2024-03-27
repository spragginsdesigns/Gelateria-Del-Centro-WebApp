import React from 'react';
import HeroCarousel from './HeroCarousel';
import About from './about';
import OurFavoritesMenu from './OurFavorites';
import OurSpecials from './OurSpecials';
import Contact from './contact';
import Footer from './footer';

const Home = () => {
    return (
        <>
            <HeroCarousel />
            <About />
            <OurFavoritesMenu />
            <OurSpecials />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;