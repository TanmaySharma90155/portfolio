import React from "react";
import "./about.css";
import Image from "../../assets/pic2.png";
import Aboutbox from "./Aboutbox";

const About = () => {

    return (
    <section className="about container section" id = "about">
        <h2 style = {{marginLeft: '4.1rem'}} className="section__title">About</h2>

        <div className="about__container grid">
            <img style = {{marginLeft: '5rem', marginTop: '1.5rem' , width: '175px', height: '175px'}} src = {Image} alt = "" className="about__img"/>

            <div className="about__data grid">
                <div className="about__info">
                    <p className="about__description">Hello, My name is Tanmay Sharma. I develop machine learning models and data analytics projects. I have a good knowledge of Web Development and specialize in Front-End Development. I have leadership abilities which have helped me throughout my college life.</p>
                    <a href = "https://drive.google.com/file/d/1-0Ik6hDs8HwfjK4oEf0CROrXkP0OG2hW/view?usp=drive_link" className="btn">Download Resume</a> 
                </div>
            </div>
        </div>
        <Aboutbox />
    </section>
    )
}

export default About;