import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <img src="/public/iitg.png" alt="Website Logo" className="logo" />
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
          <li>
            <a href="#directory">Directory</a>
          </li>
          <li>
            <a href="#team">Team</a>
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
