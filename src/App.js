import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
// import { Switch, Route } from "react-router-dom";
import Authentication from "./Components/Authentication";
import UserPage from "./Components/UserPage";
import AddUser from "./Components/AddUser";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Authentication} />
          <Route exact path="/user/:id" component={UserPage} />
          <Route exact path="/add" component={AddUser} />
        </Switch>
      </div>
    );
  }
}
