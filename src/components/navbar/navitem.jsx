import React, { useRef } from "react";
import useAnimeHover from "../../hooks/useAnimeHover";
import styles from "../../styles/navbar.module.css";

export default function NavItem({ label }) {
    const ref = useRef(null);
    useAnimeHover(ref);

    return (
        <div ref={ref} className={styles.navItem}>
            <span className={styles.text}>{label}</span>
            <span className={`${styles.bg} bg`}></span>
        </div>
    );
}