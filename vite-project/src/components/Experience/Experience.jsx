import React from "react";
import skills from '../../data/skills.json';
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css";


export const Experience = () => {
    return <section className={styles.container} id="experience" >  
    <h2 className = {styles.title}>Skills & Certifications</h2>
    <div className = {styles.content}>
        <div className = {styles.skills}>{
            skills.map((skill, id) => {
                return <div key ={id} className={styles.skill}>
                 <div className={styles.skillImageContainer}>
                 <img src  = {getImageUrl(skill.imageSrc)} alt = {skill.title} /> 
                 </div>
                    <p>{skill.title}</p>
                </div>
            })
        }</div>
        <ul className={styles.history}>
        {
            history.map((historyItem, id) => {
                return <li key={id} className={styles.historyItem}>
                    <div className={styles.historyItemDetails}>
                        <h3>{`${historyItem.title}`}</h3>
                        <p>{`${historyItem.description}`}</p>
                    </div>
                </li>
            })
        }

        </ul>
    </div>
    </section>
};