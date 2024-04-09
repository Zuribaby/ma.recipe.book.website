import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipesList from "./components/RecipesList";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  return (
    // Wrap the entire application with the Router component from react-router-dom
    <Router>
      {/* Define the routes using the Routes component */}
      <Routes>
        {/* Define the route for the main page, which renders the RecipesList component */}
        <Route path="/" element={<RecipesList />} />
        {/* Define the route for the recipe detail page, which renders the RecipeDetail component */}
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
