import React, { useState } from "react";
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
          className={`btn-pink ${categorieActive === "all" ? "active" : ""}`}
          onClick={() => filtrerRealisations("all")}
        >
          Tous
        </button>
        <button
          className={`btn-pink ${
            categorieActive === "design graphique" ? "active" : ""
          }`}
          onClick={() => filtrerRealisations("design graphique")}
        >
          Design graphique
        </button>
        <button
          className={`btn-pink ${
            categorieActive === "motion design" ? "active" : ""
          }`}
          onClick={() => filtrerRealisations("motion design")}
        >
          Motion design
        </button>
        <button
          className={`btn-pink ${
            categorieActive === "web design" ? "active" : ""
          }`}
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
            <div className="realisation">
              <img
                src={projet.imagePrincipale}
                alt="Images"
                className="bloc"
              ></img>
              <h3>{projet.titreDuProjet}</h3>
              <p>{projet.texteRapide}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Realisations;
