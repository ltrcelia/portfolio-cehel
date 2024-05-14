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
          <a href="/">
            <li>accueil.</li>
          </a>
          <li>
            <a href="/#realisations">réalisations.</a>
          </li>
          <li>
            <a href="/#a-propos">à propos.</a>
          </li>
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
          <a href="/">
            <li>accueil.</li>
          </a>
          <li>
            <a href="/#realisations">réalisations.</a>
          </li>
          <li>
            <a href="/#a-propos">à propos.</a>
          </li>
          <a href="mailto:celia.letellier@gmail.com">
            <li className="contact-box">contact.</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
