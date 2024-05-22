import React from "react";
import { Link } from "react-router-dom";
import { UilInstagram } from "@iconscout/react-unicons";
import { UilLinkedin } from "@iconscout/react-unicons";

const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <Link to="/">
          <li>accueil.</li>
        </Link>
        <span>|</span>
        <Link to="/#realisations">
          <li>réalisations.</li>
        </Link>
        <span>|</span>
        <Link to="/#a-propos">
          <li>à propos.</li>
        </Link>
        <span>|</span>
        <Link to="mailto:celia.letellier@gmail.com">
          <li>contact.</li>
        </Link>
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
