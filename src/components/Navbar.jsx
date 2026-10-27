import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { navLinks } from "../data/navLinks.js";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__brand" onClick={closeMenu}>
          Rapid Proto Tech
        </Link>

        <button
          type="button"
          className="navbar__toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className="navbar__nav" aria-label="Main Navigation">
          <ul
            id="primary-nav"
            className={`primary-nav${menuOpen ? " primary-nav--open" : ""}`}
          >
            {navLinks.map((link) => (
              <li
                key={link.to}
                className={link.children ? "nav-item--dropdown" : undefined}
              >
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className="nav-link"
                  aria-haspopup={link.children ? "true" : undefined}
                  onClick={closeMenu}
                >
                  {link.label}
                  {link.children && " ▾"}
                </NavLink>

                {link.children && (
                  <ul className="nav-dropdown">
                    {link.children.map((child) => (
                      <li key={child.to}>
                        <NavLink
                          to={child.to}
                          className="nav-link"
                          onClick={closeMenu}
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
