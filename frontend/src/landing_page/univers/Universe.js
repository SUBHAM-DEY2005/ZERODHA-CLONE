import React from "react";
import "./Universe.css";


function Universe() {
  return (
    <div className="container holo">
      <h2>Zerodha Universe</h2>
      <div className="row">
        <div className="col-4 sec">
          <img src="/media/images/download (2).svg"/>
          <hr/>
          <p>India's largest zero-commission direct mutual funds platform.</p>
        </div>
        <div className="col-4 sec">
          <img src="media/images/download (1).svg"/>
          <hr/>
          <p>Dashboard of your Zerodha account with insights, reports, and visualizations for trades and investments.</p>
        </div>
        <div className="col-4 sec">
          <img src="media/images/varsity-full-BkIZqm-E.svg"/>
          <hr/>
          <p>Free and open stock market and financial education</p>
        </div>
      </div>
      <div className="row">
        <div className="col-4 sec">
          <img style={{width:"20%"}} src="/media/images/tijori.svg"/>
          <hr/>
          <p>Comprehensive stock research & portfolio tracking platform.</p>
        </div>
        <div className="col-4 sec">
          <img style={{width:"20%"}} src="media/images/dittoLogo.png"/>
          <hr/>
          <p>Insurance made easy! Understand your policy, get answers, and buy insurance—all in one place.</p>
        </div>
        <div className="col-4 sec">
          <img  src="/media/images/sensibullLogo.svg"/>
          <hr/>
          <p>Trade Options like a Pro</p>
        </div>
      </div>
      <div className="row">
        <div className="col-4 sec">
          <img style={{width:"20%"}} src="/media/images/streakLogo.png"/>
          <hr/>
          <p>Technical analysis tool with live scanning, insights, backtesting, virtual deployment and more.</p>
        </div>
      </div>
    </div>
  );
};

export default Universe;