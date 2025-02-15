import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
    <section className = {styles.container} > 
            <div className = {styles.content}> 
            <h1 className = {styles.title}>Hi, I'm Rich</h1>
            <p className = {styles.description}>I'm a 3rd Year BSIT Student. Hire me for your 
                Web Development and Designing needs.</p>    
            <a href = "richellevillanueva.1234@gmail.com" className = {styles.contactBtn}>Contact Me</a>
            </div>
                <img src = {getImageUrl("girl.png")} 
                alt = "Image me" 
                className = {styles.heroImg}
                />    
                <div className = {styles.topBlur} />   
                <div className = {styles.bottomBlur} />
        </section>
    );
};