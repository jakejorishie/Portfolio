import React from "react";
import { Link } from "react-router-dom"
import './Navbar.css';

function Navbar() {
  return (
    <div id="navbar">
        <div id="nav-title">
        <h1 id ="nav-title">Jacob Jorishie Portfolio</h1>
        </div>
        <div id="nav-pic">
        <img 
          id="nav-img"
          src={require("./1676915531254.jpeg")} 
          alt="logo" 
        />
    </div>
        <div>
        <div id="nav-links">
          <div id="nav-box">
          <span>
            <Link to ="/home">Home</Link>
          </span>
          <span>
          <Link to="/projects">Projects</Link>
          </span>
          <span>
            <Link to="/resume">Resume</Link>
            </span>
            </div>
            </div>
        </div>
    </div>
  );
}

export default Navbar;