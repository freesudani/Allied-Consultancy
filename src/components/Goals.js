import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles/makeStyles";
import image2 from "../images/pexels-burak-kebapci-187041.jpg";
import image1 from "../images/pexels-fauxels-3184338.jpg";
import imagesvg1 from "../images/cat-diesel-power.svg";
import imagesvg2 from "../images/obey.svg";
import imagesvg3 from "../images/diesel-power.svg";
import imagesvg4 from "../images/giant-bicycles.svg";
import imagesvg5 from "../images/giant.svg";
import imagesvg6 from "../images/diesel-5.svg";
import imagesvg7 from "../images/obey-the-giant.svg";
import imagesvg8 from "../images/lacoste-1.svg";

const useStyles = makeStyles({
  goals: {
    paddingTop: "2rem",
    paddingBottom: "3rem",
    width: "100vw",
    backgroundColor: "#e1f5fe",
  },
  image: {
    width: "32rem",
    height: "20rem",
  },

  text: {
    marginTop: "1rem",
  },

  paragraph: {
    width: "30rem",
  },

  clients: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },

  svgimage: {
    width: "5rem",
    margin: "auto",
  },
});

const Goals = () => {
  const classes = useStyles();
  return (
    <Box className={classes.goals}>
      <Grid
        container
        xs={12}
        spacing={5}
        direction="row-reverse"
        justifyContent="center"
        alignItems="center"
        style={{ transform: "translate(4rem)" }}
      >
        <Grid item xs={6}>
          <img src={image1} alt="one" className={classes.image} />
        </Grid>
        <Grid item xs={6} className={classes.text}>
          <Typography variant="special" color="primary" gutterBottom>
            TOOLKIT
          </Typography>
          <Typography variant="h4" color="primary" gutterBottom>
            Our Services
          </Typography>
          <Typography
            variant="body1"
            textAlign="justify"
            color="primary"
            className={classes.paragraph}
            gutterBottom
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            eveniet, eligendi dolorem est reprehenderit veniam et necessitatibus
            molestiae, doloribus, magni placeat! Quam est soluta, excepturi
            velit molestias amet non molestiae.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={5}
        justifyContent="center"
        alignItems="center"
        style={{ paddingTop: "2rem", transform: "translate(4rem)" }}
      >
        <Grid item xs={6}>
          <img src={image2} alt="two" className={classes.image} />
        </Grid>
        <Grid item xs={6} className={classes.text}>
          <Typography variant="special" color="primary" gutterBottom>
            EXPERIENCE
          </Typography>
          <Typography variant="h4" color="primary" gutterBottom>
            Our Process
          </Typography>
          <Typography
            variant="body1"
            textAlign="justify"
            color="primary"
            className={classes.paragraph}
            gutterBottom
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            eveniet, eligendi dolorem est reprehenderit veniam et necessitatibus
            molestiae, doloribus, magni placeat! Quam est soluta, excepturi
            velit molestias amet non molestiae.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        xs={12}
        justifyContent="center"
        alignItems="center"
        className={classes.clients}
      >
        <Typography
          variant="special"
          color="primary"
          textAlign="center"
          gutterBottom
        >
          CLIENTS THAT LOVE US
        </Typography>
      </Grid>
      <Grid
        container
        xs={12}
        spacing={3}
        justifyContent="center"
        alignItems="center"
        style={{ transform: "translate(5.1rem)" }}
      >
        <Grid item xs={3} justifyContent="center">
          <img src={imagesvg1} alt="svg1" className={classes.svgimage} />
        </Grid>
        <Grid item xs={3} className={classes.svgcontainer}>
          <img src={imagesvg2} alt="svg2" className={classes.svgimage} />
        </Grid>
        <Grid item xs={3} className={classes.svgcontainer}>
          <img src={imagesvg3} alt="svg3" className={classes.svgimage} />
        </Grid>
        <Grid item xs={3} className={classes.svgcontainer}>
          <img src={imagesvg4} alt="svg4" className={classes.svgimage} />
        </Grid>
        <Grid item xs={3} className={classes.svgcontainer}>
          <img src={imagesvg5} alt="svg5" className={classes.svgimage} />
        </Grid>
        <Grid item xs={3} className={classes.svgcontainer}>
          <img src={imagesvg6} alt="svg6" className={classes.svgimage} />
        </Grid>
        <Grid item xs={3} className={classes.svgcontainer}>
          <img src={imagesvg7} alt="svg7" className={classes.svgimage} />
        </Grid>
        <Grid item xs={3} className={classes.svgcontainer}>
          <img src={imagesvg8} alt="svg8" className={classes.svgimage} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Goals;
