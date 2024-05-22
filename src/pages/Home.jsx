import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HeroHeader from "../components/HeroHeader";
import Realisations from "../components/Realisations";
import EcranAccueil from "../components/EcranAccueil";
import APropos from "../components/APropos";
import Competences from "../components/Competences";
import petiteStars from "../assets/img/petite-stars.png";
import EncartContact from "../components/EncartContact";
import stars from "../assets/img/stars.png";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const timerId = setInterval(() => {
      const dx = (mousePosition.x - followerPosition.x) * 0.1;
      const dy = (mousePosition.y - followerPosition.y) * 0.1;
      setFollowerPosition((prevPosition) => ({
        x: prevPosition.x + dx,
        y: prevPosition.y + dy,
      }));
    }, 5);

    return () => {
      clearInterval(timerId);
    };
  }, [mousePosition, followerPosition]);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    }
  }, [location]);

  const [hasShownEcranAccueil, setHasShownEcranAccueil] = useState(false);
  useEffect(() => {
    const shown = localStorage.getItem("hasShownEcranAccueil");
    if (!shown) {
      setHasShownEcranAccueil(true);
      localStorage.setItem("hasShownEcranAccueil", "true");
    }
  }, []);

  return (
    <div>
      <div
        className="mouse"
        style={{
          position: "fixed",
          left: followerPosition.x,
          top: followerPosition.y,
        }}
      >
        <img src={stars} alt="Etoiles" className="star" />
      </div>

      {hasShownEcranAccueil && <EcranAccueil />}

      <div id="home-link" className="home">
        <HeroHeader />
        <div className="stars">
          <img src={stars} alt="Etoiles" className="star" />
        </div>
        <div id="realisations-link">
          <Realisations />
        </div>
        <div className="stars">
          <img src={stars} alt="Etoiles" className="star" />
        </div>
        <Competences />
        <div className="stars">
          <img src={stars} alt="Etoiles" className="star" />
        </div>
        <div id="a-propos-link">
          <APropos />
        </div>
        <div className="stars">
          <img src={stars} alt="Etoiles" className="star" />
        </div>
      </div>
      <EncartContact />
      <div className="a-bientot">
        <p>à bientôt !</p>
        <img src={petiteStars} alt="Etoiles" className="star" />
      </div>
    </div>
  );
};

export default Home;
