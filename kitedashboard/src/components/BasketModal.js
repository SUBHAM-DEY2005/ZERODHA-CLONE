import React, { useState } from "react";
import "./css/BasketModal.css";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const BasketModal = ({ isOpen, onClose }) => {
  const [basketItems, setBasketItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  if (!isOpen) return null;

  return (
    <div className="basket-overlay">
      <div className="basket-content">
        {/* Header */}
        <div className="basket-header">
          <div className="header-left">
            <span className="cart-icon">🛒</span>
            <h3>Basket</h3>
          </div>
          <KeyboardArrowDownIcon className="collapse-icon" />
        </div>

        {/* Search Bar */}
        <div className="basket-search-container">
          <div className="search-wrapper">
            <SearchIcon className="s-icon" />
            <input
              type="text"
              placeholder="Search & add"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="clear-link" onClick={() => setBasketItems([])}>
            <HighlightOffIcon style={{ fontSize: "14px", marginRight: "4px" }} />
            Clear basket
          </button>
        </div>

        {/* Items Area */}
        <div className="basket-items-area">
          {basketItems.length === 0 ? (
            <p className="empty-msg">Start by adding instruments</p>
          ) : (
            <ul className="basket-list">
              {/* Map your added items here */}
            </ul>
          )}
        </div>

        {/* Footer */}
        <div className="basket-footer">
          <button className="btn-place" disabled={basketItems.length === 0}>
            Place all
          </button>
          <button className="btn btn-close" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketModal;