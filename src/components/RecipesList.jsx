import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import HeroVideo from "./HeroVideo";
import "../css/RecipeList.css";
import About from "./About";

function RecipesList() {
  const [recipes] = useState([
    {
      id: 1,
      title: "Pasta Carbonara",
      description: "A classic Italian pasta dish with eggs, cheese, and bacon.",
    },
    {
      id: 2,
      title: "Chocolate Chip Cookies",
      description: "Homemade cookies filled with chocolate chips.",
    },
    {
      id: 3,
      title: "Chocolate Chip ",
      description:
        "Homemade cookies filled with chocolate chips with ice cream.",
    },
    {
      id: 4,
      title: "Chocolate Chip ",
      description:
        "Homemade cookies filled with chocolate chips with ice cream.",
    },
    {
      id: 5,
      title: "Chocolate Chip ",
      description:
        "Homemade cookies filled with chocolate chips with ice cream.",
    },
    {
      id: 6,
      title: "Chocolate Chip ",
      description:
        "Homemade cookies filled with chocolate chips with ice cream.",
    },
    {
      id: 7,
      title: "Chocolate Chip ",
      description:
        "Homemade cookies filled with chocolate chips with ice cream.",
    },
    {
      id: 8,
      title: "Chocolate Chip ",
      description:
        "Homemade cookies filled with chocolate chips with ice cream.",
    },
    {
      id: 9,
      title: "Chocolate Chip ",
      description:
        "Homemade cookies filled with chocolate chips with ice cream.",
    },
  ]);
  return (
    <div>
      <Header />
      <HeroVideo />
      <About />
      <div id="recipeslist" className="recipes-list-container">
        <h1 className="recipes-list-heading">Recipes List</h1>
        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-item">
              <h2 className="recipe-title">
                <Link to={`/recipe/${recipe.id}`} className="recipe-link">
                  {recipe.title}
                </Link>
              </h2>
              <p className="recipe-description">{recipe.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecipesList;
