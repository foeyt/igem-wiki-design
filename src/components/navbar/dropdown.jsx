import React, { useRef, useState } from "react";
import styles from "../../styles/navbar.module.css";

export default function Dropdown({ children }) {
    const [visible, setVisible] = useState(false);
    const timeoutRef = useRef(null);

    const show = () => {
        clearTimeout(timeoutRef.current);
        setVisible(true);
    };

    const hide = () => {
        timeoutRef.current = setTimeout(() => {
            setVisible(false);
        }, 200);
    };

    return (
        <div
            className={styles.dropdownWrapper}
            onMouseEnter={show}
            onMouseLeave={hide}
        >
            {children[0]}

            {visible && (
                <div className={styles.dropdownMenu}>
                    {children[1] || "YYY"}
                </div>
            )}
        </div>
    );
}