import React from 'react'
import Logo from "../Assets/logo.jpg";
import {Link, NavLink} from "react-router-dom";
import "../Styling/Navbar.css"

const Navbar = () => {
    return (
    <nav>
        <div className="navbar">
            <div className="headings leftnav">
                <img className="logo" src={Logo} alt="logo"/>
                <Link to="/" className="custom_link">VIT Music Club</Link>
            </div>
            <div>
            <ul className="rightnav">
                <li><NavLink to="/registration">Registrations</NavLink></li>
                <li><NavLink to="/events">Events</NavLink></li>
                <li><NavLink to="/archive">Archive</NavLink></li>
                <li><NavLink to="/bands">Bands</NavLink></li>
                <li><NavLink to="/teams">Team</NavLink></li>
            </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar