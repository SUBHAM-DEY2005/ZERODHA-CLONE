import React from "react";
import { Route, Routes } from "react-router-dom";
import WatchList from "./WatchList";
import Summary from "./Summary";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import Bids from "./Bids";
import TopBar from "./TopBar";
import { GeneralContextProvider } from "./GeneralContext";
import "./css/Dashboard.css"; 

const Dashboard = ({ onLogout }) => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <TopBar onLogout={onLogout}/>
        <div className="main-content-wrapper">
          <div className="watchlist-sidebar">
             <WatchList />
          </div>
          <div className="content">
            <Routes>
              <Route path="/" element={<Summary />} />
              <Route path="orders" element={<Orders />} />
              <Route path="holdings" element={<Holdings />} />
              <Route path="positions" element={<Positions />} />
              <Route path="funds" element={<Funds />} />
              <Route path="bids" element={<Bids />} />
            </Routes>
          </div>
        </div>
      </GeneralContextProvider>
    </div>
  );
};

export default Dashboard;