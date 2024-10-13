import React, { useEffect, useState } from "react";
import "../styles/stats.css";

const LandingPage = () => {
  const CountUp = ({ end }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 2000; // Duration of the count animation in ms
      const increment = end / (duration / 100); // Adjust speed based on the duration

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(counter);
          setCount(end); // Ensure the number lands on the exact final value
        } else {
          setCount(Math.ceil(start)); // Update the state to the new count
        }
      }, 100); // Update count every 100ms

      return () => clearInterval(counter); // Cleanup interval on component unmount
    }, [end]);

    return <span>{count}</span>;
  };

  return (
    <div className="stats-container">
      <div className="stat-box">
        <h2>
          <CountUp end={650} />+
        </h2>
        <p>Continuing Students</p>
      </div>
      <div className="stat-box">
        <h2>
          <CountUp end={1500} />+
        </h2>
        <p>Graduated Students</p>
      </div>
      <div className="stat-box">
        <h2>
          <CountUp end={200} />+
        </h2>
        <p>Opted for Abroad Studies</p>
      </div>
    </div>
  );
};

export default LandingPage;
