import React from "react";
import "./work.css";
import Data from "./Data.jsx"
import Card from "./Card.jsx"

const Work = () => {
    return (
        <section id = "work">
            <h2 style = {{marginLeft: '10.1rem', marginBottom: '4rem'}} className="section__title">Education</h2> 

            <div style = {{marginLeft: '16.1rem', marginBottom : '4rem'}}className="resume__container">
                <div className="timeline grid">
                    {Data.map((val, id) => {
                        if(val.category === "experience") {
                            return (
                                <Card key={id} title={val.title} year = {val.year} desc={val.desc}/>
                            )
                        }
                    })}
                </div>
            </div>
        </section>
    )
}

export default Work;