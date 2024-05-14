import React from "react";
import stars from "../assets/img/stars.png";
import arrowPrev from "../assets/img/arrow-prev.png";
import arrowNext from "../assets/img/arrow-next.png";
import { useParams } from "react-router-dom";
import { realisationsList } from "../components/RealisationsList";
import EncartContact from "../components/EncartContact";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const RealisationPage = () => {
  const { titreDuProjet } = useParams();
  const projet = realisationsList.find(
    (projet) =>
      projet.titreDuProjet ===
      decodeURIComponent(titreDuProjet.replace(/-/g, " "))
  );

  if (!projet) {
    return <div>Projet non trouvé</div>;
  }
  return (
    <div>
      <Navigation />
      <div id="realisation-page">
        <h1>{projet.titreDuProjet}</h1>

        <div className="infos">
          <p>{projet.annee}</p>
          <p>{projet.client}</p>
          <p>{projet.theme}</p>
          <p>{projet.categorie}</p>
        </div>

        <div className="premier-bloc">
          <img src={projet.imagePrincipale} alt="" />
          <div className="texte-explication">
            <h2>explication.</h2>
            <p>{projet.explication}</p>
          </div>
        </div>

        <div className="stars">
          <img src={stars} alt="Etoiles" className="star" />
        </div>

        <div className="deuxieme-bloc">
          <div className="texte-processus">
            <h2>processus.</h2>
            <p>{projet.processus}</p>
          </div>
          <div className="texte-enjeux">
            <h2>enjeux.</h2>
            <p>{projet.enjeux}</p>
          </div>
        </div>

        <div className="images-secondaires">
          <img src={projet.imagesSecondaires} alt="" />
          <img src={projet.imagesSecondaires} alt="" />
          <img src={projet.imagesSecondaires} alt="" />
          <img src={projet.imagesSecondaires} alt="" />
        </div>

        <div className="fleches">
          <div className="arrow-prev flex">
            <img src={arrowPrev} alt="" />
            <p>projet précédent.</p>
          </div>
          <div className="arrow-next flex">
            <p>projet précédent.</p>
            <img src={arrowNext} alt="" />
          </div>
        </div>
      </div>
      <EncartContact />
      <Footer />
    </div>
  );
};

export default RealisationPage;
