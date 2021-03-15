import React from "react";
import "../Styling/SigninTeacher.css";
import c1 from "./images/c1.png";
import c2 from "./images/c2.png";
import c3 from "./images/c3.png";
import c4 from "./images/c4.png";
import c5 from "./images/c5.png";
import c6 from "./images/c6.png";
import Ellipse27 from "./images/Ellipse27.png";
import Ellipse28 from "./images/Ellipse28.png";
import Ellipse29 from "./images/Ellipse29.png";
import Ellipse30 from "./images/Ellipse30.png";
import Ellipse31 from "./images/Ellipse31.png";
import Ellipse32 from "./images/Ellipse32.png";
import Rectangle from "./images/Rectangle 108.png";
import logo from "./images/logo.png";

function SigninTeacher() {
  return (
    <div className="signin">
      <div className="logo">
        <img src={logo} />
      </div>
      <img src={Ellipse27} className="Ellipse27" />
      <img src={Ellipse28} className="Ellipse28" />
      <img src={Ellipse29} className="Ellipse29" />
      <img src={Ellipse30} className="Ellipse30" />
      <img src={Ellipse31} className="Ellipse31" />
      <img src={Ellipse32} className="Ellipse32" />
      <div className="text">
        <p>Choose your Character!</p>
      </div>
      <div className="signin__img">
        <img src={Rectangle} />
      </div>
      <div className="characters">
        <img id="c1" src={c1} />
        <img id="c2" src={c2} />
        <img id="c3" src={c3} />
        <img id="c4" src={c4} />
        <img id="c5" src={c5} />
        <img id="c6" src={c6} />
      </div>
    </div>
  );
}

export default SigninTeacher;
