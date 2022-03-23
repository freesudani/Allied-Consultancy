import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CssBaseline from "@mui/material/CssBaseline";
import Goals from "./components/Goals";
import Services from "./components/Services";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Header />
      <Goals />
      <Services />
      <Team />
      <Footer />
    </>
  );
}

export default App;
