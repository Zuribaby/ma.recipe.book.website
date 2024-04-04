// RecipeDetail.js
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({
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
  });

  // You can fetch the recipe details from a server based on the id here

  return (
    <div>
      <Link to="/">Back to Recipes List</Link>
      <h1>{recipe.title}</h1>
      <img src={recipe.imageUrl} alt={recipe.title} />
      <h2>Description:</h2>
      <p>{recipe.description}</p>
      <h2>Ingredients:</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Preparation Steps:</h2>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeDetail;
