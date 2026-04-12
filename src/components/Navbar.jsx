import React from "react";
import { NavLink } from "react-router-dom";
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
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/description">Description</NavLink>
          <NavLink to="/project">Project</NavLink>
          <NavLink to="/wetlab">WetLab</NavLink>
          <NavLink to="/team">Team</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;