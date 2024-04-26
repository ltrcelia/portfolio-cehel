import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.svg";

const Navigation = () => {
  return (
    <div className="navigation">
      <img src={logo} alt="Logo" />
      <ul>
        <NavLink to="/">
          <li>accueil.</li>
        </NavLink>
        <NavLink to="#realisations">
          <li>réalisations.</li>
        </NavLink>
        <NavLink to="#a-propos">
          <li>à propos.</li>
        </NavLink>
        <NavLink to="mailto:celia.letellier@gmail.com">
          <li className="contact-box">contact.</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
