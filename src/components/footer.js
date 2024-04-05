import React from 'react';
import './footer.css';
import footerBackground from '../assets/footer-background-main.jpg';

const Footer = () => {
  return (
    <div className="footer-container" style={{ backgroundImage: `url(${footerBackground})` }}>
      <h1 className="footer-title">Gelateria Del CentrO</h1>
      <p className="footer-address">
        2017 TUOLUMNE ST in DOWNTOWN FRESNO | <a href="https://maps.app.goo.gl/B8edq4de6SGKTLyD8" className="footer-map-link">google maps</a>
      </p>
      <nav className="footer-nav">
        <a href="/our-story" className="footer-nav-link">OUR STORY</a>
        <a href="/menu" className="footer-nav-link">THE MENU</a>
        <a href="/contact" className="footer-nav-link">CONTACT</a>
      </nav>
    </div>
  );
};

export default Footer;
