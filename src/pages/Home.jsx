import React from "react";
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
  return (
    <div className="main">
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
