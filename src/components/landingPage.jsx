import React from "react";
import "../styles/landingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <nav className="navbar">
        <img src="/public/iitg.png" alt="Logo" className="logo" />
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
      <div className="content">
        <h1 style={{ color: "#0f6f41" }}>BSBE</h1> {/* Changed here */}
        <h1 className="text-8xl text-[#000000]">Alumni Page</h1>
      </div>
    </div>
  );
};

export default LandingPage;
