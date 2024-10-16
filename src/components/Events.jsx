import React from "react";
import "../styles/events.css";

const Events = () => {
  return (
    <div className="events-container">
      <h1>Upcoming Event</h1>
      <img src="home/event.png" alt="" />
      <div className="event-box">
        <div className="description">
          <h3>BSBE Alumni Meet 2024</h3>
          <p>Dept. of Biosciences and Bioengineering will be hosting their first alumni meet on 26th and 27th October, 2024.</p>
          <p><a href="https://iitg.ac.in/biotech/pdf/d6e3433518f6b8ae4ab91a9e1ccae6dfbd1be90d.pdf" target="blank">Link to Alumni Meet 2024 Flyer</a></p>
        </div>
        <a href="https://forms.gle/DSmgU3faXQwA9V5C6" target="blank">Register</a>
      </div>
    </div>
  );
};

export default Events;
