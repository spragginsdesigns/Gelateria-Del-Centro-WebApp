// OurFavorites.js
import React from "react";
import "./OurFavorites.css";
import colorBar from "../assets/color-bar.png";
import { AttentionSeeker } from "react-awesome-reveal";

// Menu Item Images (imported from assets)
import vanillaImage from "../assets/menu-tems/web/Coconut_Milk_Indonesian_Vanilla_Bean-web.jpg";
import chocolateImage from "../assets/menu-tems/web/Dark_Chocolate-web.jpg";
import caramelloImage from "../assets/menu-tems/web/Caramello_Chocolate_Crunch-web.jpg";
import strawberryImage from "../assets/menu-tems/web/Chocolate_Strawberry-web.jpg";
import honeyImage from "../assets/menu-tems/web/Honey_Lavender-web.jpg";
import pistachioImage from "../assets/menu-tems/web/Pistachio-web.jpg";

const favorites = [
  {
    namePart1: "MADAGASCAR",
    namePart2: "VANILLA BEAN",
    image: vanillaImage,
    vegan: true,
  },
  {
    namePart1: "DARK",
    namePart2: "CHOCOLATE",
    image: chocolateImage,
  },
  {
    namePart1: "CARAMELLO CHOCOLATE",
    namePart2: "CRUNCH",
    image: caramelloImage,
  },
  // Duplicate the first three to make six, as per your setup
  {
    namePart1: "CHOCOLATE",
    namePart2: "STRAWBERRY",
    image: strawberryImage,
  },
  {
    namePart1: "HONEY",
    namePart2: "LAVENDER",
    image: honeyImage,
  },
  {
    namePart1: "PISTACHIO",
    namePart2: "GELATO",
    image: pistachioImage,
  },
  // Add more favorites as needed
];

const OurFavorites = () => {
  return (
    <div className="favorites">
      <div className="title-container">
        <div className="title-line">
          <h1 className="favorites-lowercase">our</h1>
          <h1 className="favorites-uppercase">FAVORITES</h1>
        </div>
      </div>
      <p className="favorites-subtitle">Always available, always delicious</p>
      <div className="favorites-grid">
        {favorites.map((favorite, index) => (
          // triggerOnce can be used to only trigger the animation once
          <AttentionSeeker
            effect="pulse"
            duration={1500} // Increase this value to slow down the animation
            triggerOnce={true}
            key={index}
          >
            <div className="favorite-item">
              <img
                src={favorite.image}
                alt={`${favorite.namePart1} ${favorite.namePart2}`}
                className="favorite-image"
              />
              <div className="favorite-label">
                <h2 className="favorite-name">
                  <span className="flavor-part">{favorite.namePart1}</span>
                  <span className="flavor-part">{favorite.namePart2}</span>
                </h2>
                {favorite.vegan && index === 0 && (
                  <div className="favorite-checkmark">V</div>
                )}
              </div>
            </div>
          </AttentionSeeker>
        ))}
      </div>
      <img src={colorBar} alt="Decorative color bar" className="color-bar" />
    </div>
  );
};

export default OurFavorites;
