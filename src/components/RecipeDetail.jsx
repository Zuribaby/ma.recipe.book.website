import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";

function RecipeDetail() {
  const { id } = useParams();
  const [recipes] = useState([
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
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod/images/skillet-eggplant-parm1-1650313891.jpg?crop=1.00xw:0.752xh;0,0.135xh&resize=1200:*",
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
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyKOAtmuhofDJuI5NzsOAwVE7_ZuQWKBoqTH24GGhvfg&s",
    },
    {
      id: 3,
      title: "Grilled Chicken Salad",
      description: "A healthy and delicious salad with grilled chicken.",
      ingredients: [
        "Chicken Breast",
        "Lettuce",
        "Tomatoes",
        "Cucumbers",
        "Avocado",
      ],
      steps: [
        "Grill chicken breast until fully cooked.",
        "Chop lettuce, tomatoes, cucumbers, and avocado.",
        "Slice grilled chicken breast.",
        "Combine all ingredients in a bowl.",
        "Serve with your favorite dressing.",
      ],
      imageUrl: "https://static.toiimg.com/photo/61831141.cms",
    },
  ]);

  // Find the recipe with the matching ID
  const recipe = recipes.find((recipe) => recipe.id.toString() === id);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <Header/>
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
    </div>
  );
}

export default RecipeDetail;
