import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer" id="team">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-circle">S</span>
              <span className="footer-logo-text">Soil iGEM</span>
            </div>
            <p className="footer-description">
              Building a brighter future from the ground up.  
              Our project focuses on soil, sustainability, and synthetic biology.
            </p>
          </div>

          <div className="footer-links-group">
            <div className="footer-column">
              <h4>Home</h4>
              <a href="#home">Hero</a>
              <a href="#problem">Problem</a>
              <a href="#solution">Solution</a>
              <a href="#impact">Impact</a>
            </div>

            <div className="footer-column">
              <h4>Pages</h4>
              <a href="#">Description</a>
              <a href="#">Project</a>
              <a href="#">Wet Lab</a>
              <a href="#">Team</a>
            </div>

            <div className="footer-column">
              <h4>Contact</h4>
              <p>USTC iGEM Team</p>
              <p>iGEM 2026</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Soil iGEM Team. All rights reserved.</p>
          <p>Designed for iGEM project.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;