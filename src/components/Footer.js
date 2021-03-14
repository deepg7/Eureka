import React from "react";
import "../Styling/Footer.css";
import logo from "./images/logo.png";
// import FacebookIcon from "@material-ui/icons/Facebook";

function Footer() {
  return (
    <div className="main__footer">
      <div className="footer__left">
        <div className="footer__left__logo">
          <img src={logo} />
        </div>
        <div className="footer__left__contact">
          <p>contact@eureka.com</p>
        </div>
        <div className="footer__left__social"></div>
      </div>
    </div>
  );
}

export default Footer;
