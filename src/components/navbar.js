import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../assets/Gelateria Del Centro STAMP.png'; // Ensure the path is correct
import './navbar.css';

const OrderButton = styled.button`
    background-color: #ff6347;
    color: white;
    font-family: 'Roboto', 'Segoe UI', 'Helvetica Neue', sans-serif;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-left: auto; /* This will push the button to the right side of its container */

    &:hover {
        background-color: #ff4500;
    }

    @media (max-width: 415px) {
        padding: 8px 16px;
        font-size: 0.8rem;
        position: static; /* Adjusted to ensure it doesn't overlap on mobile */
        margin: 10px 0; /* Added margin for spacing on mobile */
    }
`;

const Navbar = ({ toggleModal }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className="NavbarContainer">
            <div className="navbar">
                <div className="navbar-left">
                    <Link to="/" className="navbar-logo">
                        <img src={Logo} alt="Gelateria Del Centro Logo" />
                    </Link>
                    {!isMobile && (
                        <p className="navbar-address">2017 Tuolumne St Fresno, CA 93721</p>
                    )}
                </div>
                <div className="order-now">
                    <OrderButton onClick={toggleModal}>Order Now</OrderButton>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;