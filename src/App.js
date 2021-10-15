import "./App.css";
import Stocks from "./Stocks/Stocks";
import StockSymbol from "./StockSymbol/StockSymbol";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import About from "./About/About";
import logo from "../src/assets/ssa-logo.png";
import { Redirect } from "react-router-dom";

function App() {
  const [symbol, setSymbol] = useState([]);

  return (
    <div>
      <header>
        <nav>
          <Link to="/stocks">
            <h1>Home</h1>
          </Link>
          <Link to="/stocks">
            <img src={logo} alt="superior stock analysis" />
          </Link>

          <Link to="/about">
            <h1>About</h1>
          </Link>
        </nav>
      </header>
      <main>
        <Route exact path="/">
          <Redirect to="/stocks" />
        </Route>
        <Route path="/stocks" component={Stocks} exact />
        <Route path="/stocks/:symbol" component={StockSymbol} />
        <Route path="/about" component={About} />
      </main>
    </div>
  );
}

export default App;
