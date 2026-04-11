import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import ImpactSection from "./components/ImpactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ImpactSection />
      <Footer />
    </div>
  );
}

export default App;