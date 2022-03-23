import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles/makeStyles";
import image1 from "../images/pexels-fauxels-3184432.jpg";
import image2 from "../images/pexels-gerd-altmann-21696.jpg";
import staff1 from "../images/45.jpg";
import staff2 from "../images/56.jpg";
import staff3 from "../images/71.jpg";
import staff4 from "../images/91.jpg";

const useStyles = makeStyles((theme) => ({
  team: {
    paddingTop: "2rem",
    paddingBottom: "3rem",
    width: "100vw",
    backgroundColor: "#e1f5fe",
  },
  imagebox: {
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      transform: "translate(-4rem)",
    },
  },

  image: {
    width: "32rem",
    height: "20rem",
  },

  text: {
    marginTop: "1rem",
    [theme.breakpoints.down("md")]: {
      width: "100vw",
      textAlign: "center",
      transform: "translate(-5rem)",
    },
  },

  paragraph: {
    width: "30rem",
    [theme.breakpoints.down("md")]: {
      transform: "translate(12rem)",
    },
    [theme.breakpoints.down("sm")]: {
      transform: "translate(3.8rem)",
    },
  },

  staff: {
    margin: "2.5rem auto",
  },
}));

const Team = () => {
  const classes = useStyles();
  const theme = useTheme();
  const MQmd = useMediaQuery(theme.breakpoints.down("md")); //900px

  return (
    <Box className={classes.team}>
      <Grid
        container
        xs={12}
        spacing={5}
        direction={MQmd ? "column-reverse" : "row"}
        justifyContent="center"
        alignItems="center"
        style={{ transform: "translate(4rem)" }}
      >
        <Grid item sm={12} md={6} className={classes.text}>
          <Typography variant="special" color="primary" gutterBottom>
            SAY HELLO TO
          </Typography>
          <Typography variant="h4" color="primary" gutterBottom>
            The Team
          </Typography>
          <Typography
            variant="body1"
            textAlign="justify"
            color="primary"
            className={classes.paragraph}
            gutterBottom
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est
            tellus, pulvinar ac iaculis vel, varius eu arcu. Integer id lectus
            posuere nisi dignissim gravida at ac justo. Ut nec dui rutrum,
            cursus mauris sed integer eu vel.
          </Typography>
        </Grid>
        <Grid item sm={12} md={6} className={classes.imagebox}>
          <img src={image1} alt="team" className={classes.image} />
        </Grid>
      </Grid>
      <Grid
        container
        xs={12}
        spacing={3}
        justifyContent="center"
        alignItems="center"
        style={{ transform: "translate(-4rem)" }}
        className={classes.staff}
      >
        <Grid
          item
          container
          md={6}
          xs={12}
          spacing={1}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={3} />
          <Grid item xs={3} style={{ textAlign: "right" }}>
            <img src={staff1} alt="staff" />
          </Grid>
          <Grid item xs={5}>
            <Typography variant="caption" color="primary">
              Maecenas fermentum sit amet urna vel porttitor. Mauris bibendum
              volutpat ultricies.
            </Typography>
            <Typography
              variant="body1"
              color="primary"
              style={{ marginTop: "1.5rem" }}
            >
              JOHN CLICK
            </Typography>
            <Typography variant="caption" color="primary">
              Marketing Director
            </Typography>
          </Grid>
          <Grid item xs={1} />
        </Grid>
        <Grid
          item
          container
          md={6}
          xs={12}
          spacing={1}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={3} />
          <Grid item xs={3} style={{ textAlign: "right" }}>
            <img src={staff2} alt="staff" />
          </Grid>
          <Grid item xs={5}>
            <Typography variant="caption" color="primary">
              Ut fermentum lacus a lacus vehicula, a ornare ante euismod nulla
              fermentum.
            </Typography>
            <Typography
              variant="body1"
              color="primary"
              style={{ marginTop: "1.5rem" }}
            >
              JANE BUTTON
            </Typography>
            <Typography variant="caption" color="primary">
              Art Director
            </Typography>
          </Grid>
          <Grid item xs={1} />
        </Grid>
        <Grid
          item
          container
          md={6}
          xs={12}
          spacing={1}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={3} />
          <Grid item xs={3} style={{ textAlign: "right" }}>
            <img src={staff3} alt="staff" />
          </Grid>
          <Grid item xs={5}>
            <Typography variant="caption" color="primary">
              Odio quis tempus euismod, eros libero efficitur augue, eu mattis
              nulla leo sit amet.
            </Typography>
            <Typography
              variant="body1"
              style={{ marginTop: "1.5rem" }}
              color="primary"
            >
              KAREN SCROLL
            </Typography>
            <Typography variant="caption" color="primary">
              Content Strategist
            </Typography>
          </Grid>
          <Grid item xs={1} />
        </Grid>
        <Grid
          item
          container
          md={6}
          xs={12}
          spacing={1}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={3} />
          <Grid item xs={3} style={{ textAlign: "right" }}>
            <img src={staff4} alt="staff" />
          </Grid>
          <Grid item xs={5}>
            <Typography variant="caption" color="primary">
              Morbi nec bibendum ante. Curabitur sed ullamcorper turpis, id
              blandit mi.
            </Typography>
            <Typography
              variant="body1"
              color="primary"
              style={{ marginTop: "1.5rem" }}
            >
              JAMES HOVER
            </Typography>
            <Typography variant="caption" color="primary">
              Campaign Manager
            </Typography>
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </Grid>
      <Grid
        container
        xs={12}
        spacing={5}
        justifyContent="center"
        alignItems="center"
        style={{ transform: "translate(4rem)" }}
      >
        <Grid item sm={12} md={6} className={classes.imagebox}>
          <img src={image2} alt="hustle" className={classes.image} />
        </Grid>
        <Grid item sm={12} md={6} className={classes.text}>
          <Typography variant="special" color="primary" gutterBottom>
            BLOD, SWEAT & HUSTLE
          </Typography>
          <Typography variant="h4" color="primary" gutterBottom>
            Culture
          </Typography>
          <Typography
            variant="body1"
            textAlign="justify"
            color="primary"
            className={classes.paragraph}
            gutterBottom
          >
            Morbi egestas ultricies est. Proin eu odio nibh. Praesent venenatis
            mi vitae pharetra porttitor. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Team;
