import React from "react";
import './Resume.css';
import "./jjresume1024_1.jpg"

function Resume() {
  return (
    <div id="resume">
      <header>
      <h1 id="resume-title">Resume</h1>
      <div id="resume-pic">
        <img 
          id="resume-img"
          src={require("./jjresume1024_1.jpg")} 
          alt="logo" 
        />
    </div>
      </header>
    </div>
  );
}

export default Resume;