import React from "react";
import "./contact.css";

const Contact = () => {
    return (
        <section className="contact container section" id = "contact">
            <h2 style = {{marginLeft: '3.5rem'}}className="section__title">Get In Touch</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 style = {{marginLeft: '3.5rem'}} className="contact__title">Let's talk about everything</h3>
                    <p  style = {{marginLeft: '3.5rem'}}className="contact__details">Don't like Forms ? Send me an Email.</p>
                </div>
                <form action = "" className="contact__form">
                    <div className="contact__box">
                        <div className="contact__form-div">
                            <input style = {{width: '325px'}} type = "text" className="contact__form-input" placeholder="Insert your name"></input>
                        </div>

                        <div className="contact__form-div">
                            <input style = {{width: '325px'}} type = "text" className="contact__form-input" placeholder="Insert your email"></input>
                        </div>
                    </div>    
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input type = "text" className="contact__form-input" placeholder="Insert your subject"></input>
                        </div>

                        <div className="contact__form-div">
                           <textarea name="" id="" cols = "" rows = "" className="contact__form-input" placeholder="Write your message"></textarea>
                        </div>

                    </div>
                    <button className="btn">Send Message</button>
                    
                </form>
            </div>
        </section>
    )
}

export default Contact;