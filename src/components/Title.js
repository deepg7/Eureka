import React from "react";
import "../Styling/Title.css";
import people from "./images/people.png";
import Ellipse54 from "./images/Ellipse54.png";
import Ellipse55 from "./images/Ellipse55.png";
import Ellipse56 from "./images/Ellipse56.png";
import Ellipse57 from "./images/Ellipse57.png";
import Ellipse61 from "./images/Ellipse61.png";
import Ellipse62 from "./images/Ellipse62.png";

function Title() {
  return (
    <div className="title">
      <img src={Ellipse54} className="Ellipse54" />
      <img src={Ellipse55} className="Ellipse55" />
      <img src={Ellipse56} className="Ellipse56" />
      <img src={Ellipse57} className="Ellipse57" />
      <img src={Ellipse61} className="Ellipse61" />
      <img src={Ellipse62} className="Ellipse62" />
      <div className="title__header">
        <h1>
          Connecting <span className="highlight">beyond</span>
          <br /> the classroom
        </h1>
      </div>
      <div className="title__para"></div>
      <div className="title__image">
        <img src={people} />
      </div>
    </div>
  );
}

export default Title;
