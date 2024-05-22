import React, { useState, useEffect } from "react";
import logo from "../assets/img/logo-blanc.svg";
import starsEntree from "../assets/img/stars-entree.png";
import scrollez from "../assets/img/scrollez.png";

const EcranAccueil = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      if (!scrolling && window.scrollY > 0) {
        e.preventDefault();
        setScrolling(true);
        setTimeout(() => {
          document.querySelector(".ecran-accueil").classList.add("hidden");
        }, 1000);
        setTimeout(() => {
          document.querySelector(".fond-blanc").classList.add("hidden");
          window.scrollTo(0, 0);
        }, 300);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling]);

  return (
    <div>
      <div className={`ecran-accueil ${scrolling ? "hidden" : ""}`}>
        <div className="logo-container"></div>
        <img
          src={logo}
          alt="Logo céhel"
          className={`logo ${scrolling ? "scrolled" : ""}`}
        />
        <img
          src={starsEntree}
          alt="Etoiles"
          className={`stars-entree ${scrolling ? "scrolled" : ""}`}
        />
        <div className="scrollez-container">
          <img src={scrollez} alt="Scrollez" className="scrollez" />
          <p>Scrollez</p>
        </div>
      </div>
      <div className={`fond-blanc ${scrolling ? "scrolled" : ""}`}></div>
    </div>
  );
};

export default EcranAccueil;
