import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Description from "./pages/Description";
import Project from "./pages/Project";
import WetLab from "./pages/WetLab";
import Team from "./pages/Team";

import BackToTopButton from "./components/BackToTopButton";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/description" element={<Description />} />
        <Route path="/project" element={<Project />} />
        <Route path="/wetlab" element={<WetLab />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <BackToTopButton/>
      <Footer />
    </>
  );
}

export default App;
