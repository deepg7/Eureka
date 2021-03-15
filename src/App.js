import React from "react";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import ProfileStudent from "./components/ProfileStudent";
import ProfileTeacher from "./components/ProfileTeacher";
import SigninStudent from "./components/SigninStudent";
import SigninTeacher from "./components/SigninTeacher";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Classroomheader from "./components/Classroomheader";
import Classroomtitle from "./components/Classroomtitle";
import ClassroomCards from "./components/ClassroomCards";
import Title from "./components/Title";
import Overview from "./components/Overview";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Meet from "./components/Meet";
import Assignments from "./components/Assignments";
import AssignmentCard from "./components/AssignmentCard";
import Homework from "./components/Homework";

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
          <Route path="/signupageteachers">
            <div className="signuppage">
              <SigninTeacher />
              <ProfileTeacher />
            </div>
          </Route>
          <Route path="/meets">
            <Header
              comp1={"Time Table"}
              comp2={"Update Marks"}
              comp3={"Quiz"}
              comp4={"Profile"}
            />
            <Meet />
          </Route>
          <Route path="/assignments">
            <Header
              comp1={"Time Table"}
              comp2={"Update Marks"}
              comp3={"Quiz"}
              comp4={"Profile"}
            />
            <Assignments />
            <div className="row1">
              <AssignmentCard name={"Kavya"} />
              <AssignmentCard name={"Meher"} />
              <AssignmentCard name={"Ayush"} />
            </div>
            <div className="row2">
              <AssignmentCard name={"Vatsal"} />
              <AssignmentCard name={"Rohan"} />
              <AssignmentCard name={"Sanya"} />
            </div>
            <div className="row3">
              <AssignmentCard name={"Dwija"} />
              <AssignmentCard name={"Deep"} />
              <AssignmentCard name={"Rashi"} />
            </div>
          </Route>
          <Route path="/homework">
            <Header
              comp1={"Timetable"}
              comp2={"Classroom"}
              comp3={"Quiz"}
              comp4={"Profile"}
            />
            <Homework />
          </Route>
          <Route path="/">
            <Header
              comp1={"About Us"}
              comp2={"Overview"}
              comp3={"Sign Up"}
              comp4={"Team"}
            />
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
