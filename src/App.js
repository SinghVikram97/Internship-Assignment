import React, { Component } from "react";
import "./App.css";
// import { Switch, Route } from "react-router-dom";
import Authentication from "./Components/Authentication";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Authentication></Authentication>
      </div>
    );
  }
}
