import React, { useContext, useState } from "react";
import GeneralContext from "./GeneralContext";
import TradingViewChart from "./TradingViewChart";
import "./css/Chats.css";

const Chats = () => {
  const { selectedStockSymbol } = useContext(GeneralContext);
  const [activeTab, setActiveTab] = useState("Chart");

  const tabs = ["Chart", "Option Chain", "Fundamentals"];

  return (
    <div className="chats-container">
      <div className="chats-header">
        <div className="stock-info">
          {selectedStockSymbol ? (
            <>
              <h2>{selectedStockSymbol}</h2>
              <span className="stock-sub">NSE • Equity</span>
            </>
          ) : (
            <h2>Select a Stock</h2>
          )}
        </div>
      </div>

      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {activeTab === "Chart" && (
          selectedStockSymbol ? (
            <div className="chart-box">
              <TradingViewChart symbol={selectedStockSymbol} />
            </div>
          ) : (
            <div className="empty-state">
              <p>Select a stock from watchlist</p>
            </div>
          )
        )}

        {activeTab === "Option Chain" && (
          <div className="placeholder">
            <h3>Option Chain</h3>
            <p>Coming soon with live data</p>
          </div>
        )}

        {activeTab === "Fundamentals" && (
          <div className="placeholder">
            <h3>Fundamentals</h3>
            <p>PE Ratio, EPS, Market Cap etc.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Chats;