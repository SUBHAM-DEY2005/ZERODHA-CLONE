import React from "react";
import "./ExploreSection.css";
import { Link } from "react-router-dom";

const ExploreSection = () => {
  return (
    <div className="explore-container">
      <h2 className="section-title mb-5">New to stocks markets?</h2>

      <Link style={{textDecoration:"none"}} to="https://varsitylive.zerodha.com/home">
      <div className="varsity-card">
        <div className="varsity-left">
          <span className="sparkle">✨</span>
          <h1 className="fs-2"><b>Varsity live</b></h1>
          <p>
            Free, live, interactive financial education program. Join now!
          </p>
        </div>

        <div className="varsity-right">
          <img src="media/images/desktop-right-CqDslLgh.svg"/>
        </div>
      </div>
    </Link>
    </div>
    
  );
};

export default ExploreSection;