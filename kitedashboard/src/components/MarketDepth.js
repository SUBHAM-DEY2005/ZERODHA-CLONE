import React from "react";
import "./css/MarketDepth.css";

const MarketDepth = ({ data, onClose }) => {
  if (!data) return null;

  const {
    name,
    price,
    open = "N/A",
    high = "N/A",
    low = "N/A",
    prevClose = "N/A",
  } = data;

  return (
    <div className="md-overlay">
      <div className="md-modal">

        {/* HEADER */}
        <div className="md-header">
          <h2>{name}</h2>
          <span className="price">{price}</span>
        </div>

        <hr />

        {/* STATS */}
        <div className="md-grid">
          <div>
            <p>Open</p>
            <strong>{open}</strong>
          </div>
          <div>
            <p>High</p>
            <strong>{high}</strong>
          </div>
          <div>
            <p>Low</p>
            <strong>{low}</strong>
          </div>
          <div>
            <p>Prev. Close</p>
            <strong>{prevClose}</strong>
          </div>
        </div>

        {/* RANGE */}
        <div className="md-range">
          <p>Day Range</p>
          <div className="range-bar">
            <div className="range-fill"></div>
          </div>
        </div>

        {/* CLOSE BUTTON */}
        <button className="close-btn" onClick={onClose}>
          Close
        </button>

      </div>
    </div>
  );
};

export default MarketDepth;