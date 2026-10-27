import "./Comingsoon.css";
import comingSoonImg from "../assets/images/coming_soon2_transp.png";

// Uses the site Navbar/Footer, but the hero keeps its own original styling
export default function Comingsoon() {
  return (
    <div className="coming-soon">
      <section className="hero">
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
      </section>
    </div>
  );
}
