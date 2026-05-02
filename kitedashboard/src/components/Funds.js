import React from "react";
import "./css/Funds.css";

const Funds = () => {
  const fundDetails = [
    { label: "Opening balance", value: "0.00" },
    { label: "Payin", value: "0.00" },
    { label: "Payout", value: "0.00" },
    { label: "SPAN", value: "0.00" },
    { label: "Delivery margin", value: "0.00" },
    { label: "Exposure", value: "0.00" },
    { label: "Options premium", value: "0.00" },
  ];

  return (
    <div className="funds-container">
      <div className="funds-header">
        <span className="upi-text">
          Instant, zero-cost fund transfers with <span className="upi-logo">UPI</span>
        </span>
        <div className="header-buttons">
          <button className="btn-add">Add funds</button>
          <button className="btn-withdraw">Withdraw</button>
        </div>
      </div>

      <div className="funds-grid">
        <div className="fund-card">
          <div className="card-title">
            <div className="title-left">
              <h3>Equity</h3>
            </div>
            <div className="title-right">
               <a href="#">View statement</a>
               <a href="#">Help</a>
            </div>
          </div>
          <div className="main-balance">
             <div className="balance-row"><span>Available margin</span> <span className="big-val">0.00</span></div>
             <div className="balance-row"><span>Used margin</span> <span className="big-val">0.00</span></div>
             <div className="balance-row"><span>Available cash</span> <span className="big-val">0.00</span></div>
          </div>
          <hr />
          <div className="detail-list">
            {fundDetails.map((item, i) => (
              <div className="detail-item" key={i}>
                <span>{item.label}</span>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="fund-card">
          <div className="card-title">
            <div className="title-left">
              <h3>Commodity</h3>
            </div>
            <div className="title-right">
               <a href="#">View statement</a>
               <a href="#">Help</a>
            </div>
          </div>
          <div className="main-balance">
             <div className="balance-row"><span>Available margin</span> <span className="big-val">0.00</span></div>
             <div className="balance-row"><span>Used margin</span> <span className="big-val">0.00</span></div>
             <div className="balance-row"><span>Available cash</span> <span className="big-val">0.00</span></div>
          </div>
          <hr />
          <div className="detail-list">
            {fundDetails.map((item, i) => (
              <div className="detail-item" key={i}>
                <span>{item.label}</span>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;