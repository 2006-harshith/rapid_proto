import { Link } from "react-router-dom";
import "./Mainpage.css";

export default function Mainpage() {
  return (
    <section className="heroSection">
      <div className="heroContent">
        <h1 className="heroTitle">Rapid 3D Printing for Engineering Teams</h1>
        <p className="heroSubtitle">
          In-house precision prototyping delivered with speed — helping you
          move from concept to functional design without production delays.
        </p>
        <div className="heroActions">
          <Link to="/contact" className="btnPrimary">
            Get a Quote
          </Link>
          <Link to="/services" className="btnSecondary">
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
