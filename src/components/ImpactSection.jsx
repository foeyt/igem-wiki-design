import React from "react";
import "../styles/impact.css";

function ImpactSection() {
  return (
    <section className="impact-section" id="impact">
      <div className="impact-container">
        <div className="section-heading">
          <p className="section-tag blue-tag">Why It Matters</p>
          <h2>From soil health to future resilience</h2>
          <p className="section-intro">
            Our project is not only about solving a scientific problem. It is also
            about building a connection between biology, environment, agriculture,
            and long-term sustainability.
          </p>
        </div>

        <div className="impact-grid">
          <div className="impact-box large-box">
            <h3>For Agriculture</h3>
            <p>
              Healthier soil supports stronger crops, better productivity, and
              more stable farming systems.
            </p>
          </div>

          <div className="impact-box">
            <h3>For Environment</h3>
            <p>
              Better soil management can contribute to ecological balance and
              reduced environmental stress.
            </p>
          </div>

          <div className="impact-box">
            <h3>For Society</h3>
            <p>
              Sustainable soil solutions matter for food security, public health,
              and future generations.
            </p>
          </div>

          <div className="impact-box wide-box">
            <h3>For the Future</h3>
            <p>
              We hope to present a project that is scientifically meaningful,
              visually engaging, and socially responsible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImpactSection;