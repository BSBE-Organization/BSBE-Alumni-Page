import React from 'react'
import "../styles/Navbar.css"
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <img
          src="/src/assets/IITG_logo.png"
          alt="Website Logo"
          className="logo"
        />
        <ul className="navbar-menu">
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
}

export default Navbar
