import { deepPurple } from "@mui/material/colors";
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: deepPurple[900] },
  },
  typography: {
    special: {
      fontFamily: "Cinzel",
      fontWeight: "400",
      fontSize: "1rem",
      lineHeight: "1.75",
      letterSpacing: "0.00938em",
    },
  },
});

const StyleProvider = (props) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </StyledEngineProvider>
  );
};

export default StyleProvider;
