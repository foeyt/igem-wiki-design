import "../styles/hero.css";


function HeroSection() {
  return (
    <section className="hero">
      <section className="hero-section">
      {/* 背景氛围层 */}
      <div className="hero-bg"></div>   

      {/* 地上部分 */}
      <div className="surface-area">
        <div className="surface-decor leaf leaf-1"></div>    
        <div className="surface-decor leaf leaf-2"></div>
        <div className="surface-decor twig twig-1"></div>
        <div className="surface-decor twig twig-2"></div>

        <div className="hero-content">
          <p className="hero-subtitle">Exploring Life Beneath the Soil</p>
          <h1 className="hero-title">
            Dig Into
            <br />
            the Hidden World
          </h1>
          <p className="hero-description">
            From the surface down into the burrow, discover a softer,
            story-driven homepage inspired by soil, tunnels, and a curious
            little groundhog.
          </p>
        </div>
      </div>

      {/* 中央洞口与土拨鼠 */}
      <div className="burrow-center">
        <div className="burrow-ring">
          <div className="burrow-hole">
            <div className="gopher">
              <div className="gopher-ear left-ear"></div>
              <div className="gopher-ear right-ear"></div>

              <div className="gopher-head">
                <div className="gopher-eye left-eye"></div>
                <div className="gopher-eye right-eye"></div>
                <div className="gopher-nose"></div>
                <div className="gopher-mouth"></div>
                <div className="gopher-cheek left-cheek"></div>
                <div className="gopher-cheek right-cheek"></div>
              </div>

              <div className="gopher-paw left-paw"></div>
              <div className="gopher-paw right-paw"></div>
            </div>

            <button className="hero-button">Roll to Start</button>
          </div>
        </div>
      </div>

      {/* 地下土壤部分 */}
      <div className="underground-area">
        <div className="soil-layer soil-layer-1"></div>
        <div className="soil-layer soil-layer-2"></div>
        <div className="soil-layer soil-layer-3"></div>

        <div className="soil-stone stone-1"></div>
        <div className="soil-stone stone-2"></div>
        <div className="soil-stone stone-3"></div>

        <div className="soil-root root-1"></div>
        <div className="soil-root root-2"></div>
        <div className="soil-root root-3"></div>
      </div>
    </section>

    </section>
  );
}

export default HeroSection;