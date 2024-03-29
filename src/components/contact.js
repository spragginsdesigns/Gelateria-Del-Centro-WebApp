import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import "./contact.css";

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15);
  margin-bottom: 20px; /* Adjust this value as needed */
  font-family: "Roboto", "Segoe UI", "Helvetica Neue", sans-serif;
  box-sizing: border-box; /* Includes padding and border in the element's total width and height */
`;

const TextArea = styled.textarea`
  padding: 15px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15);
  margin-bottom: 20px; /* Adjust this value as needed */
  font-family: "Roboto", "Segoe UI", "Helvetica Neue", sans-serif;
  color: #898900;
  box-sizing: border-box; /* Includes padding and border in the element's total width and height */
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-family: "Roboto", "Segoe UI", "Helvetica Neue", sans-serif;
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
  font-family: "Roboto", "Segoe UI", "Helvetica Neue", sans-serif;
  color: #f2ccb2; /* Change the color of the text */
  font-size: 2em; /* Change the font size */
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); /* Add a text shadow */
  margin: 0 5px; /* Add margin to the left and right of the text */
  opacity: 0.8; /* Change the opacity of the text */
  transition: opacity 0.3s ease-in-out; /* Add a transition effect */
  &:hover {
    opacity: 1; /* Change the opacity of the text on hover */
  }
`;

const ErrorMessage = styled.span`
  color: red;
  display: block;
  margin-bottom: 10px;
`;

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });

    const [touched, setTouched] = useState({
        name: false,
        phone: false,
        email: false,
        message: false,
    });

    const handleBlur = (event) => {
        setTouched({
            ...touched,
            [event.target.name]: true,
        });
    };

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });

        if (event.target.name === 'name') {
            const nameRegex = /^[a-zA-Z\s]*$/;
            if (!nameRegex.test(event.target.value)) {
                setErrors({
                    ...errors,
                    name: 'Please enter a valid name',
                });
            } else {
                setErrors({
                    ...errors,
                    name: '',
                });
            }
        }

        if (event.target.name === 'email') {
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if (!emailRegex.test(event.target.value)) {
                setErrors({
                    ...errors,
                    email: 'Please enter a valid email address',
                });
            } else {
                setErrors({
                    ...errors,
                    email: '',
                });
            }
        }

        if (event.target.name === 'phone') {
            const phoneRegex = /^\d{10}$/;
            if (!phoneRegex.test(event.target.value)) {
                setErrors({
                    ...errors,
                    phone: 'Please enter a valid phone number',
                });
            } else {
                setErrors({
                    ...errors,
                    phone: '',
                });
            }
        }

        if (event.target.name === 'message') {
            if (event.target.value.length > 500) {
                setErrors({
                    ...errors,
                    message: 'Message must be less than 500 characters',
                });
            } else {
                setErrors({
                    ...errors,
                    message: '',
                });
            }
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        let formErrors = {};

        if (!formData.name) {
            formErrors = { ...formErrors, name: 'Please enter your name' };
        }

        if (!formData.phone || errors.phone) {
            formErrors = { ...formErrors, phone: 'Please enter a valid phone number' };
        }

        if (!formData.email || errors.email) {
            formErrors = { ...formErrors, email: 'Please enter a valid email address' };
        }

        if (!formData.message || errors.message) {
            formErrors = { ...formErrors, message: 'Please enter a message' };
        }

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        setLoading(true);
        // TODO redact this information before publishing. 
        emailjs.send('service_fj7dt93', 'template_azx9qwb', formData, 'CLQoNfQmZ3BsycBFw')
            .then((response) => {
                // TODO remove console.log prior to publishing. 
                console.log('SUCCESS!', response.status, response.text);
                setLoading(false);
            }, (error) => {
                console.log('FAILED...', error);
                setLoading(false);
            });
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <div className="contact-grid">
                <div className="map-container" style={{ width: '100%', height: '100%' }}>
                    <iframe
                        title="Google Maps location of Gelateria Del Centro"
                        className="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.346088588112!2d-119.79685402450288!3d36.7382630722649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809461851bbeebb3%3A0xf3a3ddc02fe7be63!2sGelateria%20Del%20Centro!5e0!3m2!1sen!2sus!4v1710802270700!5m2!1sen!2sus"
                        style={{ border: 0, width: '100%', height: '100%' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="form">
                    <h2>
                        Leave Us a <Sweet>Sweet</Sweet> Message
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <Input type="text" name="name" placeholder="Name" required onChange={handleChange} onBlur={handleBlur} />
                        {touched.name && errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                        <Input type="tel" name="phone" placeholder="Phone" required onChange={handleChange} onBlur={handleBlur} />
                        {touched.phone && errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
                        <Input type="email" name="email" placeholder="Email" required onChange={handleChange} onBlur={handleBlur} />
                        {touched.email && errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                        <TextArea name="message" placeholder="Message" required onChange={handleChange} onBlur={handleBlur} />
                        {touched.message && errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
                        {errors.form && <p>{errors.form}</p>}
                        <Button type="submit" className={loading ? 'loading' : ''}>
                            {loading ? 'Sending...' : 'Send'}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
