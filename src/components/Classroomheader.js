import React from "react";
import "../Styling/Classroomheader.css";

function Classroomheader() {
  return (
    <div className="header">
      <div className="header__right">
        <div className="right__timetable">Timetable</div>
        <div className="right__homework">Homework</div>
        <div className="right__quiz">Quiz</div>
        <div className="right__profile">Profile</div>
      </div>
    </div>
  );
}

export default Classroomheader;
