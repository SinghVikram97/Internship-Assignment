import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import Divider from "@material-ui/core/Divider";

import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { signOut } from "../firebase";
import Button from "@material-ui/core/Button";
import { UserListContext } from "../Providers/UserListProvider";
import UserDetails from "./UserDetails";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    marginTop: "20%"
  },
  inline: {
    display: "inline"
  },
  absolute: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(3)
  }
}));

export default function AlignItemsList() {
  const userList = useContext(UserListContext);

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <List className={classes.root}>
        {userList.map(user => {
          return (
            <UserDetails
              key={user.id}
              id={user.id}
              firstName={user.firstName}
              lastName={user.lastName}
              gender={user.gender}
              email={user.email}
              dob={user.dob}
              avatar={user.avatar}
              mobileNumber={user.mobileNumber}
            />
          );
        })}

        <Divider variant="inset" component="li" />
      </List>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="secondary"
        className={classes.submit}
        onClick={signOut}
      >
        Sign Out
      </Button>
      <Grid container justify="center">
        <Grid item>
          <Tooltip title="Add" placement="top-end">
            <Fab color="secondary" className={classes.absolute}>
              <Link to="/add" style={{ color: "white" }}>
                <AddIcon />
              </Link>
            </Fab>
          </Tooltip>
        </Grid>
      </Grid>
    </Container>
  );
}
