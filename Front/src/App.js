import React from "react";
import {
  BrowserRouter as Router
} from "react-router-dom"

import Header from "./components/Header";
import Chronometer from "./components/Chronometer";

const App = () => ( 
  <Router>
    <Header />
    <Chronometer />
    {/* <Route exact path={["/", "/records"]} component={RecordsList} />
    <Route exact path="/add" component={AddRecord} /> */}
  </Router>
)

export default App;
