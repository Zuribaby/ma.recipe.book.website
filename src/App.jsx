import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipesList from "./components/RecipesList";
import RecipeDetail from "./components/RecipeDetail";
import "./css/App.css";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipesList />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
