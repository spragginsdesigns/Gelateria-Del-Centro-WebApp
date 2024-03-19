import React from 'react';
import styled from 'styled-components';
import './footer.css';

const FooterContainer = styled.div`
    width: 100%;
    background-color: #f8f9fa;
    color: black;
    text-align: center;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Monterio', sans-serif;
    font-size: 18px;
    background-size: cover;
    box-sizing: border-box; /* Includes the padding in the element's width */

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: right; /* Aligns the text to the right */
    }
`;

const FooterLinksContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        margin-top: 20px;
    }
`;

const FooterLink = styled.a`
    color: black;
    text-decoration: none;
    margin: 0 10px;
    font-size: 36px; /* Makes the text bigger */
`;

const Footer = () => {
    return (
        <FooterContainer>
            <div>
                <h2>Gelateria Del Centro</h2>
                <p>1234 Street Name, City, State, Zip</p>
            </div>
            <FooterLinksContainer>
                <FooterLink href="/our-story">Our Story</FooterLink>
                <FooterLink href="/menu">Menu</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
            </FooterLinksContainer>
        </FooterContainer>
    );
}

export default Footer;