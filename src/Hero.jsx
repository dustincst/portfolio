import React from "react";

import styles from "./Hero.module.css";

import { getImageUrl } from "./utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Dustin.</h1>
                <p className={styles.description}>I’m a Frontend Development and Web Designer.</p>
                <a  className={styles.contactBtn} href="mailto:cst.dustin@gmail.com">Contact Me</a>
            </div>
            <img className={styles.myAvatarImg} src={getImageUrl("myAvatar.png")} alt="image of me"></img>
        </section>
    );
};
