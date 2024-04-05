import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/navbar'; // Import Navbar
import OnlineOrderingModal from './components/OnlineOrderingModal'; // Import OnlineOrderingModal
import Menu from './components/menu'; // Import Menu
import Events from './components/events'; // Import Events
import SpecialEvents from './components/specialEvents'; // Import SpecialEvents
import Footer from './components/footer'; // Import Footer
import './App.css';
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
      <ScrollToTop />
      <div className="App">
        <Navbar toggleModal={toggleModal} />
        <OnlineOrderingModal isOpen={isModalOpen} toggleModal={toggleModal} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/events" element={<Events />} />
          {/* Assume that the contact page route will be '/contact' and add SpecialEvents just before it */}
          <Route path="/special-events" element={<SpecialEvents />} />
          {/* Other routes here, including the Contact component route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;