import React from "react";
import { NavLink } from "react-router-dom";
import { UilInstagram } from "@iconscout/react-unicons";
import { UilLinkedin } from "@iconscout/react-unicons";

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
        <a
          href="https://www.instagram.com/cecexsketches/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <UilInstagram />
        </a>
        <span>|</span>
        <a
          href="https://www.linkedin.com/in/celia-letellier-graphiste-freelance/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <UilLinkedin />
        </a>
      </ul>
    </div>
  );
};

export default Footer;
