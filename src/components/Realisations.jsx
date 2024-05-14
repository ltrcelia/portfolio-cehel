import React, { useState } from "react";
import stars from "../assets/img/stars.png";
import Competences from "./Competences";
import { realisationsList } from "./RealisationsList";
import { Link } from "react-router-dom";

const Realisations = () => {
  const [categorieActive, setCategorieActive] = useState("all");
  const filtrerRealisations = (categorie) => {
    setCategorieActive(categorie);
  };

  const realisationsFiltrees =
    categorieActive === "all"
      ? realisationsList
      : realisationsList.filter(
          (projet) => projet.categorie === categorieActive
        );

  return (
    <div id="realisations">
      <h2>réalisations.</h2>
      <div className="categories">
        <button
          className={categorieActive === "all" ? "btn-pink active" : "btn-pink"}
          onClick={() => filtrerRealisations("all")}
        >
          Tous
        </button>
        <button
          className={
            categorieActive === "design" ? "btn-pink active" : "btn-pink"
          }
          onClick={() => filtrerRealisations("design graphique")}
        >
          Design graphique
        </button>
        <button
          className={
            categorieActive === "motion" ? "btn-pink active" : "btn-pink"
          }
          onClick={() => filtrerRealisations("motion design")}
        >
          Motion design
        </button>
        <button
          className={categorieActive === "web" ? "btn-pink active" : "btn-pink"}
          onClick={() => filtrerRealisations("web design")}
        >
          Web design et site web
        </button>
      </div>
      <div className="realisations">
        {realisationsFiltrees.map((projet, index) => (
          <Link
            to={`/realisation/${encodeURIComponent(
              projet.titreDuProjet.replace(/\s+/g, "-")
            )}`}
            key={index}
          >
            {" "}
            <div className="realisation">
              <div className="bloc"></div>
              <h3>{projet.titreDuProjet}</h3>
              <p>{projet.texteRapide}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="stars">
        <img src={stars} alt="Etoiles" className="star" />
      </div>
      <Competences />
    </div>
  );
};

export default Realisations;
