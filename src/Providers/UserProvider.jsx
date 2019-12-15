import React, { Component, createContext } from "react";
import { auth } from "firebase";

export const UserContext = createContext();

export default class UserProvider extends Component {
  state = {
    user: null
  };
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth().onAuthStateChanged(user => {
      console.log(user);
      this.setState({ user });
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  3;

  render() {
    const { user } = this.state;
    const { children } = this.props;
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
  }
}
