import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
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

  return (
    <div className="main">
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

      <EcranAccueil />
      <Navigation />

      <div className="home">
        <HeroHeader />
        <div className="stars">
          <img src={stars} alt="Etoiles" className="star" />
        </div>
        <Realisations />
        <div className="stars">
          <img src={stars} alt="Etoiles" className="star" />
        </div>
        <Competences />
        <div className="stars">
          <img src={stars} alt="Etoiles" className="star" />
        </div>
        <APropos />
        <div className="stars">
          <img src={stars} alt="Etoiles" className="star" />
        </div>
      </div>
      <EncartContact />
      <div className="a-bientot">
        <p>à bientôt !</p>
        <img src={petiteStars} alt="Etoiles" className="star" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
