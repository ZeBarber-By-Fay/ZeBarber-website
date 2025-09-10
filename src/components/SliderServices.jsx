import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import coverImage from "../assets/hero.png";

export default function Slider({ array }) {
  return (
    <Box
      sx={{
        backgroundImage: `url(${coverImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",

        borderRadius: "16px",
        padding: "25px",

        color: "#fff",
        "@media (max-width:880px)": {
          padding: "20px 8px",
        },
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 400000000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
      >
        {array?.map((item, i) => (
          <SwiperSlide style={{ marginBottom: "15px" }} key={i}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                mb: 3,
                fontSize: "30px",
              }}
            >
              {item?.name}
            </Typography>

            {/* هنا تعرض الخدمات الخاصة بالفئة */}
            <Box
              id="removeBar"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                width: "100%",
                justifyContent: "space-between",
                textAlign: "start",
                marginBottom: "60px",
                "@media (max-width:1200px)": {
                  height: "400px",
                  overflow: "hidden",
                  overflowY: "auto",
                },
              }}
            >
              {item?.services?.map((srv, idx) => (
                <Box
                  key={idx}
                  sx={{
                    width: "49%",
                    bgcolor: "#1b19198f",
                    borderRadius: "8px",

                    padding: "10px",
                    minWidth: "120px",
                    textAlign: "center",
                    padding: "15px 20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    "@media (max-width:1200px)": {
                      flexWrap: "wrap",
                      width: "100%",
                    },
                  }}
                >
                  <Box sx={{ width: "76%" }}>
                    <Typography
                      sx={{
                        fontSize: "22px",
                        textAlign: "start",
                        marginBottom: "10px",
                      }}
                    >
                      {srv.name}
                    </Typography>
                    <Typography sx={{ fontSize: "16px", textAlign: "start" }}>
                      {srv.description}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "15%",
                      display: "flex",
                      justifyContent: "end",
                      alignItems: "flex-end",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#c89633",
                        fontWeight: "bold",
                        fontSize: "27px",
                      }}
                    >
                      {srv.cost} €
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
