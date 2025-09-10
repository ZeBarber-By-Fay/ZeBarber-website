import { Box, Typography } from "@mui/material";
import img from "../assets/i1.jpg";

const Propose = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#000",

          padding: "85px",
          paddingBottom: "20px",
          "@media (max-width:800px)": {
            padding: "25px",
          },
        }}
      >
        <Box>
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
            <span style={{ color: "#c89633" }}>à</span> propos
          </Typography>
        </Box>
        <Box
          sx={{
            color: "white",
            display: "flex",
            justifyContent: "space-between",

            gap: "15px",
            flexDirection: "row-reverse",

            "@media (max-width:1200px)": {
              flexDirection: "row",
              flexWrap: "wrap",
            },
          }}
        >
          <Box
            sx={{
              width: "66%",
              paddingTop: "70px",
              "@media (max-width:1200px)": { width: "100%" },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                marginBottom: "20px",
                fontWeight: "bold",
                fontSize: "50px",
                "@media (max-width:880px)": {
                  fontSize: "30px",
                },
              }}
            >
              Apercu de <span style={{ color: "#c89633" }}>ZE</span>{" "}
            </Typography>
            <Typography
              sx={{
                letterSpacing: "1.5px !important",
                fontSize: "22px",
                "@media (max-width:880px)": {
                  fontSize: "12px",
                },
              }}
            >
              Ze barber shop à été créé en 2015 par fay ; coiffeur passionné, il
              évolue surtout en autodidacte et passe par l’étranger notamment en
              Angleterre, où il y effectue un stage et côtoie de nombreux
              barbers de tout horizon.
            </Typography>
          </Box>
          <Box
            sx={{
              width: "35%",
              padding: "25px",

              "@media (max-width:900px)": {
                padding: "5px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "30px",
              },
            }}
          >
            <img
              style={{
                objectFit: "cover",
                width: "110%",
              }}
              src={img}
              alt=""
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Propose;
