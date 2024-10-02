import React from "react";
import "../styles/events.css";

const Events = () => {
  return (
    <div className="events-container">
      <div className="upcoming-event-section">
        <h2 className="section-title">Upcoming Event</h2>
        <div className="event-card">
          <img
            className="event-image"
            src="/src/assets/students.jpg"
            alt="BSBE Alumni Meet 2024"
          />
          <div className="event-info">
            <h3>BSBE Alumni Meet 2024</h3>
            <p>
              Dept. of Biosciences and Bioengineering will be hosting their
              first alumni meet on 26th and 27th October, 2024. Regular updates
              will be posted.
            </p>
            <button className="register-btn">Register</button>
          </div>
        </div>
      </div>

      {/* Notable Alumni Section */}
      <div className="notable-alumni-section">
        <h2 className="section-title">Notable Alumni</h2>
        <div className="alumni-grid">
          {[1, 2, 3, 4].map((_, index) => (
            <div className="alumni-card" key={index}>
              <img
                className="alumni-image"
                src="/src/assets/Manish sir.jpg" 
                alt="image"
              />
              <div className="alumni-info">
                <h4>Aditya Jindal</h4>
                <p>Aditya Jindal</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;