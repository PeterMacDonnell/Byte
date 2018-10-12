import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Room from "./pages/RoomPage";
import NoMatch from "./pages/NoMatch";
import DocumentTitle from "react-document-title";
import {Col,Row,Grid} from "react-bootstrap";
import Navbar from "./Components/Navbar/Navbar";
import Choice from "./Components/Choice/Choice";
import Choiceone from "./Components/Choice/Choiceone";
import Match from "./Components/Match/Match.js";
import Login from "./Components/Login/Login.js";
import Modal from "./Components/Modal/Modal.js";




const App = () => (
  <DocumentTitle title="Byte App">
  <Grid>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path = "/test" component={Room}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </Router>  
    </Grid>
  </DocumentTitle>
);



export default App;