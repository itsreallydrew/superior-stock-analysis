import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./StockSymbol.css";
// import stockData from "../data/stock-data.json";

function StockSymbol() {
  const [tickerData, setTickerData] = useState();
  const { symbol } = useParams();

  useEffect(() => {
    //   const url = `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${
    //     process.env.REACT_APP_IEXCLOUD_KEY
    //   }`;

    axios({
      method: "get",
      url: `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${
        process.env.REACT_APP_IEXCLOUD_KEY
      }`
    })
      .then(function(res) {
        console.log(res);
        setTickerData(res.data);
      })
      .catch(function(err) {
        console.log(err);
      });

    //   fetch(url)
    //     .then(res => res.json())
    //     .then(res => {
    //       console.log(res);
    //       setTickerData(res);
    //       console.log(tickerData);
    //     })
    //     .catch(err => console.log(err));
  }, []);

  //   let filtered = stockData.find(ticker => {
  //     if (ticker.symbol === symbol) {
  //       return ticker;
  //     }
  //   });
  if (!tickerData) {
    return <h1 className="loading">Loading...</h1>;
  }
  return (
    <div key={tickerData.symbol}>
      <main className="stock-symbol-details">
        <div className="symbol">
          <h3 className="name-symbol">
            {tickerData.companyName} ({tickerData.symbol})
          </h3>
        </div>
        <ul className="details">
          <li className="change">Latest Price: {tickerData.latestPrice}</li>
          <li className="change">Change: {tickerData.change}</li>
          <li className="high">High: {tickerData.high}</li>
          <li className="low">Low: {tickerData.low}</li>
          <li className="high">Week 52 High: {tickerData.week52High}</li>
          <li className="low">Week 52 Low: {tickerData.week52Low}</li>
          <li className="change">Open: {tickerData.open}</li>
          <li className="change">Close: {tickerData.close}</li>
          <li className="exchange">Exchange: {tickerData.primaryExchange}</li>
        </ul>
      </main>
    </div>
  );
}

export default StockSymbol;
