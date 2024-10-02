import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../../styles/Navbar.css";

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
          <li><Link href="/home">Directory</Link></li>
          <li><Link href="/directory">Directory</Link></li>
          <li><Link href="/team">Team</Link></li>
          <li><button className="cta-alumni">Are you an Alumni?</button></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
