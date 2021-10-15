import React from "react";
import stockData from "../data/sain-stocks.json";
import { Link } from "react-router-dom";
import "./Stocks.css";

function Stocks(props) {
  let stockList = stockData.map(item => {
    return (
      <div className="stock-display">
        <div className="stock-overview">
          <h3 className="stock-text">
            <Link to={`/stocks/${item.symbol}`} key={item.symbol}>
              {item.name} ({item.symbol})
            </Link>
          </h3>
        </div>
      </div>
    );
  });
  return <div>{stockList}</div>;
}

export default Stocks;
