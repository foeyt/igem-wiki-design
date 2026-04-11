import React from "react";
import "../styles/hero.css";

function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-background-shape hero-shape-1"></div>
      <div className="hero-background-shape hero-shape-2"></div>
      <div className="hero-background-shape hero-shape-3"></div>

      <div className="hero-container">
        <div className="hero-left">
          <p className="hero-tag">iGEM 2025 · Soil Project</p>

          <h1 className="hero-title">
            Reconnect with
            <br />
            the Living Soil
          </h1>

          <p className="hero-description">
            Soil is more than dirt. It is a living system that supports crops,
            ecosystems, and human health. Our project aims to explore a brighter,
            smarter, and more sustainable future for soil.
          </p>

          <div className="hero-buttons">
            <a href="#problem" className="hero-btn primary-btn">
              Explore Our Story
            </a>
            <a href="#solution" className="hero-btn secondary-btn">
              View Solution
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-visual-card">
            <div className="soil-layer soil-layer-1"></div>
            <div className="soil-layer soil-layer-2"></div>
            <div className="soil-layer soil-layer-3"></div>

            <div className="plant-stem"></div>
            <div className="plant-leaf leaf-left"></div>
            <div className="plant-leaf leaf-right"></div>

            <div className="root root-1"></div>
            <div className="root root-2"></div>
            <div className="root root-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;