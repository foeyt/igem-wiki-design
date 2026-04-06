import React from "react";
import styles from "../../styles/navbar.module.css";
import { PUBLIC_URL } from "../../common/variables";
import NavItem from "./navitem";
import Dropdown from "./dropdown";

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            {/* LOGO */}
            <div className={styles.logo}>
                <img src={PUBLIC_URL.LOGO_IMG} alt="logo" />
            </div>

            {/* 菜单 */}
            <div className={styles.menu}>
                <NavItem label="XXX" />

                <Dropdown>
                    <NavItem label="XXX" />
                    <div>YYY</div>
                </Dropdown>

                <NavItem label="XXX" />

                <Dropdown>
                    <NavItem label="XXX" />
                    <div>YYY</div>
                </Dropdown>

                <NavItem label="XXX" />
                <NavItem label="XXX" />
            </div>

            {/* 波浪线 */}
            <div className={styles.wave}></div>
        </div>
    );
}