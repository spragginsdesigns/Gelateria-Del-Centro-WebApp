import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/navbar';
import Footer from './components/footer';
import OnlineOrderingModal from './components/OnlineOrderingModal';
import Menu from './components/menu';
import Events from './components/events';
import './App.css';
import './components/navbar.css';
import './components/HeroCarousel.css';
import './components/OurFavorites.css';
import './components/OurSpecials.css';
import './components/About.css';
import './components/footer.css';
import './components/OnlineOrderingModal.css';

// New component for handling scroll to top
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Router>
      <ScrollToTop /> {/* Use the new component here */}
      <div className="App">
        <Navbar toggleModal={toggleModal} />
        <OnlineOrderingModal isOpen={isModalOpen} toggleModal={toggleModal} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;