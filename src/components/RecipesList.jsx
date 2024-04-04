// RecipesList.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

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
  ]);

  return (
    <div>
      <Header/>
      <h1>Recipes List</h1>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h2>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
}

export default RecipesList;
