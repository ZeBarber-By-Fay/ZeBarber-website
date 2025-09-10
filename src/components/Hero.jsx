import { Box, Button, Typography } from "@mui/material";
import HeroImg from "../assets/hero.png";

import useTimeWork from "../functions/getTime";

export default function Hero() {
  const data = useTimeWork();

  const days = data.map((item) => {
    const obj = {};
    obj.day = item.day;
    obj.isWork = item.status;
    return obj;
  });
  const daysOff = days.filter((item) => item.isWork == 0);

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
                {days[0]?.day.slice(0, 3)} -{" "}
                {days[days.length - 1]?.day.slice(0, 3)}
              </Typography>
              <Typography>10 AM – 19 PM</Typography>
            </Box>
            <Box
              sx={{
                mt: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {" "}
                {daysOff.map((item, i) => {
                  return (
                    <Typography
                      key={i}
                      sx={{
                        color: "#d4a017",
                        "@media (max-width:950px)": { marginTop: "5px" },
                      }}
                    >
                      {item.day.slice(0, 3)}{" "}
                      {i == daysOff.length - 1 ? "" : "-"}
                    </Typography>
                  );
                })}
              </Box>
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
