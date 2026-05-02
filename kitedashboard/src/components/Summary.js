import React from "react";
import './css/Summary.css'
import { DoughnutChart } from './DoughnutChart';
import { LineChats } from "./LineChats";
import { holdings, watchlist } from '../data/data';
import { Height } from "@mui/icons-material";

const Summary = ({ name }) => {
  const userName = name || localStorage.getItem("userName") || "Subham Dey";
  const labels = watchlist.map((stock) => stock.name);
  const data = {
    labels,
    datasets: [
      {
        label: 'Price',
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };


  const data1 = {
    labels: ["Jul 25", "Oct 25", "Jan 26", "Apr 26"], // Dates from your image
    datasets: [
      {
        label: 'NIFTY 50',
        data: [3000, 3500, 3200, 3800, 3600, 4000, 3800, 3900, 2500, 3100],
        borderColor: 'rgb(65, 132, 243)',
        backgroundColor: 'transparent',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  return (
    <>
      <div className="username">
        <h6>Hi, {userName}!</h6>
      </div>

      <div className="row border-top" style={{ marginBottom: "50px", height: "300px" }}>
        {/* Equity Section */}
        <div className="section col-6 p-5 mb-5">
          <div className="section-header">
            <p>Equity</p>
          </div>
          <div className="data-wrapper">
            <div className="data-left">
              <h3>3.74k</h3>
              <p>Margin available</p>
            </div>
            <div className="data-right">
              <p>Margins used <span className="val">0</span></p>
              <p>Opening balance <span className="val">3.74k</span></p>
            </div>
          </div>
        </div>

        {/* Holdings Section */}
        <div className="section col-6 p-5 mb-5">
          <div className="section-header">
            <p>Holdings (13)</p>
          </div>
          <div className="data-wrapper">
            <div className="data-left">
              <h3 className="profit">
                1.55k <small className="up">+5.20%</small>
              </h3>
              <p>P&L</p>
            </div>
            <div className="data-right">
              <p>Current Value <span className="val">31.43k</span></p>
              <p>Investment <span className="val">29.88k</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-6" style={{ width: "400px" }}>
          <h3 className="mb-3">WatchList Data Chats</h3>
          <DoughnutChart data={data} />
        </div>
        <div className="col-6">
          <div style={{ display: 'flex', marginBottom: "140px" }}>
            <i className="fa fa-line-chart"></i>
            <h1 className="fs-3">Market overview</h1>
          </div>

          <div style={{ marginTop: "20px" }}>
            <LineChats data={data1} />
          </div>
        </div>

      </div>
    </>
  );
};

export default Summary;