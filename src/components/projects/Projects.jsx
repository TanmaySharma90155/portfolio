import React from "react";
import "./projects.css";

const Projects = () => {
    return (
        <section id = "projects">
            <h2 className="section__title" style = {{marginLeft: "10.1rem", marginTop: "2rem"}}>My Projects</h2>
            <div className="projects__container grid">
                <div className="projects__box">
                    <div>
                        <div className="video__container">
                                <img src="final_teaser.gif"/>
                                <div className="title">
                                     <h3 className="projects__title">Fake Review Detector</h3>
                                </div>

                                <div className="projects__content">
                                    <span>Developed a machine learning model with 85.74% accuracy to analyze e-commerce reviews for fraud detection, utilizing NLP techniques on 40,000+ reviews. Created a user-friendly Google Chrome extension for easy access to the model.</span></div>          
                                    <div className="link"> <a style={{color: 'black'}} href="https://github.com/TanmaySharma90155/Fake-Review-Detection"><span>Github</span> </a></div>             
                         </div>
                     </div>
                </div>
                <div className="projects__box">
                    <div>
                        <div className="video__container">
                                <img src="Recording_2025-02-25_160604.gif" />
                                            <div className="title">
                                                <h3 className="projects__title">Sales Forecasting Dashboard</h3>
                                            </div>


                                    <div className="projects__content">
                                 <span>Utilized time-series analysis alongside data cleaning and analytics to create interactive dashboards for a US supermarket chain, analyzing over 100,000 retail transactions. Designed a responsive interface to improve user experience across various devices.</span></div>
                                 <div className="link"><a style={{color: 'black'}} href="https://github.com/TanmaySharma90155/Dashboard"><span>Github</span></a></div>
                                      
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}   

export default Projects;