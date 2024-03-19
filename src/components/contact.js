import React from 'react';
import styled from 'styled-components';
import './contact.css';

const Input = styled.input`
    padding: 10px;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.15);
    margin-bottom: 20px; /* Adjust this value as needed */
    font-family: Georgia, serif;
    box-sizing: border-box; /* Includes padding and border in the element's total width and height */
`;

const TextArea = styled.textarea`
    padding: 15px;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.15);
    margin-bottom: 20px; /* Adjust this value as needed */
    font-family: Georgia, serif;
    color: #898900;
    box-sizing: border-box; /* Includes padding and border in the element's total width and height */
`;

const Button = styled.button`
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.15);
    cursor: pointer;
    font-family: Georgia, serif;
    color: #fff;
    background: #ffa5b2; /* Makes the button Soft Pink */
    transition: all 0.3s ease-in-out; /* Adds a transition effect */

    &:hover {
        background: #ffe57f; /* Changes the color to Pale Yellow on hover */
        transform: scale(1.05); /* Makes the button slightly larger on hover */
    }

    &:active {
        transform: scale(0.95); /* Makes the button slightly smaller when clicked */
    }
`;

const Sweet = styled.span`
    font-family: "Georgia-Italic";
    color: #f2ccb2; /* Change the color of the text */
    font-size: 2em; /* Change the font size */
    text-shadow: 2px 2px 5px rgba(0,0,0,0.2); /* Add a text shadow */
    margin: 0 5px; /* Add margin to the left and right of the text */
    opacity: 0.8; /* Change the opacity of the text */
    transition: opacity 0.3s ease-in-out; /* Add a transition effect */
    &:hover {
        opacity: 1; /* Change the opacity of the text on hover */
    }
`;

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <div className="contact-grid">
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.346088588112!2d-119.79685402450288!3d36.7382630722649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809461851bbeebb3%3A0xf3a3ddc02fe7be63!2sGelateria%20Del%20Centro!5e0!3m2!1sen!2sus!4v1710802270700!5m2!1sen!2sus" width="800" height="800" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="form">
                    <h2>Leave Us a <Sweet>Sweet</Sweet> Message</h2>
                    <form>
                        <Input type="text" placeholder="Name" required />
                        <Input type="tel" placeholder="Phone" required />
                        <Input type="email" placeholder="Email" required />
                        <TextArea placeholder="Message" required></TextArea>
                        <Button type="submit">Send</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;