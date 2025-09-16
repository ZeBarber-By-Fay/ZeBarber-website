import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Separator from "./components/Separator";
import Hero from "./components/Hero";
import Stories from "./components/Stories";
import Services from "./components/Services";
import Barbers from "./components/Barbers";
import Products from "./components/Products";
import Propose from "./components/Propos";
import AppDownolad from "./components/AppDownolad";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <Box position={"relative"}>
      <Navbar />
      <Separator />
      <Hero />
      <Stories />
      <Services />
      <Barbers />
      <Products />
      <AppDownolad />
      <Propose />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
