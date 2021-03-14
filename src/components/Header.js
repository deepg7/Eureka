import React from "react";
import "../Styling/Header.css";
import logo from "./images/logo.png";

function Header() {
  return (
    <div className="main1">
      <div className="header__logo">
        <img src={logo} />
      </div>
      <div className="header">
        <div className="header-right">
          <div className="right__aboutus">About Us</div>
          <div className="right__overview">Overview</div>
          <div className="right__signup">Sign Up</div>
          <div className="right__ourteam">Our Team</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
