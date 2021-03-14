import React from "react";
import "./App.css";
import Header from "./components/Header";
import ProfileStudent from "./components/ProfileStudent";
import SigninStudent from "./components/SigninStudent";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Classroomheader from "./components/Classroomheader";
import Classroomtitle from "./components/Classroomtitle";
import ClassroomCards from "./components/ClassroomCards";
import Title from "./components/Title";
import Overview from "./components/Overview";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/classroom">
            <Classroomheader />
            <Classroomtitle />
            <ClassroomCards />
          </Route>
          <Route path="/signupagekids">
            <div className="signuppage">
              <SigninStudent />
              <ProfileStudent />
            </div>
          </Route>
          <Route path="/">
            <Header />
            <Title />
            <Overview />
            <Cards />
            <Footer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
