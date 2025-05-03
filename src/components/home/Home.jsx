import React from "react";
import "./home.css";
import Me from "../../assets/picofme.png";
import Headersocial from './Headersocial.jsx';
import Scrolldown from './Scrolldown.jsx';



const Home = () => {
    return (
        <section className="home container" id = "home">
            <div className="intro">
                <img style = {{width: '150px', height: '150px'}} src={Me} alt="" className="home__img" />
                <h1 className="home__name">Tanmay Sharma</h1>
                <span className="home__education">Software Developer</span>
                <Headersocial />

                <a href="#contact" className="btn">Hire Me</a>

                <Scrolldown />
            </div>
        </section>
    );
};

export default Home;