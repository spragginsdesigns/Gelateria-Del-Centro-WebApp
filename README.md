# Gelateria Del Centro SPA

Welcome to the repository for the Single-Page Application (SPA) of Gelateria Del Centro. This application is a digital representation of Gelateria Del Centro, an artisan ice cream shop located in Downtown Fresno, California. We aim to provide an attractive and interactive experience for visitors. You can explore our distinctive gelato flavors, get comprehensive business information, check out our menu, read testimonials, book private events and even order online for pickup or delivery.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
  - [Navbar Component](#navbar-component)
  - [HeroSection Component](#herosection-component)
  - [IntroductionSection Component](#introductionsection-component)
  - [FavoritesSection Component](#favoritessection-component)
  - [SeasonalSpecialsSection Component](#seasonalspecialssection-component)
  - [ContactFormSection Component](#contactformsection-component)
  - [Footer Component](#footer-component)
- [Development Approach](#development-approach)
  - [Enhancements](#enhancements)
- [Design and Aesthetic](#design-and-aesthetic)
- [Feature Highlights](#feature-highlights)
  - [Completed Features](#completed-features)
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
- ![Static Badge 1](https://img.shields.io/badge/Built%20With%20-%20ReactJS%20-%20%23121212%20?style=for-the-badge&logo=react)

Gelateria Del Centro's SPA aims to embody the essence of our physical shop's warm, welcoming atmosphere in a digital format. Through interactive menus, engaging visuals, and streamlined online ordering, we strive to provide an exceptional user experience that mirrors the joy of savoring our handmade gelatos.

## Getting Started

To view the project follow these steps on Windows, Mac, or Linux after installing [NodeJS](https://nodejs.org/en/download):

1. Clone the repository:
    
    ```bash
    git clone https://github.com/spragginsdesigns/gelateria-del-centro.git
    ```
    
2. Navigate to the project root directory:
    
    ```bash
    cd gelateria-del-centro
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
- **Structure**: A top-fixed navigation bar with the address of the store aligned to the left and aligned to the right a prominent "Order Now" call-to-action.
- **React Implementation**: Built as a `<nav>` React component with `Link` elements from `react-router-dom` for SPA navigation.
- **TailwindCSS Styling**: Styled with `flex`, `justify-between`, and responsive classes to accommodate different screen sizes.

### HeroSection (Component):
- **Structure**: A carousel displaying images of the shop’s interior, popular flavors, and customers.
- **React Implementation**: A stateful component using a library like `react-slick` for carousel functionality, managing the current slide index with a hook like `useState`.
- **TailwindCSS Styling**: Utilize `bg-cover`, `bg-center`, and animation classes for smooth image transitions.

### IntroductionSection (Component):
- **Structure**: A welcoming text section with a concise introduction and shop details like hours and special events.
- **React Implementation**: A simple functional component displaying static content.
- **TailwindCSS Styling**: Text styling with `text-xl`, `font-semibold`, and `my-4` for margins.

### FavoritesSection (Component):
- **Structure**: A grid layout showcasing the "Our Favorites" gelato selections.
- **React Implementation**: Rendered dynamically with a `map()` function iterating over flavor data, each flavor encapsulated in its own card component.
- **TailwindCSS Styling**: Grid styling with `grid-cols-1 md:grid-cols-3 gap-4` for a responsive layout.

### SeasonalSpecialsSection (Component):
- **Structure**: Similar to FavoritesSection but highlighting seasonal or limited-time offers.
- **React Implementation**: Uses React's conditional rendering to display these specials based on current season data.
- **TailwindCSS Styling**: Styled with Tailwind's `text-lg`, `text-center`, and padding utilities for proper spacing and emphasis.

### ContactFormSection (Component):
- **Structure**: An interactive form allowing users to send messages and book private events. 
- **React Implementation**: Controlled inputs managed by `useState` for form data and `useEffect` for handling side effects like form validation feedback.
- **TailwindCSS Styling**: Form inputs styled with `shadow`, `border`, `p-2`, and `rounded` for an accessible and pleasant aesthetic.
- **Google Maps**: Implement Google Maps location map. 

### Footer (Component):
- **Structure**: A consistent footer across all pages containing links and social media icons.
- **React Implementation**: A reusable component containing `Link` elements and external anchor tags for social media.
- **TailwindCSS Styling**: Uses `flex`, `justify-around`, and `items-center` to align and distribute content.

### DownloadMenuButton (Component): 
- **Placement**: Positioned within the FavoritesSection or SeasonalSpecialsSection, close to the online ordering options.
- **React Implementation**: A button that triggers the download of the menu in PDF format, using a `handleDownload` function to manage the download process.
- **TailwindCSS Styling**: Styled with `bg-primary`, `text-white`, and `hover:bg-primary-dark` for an engaging and intuitive download experience.

---

## Development Approach

1. **Start with the Navbar**: This is the entry point for user navigation. Create a flexible and responsive Navbar using TailwindCSS classes for layout and React Router for SPA navigation.

2. **HeroSection**: Implement the carousel using a suitable React library, encapsulate carousel logic within a stateful component, and ensure the images are responsive and cover the background appropriately.

3. **IntroductionSection**: Layout the introduction text and operational details, and style them for readability and visual appeal.

4. **FavoritesSection**: Begin by building the card component for individual flavors, then map over the gelato flavors data to dynamically create the grid of favorites.

5. **SeasonalSpecialsSection**: Use similar logic to FavoritesSection but with a different data set, ensuring that the styling differentiates this section from the regular offerings.

6. **ContactFormSection**: Construct a form with controlled components for each field. Implement validation logic and connect the form submission to a backend service or API.

7. **Footer**: Create a Footer component that is consistent across all pages, including navigation and social media links, which will be styled for clarity and ease of use.

8. **DownloadMenuButton**: Integrate a button within the menu sections that allow users to download the gelato menu as a PDF. Include appropriate icons and text to indicate the action.

- Each component will be developed one at a time, starting from the top of the page to the bottom, following best practices for React and using TailwindCSS for styling. Components will be responsive and mobile-first, ensuring accessibility and a seamless user experience across all devices.

### Enhancements

- **Google Maps**: Add Google Maps location data map within or near the `ContactForm` page area.
- **Image Gallery:** Consider image carousels within gelato cards for multiple views.
- **Accessibility:** Prioritize accessibility throughout development (ARIA attributes, keyboard navigation, etc.).

---

## Design and Aesthetic

Our chosen color palette embodies the rich, creamy textures and vibrant flavors of our gelato:

- Mustard Yellow: `#898900`
- Creamy Peach: `#f2ccb2`
- Soft Pink: `#ffa5b2`
- Pale Yellow: `#ffe57f`
- Mint Green: `#66cc7f`

## Feature Highlights

### Completed Features:

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
- [x]  Eliminate old CSS and Integrate TailwindCSS into the project

### To-Do List 
- [ ]  Create Menu
- [ ]  Scaffold TailwindCSS Responsiveness and Design      
---

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
