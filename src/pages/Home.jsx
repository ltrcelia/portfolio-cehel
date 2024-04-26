import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HeroHeader from "../components/HeroHeader";
import Realisations from "../components/Realisations";
import EcranAccueil from "../components/EcranAccueil";
import APropos from "../components/APropos";
import petiteStars from "../assets/img/petite-stars.png";

const Home = () => {
  return (
    <div>
      <EcranAccueil />
      <Navigation />

      <div className="home">
        <HeroHeader />
        <Realisations />
        <APropos />
        <div className="encart-contact">
          <h3>
            Envie de travailler avec moi ? <br />
            Laissez moi un message ✨
          </h3>
          <button
            className="btn-red"
            onClick={() =>
              (window.location.href = "mailto:celia.letellier@gmail.com")
            }
          >
            Contact.
          </button>
        </div>
        <div className="a-bientot">
          <p>à bientôt !</p>
          <img src={petiteStars} alt="Etoiles" className="star" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
