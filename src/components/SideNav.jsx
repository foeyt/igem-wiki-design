import React from "react";
import "../styles/sideNav.css";

function SideNav({ title = "TABLE OF CONTENTS", items = [] }) {
  return (
    <aside className="side-nav">
      <h3 className="side-nav-title">{title}</h3>
      <div className="side-nav-line"></div>

      <ul className="side-nav-list">
        {items.map((item) => (
          <li key={item.id} className="side-nav-item">
            <a href={`#${item.id}`} className="side-nav-link">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default SideNav;