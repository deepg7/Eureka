import React from "react";
import "../Styling/ClassroomCards.css";
import { db, auth } from "./firebase";
import math1 from "./images/math1.png";
import math2 from "./images/math2.png";
import math3 from "./images/math3.png";
import science1 from "./images/science1.png";
import science2 from "./images/science2.png";
import science3 from "./images/science3.png";

function ClassroomCards() {
  function math() {
    window.open(
      "https://docs.google.com/document/d/1C4ZHRat9g5ZpMW1_5B_iK0-_GkerPZQUAy0IQoglJsU/edit?usp=sharing"
    );
  }
  function sci() {
    window.open(
      "https://docs.google.com/document/d/1CN4iZtGl_2bnCzB8szbyKqXq-Z2_VtdOOjwZPEQ54eA/edit?usp=sharing"
    );
  }
  function join() {
    var student = db.collection("students");
    student
      .where("email", "==", "deepgandhi151@gmail.com")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var link = doc.data().meet.meetURL;
          window.open(link);
          console.log();
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }
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
              <button className="joinmeet" onClick={join}>
                Join Meet
              </button>
              <button className="resources" onClick={math}>
                Resources
              </button>
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
              <button className="joinmeet__science" onClick={join}>
                Join Meet
              </button>
              <button className="resources__science" onClick={sci}>
                Resources
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassroomCards;
