import { Box, Grid, Typography, TextField, Button, Link } from "@mui/material";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Box
      id="contact"
      sx={{
        bgcolor: "#000",

        padding: "85px",
        paddingBottom: "20px",
        "@media (max-width:800px)": {
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
            "@media (max-width:1000px)": {
              fontSize: "35px",
            },
          }}
          variant="h2"
        >
          <span style={{ color: "#c89633" }}>ZE</span> Contact
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          "@media (max-width:1000px)": {
            flexWrap: "wrap",
          },
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        <Box
          sx={{
            width: "40%",
            "@media (max-width:1000px)": {
              width: "100%",
              marginBottom: "30px",
            },
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontWeight: "bold",
              marginBottom: "12px",
              "@media (max-width:1000px)": {
                fontSize: "35px",
              },
            }}
            variant="h3"
          >
            Entrez en
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontWeight: "bold",
              marginBottom: "12px",
              "@media (max-width:1000px)": {
                fontSize: "35px",
                marginBottom: "5px",
              },
            }}
            variant="h3"
          >
            <span style={{ color: "#c89633" }}>contact</span> avec nous
          </Typography>
          <Typography
            sx={{
              letterSpacing: "1.5px !important",
              fontSize: "22px",
              "@media (max-width:1000px)": {
                fontSize: "12px",
                marginBottom: "5px",
              },
              color: "#d7d7d7",
            }}
          >
            Ze barber shop à été créé en 2015 par fay ; coiffeur passionné, il
            évolue surtout en autodidacte et passe par l’étranger notamment en
            Angleterre, où il y effectue un stage et côtoie de nombreux barbers
            de tout horizon.
          </Typography>
          <Box sx={{ marginTop: "25px" }}>
            {" "}
            <Typography variant="subtitle1" sx={{ color: "#ffffff94" }}>
              Email Us at:
            </Typography>
            <Link
              href="mailto:debabs@hotmail.fr"
              sx={{ display: "block", color: "#fff", mt: 1 }}
            >
              debabs@hotmail.fr
            </Link>
            <Typography variant="subtitle1" sx={{ color: "#ffffff94", mt: 2 }}>
              Téléphone:
            </Typography>
            <Typography sx={{ display: "block", color: "white", mt: 1 }}>
              +33 9 54 73 50 82
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "49%",
            marginLeft: "66px",
            "@media (max-width:1000px)": {
              marginLeft: "0px",
              width: "100%",
            },
          }}
        >
          <form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <Box
              sx={{
                marginBottom: "35px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                gap: "10px",
                "@media (max-width:1000px)": {
                  flexWrap: "wrap",
                },
              }}
            >
              <Box
                sx={{
                  width: "49%",
                  "@media (max-width:1000px)": {
                    marginBottom: "35px",
                    width: "100%",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                    fontSize: "16px",
                    marginLeft: "5px",
                  }}
                >
                  Nom{" "}
                </Typography>{" "}
                <input
                  style={{
                    width: "100%",
                    background: "#161515da",
                    border: "none",
                    borderRadius: "12px",
                    padding: "12px 18px",
                    fontSize: "16px",
                  }}
                  type="text"
                  placeholder="Enter votre nom"
                />
              </Box>
              <Box
                sx={{
                  width: "49%",
                  "@media (max-width:1000px)": {
                    width: "100%",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                    fontSize: "16px",
                    marginLeft: "5px",
                  }}
                >
                  Prénom{" "}
                </Typography>{" "}
                <input
                  style={{
                    width: "100%",
                    background: "#161515da",
                    border: "none",
                    borderRadius: "12px",
                    padding: "12px 18px",
                    fontSize: "16px",
                  }}
                  type="text"
                  placeholder="Enter votre prenom"
                />
              </Box>
            </Box>
            <Box
              sx={{
                marginBottom: "35px",
                width: "100%",
                "@media (max-width:1000px)": {
                  width: "100%",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  fontSize: "16px",
                  marginLeft: "5px",
                }}
              >
                Email{" "}
              </Typography>{" "}
              <input
                style={{
                  marginTop: "6px",
                  width: "100%",
                  background: "#161515da",
                  border: "none",
                  borderRadius: "12px",
                  padding: "12px 18px",
                  fontSize: "16px",
                }}
                type="email"
                placeholder="Enter votre Email"
              />
            </Box>
            <Box
              sx={{
                marginTop: "10px",
                width: "100%",
                "@media (max-width:1000px)": {
                  width: "100%",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  fontSize: "16px",
                  marginLeft: "5px",
                }}
              >
                Comment pouvons-nous vous aider?
              </Typography>{" "}
              <textarea
                style={{
                  height: "200px",
                  marginTop: "6px",
                  width: "100%",
                  background: "#161515da",
                  border: "none",
                  borderRadius: "12px",
                  padding: "12px 18px",
                  fontSize: "16px",
                }}
                type="email"
                placeholder="Enter votre message"
              />
            </Box>
            <Box
              sx={{
                display: "flex",

                justifyContent: "end",
                alignItems: "start",
              }}
            >
              {" "}
              <Button
                type="submit"
                variant="contained"
                sx={{
                  marginTop: "15px",
                  fontWeight: "bold",
                  bgcolor: "#d4a017",
                  color: "#000",
                  px: 4,
                  "&:hover": { bgcolor: "#b8860b" },
                  paddingTop: "12px",
                  borderRadius: "14px",
                }}
              >
                Envoyer
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
