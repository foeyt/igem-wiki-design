import React from "react";
import "../styles/problem.css";

function ProblemSection() {
  return (
    <section className="problem-section" id="problem">
      <div className="problem-container">
        <div className="section-heading">
          <p className="section-tag">The Problem</p>
          <h2>Soil is under pressure</h2>
          <p className="section-intro">
            Healthy soil is the foundation of food systems and ecosystems, yet it
            is increasingly threatened by pollution, degradation, and imbalance.
          </p>
        </div>

        <div className="problem-grid">
          <div className="problem-card">
            <div className="problem-icon">01</div>
            <h3>Pollution</h3>
            <p>
              Heavy metals, agricultural chemicals, and industrial waste can
              accumulate in soil and reduce its safety and fertility.
            </p>
          </div>

          <div className="problem-card">
            <div className="problem-icon">02</div>
            <h3>Degradation</h3>
            <p>
              Erosion, nutrient loss, and overuse make soil less productive and
              less capable of supporting resilient agriculture.
            </p>
          </div>

          <div className="problem-card">
            <div className="problem-icon">03</div>
            <h3>Microbial Imbalance</h3>
            <p>
              Soil is a living community. When microbial balance is disrupted,
              ecosystem functions and plant health may also be affected.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;