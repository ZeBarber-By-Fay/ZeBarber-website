import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Separator from "./components/Separator";
import Hero from "./components/Hero";
import Stories from "./components/Stories";
import Services from "./components/Services";

function App() {
  return (
    <Box position={"relative"}>
      <Navbar />
      <Separator />
      <Hero />
      <Stories />
      <Services />
    </Box>
  );
}

export default App;
