# Gelateria Del Centro SPA

Welcome to the repository for the Single-Page Application (SPA) of Gelateria Del Centro. This application is a digital representation of Gelateria Del Centro, an artisan ice cream shop located in Downtown Fresno, California. We aim to provide an attractive and interactive experience for visitors. You can explore our distinctive gelato flavors, get comprehensive business information, check out our menu, read testimonials, book private events, and even order online for pickup or delivery.

---

## Table of Contents

- [Gelateria Del Centro SPA](#gelateria-del-centro-spa)
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
    - [OurFavorites Component](#ourfavorites-component)
    - [OurSpecials Component](#ourspecials-component)
    - [Implementation Details](#implementation-details)
    - [ContactFormSection (Component)](#contactformsection-component)
    - [Footer (Component)](#footer-component)
    - [Enhancements](#enhancements)
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
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
- ![React Icons](https://img.shields.io/badge/React_Icons-61DAFB?style=for-the-badge&logo=react&logoColor=white)
- ![Google Maps](https://img.shields.io/badge/Google_Maps-4285F4?style=for-the-badge&logo=google-maps&logoColor=white)

Gelateria Del Centro's SPA aims to embody the essence of our physical shop's warm, welcoming atmosphere in a digital format. Through interactive menus, engaging visuals, and streamlined online ordering, we strive to provide an exceptional user experience that mirrors the joy of savoring our handmade gelatos.

---

## Getting Started

You can quickly set up and run this project on your local machine by following the steps below.

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

- **Structure**: A navigation bar fixed at the top, displaying the address of the store on the left and a prominent "Order Now" call-to-action on the right. A scalloped border of mint-green and soft-pink for the `background-image`.
- **React Implementation**: Implemented as a React component using `<div>` and `<nav>` elements, with `Link` components from `react-router-dom` for SPA navigation. Styled with CSS.

### HeroCarousel (Component)

- **Structure**: A carousel that showcases images, likely including the shop’s interior, popular flavors, and customers.
- **React Implementation**: Utilizes the `react-slick` library for carousel functionality, encapsulated within a React functional component. Styling is applied via CSS and slick-carousel's own styles.

### OurFavorites Component

**Structure (React):**

- The `OurFavorites` component maps through an array of favorite items, each item described by properties such as `flavor`, `name`, `description`, and `image`.
- It returns a grid of cards, where each card displays an image, the flavor of the gelato, its name (e.g., "Vegan"), and a brief description.
- A button to download the full menu as a PDF is also provided.

**Styling (CSS):**

- The CSS for `OurFavorites` is designed to display items in a grid layout. Using CSS Grid, the `.favorites-grid` class is styled to have three columns with a gap between them. This achieves the 3x3 layout on larger screens.
- Responsive design adjustments ensure that the grid adjusts to two columns on larger screens and a single column on medium to smaller screens.
- Additional styling such as borders, shadows, and padding enhance the appearance of each card within the grid.

### OurSpecials Component

**Structure (React):**

- Similar to `OurFavorites`, `OurSpecials` also iterates over an array of seasonal specials, constructing a grid of cards.
- Each card in the `OurSpecials` grid displays an image, the flavor, the type (e.g., "Seasonal"), and a description of the special item.
- This component emphasizes seasonal or temporary offerings, adding a dynamic element to the menu.

**Styling (CSS):**

- The `OurSpecials` CSS utilizes a similar grid layout to `OurFavorites`, employing CSS Grid to arrange the specials in a 3x3 pattern on desktop views, with adjustments for responsiveness.
- Styling customizations for `OurSpecials` may include unique color schemes or decorations that distinguish seasonal specials from the regular favorites.

### Implementation Details

- **Grid Layout**: Both components use CSS Grid to create a 3x3 layout. The grid's column configuration is set to repeat three times (`repeat(3, 1fr)`) on larger screens, ensuring each item takes up one-third of the grid's width. Media queries adjust this layout for responsiveness.
- **Responsive Design**: Media queries in the CSS reduce the number of columns to two or one based on the viewport width, ensuring the content remains accessible and visually appealing across devices.
- **React Props and State**: These components can be further enhanced by using React state to dynamically load menu items or props to customize the component based on where it's used within the application.

### ContactFormSection (Component)

- **Structure**: An interactive section allowing users to send messages or inquire about private events. Includes integration with Google Maps to display the shop's location.
- **React Implementation**: This section includes styled-components for inputs and a button, utilizing `styled-components` for styling. The form is structured with semantic HTML and styled inputs, including a Google Maps iframe integration for the map.

### Footer (Component)

- **Structure**: A footer displayed across all pages, containing information about the Gelateria and links to various sections like the story, menu, and contact page.
- **React Implementation**: A styled component defining the footer's layout and style, including responsiveness for mobile devices. Links within the footer are styled and laid out using CSS and React elements.

### Enhancements

- **Accessibility:** Prioritize accessibility throughout development (ARIA attributes, keyboard navigation, etc.).

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
