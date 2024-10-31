import React from "react";

import styles from "./About.module.css";

import { getImageUrl } from "./utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About Me</h2>
            <div className={styles.about}>
            <p>
                I am studying web development and will graduate from Create
                Career College which prepares students for real-life work
                experience to develop high-demand workplace skills upon academic
                training.
            </p>
            <p>
                I am very passionate about improving my coding skills &
                developing applications & websites.
            </p>
            </div>
            <div className={styles.content}>
                <img className={styles.aboutImg} src={getImageUrl("myAvatar2.svg")} alt="image of me"></img>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("front-end.png")} alt="font end icon"></img>
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>
                                I’m a front-end developer with experience in
                                building responsive and optimized sites.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("back-end.png")} alt="back end icon"></img>
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>
                                I have experience developing optimised back-end
                                systems and APIs.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("ui.png")} alt="ui icon"></img>
                        <div className={styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>I have designed multiple landing pages.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};
