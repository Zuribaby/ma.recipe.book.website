import React from "react";
import logo from "../images/logo.png";
import "../css/Header.css";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <h1>My Website Header</h1>
    </header>
  );
}

export default Header;
