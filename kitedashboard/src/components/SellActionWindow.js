import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./css/SellActionWindow.css";

const SellActionWindow = ({ uid, stock }) => {
  const { closeSellWindow } = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(stock?.price || 0);


  const handleSellClick = async () => {
    try {
      await axios.post("https://zerodha-backend-mtpe.onrender.com/newOrder", {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: "SELL",
      });

      closeSellWindow();

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="overlay" onClick={closeSellWindow}></div>
      <div className="container" style={{ height: "470px" }}>
        <div className="header1">
          <h3>{uid}</h3>
          <div className="market-options">
            <label style={{marginRight:"15px"}}><input type="radio" /> BSE ₹{stockPrice}</label>
            <label><input type="radio" /> NSE ₹{stockPrice}</label>
          </div>
        </div>
        <div className="regular-order">
          <div className="inputs">
            <legend className="fs-6">Qty.</legend>
            <fieldset>
              
              <input
                type="number"
                value={stockQuantity}
                onChange={(e) => setStockQuantity(Number(e.target.value))}
              />
            </fieldset>
            <legend className="fs-6">Price</legend>
            <fieldset>
              
              <input
                type="number"
                step="0.05"
                value={stockPrice}
                onChange={(e) => setStockPrice(Number(e.target.value))}
              />
            </fieldset>

          </div>
        </div>

        <div className="buttons1">
          <span style={{ marginRight:"15px", fontSize: "12px" }}>
            Req: ₹{(stockQuantity * stockPrice).toFixed(2)}
          </span>
        <span style={{fontSize:"12px"}}>Avail: ₹{0}</span>
          <div>
            <button className="btn1 btn-blue1 mb-3" onClick={handleSellClick}>
              Sell
            </button>

            <button className="btn1 btn-grey1" onClick={closeSellWindow}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellActionWindow;