import React from "react";
import "../Styling/Homework.css";
import signs from "./images/signs.png";
import microscope from "./images/microscope.png";
import { db, auth } from "./firebase";
import firebase from "firebase";

function Homework() {
  var student = db.collection("students");
  function pic() {
    const file = document.getElementById("upload__file").files[0];
    const email = "deepgandhi151@gmail.com";
    const name = new Date() + "-" + file.name;
    const task = firebase.storage().ref(name).put(file);

    task
      .then((snapshot) => snapshot.ref.getDownloadURL())
      .then((url) => {
        console.log(url);
        alert("Successful!");
        student
          .where("email", "==", email)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              var id = doc.id;
              student.doc(id).update({
                urls: firebase.firestore.FieldValue.arrayUnion(url),
              });
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      });
  }

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
              <input type="file" class="upload__file" id="upload__file" />
              <button className="updated__button" onClick={pic}>
                Upload
              </button>
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
              <input
                type="file"
                class="upload__file__sci"
                id="upload__file__sci"
              />
              <button className="updated__science__button" onClick={pic}>
                Upload
              </button>
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
