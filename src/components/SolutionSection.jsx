import React from "react";
import "../styles/solution.css";

function SolutionSection() {
  return (
    <section className="solution-section" id="solution">
      <div className="soft-divider top"></div>
      <div className="solution-leaf leaf-a"></div>
      <div className="solution-leaf leaf-b"></div>

      <div className="solution-container">
        <div className="solution-left">
          <p className="section-tag green-tag">Our Solution</p>
          <h2>A brighter approach to soil health</h2>
          <p className="solution-text">
            Our project focuses on understanding soil as a dynamic and living
            system. By combining synthetic biology with environmental insight, we
            hope to build a solution that is informative, practical, and
            sustainable.
          </p>

          <div className="solution-points">
            <div className="solution-point card-hover-lift">
              <span className="point-dot"></span>
              <div>
                <h4>Detect</h4>
                <p>Identify key soil conditions and signals with greater clarity.</p>
              </div>
            </div>

            <div className="solution-point card-hover-lift">
              <span className="point-dot"></span>
              <div>
                <h4>Respond</h4>
                <p>Design biological systems that can interact with soil challenges.</p>
              </div>
            </div>

            <div className="solution-point card-hover-lift">
              <span className="point-dot"></span>
              <div>
                <h4>Support Sustainability</h4>
                <p>Promote healthier ecosystems and more resilient agricultural futures.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="solution-right">
          <div className="solution-visual">
            <div className="solution-circle circle-1"></div>
            <div className="solution-circle circle-2"></div>
            <div className="solution-card small-card top-card card-hover-lift">
              <h4>Input</h4>
              <p>Soil data & environment</p>
            </div>
            <div className="solution-card big-card center-card card-hover-lift">
              <h3>Bio-inspired Soil System</h3>
              <p>
                A concept that links detection, analysis, and meaningful action.
              </p>
            </div>
            <div className="solution-card small-card bottom-card card-hover-lift">
              <h4>Output</h4>
              <p>Insight, balance, sustainability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolutionSection;