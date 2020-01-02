import React from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, IconButton } from "@material-ui/core";
import { classes } from "istanbul-lib-coverage";
import SignUP from "./signup";
import Home from "./HOme";
import HOme from "./HOme";
import Signup from "./signup";
const style = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: "100%"
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 0
  },
  appbar: {
    background: "#2BB67C !important"
  }
}));
const NavBar = () => {
  const classess = style();
  return (
    <Router>
      <AppBar className={classess.appbar} position="static" elevation={0}>
        <Toolbar>
          <IconButton>
            <Link to="/">Home</Link>
          </IconButton>
          <IconButton>
            <Link to="/signup">SignUP</Link>
          </IconButton>
        </Toolbar>
      </AppBar>
      <switch>
        <Route exact path="/" component={HOme} />
        <Route path="/signup" component={Signup} />
      </switch>
    </Router>
  );
};

export default NavBar;
