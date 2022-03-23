import React from "react";
import { Typography, Box } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles/makeStyles";
import { SvgIcon } from "@mui/material";
import { motion } from "framer-motion";
import { arrowVariant } from "../animations/variants";
import headerbg from "../images/pexels-gradienta-7130497.jpg";

const useStyles = makeStyles((theme) => ({
  header: {
    background: `url(${headerbg})`,
    height: "120vh",
    [theme.breakpoints.down("xl")]: {
      height: "118vh",
    },
    [theme.breakpoints.down("lg")]: {
      height: "150vh",
    },
    [theme.breakpoints.down("md")]: {
      height: "135vh",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "165vh",
    },
  },

  title: {
    paddingTop: "18rem",
    textAlign: "center",
  },
  subtitle: {
    marginTop: "1rem",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "70%",
    },
  },

  arrow: {
    textAlign: "center",
    marginTop: "2.8rem",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.header}>
      <Typography
        variant="h2"
        align="center"
        bold
        className={classes.title}
        color="primary"
      >
        Success starts with
        <br /> hardworking consultants
      </Typography>
      <Typography
        variant="h6"
        align="center"
        className={classes.subtitle}
        color="primary"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
        voluptas mollitia laborum quae, omnis dolorum magni dignissimos?
        Deleniti eum, commodi nam laudantium fuga sed nostrum impedit velit!
        laudantium fuga sed velit!
      </Typography>
      <Box
        className={classes.arrow}
        component={motion.div}
        variants={arrowVariant}
        initial="hidden"
        animate="visible"
      >
        <SvgIcon fontSize="large" color="primary" style={{ fontSize: 100 }}>
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
        </SvgIcon>
      </Box>
    </Box>
  );
};

export default Header;
