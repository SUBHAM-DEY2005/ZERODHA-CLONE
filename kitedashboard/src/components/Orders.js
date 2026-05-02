import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios"

function Orders () {

  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("https://zerodha-backend-mtpe.onrender.com/newOrder").then((res) =>{
      console.log(res.data);
      setAllOrders(res.data);
    })
  }, [])

  return (
    <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn btn-primary">
          Get started
        </Link>
      </div>

        <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>mode</th>
          </tr>


          {allOrders.map((stock, index) => {

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price}</td>
                <td>{stock.mode}</td>
              </tr>
            );
          }

          )}

        </table>
      </div>
    </div>
  );
};

export default Orders;