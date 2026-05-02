import React, { useState } from "react";
import "./css/Bids.css";
import SearchIcon from "@mui/icons-material/Search";

const Bids = () => {
  const [activeTab, setActiveTab] = useState("IPO");

  const ipoData = [
    {
      id: 1,
      instrument: "ADISOFT",
      tag: "SME",
      company: "Adisoft Technologies",
      date: "23rd — 27th Apr",
      price: "163 - 172",
      minAmount: "275200",
      minQty: "1600",
      status: "Apply",
    },
    {
      id: 2,
      instrument: "AMBAAUTO",
      tag: "SME",
      company: "Amba Auto Sales And Services",
      date: "27th — 29th Apr",
      price: "130 - 135",
      minAmount: "270000",
      minQty: "2000",
      status: "Apply",
    },
    {
      id: 3,
      instrument: "OMPOWER",
      company: "Om Power Transmission",
      date: "9th — 13th Apr",
      price: "166 - 175",
      minAmount: "14875",
      minQty: "85",
      status: "CLOSED",
    },
    {
      id: 4,
      instrument: "CITIUSINVT",
      company: "Citius Transnet Investment Trust",
      date: "17th — 21st Apr",
      price: "99 - 100",
      minAmount: "15000",
      minQty: "150",
      status: "CLOSED",
    },
  ];

  const tabs = ["IPO", "Govt. securities", "Auctions", "Corporate actions", "SSE IPO"];

  return (
    <div className="bids-container">
      <div className="tabs-header">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "tab-btn active" : "tab-btn"}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="content-area">
        <div className="section-header">
          <h3>IPOs (2)</h3>
          <div className="search-bar">
            <SearchIcon className="search-icon" />
            <input type="text" placeholder="Search" />
          </div>
        </div>

        <table className="bids-table">
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Date</th>
              <th>Price (₹)</th>
              <th>Min. amount (₹)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {ipoData.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="instrument-col">
                    <span className="inst-name">
                      {item.instrument} {item.tag && <span className="sme-badge">{item.tag}</span>}
                    </span>
                    <span className="company-name">{item.company}</span>
                  </div>
                </td>
                <td>{item.date}</td>
                <td>{item.price}</td>
                <td>
                  <div className="amount-col">
                    <span>{item.minAmount}</span>
                    <span className="qty-sub">{item.minQty} Qty.</span>
                  </div>
                </td>
                <td>
                  {item.status === "Apply" ? (
                    <button className="apply-btn">Apply</button>
                  ) : (
                    <button className="closed-btn" disabled>
                      CLOSED
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="footer-link">
          <a href="#">Don't see an IPO here? View upcoming →</a>
        </div>
      </div>
    </div>
  );
};

export default Bids;