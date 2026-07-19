import React from "react";

import "./Comingsoon.css";
import logo from "./../assets/logo.png";
import comingSoonImg from "./../assets/coming_soon2_transp.png";

export default function Comingsoon() {
  return (
    <div>
      <nav className="navbar">
        <div className="company">Rapid Proto Tech</div>

        <div className="logo-container">
          <img src={logo} alt="Rapid Proto Tech" className="logo" />
        </div>
      </nav>

      <main className="hero">
        <div className="hero-content">
          <img src={comingSoonImg} alt="coming soon" className="hero-image" />

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
    </div>
  );
}
