import React from "react";
import "../Styling/AssignmentCard.css";

function AssignmentCard({ name }) {
  return (
    <div className="assign__card">
      <div className="assign__name">
        <p>{name}</p>
      </div>
    </div>
  );
}

export default AssignmentCard;
