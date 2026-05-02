import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./css/BuyActionWindow.css";

const BuyActionWindow = ({ uid, stock }) => {
  const { closeBuyWindow } = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(stock?.price || 0);

  useEffect(() => {
    if (stock) {
      setStockPrice(stock.price);
    }
  }, [stock]);


  const handleBuyClick = async () => {
    try {
      await axios.post("http://localhost:8080/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",

        
      });

    closeBuyWindow();
    
    } catch (err) {
      console.error(err);
    }
  };


  
  return (
    <>
      <div className="overlay" onClick={closeBuyWindow}></div>
      <div className="container" style={{height:"470px"}}>
        <div className="header">
          <h3>{uid}</h3>
          <div className="market-options">
            <label style={{marginRight:"15px"}}><input type="radio" /> BSE ₹{stockPrice}</label>
            <label><input type="radio" /> NSE ₹{stockPrice}</label>
          </div>
        </div>

        <div className="regular-order" >
          <div className="inputs">
            <legend className="fs-6">Qty.</legend>
            <fieldset className="mb-2">
              
              <input
                type="number"
                value={stockQuantity}
                onChange={(e) => setStockQuantity(e.target.value)}
              />
            </fieldset>

            <legend className="fs-6">Price</legend>
            <fieldset>
              
              <input
                type="number"
                step="0.05"
                value={stockPrice}
                onChange={(e) => setStockPrice(e.target.value)}
              />
            </fieldset>
          </div>
        </div>

        <div className="buttons">
          <span style={{marginRight:"15px",fontSize:"12px"}}>Req: ₹{stockQuantity * stockPrice}</span>
          <span style={{fontSize:"12px"}}>Avail: ₹{0}</span>
          <div>
            <button className="btn btn-blue mb-3" onClick={handleBuyClick}>
              Buy
            </button>
            <button className="btn btn-grey" onClick={closeBuyWindow}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyActionWindow;