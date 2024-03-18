import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div className="navbar-item">
                    2017 Tuolumne St Fresno, CA 93721
                </div>
                <Link className="navbar-item" to="/onlineOrdering">
                    ORDER NOW
                </Link>
            </nav>
        </div>
    );
}

export default Navbar;