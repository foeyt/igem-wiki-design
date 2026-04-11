import React from "react";
import "../styles/contentSection.css";

function ContentSection({ title, text, reverse = false, children }) {
  return (
    <section className="content-section">
      <div className={`content-section-container ${reverse ? "reverse" : ""}`}>
        <div className="content-text-block">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>

        <div className="content-visual-block">
          {children}
        </div>
      </div>
    </section>
  );
}

export default ContentSection;