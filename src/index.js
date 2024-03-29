import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import UserProvider from "./Providers/UserProvider";
import UserListProvider from "./Providers/UserListProvider";
import "cors";

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <UserListProvider>
        <App />
      </UserListProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
