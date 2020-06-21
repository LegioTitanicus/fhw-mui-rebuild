import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";

import CenteredTabs from "./CenteredTabs";
import SwipeableDrawer from "./SwipeableDrawer";
import theme from "./theme";

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

  const isSmall = useMediaQuery(theme.breakpoints.up("sm"));

  const pages = [
    { key: 1, title: "Home" },
    { key: 2, title: "About" },
    { key: 3, title: "Impact" },
    { key: 4, title: "Letter" },
    { key: 5, title: "Plasma" },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    console.log("toggle menu");
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {isSmall ? (
            <Grid container justify="center">
              <CenteredTabs pages={pages} />
            </Grid>
          ) :
             <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )
          <Hidden smUp>
            <SwipeableDrawer
              pages={pages}
              handleDrawerToggle={handleDrawerToggle}
            />
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Topnav;
