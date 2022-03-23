import React from "react";
import { AppBar, Box, Toolbar, Button, IconButton } from "@mui/material";

import makeStyles from "@mui/styles/makeStyles/makeStyles";
import { useTheme, useMediaQuery } from "@mui/material";
import logo from "../images/logoimage.png";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingRight: "8%",
    paddingLeft: "8%",
    paddingTop: "2rem",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      paddingTop: "0rem",
    },
  },
  icon: {
    marginRight: "2rem",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      width: "100vw",
      marginRight: "0rem",
    },
  },

  buttons: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "space-evenly",
      textAlign: "center",
      width: "100vw",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const MQmd = useMediaQuery(theme.breakpoints.down("md")); //900px

  return (
    <Box>
      <AppBar position="absolute" color="transparent" elevation={0}>
        <Toolbar className={classes.toolbar}>
          <Box className={classes.icon}>
            <img src={logo} alt="logo" />
          </Box>
          <Box sx={{ flexGrow: 1 }} className={classes.buttons}>
            <Button>Services</Button>
            <Button>Process</Button>
            <Button>Clients</Button>
            <Button>Team</Button>
          </Box>
          {!MQmd && (
            <Button variant="outlined" size="large">
              Request A Call Back
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
