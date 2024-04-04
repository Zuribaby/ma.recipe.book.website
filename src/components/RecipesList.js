// RecipesList.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

function RecipesList() {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: "Pasta Carbonara",
      description: "A classic Italian pasta dish with eggs, cheese, and bacon.",
      ingredients: ["Spaghetti", "Eggs", "Parmesan Cheese", "Bacon"],
      steps: [
        "Cook spaghetti according to package instructions.",
        "Fry bacon until crispy.",
        "Mix eggs and cheese in a bowl.",
        "Combine cooked spaghetti with bacon and egg mixture.",
        "Serve hot.",
      ],
      imageUrl: "https://example.com/pasta_carbonara.jpg",
    },
    {
      id: 2,
      title: "Chocolate Chip Cookies",
      description: "Homemade cookies filled with chocolate chips.",
      ingredients: ["Flour", "Sugar", "Butter", "Chocolate Chips"],
      steps: [
        "Preheat oven to 350°F (175°C).",
        "Mix flour, sugar, and melted butter in a bowl.",
        "Fold in chocolate chips.",
        "Drop spoonfuls of dough onto a baking sheet.",
        "Bake for 10-12 minutes until golden brown.",
      ],
      imageUrl: "https://example.com/chocolate_chip_cookies.jpg",
    },
  ]);

  return (
    <div>
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
