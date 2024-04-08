import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import HeroVideo from "./HeroVideo";
import "../css/RecipeList.css";
import About from "./About";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import Review from "./Review";

function RecipesList() {
  const [recipes] = useState([
    {
      id: 1,
      title: "Decadent Cocoa Delights",
      description: "Homemade cookies filled with chocolate chunks.",
    },
    {
      id: 2,
      title: "Classic Wedding Cake",
      description: "A timeless recipe for a classic tiered wedding cake.",
    },
    {
      id: 3,
      title: "Milky Donuts ",
      description:
        "Soft and fluffy homemade donuts filled with creamy milk custard.",
    },
    {
      id: 4,
      title: "Sardine Bread ",
      description:
        "A savory bread recipe featuring flavorful sardines.",
    },
    {
      id: 5,
      title: "Meatpie ",
      description:
        "A classic savory pastry filled with seasoned meat and vegetables.",
    },
    {
      id: 6,
      title: "Croissant ",
      description:
        "A classic pastry filled with layers of buttery goodness.",
    },
    {
      id: 7,
      title: "Blueberry Muffins ",
      description:
        "Delicious muffins bursting with juicy blueberries.",
    },
    {
      id: 8,
      title: "Vanilla Cupcakes ",
      description:
        "Classic cupcakes with a tender crumb and sweet vanilla flavor.",
    },
    {
      id: 9,
      title: "Sausage Rolls ",
      description:
        "Flaky puff pastry filled with seasoned sausage meat.",
    },
  ]);
  return (
    <div>
      <Header />
      <HeroVideo />
      <About />
      <div id="recipeslist" className="recipes-list-container">
        <h1 className="recipes-list-heading">Pastries</h1>
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
      <Review />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default RecipesList;
