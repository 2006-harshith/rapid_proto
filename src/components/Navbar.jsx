import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <header className="navbar" id="navbar">
        <div className="navbar__container">
          <a href="#" className="navbar__brand">
            Rapid Proto Tech
          </a>
          <nav className="navbar__nav">
            <ul className="primary-nav" id="primary-nav">
              {/* Nav items will be dynamically moved here by JS 
                    High priority links should come first in this initial HTML */}
              <li>
                <a href="#" className="nav-link">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Analytics
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Reports
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Tasks
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Users
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Settings
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Support
                </a>
              </li>

              {/* The "More" dropdown, initially empty and hidden  */}
              <li id="more-menu-item">
                <a
                  href="#"
                  className="nav-link"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  More &#x25BE;
                </a>
                <ul className="more-dropdown" id="more-dropdown"></ul>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
