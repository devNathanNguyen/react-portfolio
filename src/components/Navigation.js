import React from "react";
import { NavLink } from "react-router-dom";

function Navigation({ currentSection, setCurrentSection }) {
  const sections = ["About", "Portfolio", "Contact", "Resume"];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <ul className="navbar-nav">
          {sections.map((section) => (
            <li className="nav-item" key={section}>
              <NavLink
                className={`nav-link ${
                  currentSection === section ? "active" : ""
                }`}
                activeClassName="active"
                to={`/${section === "About" ? "" : section.toLowerCase()}`}
                onClick={() => setCurrentSection(section)}
              >
                {section}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
