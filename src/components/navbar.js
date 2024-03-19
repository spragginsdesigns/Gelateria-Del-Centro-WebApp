import React from 'react';
import styled from 'styled-components';
import './navbar.css';

const OrderButton = styled.button`
  background-color: #ff6347; // Tomato color
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff4500; // Orangered color
  }
`;

const Navbar = ({ toggleModal }) => {
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div className="navbar-item">
                    <p>2017 Tuolumne St Fresno, CA 93721</p>
                </div>
                <OrderButton className="navbar-item order-now" onClick={toggleModal}>
                    ORDER NOW
                </OrderButton>
            </nav>
        </div>
    );
}

export default Navbar;