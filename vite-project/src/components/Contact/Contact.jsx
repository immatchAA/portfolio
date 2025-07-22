import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
    return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out! </p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
            <img src={getImageUrl("emailIcon.png")} alt="email icon"/>
            <a href="mailto:richellevillanueva.1234@gmail.com">richellevillanueva.1234@gmail.com</a>
            </li>

            <li className={styles.link}>
            <img src={getImageUrl("linkedinIcon.png")} alt="linkedin icon"/>
            <a href="https://www.linkedin.com/in/richelle-villanueva-a18b1525a/">linkedin.com/richelle-villanueva-a18b1525a/</a>
            </li>

            <li className={styles.link}>
            <img src={getImageUrl("githubIcon.png")} alt="github icon"/>
            <a href="https://github.com/immatchAA">github.com/immatchAA</a>
            </li>
        </ul>
    </footer>
    );
};