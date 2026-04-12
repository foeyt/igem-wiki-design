import React, { useState, useRef } from "react";
import { PUBLIC_URL } from "../../common/variables";
import styles from "../../styles/Navbar.module.css";

const MenuItem = ({ title, hasDropdown }) => {
  return (
    <div className={styles.navItem}>
      {/* 悬浮背景 */}
      <div className={styles.hoverBg}></div>
      
      <span>{title}</span>

      {/* 下拉部分 */}
      {hasDropdown && (
        <div className={styles.dropdown}>
          <div className={styles.dropdownItem}>YYY 1</div>
          <div className={styles.dropdownItem}>YYY 2</div>
          <div className={styles.dropdownItem}>YYY 3</div>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const menuLabels = [
    { name: "Home", drop: false },
    { name: "Project", drop: true },
    { name: "Wet Lab", drop: true },
    { name: "Dry Lab", drop: true },
    { name: "Human Practice", drop: false },
    { name: "Team", drop: true }
  ];

  return (
    <nav className={styles.navbar}>
      <img src={PUBLIC_URL.LOGO_IMG} alt="iGEM Logo" style={{ height: '75%', cursor: 'pointer' }} />
      <div style={{ display: 'flex', gap: '5px' }}>
        {menuLabels.map((item, index) => (
          <MenuItem key={index} title={item.name} hasDropdown={item.drop} />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
