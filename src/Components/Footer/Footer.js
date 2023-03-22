import React from "react";
import './Footer.css';

function Footer() {
  return (
      <div id="footer">
          <span>
    <a href="https://www.linkedin.com/in/jacob-jorishie-8454b8214/" >
    <img src={require("./free-linkedin-icon-112-thumb.png")} alt="Linkedin" id="linkedin-img"></img>
  </a>
  </span>
  <span>
  <a href="https://github.com/jakejorishie" >
    <img src={require("./25231.png")} alt="Github" id="git-img"></img>
  </a>
  </span>
  </div>

  )
}

export default Footer;