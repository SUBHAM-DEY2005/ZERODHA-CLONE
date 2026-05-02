import React, { useState, useContext, useEffect } from 'react';
import axios from "axios";
import { io } from "socket.io-client";
import { useNavigate } from 'react-router-dom';
import { Tooltip, Grow } from '@mui/material';
import LayersIcon from '@mui/icons-material/Layers';
import AddIcon from '@mui/icons-material/Add';
import {
  BarChartOutlined,
  DeleteForever,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz
} from '@mui/icons-material';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';

import SearchDropdown from "./SearchDropdown";
import GeneralContext from "./GeneralContext";
import MarketDepth from "./MarketDepth";
import './css/WatchList.css';

axios.defaults.baseURL = "https://zerodha-backend-mtpe.onrender.com";
const socket = io("https://zerodha-backend-mtpe.onrender.com");

function WatchList() {

  const [myWatchlist, setMyWatchlist] = useState([]);
  const [query, setQuery] = useState("");
  const [depthData, setDepthData] = useState(null);
  const { handleOpenChart } = useContext(GeneralContext);
  const [currentPage, setCurrentPage] = useState(1);
  const stocksPerPage = 7;

  useEffect(() => {
    fetchWatchlist();
  }, []);

  const fetchWatchlist = async () => {
    try {
      const res = await axios.get("/watchlist");
      setMyWatchlist(res.data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  //  ADD 
  const handleAddStock = async (newStock) => {
    const alreadyExists = myWatchlist.some(s => s.name === newStock.name);
    if (alreadyExists) return alert("Stock already exists");

    try {
      const res = await axios.post("/watchlist", {
        name: newStock.name,
        percent: "0.00%",
        isDown: false,
        price: 0
      });

      setMyWatchlist([res.data, ...myWatchlist]);
    } catch (err) {
      console.error("Add error:", err);
    }
  };

  //  DELETE 
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/watchlist/${id}`);
      setMyWatchlist(prev => prev.filter(stock => stock._id !== id));
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  //  LIVE UPDATE 
  useEffect(() => {
    socket.on("priceUpdate", (liveData) => {
      setMyWatchlist(prev =>
        prev.map(stock => {
          const updated = liveData.find(s => s.name === stock.name);
          return updated ? { ...stock, ...updated } : stock;
        })
      );
    });

    return () => socket.off("priceUpdate");
  }, []);

  //  FILTER + PAGINATION 
  const filteredWatchlist = myWatchlist.filter(stock =>
    stock.name.toLowerCase().includes(query.toLowerCase())
  );

  const indexOfLastStock = currentPage * stocksPerPage;
  const indexOfFirstStock = indexOfLastStock - stocksPerPage;

  const currentStocks = filteredWatchlist.slice(
    indexOfFirstStock,
    indexOfLastStock
  );

  //  ADD BUTTON FOCUS 
  const handleAddStockClick = () => {
    const searchInput = document.querySelector(".search-container input");
    if (searchInput) {
      searchInput.focus();
      setQuery("");
    }
  };

  return (
    <div className="watchlist-container">

      {/* SEARCH */}
      <div className='row'>
        <div className='search-container mt-3 mb-3'>
          <SearchDropdown
            onSelect={(symbol) => handleOpenChart(symbol)}
            onAdd={handleAddStock}
          />
          <span className="counts">
            {filteredWatchlist.length} / {myWatchlist.length}
          </span>
        </div>
      </div>

      {/* LIST */}
      <div className="watchlist-scroll">
        <div style={{ border: "1px solid #eee", margin: "10px", height: "498px", overflowY: "auto" }}>

          {currentStocks.length > 0 ? (
            <ul className="list">
              {currentStocks.map((stock) => (
                <WatchListItem
                  key={stock._id}
                  stock={stock}
                  setDepthData={setDepthData}
                  handleDelete={handleDelete}
                />
              ))}
            </ul>
          ) : (
            <div className="empty-watchlist">
              <LayersIcon className="empty-icon" />
              <p>You don't have any stocks in your watchlist.</p>
              <button className="add-stock-btn" onClick={handleAddStockClick}>
                Add a stock
              </button>
            </div>
          )}

        </div>
      </div>

      {/* MARKET DEPTH */}
      {depthData && (
        <MarketDepth
          data={depthData}
          onClose={() => setDepthData(null)}
        />
      )}

      {/* PAGINATION */}
      <div className="row pagination-footer">
        <div className="pages">
          {[1, 2, 3, 4, 5, 6, 7].map((num) => (
            <span
              key={num}
              className={currentPage === num ? "page-link active" : "page-link"}
              onClick={() => setCurrentPage(num)}
            >
              {num}
            </span>
          ))}

          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
            <LayersIcon style={{ fontSize: '18px', color: '#666' }} />
            <AddIcon style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }} />
          </div>
        </div>
      </div>

    </div>
  );
}

// ITEM 

const WatchListItem = ({ stock, setDepthData, handleDelete }) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>
          {stock.name}
        </p>

        <div className="itemInfo">
          <span>{stock.percent}</span>

          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}

          <span>{stock.price}</span>
        </div>
      </div>

      {showActions && (
        <WatchListActions
          stock={stock}
          setDepthData={setDepthData}
          handleDelete={handleDelete}
        />
      )}
    </li>
  );
};

//ACTIONS 

const WatchListActions = ({ stock, setDepthData, handleDelete }) => {
  const navigate = useNavigate();
  const { openBuyWindow, openSellWindow, handleOpenChart } = useContext(GeneralContext);

  return (
    <span className="actions">
      <span>

        <Tooltip title='Buy' arrow TransitionComponent={Grow}>
          <button className='buy' onClick={() => openBuyWindow(stock.name)}>Buy</button>
        </Tooltip>

        <Tooltip title='Sell' arrow TransitionComponent={Grow}>
          <button className='sell' onClick={() => openSellWindow(stock.name)}>Sell</button>
        </Tooltip>

        <Tooltip title='Market Depth' arrow TransitionComponent={Grow}>
          <button
            className='action'
            onClick={() =>
              setDepthData({
                name: stock.name,
                price: stock.price,
              })
            }
          >
            <FormatAlignCenterIcon />
          </button>
        </Tooltip>

        <Tooltip title='Chart' arrow TransitionComponent={Grow}>
          <button className='action' onClick={() => {
            handleOpenChart(stock.name);
            setTimeout(() => {
              navigate("/chats");
            }, 50);
          }}>
            <BarChartOutlined />
          </button>
        </Tooltip>

        <Tooltip title='Delete' arrow TransitionComponent={Grow}>
          <button className='action' onClick={() => handleDelete(stock._id)}>
            <DeleteForever />
          </button>
        </Tooltip>

        <Tooltip title='More' arrow TransitionComponent={Grow}>
          <button className='action'>
            <MoreHoriz />
          </button>
        </Tooltip>

      </span>
    </span>
  );
};

export default WatchList;