# Gelateria Del Centro | SPA Development Repository

Welcome to the repository for Gelateria Del Centro's Progressive Web Application (PWA). This application serves as a digital storefront for Gelateria Del Centro, an artisan gelato shop located in Downtown Fresno, California.

The application provides an interactive and engaging experience for users, allowing them to explore our unique gelato flavors, get comprehensive business information, view our menu, read testimonials, book private events, and even order online for pickup or delivery.

This project is built using ReactJS, CSS3, NodeJS and much more. It is currently in the development phase, with a planned ship date in June 2024.

---

## Table of Contents

- [Gelateria Del Centro | SPA Development Repository](#gelateria-del-centro--spa-development-repository)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
  - [Troubleshooting](#troubleshooting)
  - [Project Structure](#project-structure)
    - [Navbar (Component)](#navbar-component)
    - [HeroCarousel (Component)](#herocarousel-component)
    - [OurFavorites (Component)](#ourfavorites-component)
    - [OurSpecials (Component)](#ourspecials-component)
    - [ContactPage (Component)](#contactpage-component)
    - [SpecialEvents (Component)](#specialevents-component)
    - [Footer (Component)](#footer-component)
  - [Design and Aesthetic](#design-and-aesthetic)
  - [Tasks](#tasks)
    - [To-Do List](#to-do-list)
      - [Additional Tasks](#additional-tasks)
  - [Contribution](#contribution)
  - [Contact Information](#contact-information)
  - [Developer Information](#developer-information)

---

## Project Overview

**Current Phase:** Early Development

**Started Development** March 14th, 2024

**Ship Date** June 2024

**Technologies Used:**

- ![ReactJS](https://img.shields.io/badge/ReactJS-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
- ![React Icons](https://img.shields.io/badge/React_Icons-61DAFB?style=for-the-badge&logo=react&logoColor=white)
- ![Google Maps](https://img.shields.io/badge/Google_Maps-4285F4?style=for-the-badge&logo=google-maps&logoColor=white)
- ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
- ![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
- ![EmailJS](https://img.shields.io/badge/EmailJS-B7178C?style=for-the-badge&logo=emailjs&logoColor=white)
- ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
- ![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
- ![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)

Gelateria Del Centro's SPA aims to embody the essence of our physical shop's warm, welcoming atmosphere in a digital format. Through interactive menus, engaging visuals, and streamlined online ordering, we strive to provide an exceptional user experience that mirrors the joy of savoring our handmade gelatos.

---

## Getting Started

You can quickly set up and run this project on your local machine by following the steps below. The testing environment is located here<https://www.spragginsdesigns.github.io/Gelateria-Del-Centro-WebApp> and here<https://pplmade.com>

## Prerequisites

Ensure you have the latest versions of [Node.js](https://nodejs.org/en/download/) (which includes npm) and [Git](https://git-scm.com/downloads).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/spragginsdesigns/Gelateria-Del-Centro-WebApp.git
   ```

2. Change to the project directory:

   ```bash
   cd Gelateria-Del-Centro-WebApp
   ```

3. Install required dependencies:
   ```bash
   npm install
   ```

## Running the Project

1. Launch the development server:

   ```bash
   npm start
   ```

2. View the application in your web browser at `http://localhost:3000`.

## Troubleshooting

- To update Node.js, [re-download](https://nodejs.org/en/download/) it from the official website.
- To update npm to the latest version:

  ```bash
  npm install -g npm@latest
  ```

  Update npm to get all dependecies to their latest versions:

  ```bash
  npm update
  ```

---

## Project Structure

### Navbar (Component)

This component provides a way for users to navigate to the homepage and open the order modal from anywhere on the website.

The `Navbar` component is used to display a navigation bar at the top of the website. It includes the shop's address, a link to the homepage, and an "Order Now" button.

- **Structure**: The `Navbar` component is a functional component in React. It uses the `useState` and `useEffect` hooks to determine whether the screen size is mobile or not. It returns a `nav` element that contains a `div` for the left side of the navbar and a `div` for the right side.

- **CSS Import**: The CSS for this component is imported from `navbar.css`. This file contains the styles for the component, including the positioning and styling of the text, link, and button.

- **Address**: The shop's address is displayed on the left side of the navbar. It is only displayed if the screen size is not mobile.

- **Home Link**: The link to the homepage is represented by a house icon. It is created with a `Link` component from the `react-router-dom` library. The `to` prop of the `Link` component is set to `"/"`, which is the path for the homepage.

- **Order Now Button**: The "Order Now" button is displayed on the right side of the navbar. It is created with a `Link` component that has an `onClick` prop that calls the `toggleModal` function. This function is passed as a prop to the `Navbar` component and is used to open the order modal.

### HeroCarousel (Component)

This component provides a visually appealing introduction to the shop on the homepage.

The `HeroCarousel` component is used to display a large hero image with the shop's name on the homepage.

- **Structure**: The `HeroCarousel` component is a functional component in React. It returns a `div` that contains an `h1` tag for the shop's name and an `img` tag for the hero image.

- **Image Import**: The hero image is imported from the `assets` directory and included in the JSX structure with an `img` tag. The `src` prop of the `img` tag is set to the imported image, and the `alt` prop is set to a description of the image.

- **CSS Import**: The CSS for this component is imported from `HeroCarousel.css`. This file contains the styles for the component, including the positioning and styling of the text and image.

- **Text Content**: The `h1` tag contains the shop's name, "Gelateria Del CentrO". The `span` tag is used to make the "Del" part of the name smaller than the rest of the text. The `className` prop is used to apply CSS classes to these elements.

### OurFavorites (Component)

This component provides a way for users to explore the shop's favorite gelato flavors, with a clear indication of vegan options.

The `OurFavorites` component is used to display a selection of the shop's favorite gelato flavors.

- **Structure**: The `OurFavorites` component is a functional component in React. It uses a constant array `favorites` that contains objects representing each favorite item. Each object has properties such as `namePart1`, `namePart2`, `image`, and `vegan`. The component maps through this array and returns a grid of cards, where each card displays an image and the name of the gelato flavor, split into two parts for styling purposes. If the item is vegan, a vegan badge is also displayed.

- **Image Import**: The images for the favorite items and the color bar divider line are imported from the `assets` directory and included in the JSX structure with `img` tags.

- **CSS Import**: The CSS for this component is imported from `ourFavorites.css`. This file contains the styles for the component, including the grid layout for the cards, the styling of each card, and the vegan badge.

### OurSpecials (Component)

This component provides a way for users to explore the shop's special gelato flavors, with a clear indication of vegan options.

The `OurSpecials` component is used to display a selection of the shop's special gelato flavors.

- **Structure**: The `OurSpecials` component is a functional component in React. It uses a constant array `specials` that contains objects representing each special item. Each object has properties such as `namePart1`, `namePart2`, `image`, and `vegan`. The component maps through this array and returns a grid of cards, where each card displays an image and the name of the gelato flavor, split into two parts for styling purposes. If the item is vegan, a vegan badge is also displayed.

- **Image Import**: The images for the special items and the color bar divider line are imported from the `assets` directory and included in the JSX structure with `img` tags.

- **CSS Import**: The CSS for this component is imported from `ourSpecials.css`. This file contains the styles for the component, including the grid layout for the cards, the styling of each card, and the vegan badge.

- **Title Line**: The `title-line` div is a decorative element that adds a horizontal line under the title of the section. This line is styled in the `ourSpecials.css` file.

### ContactPage (Component)

This component provides a way for users to send a message to the shop, and gives feedback to the user after a form submission.

The `ContactPage` component is used to display a contact form on the website. It includes fields for the user's name, phone number, email address, and message.

- **Structure**: The `ContactPage` component is a functional component in React. It returns a JSX structure that includes an image and a form with fields for the user's name, phone number, email address, and message. The form has an `onSubmit` prop that calls the `sendEmail` function when the form is submitted.

- **Image Import**: The image for the contact page is imported from the `assets` directory and included in the JSX structure with an `img` tag.

- **CSS Import**: The CSS for this component is imported from `contact.css`. This file contains the styles for the component, including the positioning and styling of the text and form fields.

- **Form Submission**: The `sendEmail` function is called when the form is submitted. It prevents the default form submission behavior, sends the form data to a specified email service using `emailjs`, and updates the `submissionStatus` state based on the result of the email sending operation.

- **Form Submission Message**: If a submission status message exists, it is displayed below the form. The message has a CSS class that corresponds to the type of the message (either 'success' or 'error').

- **useEffect Hook**: The `useEffect` hook is used to clear the submission status message after a delay of 4 seconds. This is done using the `setTimeout` function. The hook also includes a cleanup function that clears the timer if the component unmounts or if another message is set before the timer expires.

### SpecialEvents (Component)

This component is used to showcase the special events and features of the shop, including the unique gelato bike.

- **Structure**: The `SpecialEvents` component is a functional component in React. It returns a JSX structure that includes an image of the gelato bike and a description of the special events and services offered by the shop.

- **Image Import**: The image of the gelato bike is imported from the `assets` directory and included in the JSX structure with an `img` tag.

- **CSS Import**: The CSS for this component is imported from `specialEvents.css`. This file contains the styles for the component, including the scalloped border effect.

- **ScrollLink**: The `ScrollLink` component from the `react-scroll` library is used to create a link that smoothly scrolls to the `contact` section when clicked. The `smooth` prop is set to `true` and the `duration` prop is set to `500` to create a smooth scrolling effect that lasts 500 milliseconds.

- **Text Content**: The text content of the component is structured with `h1` and `p` tags. The `h1` tags contain the headings of the section, and the `p` tag contains the description of the special events and the gelato bike. The `className` prop is used to apply CSS classes to these elements.

### Footer (Component)

The `Footer` component is used to display the footer of the website. It includes the shop's name, address, a link to its location on Google Maps, and links to other pages on the website.

- **Structure**: The `Footer` component is a functional component in React. It returns a JSX structure that includes the shop's name, address, a link to Google Maps, and a navigation bar with links to other pages.

- **Image Import**: The background image for the footer is imported from the `assets` directory and included in the JSX structure with a `style` prop on the `div` tag.

- **CSS Import**: The CSS for this component is imported from `footer.css`. This file contains the styles for the component, including the positioning and styling of the text and navigation bar.

- **Navigation Bar**: The navigation bar in the footer includes links to the "Our Story", "The Menu", and "Contact" pages. These links are created with `a` tags and have the `className` prop set to `"footer-nav-link"` to apply the corresponding CSS class.

- **Google Maps Link**: The address of the shop is followed by a link to its location on Google Maps. This link is created with an `a` tag and has the `className` prop set to `"footer-map-link"` to apply the corresponding CSS class.

---

## Design and Aesthetic

Our chosen color palette embodies the rich, creamy textures and vibrant flavors of our gelato:

- Mustard Yellow: `#898900`
- Creamy Peach: `#f2ccb2`
- Soft Pink: `#ffa5b2`
- Pale Yellow: `#ffe57f`
- Mint Green: `#66cc7f`

## Tasks

### To-Do List

- [x] Initialize the project with Create React App (CRA)
- [x] Create the basic file structure for components, assets, and styles.
- [x] Scaffold the `Header` component with navigation and branding.
- [x] Write initial CSS for `Header`.
- [x] Develop the Navbar component with responsive design and integrate it with React Router for navigation.
- [x] Implement the `HeroCarousel` component with styled imagery and titles.
- [x] Compose the `About` section with responsive layout and brand story.
- [x] Craft the `OurFavorites` component showcasing signature gelato flavors.
- [x] Formulate the `OurSpecials` component to display seasonal specials.
- [x] Conceptualize the `SpecialEvents` component for event information and booking.
- [x] Construct the `Contact` section with a form connected to EmailJS for direct messaging.
- [x] Assemble the footer component with navigation links and contact information.
- [x] Implement validation checks for the contact form.
- [x] Design an Online Ordering Modal integrating external delivery services like DoorDash, Uber Eats, & GrubHub.
- [x] Create CSS files for each component ensuring modular design and maintainability.
- [x] Style components for responsive behavior across different device sizes.
- [x] Curate real images for menu items, ensuring visual appeal and accuracy.
- [x] Enable form validation for `ContactForm` using EmailJS for reliable email integration.
- [x] Embed animations into the `HeroSection` for a dynamic user experience.
- [x] Optimize images for faster loading times without compromising on quality.
- [x] Conduct user testing to identify and resolve usability issues.
- [x] Deploy the website to the main domain (pplmade.com) and set up a staging environment on GitHub Pages.
- [ ] Incorporate accessibility features following WCAG guidelines for a broader user base.

#### Additional Tasks

- [x] Set up custom fonts for branding purposes and ensure they are correctly imported in CSS.
- [x] Define a comprehensive color scheme across all components for visual consistency.
- [ ] Integrate a scroll-to-top feature for improved navigation.
- [x] Ensure all components have corresponding CSS files for styling.
- [x] Validate the application's routes using React Router/Hash Router for seamless page transitions.
- [x] Include a dynamic modal functionality for online ordering options.
- [x] Implement a scalable grid layout for product displays in `OurFavorites` and `OurSpecials` components.
- [x] Confirm the functionality of the contact form and successful integration with EmailJS service.
- [x] Apply a consistent branding approach across all textual and visual elements.
- [x] Configure and apply an effective state management approach to handle modal states.
- [x] Implement responsive web design practices to ensure cross-platform compatibility.

## Contribution

Currently, this is a closed-source project. It could be open-sourced in the future, after its release, for community transparency.
Read the [LICENSE](LICENSE.md)

---

## Contact Information

**Gelateria Del Centro**  
207 Toulouse St, Downtown Fresno,  
Fresno, California, USA
(559) 824-5809
Contact us at <hello@gelateriadelcentro.com>

## Developer Information

Austin Srpaggins
(559) 818-0467
Contact Me at <spragginsdesigns@gmail.com>
