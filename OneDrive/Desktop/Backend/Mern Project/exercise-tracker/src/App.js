import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import {BrowserRouter as Router,Route} from "react-router-dom"
import Navbar from "./componets/Navbar";
import ExerciseList from "./componets/ExerciseList"
import Edit from "./componets/Edit"
import CreateUser from "./componets/CreateUser";
import Create from "./componets/CreateExercise"
function App() {
  return (
    <Router>
      
      {/* <div className="container"> */}
      <Navbar></Navbar>
      <Route path="/" exact component={ExerciseList}></Route>
      <Route path="/edit/:id" component={Edit}></Route>
      <Route path="/create" component={Create}></Route>
      <Route path="/user" component={CreateUser}></Route>
      {/* </div> */}
      
    </Router>
  );
}

export default App;
