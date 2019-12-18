import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import ListItem from "@material-ui/core/ListItem";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";

import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

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
  fab: {
    margin: theme.spacing(1),
    height: "2%",
    width: "12%"
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default function UserDetails(props) {
  const classes = useStyles();
  const {
    id,
    firstName,
    lastName,
    email,
    avatar,
    dob,
    mobileNumber,
    gender
  } = props;
  let temp = moment(dob.toDate())
    .calendar()
    .split("")
    .filter(char => char !== "/")
    .join("");

  let age = moment().diff(moment(temp, "MMDDYYYY"), "years");
  return (
    <ListItem alignItems="flex-start" key={id}>
      <ListItemAvatar>
        <Avatar alt={`${firstName}`} src={avatar} />
      </ListItemAvatar>

      <ListItemText
        primary={`${firstName} ${lastName}`}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            ></Typography>
            <p>{`${gender}`}</p>
            <p>{`${age} years`}</p>
            <p>{`${email}`}</p>
            <p>{`${mobileNumber}`}</p>
          </React.Fragment>
        }
      />

      <Fab color="secondary" aria-label="edit" className={classes.fab}>
        <Link to={`user/${id}`} style={{ color: "white" }}>
          <EditIcon />
        </Link>
      </Fab>
    </ListItem>
  );
}
