import React from "react";
import "../Styling/Overview.css";
import kids from "./images/Kids.png";
import bees1 from "./images/bees1.png";
import Ellipse51 from "./images/Ellipse51.png";
import Ellipse53 from "./images/Ellipse53.png";
import Ellipse60 from "./images/Ellipse60.png";
import Ellipse63 from "./images/Ellipse63.png";

function Overview() {
  return (
    <div className="overview__main">
      <img src={Ellipse51} className="Ellipse51" />
      <img src={Ellipse53} className="Ellipse53" />
      <img src={Ellipse60} className="Ellipse60" />
      <img src={Ellipse63} className="Ellipse63" />
      <div className="bees">
        <img src={bees1} />
      </div>
      <div className="overview">
        <div className="overview__content">
          <h1>
            Classrooms are the <br />
            <span className="highlight">strength</span> of the
            <br />
            community
          </h1>
          <p>
            1 on 1 personalised learning platform <br />
            for kids to interact and get the most
            <br /> out of virtual classes
          </p>
        </div>
        <div className="overview__logo">
          <img src={kids} />
        </div>
      </div>
    </div>
  );
}

export default Overview;
