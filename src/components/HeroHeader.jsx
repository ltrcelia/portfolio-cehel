import React from "react";
import photoProfil from "../assets/img/photo-profil.png";

const HeroHeader = () => {
  return (
    <div id="hero-header">
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
        <img src={photoProfil} alt="" />
      </div>
      <div className="banniere-more">
        <h3 className="h3-desktop">Créative | Autonome | Polyvalente</h3>
        <h3 className="h3-mobile">
          Créative <br /> Autonome <br /> Polyvalente
        </h3>
        <button className="btn-red">
          <a href="#a-propos">En savoir plus sur moi.</a>
        </button>
      </div>
    </div>
  );
};

export default HeroHeader;
