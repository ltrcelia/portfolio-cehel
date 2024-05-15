import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HeroHeader from "../components/HeroHeader";
import Realisations from "../components/Realisations";
import EcranAccueil from "../components/EcranAccueil";
import APropos from "../components/APropos";
import petiteStars from "../assets/img/petite-stars.png";
import EncartContact from "../components/EncartContact";

const Home = () => {
  return (
    <div className="main">
      <EcranAccueil />
      <Navigation />

      <div className="home">
        <HeroHeader />
        <Realisations />
        <APropos />
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
