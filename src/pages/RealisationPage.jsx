import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { realisationsList } from "../components/RealisationsList";
import EncartContact from "../components/EncartContact";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import DesignProjet from "../pages/DesignProjet";
import MotionProjet from "../pages/MotionProjet";
import WebProjet from "../pages/WebProjet";

const RealisationPage = () => {
  const { titreDuProjet } = useParams();
  const projet = realisationsList.find(
    (projet) =>
      projet.titreDuProjet ===
      decodeURIComponent(titreDuProjet.replace(/-/g, " "))
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!projet) {
    return <div>Projet non trouvé</div>;
  }

  let projetComponent;
  switch (projet.categorie) {
    case "design graphique":
      projetComponent = <DesignProjet projet={projet} />;
      break;
    case "motion design":
      projetComponent = <MotionProjet projet={projet} />;
      break;
    case "web design":
      projetComponent = <WebProjet projet={projet} />;
      break;
    default:
      projetComponent = <div>Catégorie de projet non prise en charge</div>;
  }

  return (
    <div>
      <Navigation />
      <div id="realisation-page">{projetComponent}</div>
      <EncartContact />
      <Footer />
    </div>
  );
};

export default RealisationPage;
