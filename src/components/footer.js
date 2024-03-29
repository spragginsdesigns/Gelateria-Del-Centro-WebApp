import React from "react";
import styled from "styled-components";
import "./footer.css";
import { Link } from 'react-router-dom';

const FooterContainer = styled.div`
  width: 100%;
  color: black;
  padding: 5px;
  display: flex;
  flex-direction: column; // Change to column to ensure correct stacking
  align-items: center;
  font-family: "Monterio", sans-serif;
  font-size: 22px;
  box-sizing: border-box;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='1' viewBox='0 0 40 1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v1H0z' fill='%23ffa5b2' fill-opacity='0.42' fill-rule='evenodd'/%3E%3C/svg%3E");
  margin-top: 50px;
  box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 18px; // Ensure font size is consistent for all screen sizes
`;

const FooterLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center; // Center align links for larger screens
  align-items: center;
  margin-top: 20px; // Ensure spacing above for all screen sizes

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FooterLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin: 10px 15px;
  font-size: 32px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

// Social Media Links on Footer
const SocialMediaLinks = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

const SocialMediaLink = styled.a`
  color: black;
  text-decoration: none;
  font-size: 36px;
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.3));
  margin: 0 15px;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksContainer>
                <FooterLink to="/">Our Story</FooterLink>
                <FooterLink to="/menu">Menu</FooterLink>
                <FooterLink to="/contact">Contact</FooterLink>
            </FooterLinksContainer>
            <div>
                <h2>Gelateria Del Centro</h2>
                <p>559-824-5809</p>
                <SocialMediaLinks>
                    <SocialMediaLink href="https://www.instagram.com/eatgelateria/">
                        <i className="fab fa-instagram" style={{ color: "#C13584" }}></i>
                    </SocialMediaLink>
                    <SocialMediaLink href="https://www.facebook.com/eatgelateria">
                        <i className="fab fa-facebook-f" style={{ color: "#3B5998" }}></i>
                    </SocialMediaLink>
                </SocialMediaLinks>
            </div>
        </FooterContainer>
    );
};

export default Footer;
