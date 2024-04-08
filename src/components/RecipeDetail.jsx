import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import "../css/RecipeDetail.css";

function RecipeDetail() {
  const { id } = useParams();
  const [recipes] = useState([
    {
      id: 1,
      title: "Decadent Cocoa Delights",
      description: "Indulge in rich cocoa cookies loaded with luscious chocolate chunks, perfect for pairing with milk or your favorite hot drink.",
      ingredients: ["Butter", "Granulated Sugar", "Brown Sugar", "Eggs", "Vanilla Extract", "All-purpose Flour", "Unsweetened Cocoa Powder", "Baking Soda", "Salt", "Semisweet Chocolate Chunks"],
      steps: [
        "Cream together butter, granulated sugar, and brown sugar until fluffy.",
        "Beat in eggs and vanilla extract.",
        "Whisk together flour, cocoa powder, baking soda, and salt.",
        "Gradually add dry ingredients to wet ingredients, mixing until combined.",
        "Fold in semisweet chocolate chunks.",
        "Drop dough onto lined baking sheets.",
        "Bake at 350°F (175°C) for 10-12 minutes.",
        "Cool on baking sheets before transferring to wire racks."
      ],
      videoUrl: "https://www.youtube.com/embed/lJ7Ec3bKrxM",
    },
    {
      id: 2,
      title: "Classic Wedding Cake",
      description: "A timeless recipe for a classic tiered wedding cake, perfect for celebrating special occasions.",
      ingredients: ["Cake Flour", "Granulated Sugar", "Butter", "Eggs", "Vanilla Extract", "Baking Powder", "Salt", "Whole Milk"],
      steps: [
        "Preheat oven to 350°F (175°C). Grease and flour cake pans.",
        "In a large mixing bowl, cream together butter and sugar until light and fluffy.",
        "Beat in eggs, one at a time, then stir in vanilla extract.",
        "Combine cake flour, baking powder, and salt; gradually add to creamed mixture alternately with milk, beginning and ending with flour mixture.",
        "Pour batter into prepared cake pans.",
        "Bake for 25-30 minutes or until a toothpick inserted into the center comes out clean.",
        "Allow cakes to cool in pans for 10 minutes before transferring to wire racks to cool completely.",
        "Once cooled, frost and decorate as desired for a stunning wedding centerpiece."
      ],
      videoUrl: "https://www.youtube.com/embed/Aftb8hCnND0",
    },
    {
      id: 3,
      title: "Milky Donut",
      description: "Soft and fluffy homemade donuts filled with creamy milk custard.",
      ingredients: ["All-purpose Flour", "Granulated Sugar", "Butter", "Yeast", "Milk", "Eggs", "Vanilla Extract", "Salt", "Powdered Sugar (for dusting)"],
      steps: [
        "Warm milk slightly and dissolve yeast in it. Let it sit for 5 minutes until frothy.",
        "In a large mixing bowl, combine flour, sugar, and salt.",
        "Add in yeast mixture, beaten eggs, melted butter, and vanilla extract. Mix until dough forms.",
        "Knead the dough until smooth and elastic, then cover and let it rise in a warm place for about 1 hour or until doubled in size.",
        "Roll out dough on a floured surface and cut into donut shapes using a donut cutter.",
        "Heat oil in a deep fryer to 350°F (175°C). Fry the donuts until golden brown on both sides.",
        "Remove from oil and let drain on paper towels.",
        "Fill a piping bag with milk custard and pipe into the center of each donut.",
        "Dust with powdered sugar before serving."
      ],
      videoUrl: "https://www.youtube.com/embed/V_c2_EQgLgE",
    },
    {
      id: 4,
      title: "Sardine Bread",
      description: "A savory bread recipe featuring flavorful sardines.",
      ingredients: [
        "All-purpose Flour",
        "Active Dry Yeast",
        "Warm Water",
        "Canned Sardines",
        "Olive Oil",
        "Salt",
        "Black Pepper",
        "Garlic Powder",
        "Italian Herbs"
      ],
      steps: [
        "In a mixing bowl, combine warm water and active dry yeast. Let it sit for 5 minutes until frothy.",
        "Add flour, olive oil, salt, black pepper, garlic powder, and Italian herbs to the yeast mixture. Mix until dough forms.",
        "Knead the dough on a floured surface until smooth and elastic. Cover and let it rise in a warm place for about 1 hour.",
        "Punch down the dough and divide it into portions. Flatten each portion and place a sardine on top. Fold the dough over the sardine and seal the edges.",
        "Place the filled dough on a baking sheet lined with parchment paper. Let it rise again for 30 minutes.",
        "Preheat the oven to 375°F (190°C). Bake the sardine bread for 20-25 minutes or until golden brown.",
        "Serve warm and enjoy the savory goodness of sardine bread!"
      ],
      videoUrl: "https://www.youtube.com/embed/-BiZM4Ej1B0",
    },
    {
      id: 5,
      title: "Meat Pie",
      description: "A classic savory pastry filled with seasoned meat and vegetables.",
      ingredients: [
        "All-purpose Flour",
        "Butter",
        "Ground Beef or Pork",
        "Onion",
        "Carrot",
        "Potato",
        "Beef or Chicken Broth",
        "Salt",
        "Black Pepper",
        "Puff Pastry Sheets"
      ],
      steps: [
        "Preheat oven to 375°F (190°C).",
        "In a skillet, melt butter over medium heat. Add diced onions and cook until translucent.",
        "Add ground meat to the skillet and cook until browned. Drain excess fat.",
        "Stir in diced carrots and potatoes. Cook until vegetables are tender.",
        "Season with salt and black pepper to taste. Pour in beef or chicken broth and simmer until thickened.",
        "Roll out puff pastry sheets on a floured surface. Cut into circles using a round cutter.",
        "Place a spoonful of the meat and vegetable mixture onto one half of each pastry circle.",
        "Fold the pastry over the filling to create a half-circle shape. Press the edges with a fork to seal.",
        "Place the meat pies on a baking sheet lined with parchment paper.",
        "Bake in the preheated oven for 20-25 minutes or until golden brown and crispy.",
        "Serve hot and enjoy your homemade meat pies!"
      ],
      videoUrl: "https://www.youtube.com/embed/ZXM0ZZM9Mjs",
    },
    {
      id: 6,
      title: "Croissant Recipe",
      description: "A classic pastry filled with layers of buttery goodness.",
      ingredients: [
        "All-purpose Flour",
        "Butter",
        "Sugar",
        "Salt",
        "Active Dry Yeast",
        "Warm Water",
        "Egg (for egg wash)"
      ],
      steps: [
        "In a mixing bowl, combine warm water and active dry yeast. Let it sit for 5 minutes until frothy.",
        "In a separate bowl, mix flour, sugar, and salt. Cut in cold butter until the mixture resembles coarse crumbs.",
        "Add the yeast mixture to the flour mixture. Stir until a dough forms.",
        "Turn the dough out onto a floured surface and knead until smooth and elastic.",
        "Shape the dough into a rectangle, then fold it into thirds like a letter. Repeat this folding process two more times, chilling the dough for 30 minutes between each fold.",
        "After the final fold, roll out the dough into a large rectangle. Cut the dough into triangles.",
        "Starting from the wide end, roll each triangle tightly to form croissants. Place them on a baking sheet lined with parchment paper.",
        "Cover the croissants with a clean kitchen towel and let them rise in a warm place for about 1-2 hours, or until doubled in size.",
        "Preheat the oven to 400°F (200°C). Brush the croissants with egg wash.",
        "Bake for 15-20 minutes, or until golden brown and flaky.",
        "Serve warm and enjoy the buttery goodness of homemade croissants!"
      ],
      videoUrl: "https://www.youtube.com/embed/kJfi4bz2q0w",
    },
    {
      id: 7,
      title: "Blueberry Muffins",
      description: "Delicious muffins bursting with juicy blueberries.",
      ingredients: [
        "All-purpose Flour",
        "Granulated Sugar",
        "Baking Powder",
        "Salt",
        "Eggs",
        "Milk",
        "Vegetable Oil",
        "Vanilla Extract",
        "Fresh Blueberries"
      ],
      steps: [
        "Preheat oven to 375°F (190°C). Line muffin tin with paper liners or grease well.",
        "In a large bowl, whisk together flour, sugar, baking powder, and salt.",
        "In another bowl, beat eggs, then stir in milk, vegetable oil, and vanilla extract.",
        "Pour wet ingredients into dry ingredients and stir until just combined. Do not overmix.",
        "Gently fold in fresh blueberries.",
        "Divide batter evenly among muffin cups, filling each about two-thirds full.",
        "Bake for 18-20 minutes, or until a toothpick inserted into the center comes out clean.",
        "Allow muffins to cool in the pan for a few minutes, then transfer to a wire rack to cool completely.",
        "Serve warm and enjoy these delightful blueberry muffins!"
      ],
      videoUrl: "https://www.youtube.com/embed/gN-orgrgvU8",
    },
    {
      id: 8,
      title: "Vanilla Cupcakes",
      description: "Classic cupcakes with a tender crumb and sweet vanilla flavor.",
      ingredients: [
        "All-purpose Flour",
        "Granulated Sugar",
        "Baking Powder",
        "Salt",
        "Unsalted Butter",
        "Eggs",
        "Whole Milk",
        "Vanilla Extract"
      ],
      steps: [
        "Preheat oven to 350°F (175°C). Line muffin tin with paper liners.",
        "In a medium bowl, whisk together flour, baking powder, and salt.",
        "In a large bowl, beat butter and sugar until light and fluffy.",
        "Add eggs one at a time, beating well after each addition. Stir in vanilla extract.",
        "Gradually add flour mixture to butter mixture alternately with milk, beginning and ending with flour mixture. Beat until just combined.",
        "Divide batter evenly among muffin cups, filling each about two-thirds full.",
        "Bake for 18-20 minutes or until a toothpick inserted into the center comes out clean.",
        "Allow cupcakes to cool in the pan for a few minutes, then transfer to a wire rack to cool completely.",
        "Frost with your favorite frosting and decorate as desired.",
        "Enjoy these classic vanilla cupcakes!"
      ],
      videoUrl: "https://www.youtube.com/embed/xrFZd54VFNE",
    },
    {
      id: 9,
      title: "Sausage Rolls",
      description: "Flaky puff pastry filled with seasoned sausage meat.",
      ingredients: [
        "Puff Pastry Sheets",
        "Sausage Meat",
        "Onion",
        "Garlic",
        "Fresh Herbs (such as parsley, thyme, or sage)",
        "Egg (for egg wash)"
      ],
      steps: [
        "Preheat oven to 400°F (200°C). Line a baking sheet with parchment paper.",
        "In a skillet, cook diced onions and minced garlic until softened. Set aside to cool.",
        "In a bowl, mix sausage meat with cooked onions, garlic, and chopped fresh herbs until well combined.",
        "Roll out puff pastry sheets into rectangles. Cut each sheet in half lengthwise.",
        "Divide the sausage mixture into portions and shape into logs. Place one log along the center of each pastry strip.",
        "Fold the pastry over the sausage mixture and seal the edges. Cut each roll into smaller pieces.",
        "Place the sausage rolls on the prepared baking sheet. Brush with beaten egg for a golden finish.",
        "Bake for 20-25 minutes or until the pastry is golden brown and the sausage is cooked through.",
        "Serve warm as a delicious snack or appetizer."
      ],
      videoUrl: "https://www.youtube.com/embed/_Q_EZihVo-Q",
    }
  ]);

  // Find the recipe with the matching ID
  const recipe = recipes.find((recipe) => recipe.id.toString() === id);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <Header />
      <div className="button-container">
        <Link to="/">
          <button className="button">Back</button>
        </Link>
      </div>
      <div className="recipes-details-container">
        <h1>{recipe.title}</h1>
        <div className="recipe-video-container">
          <iframe
            src={recipe.videoUrl}
            title={recipe.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="recipe-video"
          ></iframe>
        </div>
        <h2>Description</h2>
        <p>{recipe.description}</p>
        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2>Preparation Steps</h2>
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
