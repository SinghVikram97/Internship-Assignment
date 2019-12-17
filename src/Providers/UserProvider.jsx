import React, { Component, createContext } from "react";
import { auth } from "firebase";
export const UserContext = createContext();
export default class UserProvider extends Component {
  state = {
    user: null
  };
  unsubscribeFromAuth = null;
  componentDidMount = () => {
    this.unsubscribeFromAuth = auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  };
  render() {
    const { user } = this.state;
    const { children } = this.props;
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
  }
}
