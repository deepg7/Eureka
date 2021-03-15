import React from "react";
import { Link } from "react-router-dom";
import "../Styling/Classroomheader.css";

function Classroomheader() {
  return (
    <div className="header">
      <div className="header__right">
        <a href="https://i.pinimg.com/736x/16/0f/f3/160ff3fd9176a0d9d4a72f5f4977d492.jpg">
          <div className="right__timetable">Timetable</div>
        </a>
        <Link to="/homework">
          <div className="right__homework">Homework</div>
        </Link>
        <a href="https://shah-tanmay.github.io/quiz/game.html" target="__blank">
          <div className="right__quiz">Quiz</div>
        </a>
        <div className="right__profile">Profile</div>
      </div>
    </div>
  );
}

export default Classroomheader;
