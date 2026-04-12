import React from "react";
import "../styles/sideCard.css";

function SideCard({ title, items }) {
  return (
    <div className="side-card">
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SideCard;