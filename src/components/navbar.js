import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';


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
                    {!isMobile && (
                        <p className="navbar-address">
                            2017 TUOLUMNE ST <em>in</em> DOWNTOWN FRESNO
                        </p>
                    )}
                    <Link to="/"> {/* This is the link to the homepage */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </Link>
                </div>
                <div className="navbar-right">

                    <div className="order-now">
                        <Link onClick={toggleModal}>Order Now</Link>
                    </div>
                </div>

            </div>
        </nav>
    );
}
export default Navbar