import React from "react";
import "../styles/pageBanner.css";

function PageBanner({ tag, title, subtitle }) {
  return (
    <section className="page-banner">
      <div className="page-banner-deco deco-left"></div>
      <div className="page-banner-deco deco-right"></div>

      <div className="page-banner-container">
        <p className="page-banner-tag">{tag}</p>
        <h1 className="page-banner-title">{title}</h1>
        <p className="page-banner-subtitle">{subtitle}</p>
      </div>
    </section>
  );
}

export default PageBanner;