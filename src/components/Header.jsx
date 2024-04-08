import React, { useState } from "react";
import "../css/Header.css";
import logo from "../images/logo.png"; // Assuming you have a logo image

function Header() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLogin = () => {
    try {
      // Validate username, email, and password
      if (!username || !email || !password) {
        throw new Error("Username, email, and password are required.");
      }
      if (username.length < 6 || password.length < 6) {
        throw new Error(
          "Username and password must be at least 6 characters long."
        );
      }
      if (!validateEmail(email)) {
        throw new Error("Please enter a valid email address.");
      }

      // Perform login logic here (e.g., send request to backend)

      // Reset form fields and errors
      setUsername("");
      setEmail("");
      setPassword("");
      setError("");
      setShowLoginForm(false);
    } catch (error) {
      setError(error.message);
    }
  };

  const validateEmail = (email) => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const closeLoginForm = () => {
    setShowLoginForm(false);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <span className="logo-name">ChiYamu's Cookbook</span>
      </div>
      <nav>
        <ul className="nav-list">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#recipeslist">Recipes</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <button onClick={toggleLoginForm}>Login</button>
          </li>
        </ul>
      </nav>
      {/* Use a conditional class to toggle the display of the form */}
      <div className={`form-overlay ${showLoginForm ? "show" : ""}`}>
        <button className="close-button" onClick={closeLoginForm}>
          X
        </button>
        <div className="form-box">
          <form>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="password-input" // Apply the CSS class
            />
            <button onClick={handleLogin}>Login</button>
          </form>
          {error && <p className="error">{error}</p>}
        </div>
      </div>
    </header>
  );
}

export default Header;
