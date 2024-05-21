import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RealisationPage from "./pages/RealisationPage";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
// import Realisations from "./components/Realisations";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/realisations/*" element={<Realisations />} /> */}
        <Route
          path="/realisation/:titreDuProjet"
          element={<RealisationPage />}
        />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
