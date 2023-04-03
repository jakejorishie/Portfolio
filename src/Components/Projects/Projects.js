import React from "react";
import './Projects.css';

function Projects() {
  return (
    <div id="projects">
      <header>
        <div>
        <h1 id="projects-title">Projects</h1>
        <div id="project-box">
        <span>
        <a href="https://stalwart-horse-ff7b0d.netlify.app/" >
        <img src={require("./IMG_2893.jpg")} alt="Shopping Cart" className="projects-img"></img>
      </a>
      </span>
      <span>
        <p className="prj-titles">Cooper's Candles</p>
        <p className="prj-title">Technology</p>
        <p>REACT, Typescript, Bootstrap, HTML, CSS</p>
        <p className="prj-title">Description</p>
        <p>An online retail marketplace equipped with a functioning shopping cart that can be updated with different items in the inventory. </p>
        </span>
      </div>
      <div id="project-box">
      <span>
        <a href="https://main--gleaming-praline-8dbc11.netlify.app/" >
        <img src={require("./IMG_2841.jpg")} alt="Fitness Tracker" className="projects-img"></img>
      </a>
      </span>
      <span>
      <p className="prj-titles">Fitness Tracker</p>
        <p className="prj-title">Technology</p>
        <p>REACT, Javascript, HTML, CSS, Material UI, API, Postman</p>
        <p className="prj-title">Description</p>
        <p>Website allowing users to create fitness routines and track their progress.</p>
        </span>
      </div>
      <div id="project-box">
      <span>
        <a href="https://inspiring-tulumba-d0edc6.netlify.app/" >
        <img src={require("./IMG_art.jpg")} alt="Art Collector" className="projects-img"></img>
      </a>
      </span>
      <span>
      <p className="prj-titles">The Art Collector</p>
        <p className="prj-title">Technology</p>
        <p>REACT, Javascript, HTML, CSS, API </p>
        <p className="prj-title">Description</p>
        <p>A Front end search engine that provides information from the Harvard Museum of Art API. </p>
        </span>
      </div>
      <div id="project-box">
      <span>
        <a href="https://melodious-eclair-436376.netlify.app/" >
        <img src={require("./IMG_2835.jpg")} alt="Strangers Things" className="projects-img"></img>
      </a>
      </span>
      <span>
      <p className="prj-titles">Stranger's Things</p>
        <p className="prj-title">Technology</p>
        <p>REACT, Javascript, HTML, CSS, API</p>
        <p className="prj-title">Description</p>
        <p>Online marketplace allowing users to buy and sell personal items, and message with other users.</p>
        </span>
      </div>
      </div>
      </header>
    </div>
  );
}

export default Projects;

