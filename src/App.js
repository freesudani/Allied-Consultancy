import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CssBaseline from "@mui/material/CssBaseline";
import Goals from "./components/Goals";
import Services from "./components/Services";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Header />
      <Goals />
      <Services />
    </>
  );
}

export default App;
