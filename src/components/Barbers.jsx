import { Box, Typography } from "@mui/material";
import ItemCarousel from "./SiderrBarber";
import useBarbers from "../functions/getBarbers";

import B1 from "../assets/b1.jpg";
import B2 from "../assets/b2.jpg";
import B3 from "../assets/b3.jpg";
import B4 from "../assets/b4.jpg";

// random img
const randomImg = () => {
  return [B1, B2, B3, B4][Math.floor(Math.random() * 4)];
};

const Barbers = () => {
  const data = useBarbers();
  console.log(data);

  const barbers = data.map((item) => {
    const obj = {};
    obj.name = `${item.details.first_name} ${item.details.last_name}`;
    obj.rating = item.details.experience;
    obj.img = item.details.photo || randomImg();
    return obj;
  });

  return (
    <Box
      id="coiffeur"
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
          <span style={{ color: "#c89633" }}>ZE</span> Barbiers
        </Typography>
      </Box>
      <ItemCarousel array={barbers} section={""} />
    </Box>
  );
};

export default Barbers;
