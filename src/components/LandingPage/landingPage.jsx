import React from "react";
import { Link } from 'react-router-dom';
import "./styles/landingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <nav className="navbar">
        <img src="iitg.png" alt="Logo" className="logo" />
        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/directory">Directory</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li>
            <button className="cta-alumni">Are you an Alumni?</button>
          </li>
        </ul>
      </nav>
      <div className="content">
        <h1 style={{ color: "#0f6f41" }}>BSBE</h1> {/* Changed here */}
        <h1 className="text-8xl text-[#000000]">Alumni Page</h1>
      </div>
    </div>
  );
};

export default LandingPage;
