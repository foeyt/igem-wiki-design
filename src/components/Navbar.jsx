import React from "react";
import "../styles/navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-circle">S</span>
          <span className="logo-text">Soil iGEM</span>
        </div>

        <nav className="navbar-links">
          <a href="#home">Home</a>
          <a href="#problem">Problem</a>
          <a href="#solution">Solution</a>
          <a href="#impact">Impact</a>
          <a href="#team">Team</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;