import React, { Component } from "react";
import { firestore } from "../firebase";
import { getIDsAndDocs } from "../utilities";
import { withRouter } from "react-router";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import moment from "moment";
import Button from "@material-ui/core/Button";

class UserPage extends Component {
  state = {
    user: null,
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    avatar: "",
    gender: "",
    mobileNumber: "",
    isActive: false
  };

  get userId() {
    return this.props.match.params.id;
  }
  get userRef() {
    return firestore.doc(`Users/${this.userId}`);
  }
  unsubscribeFromUsers = null;
  componentDidMount = async () => {
    this.unsubscribeFromUsers = this.userRef.onSnapshot(snapshot => {
      if (!snapshot.exists) {
        return;
      } else {
        const user = getIDsAndDocs(snapshot);

        this.setState({ user: user }, () => {
          const {
            firstName,
            lastName,
            email,
            avatar,
            dob,
            mobileNumber,
            gender
          } = this.state.user;
          let temp = moment(dob.toDate()).calendar();
          this.setState({
            firstName,
            lastName,
            email,
            avatar,
            dob: temp,
            mobileNumber,
            gender
          });
        });
      }
    });
  };

  componentWillUnmount() {
    this.unsubscribeFromUsers = null;
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    console.log(this.state.dob);
    const myDate = moment(this.state.dob, "MMDDYYYY").toDate();
    this.userRef
      .update({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.lastName,
        dob: myDate,
        gender: this.state.gender,
        mobileNumber: this.state.mobileNumber,
        avatar: this.state.avatar
      })
      .then(() => {
        this.setState({ isActive: true }, () => {
          setTimeout(() => {
            this.setState({ isActive: false });
          }, 2500);
        });
      });
  };

  handleDelete = () => {
    this.userRef.delete().then(() => {
      this.props.history.push("/");
    });
  };

  render() {
    if (this.state.user) {
      const {
        firstName,
        lastName,
        email,
        avatar,
        dob,
        mobileNumber,
        gender
      } = this.state.user;

      let temp = moment(dob.toDate()).calendar();
      return (
        <>
          <Grid style={{ marginTop: "5%" }}>
            <TextField
              id="outlined-helperText"
              label="First Name"
              defaultValue={`${firstName}`}
              margin="normal"
              variant="outlined"
              name="firstName"
              onChange={this.handleChange}
            />
          </Grid>
          <Grid>
            <TextField
              id="outlined-helperText"
              label="Last Name"
              defaultValue={`${lastName}`}
              margin="normal"
              variant="outlined"
              name="lastName"
              onChange={this.handleChange}
            />
          </Grid>
          <Grid>
            <TextField
              id="outlined-helperText"
              label="Email"
              defaultValue={`${email}`}
              margin="normal"
              variant="outlined"
              name="email"
              onChange={this.handleChange}
            />
          </Grid>
          <Grid>
            <TextField
              id="outlined-helperText"
              label="Avatar"
              defaultValue={`${avatar}`}
              margin="normal"
              variant="outlined"
              name="avatar"
              onChange={this.handleChange}
            />
          </Grid>
          <Grid>
            <TextField
              id="outlined-helperText"
              label="DOB"
              defaultValue={`${temp}`}
              margin="normal"
              variant="outlined"
              name="dob"
              onChange={this.handleChange}
            />
          </Grid>
          <Grid>
            <TextField
              id="outlined-helperText"
              label="Mobile Number"
              defaultValue={`${mobileNumber}`}
              margin="normal"
              variant="outlined"
              name="mobileNumber"
              onChange={this.handleChange}
            />
          </Grid>
          <Grid>
            <TextField
              id="outlined-helperText"
              label="Gender"
              defaultValue={`${gender}`}
              margin="normal"
              variant="outlined"
              name="gender"
              onChange={this.handleChange}
            />
          </Grid>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}
          >
            Save
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            onClick={this.handleDelete}
          >
            Delete
          </Button>
          {this.state.isActive ? <p>Saved!</p> : <p></p>}
        </>
      );
    } else {
      return <h1>User Deleted!</h1>;
    }
  }
}
export default withRouter(UserPage);
