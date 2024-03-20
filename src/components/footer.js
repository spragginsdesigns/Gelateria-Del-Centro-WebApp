import React from 'react';
import styled from 'styled-components';
import './footer.css';

const FooterContainer = styled.div`
    width: 100%;
    color: black;
    padding: 5px; /* Adds space around the text */
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Monterio', sans-serif;
    font-size: 22px;
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

// Social Media Links on Footer
const SocialMediaLinks = styled.div`
    display: flex;
    justify-content: space-between;
    width: 150px; /* Adjust this value to change the space between the icons */
    margin-top: 20px;
`;

const SocialMediaLink = styled.a`
    color: black; /* Change this to the color you want */
    text-decoration: none;
    font-size: 36px; /* Makes the icon bigger */
    filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.3)); /* Reduced drop shadow */
`;

const Footer = () => {
    return (
        <FooterContainer>
            <div>
                <h2>Gelateria Del Centro</h2>
                <p>559-824-5809</p>
                <SocialMediaLinks>
                    <SocialMediaLink href="https://www.instagram.com/your_username">
                        <i className="fab fa-instagram" style={{ color: '#C13584' }}></i> {/* Instagram color */}
                    </SocialMediaLink>
                    <SocialMediaLink href="https://www.facebook.com/your_username">
                        <i className="fab fa-facebook-f" style={{ color: '#3B5998' }}></i> {/* Facebook color */}
                    </SocialMediaLink>
                    <SocialMediaLink href="https://www.linkedin.com/in/your_username">
                        <i className="fab fa-linkedin-in" style={{ color: '#0E76A8' }}></i> {/* LinkedIn color */}
                    </SocialMediaLink>
                </SocialMediaLinks>
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