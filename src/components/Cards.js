import React from "react";
import "../Styling/Cards.css";
import teacher from "./images/Teacher.png";
import student from "./images/student.png";
import bees2 from "./images/bees2.png";
import Ellipse50 from "./images/Ellipse50.png";
import Ellipse52 from "./images/Ellipse52.png";
import Ellipse58 from "./images/Ellipse58.png";
import Ellipse59 from "./images/Ellipse59.png";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <div className="main__card">
      <img src={Ellipse50} className="Ellipse50" />
      <img src={Ellipse52} className="Ellipse53" />
      <img src={Ellipse58} className="Ellipse58" />
      <img src={Ellipse59} className="Ellipse59" />
      <div className="bees2">
        <img src={bees2} />
      </div>
      <div className="cards1">
        <div className="teacher">
          <div className="card1">
            <img src={teacher} />
            <p>Are you a teacher?</p>
            <div className="signup">
              <Link to="/signupageteachers">
                <button className="signup_t">Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="student">
          <div className="card1">
            <img src={student} />
            <p>Are you a student?</p>
            <div className="signup">
              <Link to="/signupagekids">
                <button className="signup_s">Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
