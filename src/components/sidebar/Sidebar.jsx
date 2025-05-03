import React from "react";
import "./sidebar.css";



const Sidebar = () => {
    return (
        <aside className="aside">
            

            <nav className="nav">
                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href= "#home" className="nav__link">
                                <i className="icon-home"></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href= "#about" className="nav__link">
                                <i className="icon-user"></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href= "#projects" className="nav__link">
                                <i className="icon-layers"></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href= "#work" className="nav__link">
                                <i className="icon-briefcase"></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href= "#skills" className="nav__link">
                                <i className="icon-graduation"></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href= "#contact" className="nav__link">
                                <i className="icon-bubbles"></i>
                            </a>
                        </li>
                    </ul>       
                </div>

            </nav>
        </aside>
    )
}

export default Sidebar;