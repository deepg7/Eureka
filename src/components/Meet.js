import React from "react";
import "../Styling/Meet.css";
import { db, auth } from "./firebase";
import firebase from "firebase";
import { Link, Route } from "react-router-dom";

function Meet() {
  var student = db.collection("students");
  function tasks() {
    const desc = document.getElementById("assign__desc").value;
    const topic = document.getElementById("topic").value;
    const date = document.getElementById("date").value;

    const append = {
      completed: false,
      description: desc,
      dueDate: date,
      topic: topic,
    };
    student
      .where("std", "==", "12")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var id = doc.id;
          student.doc(id).update({
            tasks: firebase.firestore.FieldValue.arrayUnion(append),
          });
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }

  function set() {
    const meet = document.getElementById("enter__link").value;
    const desc = document.getElementById("meeting__desc").value;
    const name = document.getElementById("meet__name").value;
    student
      .where("std", "==", "12")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var id = doc.id;
          student.doc(id).update({
            meet: {
              meetURL: meet,
              description: desc,
              name: name,
            },
          });
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }
  return (
    <div className="meet">
      <div className="meet__header">
        <h1>Classroom</h1>
      </div>
      <div className="meet__cards">
        <div className="meet__card">
          <div className="title__meet1">Meets</div>
          <div className="title__input">
            <input
              type="text"
              id="meet__name"
              className="meet__name"
              placeholder="Meet Name"
            />
            <input
              type="text"
              id="meeting__desc"
              className="description"
              placeholder="Description"
            />
            <input
              type="text"
              id="enter__link"
              className="enter__link"
              placeholder="Enter Link"
            />
          </div>
          <div className="start__meet">
            <a href="https://deepg7.github.io/Jitsi-meet/">
              <button className="start__meet__button">Start Meet</button>
            </a>
            <button className="send__details" onClick={set}>
              Send Details
            </button>
          </div>
        </div>
        <div className="meet__card">
          <div className="title__meet2">Assignments</div>
          <div className="assign__input">
            <input
              type="text"
              id="topic"
              className="topic"
              placeholder="Topic"
            />
            <input
              type="text"
              id="assign__desc"
              className="assign__desc"
              placeholder="Description"
            />
            <input
              type="date"
              id="date"
              className="due__date"
              placeholder="Due Date"
            />
            <div className="assign__button">
              <Link to="/assignments">
                <button className="submissions">Submissions</button>
              </Link>
              <button className="assign__resources" onClick={tasks}>
                Assign
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meet;
