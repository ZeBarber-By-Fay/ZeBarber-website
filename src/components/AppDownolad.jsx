import { Box, Typography } from "@mui/material";
import app from "../assets/app.png";
import apple from "../assets/apple.png";
import google from "../assets/google.png";

const AppDownolad = () => {
  return (
    <>
      <Box
        id="apps"
        sx={{
          bgcolor: "#000",

          padding: "85px",
          paddingBottom: "20px",
          "@media (max-width:800px)": {
            padding: "25px",
          },
        }}
      >
        <Box
          sx={{
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "15px",
            "@media (max-width:1200px)": {
              flexWrap: "wrap",
            },
          }}
        >
          <Box
            sx={{
              width: "50%",

              "@media (max-width:1200px)": { width: "100%" },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                marginBottom: "20px",
                fontWeight: "bold",
                "@media (max-width:880px)": {
                  fontSize: "30px",
                },
              }}
            >
              <span style={{ color: "#c89633" }}>ZE</span> Application
            </Typography>
            <Typography
              sx={{
                marginBottom: "10px",

                fontSize: "25px",
                "@media (max-width:880px)": {
                  fontSize: "18px",
                },
              }}
            >
              Télécharger notre application pour vous réserver à tout moment,
              n’importe ou
            </Typography>
            <Box>
              <Box
                sx={{ width: "50%", height: "2px", bgcolor: "#c89633" }}
              ></Box>
              <Box>
                <Typography
                  sx={{
                    color: "#d7d7d7",
                    marginTop: "20px",
                    "@media (max-width:880px)": {
                      fontSize: "12px",
                    },
                  }}
                >
                  Réservez facilement votre prochain rendez-vous, directement
                  depuis votre mobile
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {" "}
                <Box
                  sx={{
                    width: "80%",
                    marginTop: "25px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ width: "45%" }}>
                    <img
                      style={{
                        width: "90%",
                        objectFit: "cover",
                        cursor: "pointer",
                      }}
                      src={apple}
                      alt=""
                    />
                  </Box>
                  <Box sx={{ width: "45%" }}>
                    <img
                      style={{
                        width: "90%",
                        objectFit: "cover",
                        cursor: "pointer",
                      }}
                      src={google}
                      alt=""
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: "50%",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "@media (max-width:1200px)": {
                padding: "5px",
                width: "100%",
                marginTop: "30px",
              },
            }}
          >
            <img
              style={{
                objectFit: "cover",
                width: "80%",
              }}
              src={app}
              alt=""
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AppDownolad;
