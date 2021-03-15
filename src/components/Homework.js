import React from "react";
import "../Styling/Homework.css";
import signs from "./images/signs.png";
import microscope from "./images/microscope.png";

function Homework() {
  return (
    <div className="homework__main">
      <div className="homework__title">
        <h1>HomeWork</h1>
      </div>
      <div className="homework_subjects">
        <div className="homework_maths">
          <div className="content_maths_1">
            <h3>Maths</h3>
            <br />
            <p>Ms. Nikita</p>
            <p>The questions are to be done from your textbook, page no.:52.</p>
          </div>
          <div className="content_maths_2">
            <p>
              Due Date <br />
              22 March 2021
            </p>
            <div className="updated">
              <button className="updated__button">Updated</button>
            </div>
          </div>
          <div className="content_maths_3">
            <img src={signs} />
          </div>
        </div>
        <div className="homework_science">
          <div className="content_science_1">
            <h3>Science</h3>
            <br />
            <p>Ms. Garima</p>
            <p>The questions are to be done from your textbook, page no.:52.</p>
          </div>
          <div className="content_science_2">
            <p>
              Due Date <br />
              22 March 2021
            </p>
            <div className="updated__science">
              <button className="updated_science_button">Updated</button>
            </div>
          </div>
          <div className="content_science_3">
            <img src={microscope} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homework;