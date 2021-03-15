import React from "react";
import "../Styling/Header.css";
import logo from "./images/logo.png";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

function Header({ comp1, comp2, comp3, comp4 }) {
  return (
    <div className="main1">
      <Link to="/">
        {" "}
        <div className="header__logo">
          <img src={logo} />
        </div>
      </Link>
      <div className="header">
        <div className="header-right">
          <div className="right__aboutus">{comp1}</div>
          <div className="right__overview">{comp2}</div>
          <div className="right__signup">{comp3}</div>
          <div className="right__ourteam">{comp4}</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
