import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const Styles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

function Signup() {
  const reg = {
    id: "",
    name: "",
    title: ""
  };
  const [regg, setRegg] = useState({ ...reg });
  const classes = Styles();

  
  const updatestate = e => {
    setRegg({ ...regg, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="of">
        <div>
          <TextField
            name="id"
            placeholder="id"
            onChange={updatestate}
            id="standard-error"
          ></TextField>
        </div>
        <div>
          <TextField
            name="name"
            placeholder="Name"
            onChange={updatestate}
            id="standard-error"
          ></TextField>
        </div>
        <div>
          <TextField
            name="title"
            placeholder="title"
            onChange={updatestate}
          ></TextField>
        </div>
        <div>
          <Button variant="contained" color="secondary">
            Register
          </Button>
        </div>
        <h5>{regg.id}</h5>
        <h5>{regg.name}</h5>
        <h5>{regg.title}</h5>
      </form>
    </div>
  );
}
export default Signup;
