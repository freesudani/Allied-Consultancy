import makeStyles from "@mui/styles/makeStyles/makeStyles";
import React from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  NativeSelect,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import { countryList } from "../data/countries";
import { useTheme, useMediaQuery } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  services: {
    display: "flex",
    paddingTop: "2rem",
    backgroundColor: "#e1f5fe",
    borderTop: "1px solid #e0e0e0",
    borderBottom: "1px solid #e0e0e0",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  rightside: {
    width: "50vw",
    paddingTop: "5rem",
    paddingBottom: "3rem",
    [theme.breakpoints.down("md")]: {
      paddingTop: "2rem",
      width: "100vw",
    },
  },

  textfield: {
    marginTop: "1.2rem",
    [theme.breakpoints.down("md")]: {
      marginTop: "1.5rem",
    },
  },

  parag: {
    [theme.breakpoints.down("md")]: {
      marginTop: "2rem",
    },
  },

  leftside: {
    width: "50vw",
    paddingTop: "5rem",
    paddingBottom: "3rem",
    paddingRight: "4rem",
    paddingLeft: "4rem",
    borderRight: "1px solid #e0e0e0",
    [theme.breakpoints.down("md")]: {
      paddingTop: "2rem",
      width: "100vw",
    },
  },
}));

const Services = () => {
  const classes = useStyles();
  const theme = useTheme();
  const MQmd = useMediaQuery(theme.breakpoints.down("md")); //900px

  return (
    <Box className={classes.services}>
      <Box className={classes.leftside}>
        <Typography variant="h4" color="primary" gutterBottom>
          Interested In Our Services?
        </Typography>
        <Typography variant="subtitle1" color="primary" gutterBottom>
          Use the form headline to describe the purpose of your form
        </Typography>
        <TextField
          id="standard-basic"
          label="First Name"
          variant="standard"
          fullWidth
          className={classes.textfield}
        />
        <TextField
          id="standard-basic"
          label="Last Name"
          variant="standard"
          fullWidth
          className={classes.textfield}
        />
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          fullWidth
          className={classes.textfield}
        />
        <TextField
          id="standard-basic"
          label="Phone Number"
          variant="standard"
          fullWidth
          className={classes.textfield}
        />
        <TextField
          id="standard-basic"
          label="Company"
          variant="standard"
          fullWidth
          className={classes.textfield}
        />
        <FormControl fullWidth className={classes.textfield}>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Select A Country
          </InputLabel>
          <NativeSelect
            defaultValue={1}
            inputProps={{
              name: "country",
              id: "uncontrolled-native",
            }}
          >
            {countryList.map((country, index) => {
              <option value={index + 1} key={index}>
                {country}
              </option>;
            })}
          </NativeSelect>
        </FormControl>
        <Button
          size="large"
          variant="contained"
          fullWidth={MQmd}
          className={classes.textfield}
        >
          Contained
        </Button>
      </Box>
      <Box className={classes.rightside}>
        <Grid container xs={12} spacing={2} style={{ paddingTop: "1rem" }}>
          <Grid item xs={2} />
          <Grid item container xs={2} justifyContent="flex-end">
            <SvgIcon fontSize="large" color="icon" style={{ fontSize: 45 }}>
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
            </SvgIcon>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" color="primary">
              E-COMMERCE
            </Typography>
            <Typography variant="special" color="primary">
              Maecenas varius nunc a odio ultrices, non consectetur nunc
              scelerisque. Mauris nec condimentum est, id eleifend orci.
            </Typography>
          </Grid>
          <Grid item xs={2} />
        </Grid>
        <Grid container xs={12} spacing={2} style={{ paddingTop: "1rem" }}>
          <Grid item xs={2} />
          <Grid item container xs={2} justifyContent="flex-end">
            <SvgIcon fontSize="large" color="icon" style={{ fontSize: 45 }}>
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M14.12 4l1.83 2H20v12H4V6h4.05l1.83-2h4.24M15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm-3 7c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" />
            </SvgIcon>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" color="primary">
              PHOTOGRAPHY
            </Typography>
            <Typography variant="special" color="primary">
              Maecenas varius nunc a odio ultrices, non consectetur nunc
              scelerisque. Mauris nec condimentum est, id eleifend orci.
            </Typography>
          </Grid>
          <Grid item xs={2} />
        </Grid>
        <Grid container xs={12} spacing={2} style={{ paddingTop: "1rem" }}>
          <Grid item xs={2} />
          <Grid item container xs={2} justifyContent="flex-end">
            <SvgIcon fontSize="large" color="icon" style={{ fontSize: 45 }}>
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M15 8v8H5V8h10m1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1z" />
            </SvgIcon>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" color="primary">
              VIDEO PRODUCTION
            </Typography>
            <Typography variant="special" color="primary">
              Maecenas varius nunc a odio ultrices, non consectetur nunc
              scelerisque. Mauris nec condimentum est, id eleifend orci.
            </Typography>
          </Grid>
          <Grid item xs={2} />
        </Grid>
        <Grid container xs={12} spacing={2} style={{ paddingTop: "1rem" }}>
          <Grid item xs={2} />
          <Grid item container xs={2} justifyContent="flex-end">
            <SvgIcon fontSize="large" color="icon" style={{ fontSize: 45 }}>
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
            </SvgIcon>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" color="primary">
              EMAIL SYSTEMS
            </Typography>
            <Typography variant="special" color="primary">
              Maecenas varius nunc a odio ultrices, non consectetur nunc
              scelerisque. Mauris nec condimentum est, id eleifend orci.
            </Typography>
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </Box>
    </Box>
  );
};

export default Services;
