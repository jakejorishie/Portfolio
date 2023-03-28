import React from "react";
import './Projects.css';

function Projects() {
  return (
    <div>
      <header>
        <div>
        <h1 id="projects-title">Projects</h1>
        <div id="project-box">
        <span>
        <a href="https://melodious-eclair-436376.netlify.app/" >
        <img src={require("./IMG_2835.jpg")} alt="Strangers Things" className="projects-img"></img>
      </a>
      </span>
      <span>
        <p>Stranger's Things</p>
        <p>Type</p>
        <p>Front End</p>
        <p>Technology</p>
        <p>REACT, Javascript, HTML, CSS, API, Postman </p>
        <p>Description</p>
        <p>jkjlsjdjflkksld jlkdsjfsldjf lkj lsdkjf </p>
        </span>
      </div>
      <div id="project-box">
        <span>
        <a href="https://inspiring-tulumba-d0edc6.netlify.app/" >
        <img src={require("./IMG_art.jpg")} alt="Art Collector" className="projects-img"></img>
      </a>
      </span>
      <span>
      <p>The Art Collector</p>
        <p>Type</p>
        <p>Front End</p>
        <p>Technology</p>
        <p>REACT, Javascript, HTML, CSS, API, Postman</p>
        <p>Description</p>
        <p>jkjlsjdjflkksld jlkdsjfsldjf lkj lsdkjf </p>
        </span>
      </div>
      <div id="project-box">
        <span>
        <a href="https://main--gleaming-praline-8dbc11.netlify.app/" >
        <img src={require("./IMG_2841.jpg")} alt="Fitness Tracker" className="projects-img"></img>
      </a>
      </span>
      <span>
      <p>Fitness Tracker</p>
        <p>Type</p>
        <p>Front End</p>
        <p>Technology</p>
        <p>REACT, Javascript, HTML, CSS, Material UI, API, Postman</p>
        <p>Description</p>
        <p>jkjlsjdjflkksld jlkdsjfsldjf lkj lsdkjf </p>
        </span>
      </div>
      <div id="project-box">
        <span>
        <a href="https://melodious-eclair-436376.netlify.app/" >
        <img src={require("./IMG_2835.jpg")} alt="Strangers Things" className="projects-img"></img>
      </a>
      </span>
      <span>
      <p>Stranger's Things</p>
        <p>Type</p>
        <p>jkjlsjdjflkksld jlkdsjfsldjf lkj lsdkjf </p>
        <p>Technology</p>
        <p>jkjlsjdjflkksld jlkdsjfsldjf lkj lsdkjf </p>
        <p>Description</p>
        <p>jkjlsjdjflkksld jlkdsjfsldjf lkj lsdkjf </p>
        </span>
      </div>
      </div>
      </header>
    </div>
  );
}

export default Projects;