import React from "react";
import "../styles/events.css";

const Events = () => {
  return (
    <div className="events-container">
      <h1>Past Event</h1>
      <img src="home/meet.jpg" alt="" />
      <div className="event-box">
        <div className="description">
          <h3>BSBE Alumni Meet 2024</h3>
          <p>Dept. of Biosciences and Bioengineering hosted their first alumni meet on 26th and 27th October, 2024.</p>
        </div>
      </div>
    </div>
  );
};

export default Events;
