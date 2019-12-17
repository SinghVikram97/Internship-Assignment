import React, { Component } from "react";
import { signOut } from "../firebase";

export default class CurrentUser extends Component {
  render() {
    return (
      <>
        <h1>This is your profile page!</h1>
        <button onClick={signOut}>Sign Out</button>
      </>
    );
  }
}
