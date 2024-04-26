import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="navigation-footer">
      <ul>
        <NavLink to="/">
          <li>accueil.</li>
        </NavLink>
        <span>|</span>
        <NavLink to="/realisations">
          <li>réalisations.</li>
        </NavLink>
        <span>|</span>
        <NavLink to="/a-propos">
          <li>à propos.</li>
        </NavLink>
        <span>|</span>
        <NavLink to="mailto:celia.letellier@gmail.com">
          <li>contact.</li>
        </NavLink>
        <span>|</span>
        <a href="https://www.instagram.com/cecexsketches/">Instagram</a>
        <span>|</span>
        <a href="https://www.linkedin.com/in/celia-letellier-graphiste-freelance/">
          Linkedin
        </a>
      </ul>
    </div>
  );
};

export default Footer;
