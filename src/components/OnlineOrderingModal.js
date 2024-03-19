import React, { useEffect } from 'react';
import './OnlineOrderingModal.css';
import UberEatsLogo from '../assets/uber-eats-logos-idT_4VNf_n.svg'; // Import the logo
import GrubHubLogo from '../assets/grubhub-logos-id2LENoj_F.svg'; // Import the logo
import DoorDashLogo from '../assets/doordash-logos-ideBVsZqPB.svg'; // Import the logo
import SquareLogo from '../assets/square-logos-idVBUxlM3x.svg'; // Import the logo

const OnlineOrderingModal = ({ isOpen, toggleModal }) => {
    // Note: Moved the condition inside useEffect
    useEffect(() => {
        if (isOpen) {
            const script = document.createElement('script');
            script.src = "http://gh-prod-restaurant-shortlinks.s3-website-us-east-1.amazonaws.com/libs/scripts/iframeLib.min.js";
            script.async = true;
            document.body.appendChild(script);

            // Cleanup function to remove the script when the component unmounts or modal closes
            return () => document.body.removeChild(script);
        }
    }, [isOpen]); // Dependency array ensures effect runs only when `isOpen` changes

    if (!isOpen) return null;

    return (
        <div className="modal-backdrop" onClick={toggleModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>Order Online</h2>
                <p>Click on a service below to order:</p>
                <div className="service-container">
                    <div className="service-card square">
                        <h3>Square</h3>
                        <img className="service-logo" src={SquareLogo} alt="Square" />
                        <p>Order through Square for pickup.</p>
                        <a href="https://www.square.com/">Order Now</a>
                    </div>
                    <div className="service-card doordash">
                        <h3>DoorDash</h3>
                        <img className="service-logo" src={DoorDashLogo} alt="DoorDash" />
                        <p>Order through DoorDash for delivery.</p>
                        <a href="https://order.online/business/gelateria-del-centro-12792111">Order Now</a>
                    </div>
                    <div className="service-card ubereats">
                        <h3>Uber Eats</h3>
                        <img className="service-logo" src={UberEatsLogo} alt="Uber Eats" />
                        <p>Order through Uber Eats for delivery.</p>
                        <a href="https://www.ubereats.com/">Order Now</a>
                    </div>
                    <div className="service-card grubhub">
                        <h3>Grubhub</h3>
                        <img className="service-logo" src={GrubHubLogo} alt="Grubhub" />
                        <p>Order through Grubhub for delivery.</p>
                        <div
                            className="gh-button-ifrm"
                            data-customer-id="7919504"
                            data-restaurant-name="Gelateria Del Centro"
                            data-button-color="#FF8000:#ffffff"
                            data-button-size="large"
                            data-env="prod"
                            data-shortlinkurl="http://menus.fyi/7919504"
                            data-restaurant-address="2017 Tuolumne St, Fresno CA, 93721"
                            data-version="1.0"
                            data-link-type="gh"
                            data-target="_self"
                        ></div>
                    </div>
                </div>
                <button className="close-btn" onClick={toggleModal}>Close</button>
            </div>
        </div>
    );
};

export default OnlineOrderingModal;
