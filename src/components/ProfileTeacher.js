import React from "react";
import { Link } from "react-router-dom";
import "../Styling/ProfileTeacher.css";
import { db, auth } from "./firebase";
import bee1 from "./images/bee1.png";
import bee2 from "./images/bee2.png";

function ProfileTeacher() {
  function run() {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    auth.createUserWithEmailAndPassword(email, pass).then((auth) => {
      if (auth) {
        console.log("signed up");
        console.log(auth.user.email);
      }
    });

    const name =
      document.getElementById("firstname").value +
      " " +
      document.getElementById("lastname").value;
    const std = document.getElementById("std").value;
    const contact = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const subject = document.getElementById("class").value;
    //const character = document.getElementById("tcharacter").value;
    db.collection("teachers").doc(name).set({
      name: name,
      std: std,
      phone: contact,
      address: address,
      subject: subject,
    });
  }
  return (
    <div className="main">
      <div className="honeybee1">
        <img src={bee1} />
      </div>
      <div className="main__title__teacher">
        <h1>Lead the Classroom!</h1>
      </div>
      <div className="profilestudent">
        <div className="names">
          {" "}
          <input type="text" placeholder="Firstname" id="firstname" required />
          <input type="text" placeholder="Lastname" id="lastname" required />
        </div>
        <br />
        <div className="std">
          <input type="text" placeholder="Class" id="std" required />
          <input type="text" placeholder="Subject" id="class" required />
        </div>
        <div className="address ">
          <input
            type="text"
            placeholder="Address"
            id="address"
            className="full-width"
            required
          />
        </div>
        <div className="phone">
          <input
            type="text"
            placeholder="Phone"
            id="phone"
            className="full-width"
            required
          />
        </div>
        <div className="email">
          <input
            type="text"
            placeholder="Email"
            id="email"
            className="full-width"
            required
          />
        </div>
        <div className="password">
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="full-width"
            required
          />
        </div>
        <div className="button">
          <Link to="/meets">
            <button className="btn" onClick={run}>
              Let's Go
            </button>
          </Link>
        </div>
        <div className="bee2">
          <img src={bee2} />
        </div>
      </div>
    </div>
  );
}

export default ProfileTeacher;
