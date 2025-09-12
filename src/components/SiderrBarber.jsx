import React from "react";
import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1200 }, items: 4 }, // ✅ عرض 4 كروت
  laptop: { breakpoint: { max: 1200, min: 1024 }, items: 3 }, // ✅ عرض 3 كروت للابتوب
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
};
const ItemCarousel = ({ array, section }) => {
  return (
    <Box sx={{ bgcolor: "#000", py: 6, px: { xs: 2, sm: 4, md: 8 } }}>
      <Carousel
        responsive={responsive}
        autoPlay
        infinite
        autoPlaySpeed={2000}
        keyBoardControl
        showDots
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {array.map((item, index) => (
          <Box
            key={index}
            sx={{
              bgcolor: "#111",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid rgba(255, 217, 0, 0.12)", // ✅ لون ذهبي شفاف
              boxShadow: "0 0 -5px 3px rgba(255, 215, 0, 0.3)", // ✅ توهج ذهبي
              transition: "transform 0.6s, box-shadow 0.5s",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 0 -1px 5px rgba(255, 215, 0, 0.5)", // ✅ أقوى عند الهوفر
              },
              mx: 1.5,
            }}
          >
            <Box
              component="img"
              src={item?.img}
              alt={item.name}
              sx={{
                width: "100%",
                height: { xs: 250, sm: 280, md: 300 },
                objectFit: "cover",
              }}
            />

            <Box id="barber" sx={{ p: 2 }}>
              <Typography
                variant="subtitle1"
                sx={{ color: "#fff", fontWeight: "bold", fontSize: "20px" }}
              >
                {item.name}
              </Typography>
              {section === "products" ? (
                <Box sx={{ display: "flex", mt: 1 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "#c89633",
                      fontWeight: "bold",
                      fontSize: "25px",
                    }}
                  >
                    {item.price} €
                  </Typography>
                </Box>
              ) : (
                <Box sx={{ display: "flex", mt: 1 }}>
                  {[...Array(5)].map((_, i) =>
                    i < item.rating ? (
                      <StarIcon key={i} sx={{ color: "#f1c40f" }} />
                    ) : (
                      <StarBorderIcon key={i} sx={{ color: "#f1c40f" }} />
                    )
                  )}
                </Box>
              )}
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default ItemCarousel;
