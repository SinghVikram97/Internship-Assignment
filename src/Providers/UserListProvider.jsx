import React, { Component, createContext } from "react";
import { getIDsAndDocs } from "../utilities";
import { firestore } from "../firebase";
export const UserListContext = createContext();

export default class UserListProvider extends Component {
  state = {
    userList: []
  };
  unsubscribeFromFirestore = null;
  componentDidMount = () => {
    this.unsubscribeFromFirestore = firestore
      .collection("Users")
      .onSnapshot(snapshot => {
        let userList = snapshot.docs.map(getIDsAndDocs);
        this.setState({ userList: userList });
      });
  };
  componentWillUnmount() {
    this.unsubscribeFromFirestore();
  }

  render() {
    const { userList } = this.state;
    const { children } = this.props;
    return (
      <UserListContext.Provider value={userList}>
        {children}
      </UserListContext.Provider>
    );
  }
}
