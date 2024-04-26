import React from "react";
import logo from "../assets/img/logo-blanc.svg";
import starsEntree from "../assets/img/stars-entree.png";
import scrollez from "../assets/img/scrollez.png";

const EcranAccueil = () => {
  return (
    <div className="ecran-accueil">
      <img src={logo} alt="" className="logo" />
      <img src={starsEntree} alt="" className="stars-entree" />
      <div className="scrollez-container">
        <img src={scrollez} alt="" className="scrollez" />
        <p>Scrollez</p>
      </div>
    </div>
  );
};

export default EcranAccueil;
