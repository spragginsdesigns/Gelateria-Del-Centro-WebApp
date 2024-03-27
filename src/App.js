import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/navbar';
import Footer from './components/footer';
import OnlineOrderingModal from './components/OnlineOrderingModal';
import Menu from './components/menu';
import Events from './components/events';
import './components/navbar.css';
import './components/HeroCarousel.css';
import './components/OurFavorites.css';
import './components/OurSpecials.css';
import './components/About.css';
import './components/footer.css';
import './components/OnlineOrderingModal.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Add state to control when the modal is open

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Function to toggle the modal open and closed
  };

  return (
    <Router basename="/Gelateria-Del-Centro-WebApp">
      <div className="App">
        <Navbar toggleModal={toggleModal} />
        <OnlineOrderingModal isOpen={isModalOpen} toggleModal={toggleModal} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/events" element={<Events />} /> {/* Add a route for the Events component */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;