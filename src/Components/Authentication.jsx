// import React, { useContext } from "react";
import SignIn from "./SignIn";
import CurrentUser from "./CurrentUser";
import { auth } from "firebase";
// import { UserContext } from "../Providers/UserProvider";
// const Authentication = ({ loading }) => {
//   const user = useContext(UserContext);
//   if (loading) return null;
//   return <div>{user ? <CurrentUser {...user} /> : <SignIn />}</div>;
// };
// export default Authentication;
import React, { Component } from "react";

export default class Authentication extends Component {
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
    const user = this.state.user;
    return <div>{user ? <CurrentUser {...user} /> : <SignIn />}</div>;
  }
}
