import React from "react";
import stars from "../assets/img/stars.png";
import Competences from "./Competences";

const Realisations = () => {
  return (
    <div id="realisations">
      <h2>réalisations.</h2>
      <div className="categories">
        <button id="categorie-btn" className="btn-pink">
          Tous
        </button>
        <button id="categorie-btn" className="btn-pink">
          Design graphique
        </button>
        <button id="categorie-btn" className="btn-pink">
          Motion design
        </button>
        <button id="categorie-btn" className="btn-pink">
          Web design et site web
        </button>
      </div>
      <div className="realisations">
        <div className="realisation">
          <div className="bloc"></div>
          <h3>titre.</h3>
          <p>texte.</p>
        </div>
        <div className="realisation">
          <div className="bloc"></div>
          <h3>titre.</h3>
          <p>texte.</p>
        </div>
        <div className="realisation">
          <div className="bloc"></div>
          <h3>titre.</h3>
          <p>texte.</p>
        </div>
        <div className="realisation">
          <div className="bloc"></div>
          <h3>titre.</h3>
          <p>texte.</p>
        </div>
        <div className="realisation">
          <div className="bloc"></div>
          <h3>titre.</h3>
          <p>texte.</p>
        </div>
        <div className="realisation">
          <img
            src=""
            alt=""
            style={{
              width: "550px",
              height: "400px",
              backgroundColor: "#EEEEEE",
              borderRadius: "20px",
            }}
          />
          <h3>titre.</h3>
          <p>texte.</p>
        </div>
      </div>
      <div className="stars">
        <img src={stars} alt="Etoiles" className="star" />
      </div>
      <Competences />
    </div>
  );
};

export default Realisations;
