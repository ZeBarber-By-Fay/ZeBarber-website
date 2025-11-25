import React from "react";
import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1200 }, items: 4 }, // ✅ عرض 4 كروت
  laptop: { breakpoint: { max: 1200, min: 1024 }, items: 3 }, // ✅ عرض 3 كروت للابتوب
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
};

const ItemCarousel = ({ array, section }) => {
  const [loading, setLoding] = useState(true);
  setTimeout(() => {
    setLoding(false);
  }, 4000);

  return loading ? (
    <Box sx={{ bgcolor: "#000", py: 6, px: { xs: 2, sm: 4, md: 8 } }}>
      <Carousel
        responsive={responsive}
        autoPlay
        infinite
        autoPlaySpeed={6000}
        keyBoardControl
        showDots
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {["", "", "", ""].map((item, index) => (
          <Box
            key={index}
            sx={{
              borderRadius: "16px",
              overflow: "hidden",
              height: "100%",
              border: "1px solid rgba(255, 217, 0, 0.12)",
              boxShadow: "0 0 -5px 3px rgba(255, 215, 0, 0.3)",
              transition: "transform 0.6s, box-shadow 0.5s",
              mx: 1.5,
              position: "relative",
            }}
          >
            {/* Spinner ثابت في وسط الكارد */}
            <div
              style={{
                color: "white",
                width: "240px",
                height: "300px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="spinner-overlay"
            >
              <Box sx={{ display: "flex" }}>
                <CircularProgress sx={{ color: "white" }} />
              </Box>
            </div>
          </Box>
        ))}
      </Carousel>
    </Box>
  ) : (
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
              borderRadius: "16px",
              overflow: "hidden",
              height: "100%",
              border: "1px solid rgba(255, 217, 0, 0.12)",
              boxShadow: "0 0 -5px 3px rgba(255, 215, 0, 0.3)",
              transition: "transform 0.6s, box-shadow 0.5s",
              mx: 1.5,
              position: "relative",
            }}
          >
            {/* الصورة */}
            <Box sx={{ width: "100%", position: "relative" }}>
              <Box
                sx={{
                  height: "380px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    left: 0,
                    top: 0,
                    zIndex: 100,
                  }}
                />
              </Box>

              {/* معلومات البرودكت أو الريفيو */}
              <Box
                id="barber"
                position={"absolute"}
                sx={{
                  p: 2,
                  bgcolor: "white",
                  width: "100%",
                  bottom: 0,
                  left: 0,
                }}
              >
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
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default ItemCarousel;
