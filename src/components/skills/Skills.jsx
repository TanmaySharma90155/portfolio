import React from "react";
import "./skills.css";

const Skills = () => {
    return (
        <section id = "skills">
            <div className="skill__container">
                <h2 className="section__title" style = {{marginLeft: '10.1rem', marginBottom: '2rem'}}>Skills</h2>
                <h3 style = {{marginLeft: '10.1rem'}}>Technical Skills :</h3>
                <div>
                    
                    <span className="skill__box" style={{marginLeft: '10.1rem'}}>C</span>
                    <span className="skill__box">Java</span>
                    <span className="skill__box">Python</span>
                    <span className="skill__box">HTML</span>
                    <span className="skill__box">CSS</span>
                    <span className="skill__box">JavaScript</span>
                    <span className="skill__box">React JS</span>
                    <span className="skill__box">SQL</span>

                </div>
                    <h3 style = {{marginLeft: '10.1rem', marginTop: '1rem'}}>Developer Tools :</h3>
                <div>
                    
                    <span className="skill__box" style={{marginLeft: '10.1rem'}}>VS Code</span>
                    <span className="skill__box">AWS</span>
                    <span className="skill__box">Power BI</span>
                    <span className="skill__box">Adobe Premiere Pro</span>
                    <span className="skill__box">Microsoft Clipchamp</span>
                    <span className="skill__box">Jupyter Notebook</span>
                    <span className="skill__box">Git</span>
                    <span className="skill__box">Github</span>
                    






                </div>   
            </div>

        </section>
    )
}

export default Skills;