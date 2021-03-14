import React from "react";
import "../Styling/SigninStudent.css";
import lion from "./images/lion.png";
import elephant from "./images/elephant.png";
import rabbit from "./images/rabbit.png";
import hippo from "./images/hippo.png";
import wolf from "./images/wolf.png";
import squireel from "./images/squireel.png";
import Ellipse27 from "./images/Ellipse27.png";
import Ellipse28 from "./images/Ellipse28.png";
import Ellipse29 from "./images/Ellipse29.png";
import Ellipse30 from "./images/Ellipse30.png";
import Ellipse31 from "./images/Ellipse31.png";
import Ellipse32 from "./images/Ellipse32.png";
import Rectangle from "./images/Rectangle 108.png";
import logo from "./images/logo.png";

function SigninStudent() {
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
        <img id="lion" src={lion} />
        <img id="elephant" src={elephant} />
        <img id="rabbit" src={rabbit} />
        <img id="hippo" src={hippo} />
        <img id="wolf" src={wolf} />
        <img id="squireel" src={squireel} />
      </div>
    </div>
  );
}

export default SigninStudent;
