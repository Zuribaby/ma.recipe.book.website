import React from "react";
import "../css/Header.css";
import logo from "../images/logo.png"; // Assuming you have a logo image

function Header() {
  const scrollToAbout = (event) => {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToRecipes = (event) => {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    const recipesSection = document.getElementById("recipeslist");
    if (recipesSection) {
      recipesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <span className="logo-name">ChiYamu's CookBook</span>
      </div>
      <nav>
        <ul className="nav-list">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about" onClick={scrollToAbout}>
              About
            </a>
          </li>
          <li>
            <a href="#recipeslist" onClick={scrollToRecipes}>
              Recipes
            </a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
