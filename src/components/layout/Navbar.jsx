import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { navLinks } from "../../data/navLinks.js";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  // Lift the bar off the page once content scrolls under it
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="navbar__container">
        <Link to="/" className="navbar__brand" onClick={closeMenu}>
          <img src={logo} alt="" className="navbar__logo" />
          <span className="navbar__name">
            Rapid Proto Tech
            <span className="navbar__tagline">
              3D Printing &amp; Rapid Prototyping
            </span>
          </span>
        </Link>

        <button
          type="button"
          className="navbar__toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
        </button>

        <nav
          id="primary-nav"
          className={`navbar__nav${menuOpen ? " navbar__nav--open" : ""}`}
          aria-label="Main navigation"
        >
          <ul className="navbar__menu">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className={`navbar__item${link.cta ? " navbar__item--cta" : ""}`}
              >
                {link.children ? (
                  <NavDropdown link={link} onNavigate={closeMenu} />
                ) : (
                  <NavLink
                    to={link.to}
                    end
                    className={link.cta ? "nav-cta" : "nav-link link-line"}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

// Opens on hover (desktop, via CSS) or click/tap; closes on Escape or focus leaving.
function NavDropdown({ link, onNavigate }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isActive = link.children.some((child) => child.to === pathname);
  const menuId = `${link.label.toLowerCase()}-menu`;

  const navigate = () => {
    setOpen(false);
    onNavigate();
  };

  return (
    <div
      className={`nav-dropdown${open ? " nav-dropdown--open" : ""}`}
      onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      }}
    >
      <button
        type="button"
        className={`nav-link link-line${isActive ? " active" : ""}`}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen(!open)}
      >
        {link.label}
        <svg
          className="nav-dropdown__chevron"
          viewBox="0 0 12 12"
          aria-hidden="true"
        >
          <path d="M2 4l4 4 4-4" />
        </svg>
      </button>

      <ul id={menuId} className="nav-dropdown__menu">
        {link.children.map((child) => (
          <li key={child.to}>
            <NavLink
              to={child.to}
              className="nav-dropdown__link"
              onClick={navigate}
            >
              <span className="nav-dropdown__code">{child.label}</span>
              <span className="nav-dropdown__name">{child.name}</span>
              <svg
                className="nav-dropdown__arrow"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
