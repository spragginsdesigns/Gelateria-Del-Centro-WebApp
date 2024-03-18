// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar'; // Changed 'Navbar' to 'navbar'
import HeroCarousel from './components/HeroCarousel'; // Added this line
import './components/navbar.css'; // Make sure this path correctly points to your CSS file
import './components/HeroCarousel.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <HeroCarousel /> {/* Added this line */}
        {/* Routes will go here */}
      </div>
    </Router>
  );
}

export default App;