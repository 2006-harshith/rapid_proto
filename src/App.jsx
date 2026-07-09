import "./App.css";

import logo from "./assets/logo.png";
import comingSoon from "./assets/coming_soon2_transp.png";

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="company">Rapid Proto Tech</div>

        <div className="logo-container">
          <img src={logo} alt="Rapid Proto Tech" className="logo" />
        </div>
      </nav>

      <main className="hero">
        <div className="hero-content">
          <img src={comingSoon} alt="3D Printing" className="hero-image" />

          <h1>
            Engineering the Future of
            <span> 3D Printing</span>
          </h1>

          <p>
            Our new website is under construction. We're "printing" something
            extraordinary.
          </p>
        </div>
      </main>
    </>
  );
}

export default App;
