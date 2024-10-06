import React from "react";
import "./styles/events.css";

const Events = () => {
  return (
    <div className="events-container">
      <h1>Upcoming Event</h1>
      <img src="event.png" alt="" />
      <div className="event-box">
        <div className="description">
          <h3>BSBE Alumni Meet 2024</h3>
          <p>Dept. of Biosciences and Bioengineering will be hosting their first alumni meet on 26th and 27th October, 2024. Regular updates will be posted on</p>
        </div>
        <a href="https://forms.gle/DSmgU3faXQwA9V5C6" target="blank">Register</a>
      </div>

      {/* Notable Alumni Section */}
      {/* <div className="notable-alumni-section">
        <h2 className="section-title">Notable Alumni</h2>
        <div className="alumni-grid">
          {[1, 2, 3, 4].map((_, index) => (
            <div className="alumni-card" key={index}>
              <img className="alumni-image" src="/public/bg.jpg" alt="image" />
              <div className="alumni-info">
                <h4>Aditya Jindal</h4>
                <p>Aditya Jindal</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Events;
