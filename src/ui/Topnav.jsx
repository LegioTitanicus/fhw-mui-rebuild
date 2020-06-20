import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CenteredTabs from "./CenteredTabs";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Topnav = () => {
  const classes = useStyles();
  const pages = [
    { key: 1, title: "Home" },
    { key: 2, title: "About" },
    { key: 3, title: "Impact" },
    { key: 4, title: "Letter" },
    { key: 5, title: "Plasma" },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Grid container justify="center">
            <CenteredTabs pages={pages} />
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Topnav;
