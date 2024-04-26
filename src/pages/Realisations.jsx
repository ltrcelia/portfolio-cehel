import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Realisations = () => {
  return (
    <div>
      <Navigation />
      <h1>Mes réalisations.</h1>
      <ul>
        <li>Design de marque</li>
        <li>Motion Design</li>
        <li>Web design & site web</li>
        <li>Voir tout</li>
      </ul>
      <Footer />
    </div>
  );
};

export default Realisations;
