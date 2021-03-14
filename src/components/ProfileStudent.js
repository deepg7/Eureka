import React from "react";
import "../Styling/ProfileStudent.css";
import bee1 from "./images/bee1.png";
import bee2 from "./images/bee2.png";
import { db, auth } from "./firebase";

function ProfileStudent() {
  const run = () => {
    const name =
      document.getElementById("firstname").value +
      " " +
      document.getElementById("std").value +
      " " +
      document.getElementById("lastname").value;
    const std = document.getElementById("class").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    //const character = document.getElementById("character").value;
    db.collection("students").doc(name).set({
      name: name,
      std: std,
      phone: phone,
      address: address,
      email: email,
      tasks: [],
      //character: character,
    });
  };
  return (
    <div className="main">
      <div className="honeybee1">
        <img src={bee1} />
      </div>
      <div className="main__title">
        <h1>Join the Classroom!</h1>
      </div>
      <div className="profilestudent">
        <div className="names">
          {" "}
          <input type="text" placeholder="Firstname" id="firstname" />
          <input type="text" placeholder="Lastname" id="lastname" />
        </div>
        <br />
        <div className="std">
          <input type="text" placeholder="Middlename" id="std" />
          <input type="text" placeholder="Class" id="class" />
        </div>
        <div className="address ">
          <input
            type="text"
            placeholder="Address"
            id="address"
            className="full-width"
          />
        </div>
        <div className="phone">
          <input
            type="text"
            placeholder="Phone"
            id="phone"
            className="full-width"
          />
        </div>
        <div className="email">
          <input
            type="text"
            placeholder="Email"
            id="email"
            className="full-width"
          />
        </div>
        <div className="password">
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="full-width"
          />
        </div>
        <div className="button">
          <button className="btn" onClick={run}>
            Let's Go
          </button>
        </div>
        <div className="bee2">
          <img src={bee2} />
        </div>
      </div>
    </div>
  );
}

export default ProfileStudent;
