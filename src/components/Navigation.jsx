import React from "react";
import logo from "../assets/img/logo.svg";

const Navigation = () => {
  return (
    <div id="navigation">
      <div className="navigation">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
        <ul className="liens-nav">
          <a href="/" className="a-link">
            <li>accueil.</li>
          </a>

          <a href="/#realisations">
            <li>réalisations.</li>
          </a>

          <a href="/#a-propos">
            <li>à propos.</li>
          </a>

          <a href="mailto:celia.letellier@gmail.com">
            <li className="contact-box">contact.</li>
          </a>
        </ul>
      </div>

      <div id="btn" className="btn-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="menu-burger">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
        <ul className="liens-nav">
          <a href="/" >
            <li className="link-border">accueil.</li>
          </a>
          <a href="/#realisations">
            <li className="link-border">réalisations.</li>
          </a>
          <a href="/#a-propos">
            <li className="link-border">à propos.</li>
          </a>
          <a href="mailto:celia.letellier@gmail.com">
            <li className="contact-box">contact.</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
