import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
               I bring ideas to life. From structuring pages with HTML styling them with CSS, and adding interactivity with JavaScript and ReactJS,
               I love designing interfaces that are both beautiful and functional. I enjoy turning designs into fully working experiences on the web.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
               I've been learning to build powerful backend systems using Spring boot and manage data with MYSQL, turning classroom concepts into a real working applications.
               Every project is a chance to sharpen my skills, solve problems, and get one step close to becoming the developer I aim to be.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                An IT Student with a growing passion for UI design, I use figma for protyping and visual compositions. I'm building a foundation
                in design systems, layout structure, and user-friendly aesthetics.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};