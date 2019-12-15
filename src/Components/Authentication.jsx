import React from "react";
import SignIn from "./SignIn";
import CurrentUser from "./CurrentUser";
const Authentication = ({ loading }) => {
  // const user = useContext(UserContext);
  const user = false;
  if (loading) return null;
  return <div>{user ? <CurrentUser {...user} /> : <SignIn />}</div>;
};
export default Authentication;
