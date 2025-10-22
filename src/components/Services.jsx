import { Box, Typography } from "@mui/material";

import useServices from "../functions/getServices";
import Slider from "./SliderServices";

const Services = () => {
  const services = useServices();

  return (
    <Box
      id="services"
      sx={{
        bgcolor: "#000",

        padding: "85px",
        paddingBottom: "20px",
        "@media (max-width:1200px)": {
          padding: "25px",
        },
      }}
    >
      <Box sx={{ marginBottom: "50px" }}>
        <Typography
          sx={{
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
            "@media (max-width:880px)": {
              fontSize: "35px",
            },
          }}
          variant="h2"
        >
          <span style={{ color: "#c89633" }}>ZE</span> Services
        </Typography>
      </Box>

      <Slider array={services} />
    </Box>
  );
};

export default Services;
