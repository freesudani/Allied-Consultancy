import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import makeStyles from "@mui/styles/makeStyles/makeStyles";

const useStyles = makeStyles({
  menuicon: {
    display: "none",
  },
  icon: {
    marginRight: "2rem",
  },
  toolbar: {
    paddingRight: "8%",
    paddingLeft: "8%",
    paddingTop: "2rem",
  },
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <Box>
      <AppBar position="absolute" color="transparent" elevation={0}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            className={classes.menuicon}
          >
            <MenuIcon />
          </IconButton>
          <Box className={classes.icon}>
            <Typography>Icon</Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Button>Services</Button>
            <Button>Process</Button>
            <Button>Clients</Button>
            <Button>Team</Button>
          </Box>
          <Button variant="outlined" size="large">
            Request A Call Back
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;