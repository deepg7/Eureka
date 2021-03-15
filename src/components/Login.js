import React, { useState } from "react";
import { auth } from "./firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          console.log("Logged IN");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          console.log("First time IN");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img />
      </div>
      <div className="login__form">
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={register}>Register</button>
        <button onClick={signIn}>Sign In</button>
      </div>
    </div>
  );
}

export default Login;
