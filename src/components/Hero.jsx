import { Box, Button, Typography } from "@mui/material";
import HeroImg from "../assets/hero.jpg";

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",

        overflow: "hidden",
        "@media (max-width:700px)": {
          height: "250px",
        },
      }}
    >
      {/* الخلفية صورة */}
      <img
        src={HeroImg}
        alt="Hero Background"
        style={{
          width: "100%",
          objectFit: "cover",
          height: "100%",
        }}
      />

      {/* المحتوى */}
      <Box
        id="hh"
        sx={{
          position: "absolute",
          width: "90%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          bottom: { xs: "10px", md: "120px" },
          left: { xs: "50%", md: "50%" },
          transform: "translateX(-50%)",
          color: "#fff",
          "@media (max-width:950px)": {
            top: "30px",
            height: "150px",
            width: "100%",
          },
        }}
      >
        {/* النصوص */}
        <Box
          sx={{
            "@media (max-width:950px)": {
              textAlign: "center",
              justifyContent: "center",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              justifyContent: { xs: "center", md: "flex-start" },
              "@media (max-width:950px)": {
                textAlign: "center",
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: "#fff",
                "@media (max-width:950px)": {
                  fontSize: "22px",
                  textAlign: "center",
                },
              }}
            >
              Horraires de travail
            </Typography>
            <Box
              sx={{
                width: "200px",
                flex: 1,
                height: "2px",
                bgcolor: "#d4a017",
                ml: 1,
                display: { xs: "none", lg: "block" },
              }}
            />
          </Box>

          {/* المواعيد */}
          <Box
            display={"flex"}
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {" "}
            <Box sx={{ mt: 2 }}>
              <Typography
                sx={{
                  color: "#d4a017",
                  "@media (max-width:950px)": { top: "10px", left: "150px" },
                }}
              >
                Mon - Sat
              </Typography>
              <Typography>10 AM – 19 PM</Typography>
            </Box>
            <Box sx={{ mt: 1 }}>
              <Typography
                sx={{
                  color: "#d4a017",
                  "@media (max-width:950px)": { marginTop: "3px" },
                }}
              >
                Sun
              </Typography>
              <Typography>Off-Day</Typography>
            </Box>
          </Box>
        </Box>

        {/* زر الحجز */}
        <Box sx={{ mt: { xs: 3, md: 0 } }}>
          <a href="#">
            <Button
              variant="contained"
              sx={{
                bgcolor: "#d4a017",
                color: "#000",
                fontWeight: "bold",
                borderRadius: "8px",
                px: 10,
                py: 1.5,
                "&:hover": {
                  bgcolor: "#b38f13",
                },
              }}
            >
              Book Now
            </Button>
          </a>
        </Box>
      </Box>
    </Box>
  );
}
