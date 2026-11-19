import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { navLinks } from "../../data/navLinks.js";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-centered">
      <div className="footer-centered__container">
        <img
          className="footer-centered__logo"
          src={logo}
          alt="Rapid Proto Tech"
        />

        <div className="footer-centered__row">
          <nav
            className="footer-centered__nav"
            aria-label="Main Footer Navigation"
          >
            <ul>
              {navLinks
                .flatMap((link) => link.children ?? link)
                .map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="footer-centered__link link-line"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>

          <span className="footer-centered__divider" aria-hidden="true" />

          <a
            className="footer-centered__social"
            href="https://www.linkedin.com/company/rapid-proto-tech/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Our LinkedIn Profile"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>LinkedIn</title>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>

        <p className="footer-centered__copyright">
          &copy; {year} Rapid Proto Tech India Private Limited.
        </p>
      </div>
    </footer>
  );
}
