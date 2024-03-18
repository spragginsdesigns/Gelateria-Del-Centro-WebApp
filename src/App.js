import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import HeroCarousel from './components/HeroCarousel';
import About from './components/about';
import OurFavoritesMenu from './components/OurFavorites';
import './components/navbar.css';
import './components/HeroCarousel.css'
import './components/OurFavorites.css'; // Updated the import statement


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <HeroCarousel />
        <About />
        <OurFavoritesMenu />
      </div>
    </Router>
  );
}

export default App;