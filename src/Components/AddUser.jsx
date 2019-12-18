import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { firestore } from "../firebase";
import moment from "moment";
import Button from "@material-ui/core/Button";
export default class AddUser extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    avatar: "",
    gender: "",
    mobileNumber: "",
    isActive: false
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = () => {
    console.log(this.state.dob);
    const myDate = moment(this.state.dob, "MMDDYYYY").toDate();
    const {
      firstName,
      lastName,
      email,
      avatar,
      mobileNumber,
      gender
    } = this.state;
    firestore
      .collection("Users")
      .add({
        firstName,
        lastName,
        email,
        avatar,
        dob: myDate,
        mobileNumber,
        gender
      })
      .then(() => {
        this.setState({ isActive: true }, () => {
          setTimeout(() => {
            this.setState({ isActive: false });
          }, 2500);
        });
      });
  };
  render() {
    return (
      <>
        <Grid style={{ marginTop: "5%" }}>
          <TextField
            id="outlined-helperText"
            label="First Name"
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
            margin="normal"
            variant="outlined"
            name="avatar"
            onChange={this.handleChange}
          />
        </Grid>
        <Grid>
          <TextField
            id="outlined-helperText"
            label="DOB (MMDDYYYY)"
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
          ADD
        </Button>
        {this.state.isActive ? <p>Saved!</p> : <p></p>}
      </>
    );
  }
}
