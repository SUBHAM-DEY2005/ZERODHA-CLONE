import React from "react";

import Menu from "./Menu";

const TopBar = ({onLogout}) => {
  return (
    <div className="topbar-container">
  <div className="indices-container">
    <div className="index-group">
      <span className="index-name">NIFTY 50</span>
      <span className="index-points">23997.55</span>
      <span className="index-percent">0.00 (0.00%)</span>
    </div>

    <div className="index-group">
      <span className="index-name">SENSEX</span>
      <span className="index-points">76913.50</span>
      <span className="index-percent">0.00 (0.00%)</span>
    </div>
  </div>
  <Menu onLogout={onLogout} />
</div>
  );
};

export default TopBar;