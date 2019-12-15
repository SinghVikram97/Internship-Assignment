import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import SignIn from "./Components/SignIn";
import ProfilePage from "./Components/CurrentUser";
import Authentication from "./Components/Authentication";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Authentication} />
        </Switch>
      </div>
    );
  }
}
