import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles/makeStyles";
import logoimage from "../images/logoimagewhite.png";
import { Translate } from "@mui/icons-material";

const useStyles = makeStyles({
  footer: {
    height: "55vh",
    paddingTop: "4rem",
    paddingBottom: "3rem",
  },

  logo: {
    width: "7rem",
    transform: "Translate(-1.5rem , -2rem)",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.footer}>
      <Grid container xs={12}>
        <Grid item xs={1} />
        <Grid item xs={1}>
          <img src={logoimage} alt="alt" className={classes.logo} />
        </Grid>
        <Grid item xs={2}>
          <Typography variant="subtitle1" color="primary" gutterBottom>
            VANCOUVER
          </Typography>
          <Typography variant="body2" color="primary" gutterBottom>
            400-401 West Georgia Street Vancouver, BC, Canada, V6B 5A1
          </Typography>
          <Typography
            variant="subtitle1"
            color="primary"
            gutterBottom
            style={{ marginTop: "1.5rem" }}
          >
            BERLIN
          </Typography>
          <Typography variant="body2" color="primary" gutterBottom>
            Friedrichstraße 68 10117 Berlin, Germany
          </Typography>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={2}>
          <Typography variant="subtitle1" color="primary" gutterBottom>
            FOLLOW US ON
          </Typography>
          <Typography variant="body2" color="primary" gutterBottom>
            Twitter
          </Typography>
          <Typography variant="body2" color="primary" gutterBottom>
            Facebook
          </Typography>
          <Typography variant="body2" color="primary" gutterBottom>
            LinkedIn
          </Typography>
          <Typography variant="body2" color="primary" gutterBottom>
            Instagram
          </Typography>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={3}>
          <Typography variant="subtitle1" color="primary" gutterBottom>
            ABOUT US
          </Typography>
          <Typography variant="body2" color="primary" gutterBottom>
            Since 2009, Unbounce has helped marketers and digital agencies
            increase website and campaign conversions.
          </Typography>
          <Typography
            variant="body2"
            color="primary"
            gutterBottom
            style={{ marginTop: "1.5rem" }}
          >
            © 2018 Unbounce All rights reserved
          </Typography>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </Box>
  );
};

export default Footer;
