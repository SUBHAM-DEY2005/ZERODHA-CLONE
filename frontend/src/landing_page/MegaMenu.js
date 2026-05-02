import React from "react";
import "./megamenu.css";
import { Link } from "react-router-dom";

function MegaMenu() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return (
    <div className="mega-menu-container">
      <div className="container">
        <div className="top-section border-bottom">
          <div className="mega-item text-center" >
            <Link to={isLoggedIn ? "/" : "/login"} style={{ textDecoration: "none", color: "black" }} to="">
              <img src="/media/images/kite-logo.svg" alt="Kite" style={{ width: '55%' }} />
              <div className="text-content">
                <h4>Kite</h4>
                <p>Trading platform</p>
              </div>
            </Link>
          </div>

          <div className="mega-item text-center">
            <Link style={{ textDecoration: "none", color: "black" }} to="https://console.zerodha.com/">
              <img src="/media/images/console.svg" alt="Console" style={{ width: '80%' }} />
              <div className="text-content">
                <h4>Console</h4>
                <p>Backoffice</p>
              </div>
            </Link>
          </div>

          <div className="mega-item text-center">
            <Link style={{ textDecoration: "none", color: "black" }} to="https://zerodha.com/products/api/">
              <img src="/media/images/kite-connect.svg" alt="Kite Connect" style={{ width: '55%' }} />
              <div className="text-content">
                <h4>Kite Connect</h4>
                <p>Trading APIs</p>
              </div>
            </Link>
          </div>

          <div className="mega-item text-center">
            <Link style={{ textDecoration: "none", color: "black" }} to="https://coin.zerodha.com/">
              <img src="/media/images/coin.svg" alt="Coin" style={{ width: '68%' }} />
              <div className="text-content">
                <h4>Coin</h4>
                <p>Mutual funds</p>
              </div>
            </Link>
          </div>
        </div>

       
        <div className="bottom-section">
          <div className="col">
            <h5>Utilities</h5>
            <p>Calculators</p>
            <p>Brokerage calculator</p>
            <p>Margin calculator</p>
            <p>SIP calculator</p>
          </div>

          <div className="col">
            <h5>Updates</h5>
            <p>Z-Connect blog</p>
            <p>Circulars / Bulletin</p>
            <p>IPOs</p>
            <p>Markets</p>
          </div>

          <div className="col">
            <h5>Education</h5>
            <div className="edu-row mt-4" style={{ display: "flex" }}>
              <a style={{ textDecoration: "none", color: "black" }} href="https://zerodha.com/varsity/">
                <div className="edu-item">
                  <img src="/media/images/varsitys.png" alt="Varsity" />
                  <p className="mt-3">Varsity</p>
                </div>
              </a>
              <a style={{ textDecoration: "none", color: "black" }} href="https://tradingqna.com/">
                <div className="edu-item" style={{ marginLeft: "40px" }}>
                  <img style={{ width: "40px" }} src="/media/images/tqna.png" alt="Trading Q&A" />
                  <p className="mt-4">Trading Q&A</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MegaMenu;