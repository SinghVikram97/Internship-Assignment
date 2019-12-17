// import React, { useContext } from "react";
import React, { useContext } from "react";
import SignIn from "./SignIn";
import CurrentUser from "./CurrentUser";
import { UserContext } from "../Providers/UserProvider";
const Authentication = ({ loading }) => {
  const user = useContext(UserContext);
  if (loading) {
    return null;
  }

  console.log(user);
  return <div>{user ? <CurrentUser {...user} /> : <SignIn />}</div>;
};
export default Authentication;
