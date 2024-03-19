import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import HeroCarousel from './components/HeroCarousel';
import About from './components/about';
import OurFavoritesMenu from './components/OurFavorites';
import OurSpecials from './components/OurSpecials';
import Contact from './components/contact';
import Footer from './components/footer';
import './components/navbar.css';
import './components/HeroCarousel.css'
import './components/OurFavorites.css';
import './components/OurSpecials.css';
import './components/About.css'; // Corrected the import statement
import './components/footer.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <HeroCarousel />
        <About />
        <OurFavoritesMenu />
        <OurSpecials />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;