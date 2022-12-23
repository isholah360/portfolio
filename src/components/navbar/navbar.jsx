import React from "react";
import './navbar.css'
import { Link } from "react-router-dom";
const Navbar = ()=>{
    return(
        <>
        <div>
            <div className="navbar">
                <ul>
                     <li><Link to="/">Home</Link></li>
                     <li><Link to="/Abouts">Abouts</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Resume">Resume</Link></li>
                    <li><Link to="/Portfolio">Portfolio</Link></li>
                    <li><Link to="/Blog">Blog</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Navbar;