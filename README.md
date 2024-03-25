# Gelateria Del Centro SPA

Welcome to the repository for the Single-Page Application (SPA) of Gelateria Del Centro. This application is a digital representation of Gelateria Del Centro, an artisan ice cream shop located in Downtown Fresno, California. We aim to provide an attractive and interactive experience for visitors. You can explore our distinctive gelato flavors, get comprehensive business information, check out our menu, read testimonials, book private events, and even order online for pickup or delivery.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
  - [Navbar Component](#navbar-component)
  - [HeroCarousel Component](#herocarousel-component)
  - [OurFavorites Component](#ourfavorites-component)
  - [OurSpecials Component](#ourspecials-component)
  - [ContactFormSection Component](#contactformsection-component)
  - [Footer Component](#footer-component)
- [Design and Aesthetic](#design-and-aesthetic)
- [Tasks](#tasks)
  - [To-Do List](#to-do-list)
- [Contribution Guidelines & License](#contribution)
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
- ![Styled-Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
- ![React Icons](https://img.shields.io/badge/React_Icons-61DAFB?style=for-the-badge&logo=react&logoColor=white)
- ![Google Maps](https://img.shields.io/badge/Google_Maps-4285F4?style=for-the-badge&logo=google-maps&logoColor=white)


Gelateria Del Centro's SPA aims to embody the essence of our physical shop's warm, welcoming atmosphere in a digital format. Through interactive menus, engaging visuals, and streamlined online ordering, we strive to provide an exceptional user experience that mirrors the joy of savoring our handmade gelatos.

## Getting Started

To view the project follow these steps on Windows, Mac, or Linux after installing [NodeJS](https://nodejs.org/en/download):

1. Clone the repository:
    
    ```bash
    git clone https://github.com/spragginsdesigns/Gelateria-Del-Centro-WebApp.git
    ```
    
2. Navigate to the project root directory:
    
    ```bash
    cd Gelateria-Del-Centro-WebApp
    ```
    
3. Install dependencies using the NodeJS package manager:
    
    ```bash
    npm install
    ```
    
4. Start the development server: The application will be available at `http://localhost:3000`.
    
    ```bash
    npm start
    ```

---

## Project Structure

### Navbar (Component):
- **Structure**: A navigation bar fixed at the top, displaying the address of the store on the left and a prominent "Order Now" call-to-action on the right. A scalloped border of mint-green and soft-pink for the `background-image`. 
- **React Implementation**: Implemented as a React component using `<div>` and `<nav>` elements, with `Link` components from `react-router-dom` for SPA navigation. Styled with CSS.

### HeroCarousel (Component):
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

### ContactFormSection (Component):
- **Structure**: An interactive section allowing users to send messages or inquire about private events. Includes integration with Google Maps to display the shop's location.
- **React Implementation**: This section includes styled-components for inputs and a button, utilizing `styled-components` for styling. The form is structured with semantic HTML and styled inputs, including a Google Maps iframe integration for the map.

### Footer (Component):
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

- [x]  Initialize the project CRA
- [x]  Create the basic file structure.
- [x]  Scaffold the `Header` and `HeroSection` components.
- [x]  Write initial CSS for `Header`.
- [x]  Create Navbar and Navbar.js components
- [x]  Create heroCarosuel and heroCarousel.js
- [x]  Create CSS files for the components
- [x]  Create NavBar
- [x]  Create a Scalloped Border image for the navbar background
- [x]  Edit image to work on the navbar
- [x]  Create Hero Carousel
- [x]  **Google Maps**: Add Google Maps location data map within or near the `ContactForm` page area
- [x]  Style CSS to be responsive with all device sizes
- [ ]  Update menu items with real pictures of the menu items
    
## Contribution

Currently, this is a closed-source project. It could be open-sourced in the future, after its release, for community transparency. 
Read the [LICENSE](LICENSE.md)

---

## Contact Information

**Gelateria Del Centro**  
207 Toulouse St, Downtown Fresno,  
Fresno, California, USA
(559) 824-5809
hello@gelateriadelcentro.com

## Developer Information
Austin Srpaggins
(559) 818-0467
spragginsdesigns@gmail.com
