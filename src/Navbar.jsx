import React, { useState } from "react";

import styles from "./Navbar.module.css";

import { getImageUrl } from "./utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            <div className={styles.logoPart}>
                <img className={styles.logo} src={getImageUrl("logo.png")} alt="logo"></img>
                <a className={styles.title} href="/">
                    Dustin
                </a>
            </div>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={menuOpen ? getImageUrl("close.png") : getImageUrl("menu.png")}
                    alt="menu button"
                    onClick={() => setMenuOpen(!menuOpen)}
                ></img>
                <ul
                    className={`${styles.menuItems} ${
                        menuOpen && styles.menuOpen
                    }`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#education">Education</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
