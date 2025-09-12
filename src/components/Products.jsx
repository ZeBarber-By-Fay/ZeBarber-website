import { Box, Typography } from "@mui/material";
import ItemCarousel from "./SiderrBarber";
import useProducts from "../functions/getProducts";

import B1 from "../assets/p1.jpg";
import B2 from "../assets/p2.jpg";
import B3 from "../assets/p3.jpg";
import B4 from "../assets/p4.jpg";

// random img
const randomImg = () => {
  return [B1, B2, B3, B4][Math.floor(Math.random() * 4)];
};

const Products = () => {
  const data = useProducts();

  const Products = data.map((item) => {
    const obj = {};
    obj.name = item.name;
    obj.img = item.image || randomImg();
    obj.price = item.price;

    return obj;
  });
  return (
    <Box
      id="produit"
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
          <span style={{ color: "#c89633" }}>Nos</span> PRODUITS
        </Typography>
      </Box>
      <ItemCarousel array={Products} section={"products"} />
    </Box>
  );
};

export default Products;
