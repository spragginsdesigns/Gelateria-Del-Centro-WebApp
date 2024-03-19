import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import HeroCarousel from './components/HeroCarousel';
import About from './components/about';
import OurFavoritesMenu from './components/OurFavorites';
import OurSpecials from './components/OurSpecials';
import Contact from './components/contact';
import Footer from './components/footer';
import OnlineOrderingModal from './components/OnlineOrderingModal'; // Import the OnlineOrderingModal component
import './components/navbar.css';
import './components/HeroCarousel.css'
import './components/OurFavorites.css';
import './components/OurSpecials.css';
import './components/About.css'; // Corrected the import statement
import './components/footer.css';
import './components/OnlineOrderingModal.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Add state to control when the modal is open

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Function to toggle the modal open and closed
  }

  return (
    <Router>
      <div className="App">
        <Navbar toggleModal={toggleModal} /> {/* Pass the toggleModal function as a prop to the Navbar component */}
        <HeroCarousel />
        <About />
        <OurFavoritesMenu />
        <OurSpecials />
        <Contact />
        <Footer />
        <OnlineOrderingModal isOpen={isModalOpen} toggleModal={toggleModal} /> {/* Add the OnlineOrderingModal component to your component tree */}
      </div>
    </Router>
  );
}

export default App;