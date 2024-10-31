import React from "react";

import styles from "./Contact.module.css";

import { getImageUrl } from "./utils";

export const Contact = () => {
    return (
        <footer className={styles.container} id="contact">
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("email.png")} atl="Email icon"></img>
                    <a href="mailto:cst.dustin@gmail.com">
                        cst.dustin@gmail.com
                    </a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("linkedin.png")} atl="Linkedin icon"></img>
                    <a href="http://linkedin.com/in/dustincst">
                        linkedin.com/in/dustincst
                    </a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("github.png")} atl="Github icon"></img>
                    <a href="http://github.com/dustincst">
                        github.com/dustincst
                    </a>
                </li>
            </ul>
        </footer>
    );
};
