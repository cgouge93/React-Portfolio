import React from "react"
import avatar from "../img/avatar.jpg"
import {NavLink} from "react-router-dom"
import "../styles/_navbar.scss"

function Navbar() {
    return (
        <div className="Navbar">
            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt=""/>
                </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolio" exact activeClassName="active">
                            Portfolio
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <footer className="footer">
                <p>
                    @2021 Carly Gouge
                </p>
            </footer>
            </nav>
        </div>
    )
}

export default Navbar;