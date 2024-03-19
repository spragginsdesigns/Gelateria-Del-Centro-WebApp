import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div className="navbar-item">
                    <p>2017 Tuolumne St Fresno, CA 93721</p>
                </div>
                <Link className="navbar-item" to="/onlineOrdering">
                    <p className="order-now">ORDER NOW</p>
                </Link>
            </nav>
        </div>
    );
}

export default Navbar;