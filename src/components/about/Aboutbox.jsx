import React from "react";

import "./about.css";

const Aboutbox = () => {

    return(

        <div className="about__boxes grid">
            <div className="about__box">
                <i className="about__icon icon-organization"></i>
                    <div>
                        <h3 className="about__title">9</h3>
                        <span className="about__subtitle">Events Organized</span>
                    </div>

            </div>

            <div className="about__box">
                <i className="about__icon icon-energy"></i>
                    <div>
                        <h3 className="about__title">121</h3>
                        <span className="about__subtitle">Cans of Redbull</span>
                    </div>

            </div>

            <div className="about__box">
                <i className="about__icon icon-trophy"></i>
                    <div>
                        <h3 className="about__title">3</h3>
                        <span className="about__subtitle">Events Won</span>
                    </div>

            </div>

            <div className="about__box">
                <i style = {{fontSize: '35px'}} class="fa-solid fa-clipboard-check"></i>
                    <div>
                        <h3 className="about__title">8.13</h3>
                        <span className="about__subtitle">CGPA</span>
                    </div>

            </div>

        </div>



    )

}

export default Aboutbox;