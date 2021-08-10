import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"

import AddRecord from "./components/AddRecord";
import RecordsList from "./components/RecordsList";

const App = () => ( 
  <Router>
    <Link to={"/add"} className="nav-link">
      Add
    </Link>
    <p>Hello world</p> 
    <Route exact path={["/", "/records"]} component={RecordsList} />
    <Route exact path="/add" component={AddRecord} />
  </Router>
)

export default App;
