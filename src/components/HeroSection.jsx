import "../styles/hero.css";
import MoleScene from "./MoleScene";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Rolling To Start</h1>
        <p>Explore the underground story</p>
        <button>Start</button>
      </div>

      <MoleScene />
    </section>
  );
}

export default HeroSection;