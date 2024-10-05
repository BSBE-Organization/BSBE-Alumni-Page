import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const prev=true;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="nvbar">
        <img src="/iitg.png" alt="Website Logo" className="logo ml-3" />
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/directory">Directory</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <button className="cta-alumni">Are you an Alumni?</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;