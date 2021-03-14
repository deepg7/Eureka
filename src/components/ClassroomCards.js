import React from "react";
import "../Styling/ClassroomCards.css";
import math1 from "./images/math1.png";
import math2 from "./images/math2.png";
import math3 from "./images/math3.png";
import science1 from "./images/science1.png";
import science2 from "./images/science2.png";
import science3 from "./images/science3.png";

function ClassroomCards() {
  return (
    <div className="mainsubjects">
      <div className="cards">
        <div className="card">
          <div className="math">
            <div className="title__math">Maths</div>
            <div className="stats">
              <img src={math1} />
            </div>
            <div className="root">
              <img src={math2} />
            </div>
            <div className="cube">
              <img src={math3} />
            </div>
            <div className="meeting">
              <button className="joinmeet">Join Meet</button>
              <button className="resources">Resources</button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="science">
            <div className="title__science">Science</div>
            <div className="planet">
              <img src={science1} />
            </div>
            <div className="atom">
              <img src={science2} />
            </div>
            <div className="benzene">
              <img src={science3} />
            </div>
            <div className="meeting">
              <button className="joinmeet__science">Join Meet</button>
              <button className="resources__science">Resources</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassroomCards;
