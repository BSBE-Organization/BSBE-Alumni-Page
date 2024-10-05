import React from "react";
import "./styles/events.css";

const Events = () => {
  return (
    <div className="events-container">
      <div className="upcoming-event-section">
        <h2 className="section-title">Upcoming Event</h2>
        <div className="event-card">
          <div className="event-image-container">
            <img
              className="event-image"
              src="/event.png"
              alt="BSBE Alumni Meet 2024"
            />
            <button className="register-btn">Register</button>{" "}
            {/* Button inside image container */}
          </div>
        </div>
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
