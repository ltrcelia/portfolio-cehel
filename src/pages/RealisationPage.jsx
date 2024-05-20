import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { realisationsList } from "../components/RealisationsList";
import EncartContact from "../components/EncartContact";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import stars from "../assets/img/stars.png";
import arrowPrev from "../assets/img/arrow-prev.png";
import arrowNext from "../assets/img/arrow-next.png";

const RealisationPage = () => {
  const { titreDuProjet } = useParams();
  const [isMuted, setIsMuted] = useState(true);
  const currentRealIndex = realisationsList.findIndex(
    (projet) =>
      projet.titreDuProjet ===
      decodeURIComponent(titreDuProjet.replace(/-/g, " "))
  );

  const projet = realisationsList[currentRealIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  if (!projet) {
    return <div>Projet non trouvé</div>;
  }

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handlePrevClick = () => {
    if (currentRealIndex > 0) {
      const prevIndex = currentRealIndex - 1;
      const prevProjectTitle = realisationsList[
        prevIndex
      ].titreDuProjet.replace(/ /g, "-");
      window.location.href = `/realisation/${prevProjectTitle}`;
    }
  };

  const handleNextClick = () => {
    if (currentRealIndex < realisationsList.length - 1) {
      const nextIndex = currentRealIndex + 1;
      const nextProjectTitle = realisationsList[
        nextIndex
      ].titreDuProjet.replace(/ /g, "-");
      window.location.href = `/realisation/${nextProjectTitle}`;
    }
  };

  return (
    <div>
      <Navigation />
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
      <div id="realisation-page">
        <h1>{projet.titreDuProjet}</h1>

        <div className="infos">
          <p>{projet.annee}</p>
          <p>{projet.client}</p>
          <p>{projet.theme}</p>
          <p>{projet.categorie}</p>
        </div>
        {projet.image && (
          <div className="premier-bloc">
            <img src={projet.image} alt="" />
          </div>
        )}
        {projet.video && (
          <div className="bloc-video">
            <button onClick={toggleMute} className="btn-red">
              {isMuted ? "Activer le son" : "Désactiver le son"}
            </button>
            <video src={projet.video} autoPlay muted={isMuted} loop />
          </div>
        )}

        <div className="stars">
          <img src={stars} alt="Etoiles" className="star" />
        </div>

        <div className="images-secondaires">
          <img src={projet.imagesSecondaires} alt="" />
          <img src={projet.imagesSecondaires} alt="" />
          <img src={projet.imagesSecondaires} alt="" />
        </div>

        <div className="deuxieme-bloc">
          <div className="texte-explication">
            <h2>explication.</h2>
            <p>{projet.explication}</p>
          </div>
          <div className="texte-processus">
            <h2>processus.</h2>
            <p>{projet.processus}</p>
          </div>
          <div className="texte-enjeux">
            <h2>enjeux.</h2>
            <p>{projet.enjeux}</p>
          </div>
        </div>

        <div className="stars">
          <img src={stars} alt="Etoiles" className="star" />
        </div>

        <div className="fleches">
          <div className="arrow-prev flex" onClick={handlePrevClick}>
            <img src={arrowPrev} alt="" />
          </div>
          <div className="arrow-next flex" onClick={handleNextClick}>
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
