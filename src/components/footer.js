import React from "react";
import styled from "styled-components";
import "./footer.css";

const FooterContainer = styled.div`
    width: 100%;
    color: black;
    padding: 5px; /* Adds space around the text */
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Monterio", sans-serif;
    font-size: 22px;
    box-sizing: border-box; /* Includes the padding in the element's width */
    background-color: #dfdbe5;
    background-image: url("data:image/svg+xml,%3Csvg width='84' height='84' viewBox='0 0 84 84' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M84 23c-4.417 0-8-3.584-8-7.998V8h-7.002C64.58 8 61 4.42 61 0H23c0 4.417-3.584 8-7.998 8H8v7.002C8 19.42 4.42 23 0 23v38c4.417 0 8 3.584 8 7.998V76h7.002C19.42 76 23 79.58 23 84h38c0-4.417 3.584-8 7.998-8H76v-7.002C76 64.58 79.58 61 84 61V23zM59.05 83H43V66.95c5.054-.5 9-4.764 9-9.948V52h5.002c5.18 0 9.446-3.947 9.95-9H83v16.05c-5.054.5-9 4.764-9 9.948V74h-5.002c-5.18 0-9.446 3.947-9.95 9zm-34.1 0H41V66.95c-5.053-.502-9-4.768-9-9.948V52h-5.002c-5.184 0-9.447-3.946-9.95-9H1v16.05c5.053.502 9 4.768 9 9.948V74h5.002c5.184 0 9.447 3.946 9.95 9zm0-82H41v16.05c-5.054.5-9 4.764-9 9.948V32h-5.002c-5.18 0-9.446 3.947-9.95 9H1V24.95c5.054-.5 9-4.764 9-9.948V10h5.002c5.18 0 9.446-3.947 9.95-9zm34.1 0H43v16.05c5.053.502 9 4.768 9 9.948V32h5.002c5.184 0 9.447 3.946 9.95 9H83V24.95c-5.053-.502-9-4.768-9-9.948V10h-5.002c-5.184 0-9.447-3.946-9.95 9zM50 50v7.002C50 61.42 46.42 65 42 65c-4.417 0-8-3.584-8-7.998V50h-7.002C22.58 50 19 46.42 19 42c0-4.417 3.584-8 7.998-8H34v-7.002C34 22.58 37.58 19 42 19c4.417 0 8 3.584 8 7.998V34h7.002C61.42 34 65 37.58 65 42c0 4.417-3.584 8-7.998 8H50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    @media (max-width: 768px) {
        flex-direction: column;
        text-align: right; /* Aligns the text to the right */
        margin-top: 60px;
    }
    margin-top: 50px; /* Add a margin to the top of the footer */
    box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.1); /* Add a box shadow to the top of the footer */
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
                        <i className="fab fa-instagram" style={{ color: "#C13584" }}></i>{" "}
                        {/* Instagram color */}
                    </SocialMediaLink>
                    <SocialMediaLink href="https://www.facebook.com/your_username">
                        <i className="fab fa-facebook-f" style={{ color: "#3B5998" }}></i>{" "}
                        {/* Facebook color */}
                    </SocialMediaLink>
                    <SocialMediaLink href="https://www.linkedin.com/in/your_username">
                        <i className="fab fa-linkedin-in" style={{ color: "#0E76A8" }}></i>{" "}
                        {/* LinkedIn color */}
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
};

export default Footer;
