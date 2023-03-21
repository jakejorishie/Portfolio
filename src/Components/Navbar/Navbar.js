import React from "react";
import { Link } from "react-router-dom"
import './Navbar.css';

function Navbar() {
  return (
    <div className="App">
      <header>
        <div id="nav-title">
        <h1>Jacob Jorishie Portfolio</h1>
        </div>
        <div id="nav-links">
          <span>
            <Link to ="/home">Home</Link>
          </span>
        </div>
      </header>
    </div>
  );
}

export default Navbar;