import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RealisationPage from "./pages/RealisationPage";
import Realisations from "./components/Realisations";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/realisations/*" element={<Realisations />} />
        <Route
          path="/realisation/:titreDuProjet"
          element={<RealisationPage />}
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
