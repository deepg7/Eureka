import React from "react";
import "../Styling/Title.css";
import people from "./images/people.png";
import Ellipse54 from "./images/Ellipse54.png";
import Ellipse55 from "./images/Ellipse55.png";
import Ellipse56 from "./images/Ellipse56.png";
import Ellipse57 from "./images/Ellipse57.png";
import Ellipse61 from "./images/Ellipse61.png";
import Ellipse62 from "./images/Ellipse62.png";
import batch from "./images/batch.png";
import graph from "./images/graph.png";
import book from "./images/book.png";

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
      <div className="title__para">
        <div className="line"></div>
        <img src={batch} className="batch" />
        <img src={graph} className="graph" />
        <img src={book} className="book" />
        <p className="parahead">Our Mission</p>
        <div className="our__mission__content">
          <p>
            With the sudden change from offline to online educational mode, the
            kids of lower classes started losing interest. Getting bombarded
            with concepts, ideas, and theories often robs kids of their interest
            in a particular subject. Therefore, a kid's learning experience
            should be accompanied with fun elements.
          </p>
        </div>
        <p className="para1">
          Developing interest of learning
          <br /> in kids lead them to achieve
          <br /> greater heights
        </p>
        <p className="para2">
          To keep a track on the growth of
          <br /> students’ learning
        </p>
        <p className="para3">
          A perfect platform for assigning
          <br /> tasks, homework to students in a very kids friendly manner
        </p>
      </div>
      <div className="title__image">
        <img src={people} />
      </div>
    </div>
  );
}

export default Title;
