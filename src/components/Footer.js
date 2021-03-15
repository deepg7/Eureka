import React from "react";
import "../Styling/Footer.css";
import logo from "./images/logo.png";
// import FacebookIcon from "@material-ui/icons/Facebook";
import dwija from "./images/dwija.png";
import deep from "./images/deep.png";
import rashi from "./images/rashi.png";
import tanmay from "./images/tanmahy.png";

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
      <div className="footer__right__team">
        <div className="footer__heading">
          <h3>Our Team</h3>
        </div>
        <div className="footer__img">
          <img src={dwija} />
          <img src={deep} />
          <img src={rashi} />
          <img src={tanmay} />
        </div>
        <div className="footer__names">
          <p>Dwija Patel</p>
          <p>Deep Gandhi</p>
          <p>Rashi Solanki</p>
          <p>Tanmay Shah</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
