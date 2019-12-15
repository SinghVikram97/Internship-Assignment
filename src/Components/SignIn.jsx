import React, { Component } from "react";
import LoginPage from "./LoginPage";
export default class SignIn extends Component {
  handleClick = e => {
    console.log(e.target.value);
  };
  render() {
    return <LoginPage handleClick={this.handleClick} value="hello" />;
  }
}
