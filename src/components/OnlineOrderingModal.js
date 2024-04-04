import React from 'react';
import frame from '../assets/blue-art-nouveau-frame-800x800.png';
import './OnlineOrderingModal.css';

// Accept the isOpen and toggleModal props
function OnlineOrderingModal({ isOpen, toggleModal }) {
    // Conditionally render the modal based on isOpen
    if (!isOpen) return null;

    return (
        <div className="online-ordering-modal-overlay">
            <div className="online-ordering-modal" style={{ backgroundImage: `url(${frame})` }}>
                <h2 className="modal-title">ORDER NOW</h2>
                <hr className="modal-divider" />
                <ul className="service-list">
                    <li><a href="https://www.doordash.com/en-US/store/gelateria-del-centro-fresno-27971303/" className="service-link" target="_blank" rel="noreferrer">DOORDASH</a></li>
                    <li><a href="https://www.ubereats.com/store/gelateria-del-centro/Ryr3N2GUXNOenW50_tbztQ" className="service-link" target="_blank" rel="noreferrer">UBER EATS</a></li>
                    <li><a href="https://www.grubhub.com/restaurant/gelateria-del-centro-2017-tuolumne-st-fresno/7919504" className="service-link" target="_blank" rel="noreferrer">GRUBHUB</a></li>
                </ul>
                <button className="modal-close-button" onClick={toggleModal}>Close</button>
            </div>
        </div>
    );
}

export default OnlineOrderingModal;