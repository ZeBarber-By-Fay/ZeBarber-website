import React from "react";
import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useBarbers from "../functions/getBarbers";

import B1 from "../assets/b1.jpg";
import B2 from "../assets/b2.jpg";
import B3 from "../assets/b3.jpg";
import B4 from "../assets/b4.jpg";

// random img
const randomImg = () => {
  return [B1, B2, B3, B4][Math.floor(Math.random() * 4)];
};
const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1200 }, items: 4 }, // ✅ عرض 4 كروت
  laptop: { breakpoint: { max: 1200, min: 1024 }, items: 3 }, // ✅ عرض 3 كروت للابتوب
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
};
const TeamCarousel = () => {
  const data = useBarbers();
  const barbers = data.map((item) => {
    const obj = {};
    obj.name = `${item.details.first_name} ${item.details.last_name}`;
    obj.rating = item.details.experience;
    obj.img = item.details.photo;
    return obj;
  });
  return (
    <Box sx={{ bgcolor: "#000", py: 6, px: { xs: 2, sm: 4, md: 8 } }}>
      <Carousel
        responsive={responsive}
        infinite
        autoPlaySpeed={3000}
        keyBoardControl
        showDots
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {barbers.map((member, index) => (
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
              src={member?.img || randomImg()}
              alt={member.name}
              sx={{
                width: "100%",
                height: { xs: 250, sm: 280, md: 300 },
                objectFit: "cover",
              }}
            />

            <Box id="barber" sx={{ p: 2 }}>
              <Typography
                variant="subtitle1"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                {member.name}
              </Typography>
              <Box sx={{ display: "flex", mt: 1 }}>
                {[...Array(5)].map((_, i) =>
                  i < member.rating ? (
                    <StarIcon key={i} sx={{ color: "#f1c40f" }} />
                  ) : (
                    <StarBorderIcon key={i} sx={{ color: "#f1c40f" }} />
                  )
                )}
              </Box>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default TeamCarousel;
