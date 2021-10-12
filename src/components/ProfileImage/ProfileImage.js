import React, { useState } from "react";
import {
  Paper,
  FormControl,
  Input,
  InputLabel,
  Button
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import firebase from "../firebase";
import './ProfileImage.css'



const styles = (theme) => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

function ProfileImage(props) {
  const { classes } = props;

  const [ProfilePic, setProfilePic] = useState("");

  

  return (
    <main className={classes.main}>
      <Paper id="paper" className={classes.paper}>
        
          <AccountCircleIcon id="avatar2" />
      
        <form
          className={classes.form}
          onSubmit={(e) => e.preventDefault() && false}
        >
          <FormControl margin="normal" required fullWidth>
        

          </FormControl>

        
        </form>
      </Paper>
    </main>
  );

  }


export default withRouter(withStyles(styles)(ProfileImage));
