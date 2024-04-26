import React from "react";
import photoProfil from "../assets/img/photo-profil.png";
import stars from "../assets/img/stars.png";

const HeroHeader = () => {
  return (
    <div>
      <div className="hero-header">
        <div className="text-header">
          <h1>
            Hello, je suis Célia, <span>designer de marque</span>, bienvenue sur
            mon <span>portfolio de création web & print</span>. 🌈
          </h1>
          <div className="btn-home">
            <button className="btn-red">
              <a href="#realisations">Découvrez mes réalisations.</a>
            </button>
            <button className="btn-pink">
              <a href="#competences">Découvrez mes compétences.</a>
            </button>
          </div>
        </div>
        <img src={photoProfil} alt="" style={{ width: "360px" }} />
      </div>
      <div className="banniere-more">
        <h3>Créative | Autonome | Polyvalente</h3>
        <button className="btn-red">
          <a href="#a-propos">En savoir plus sur moi.</a>
        </button>
      </div>
      <div className="stars">
        <img src={stars} alt="Etoiles" className="star" />
      </div>
    </div>
  );
};

export default HeroHeader;
