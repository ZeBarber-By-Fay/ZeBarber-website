import { Box, Typography, Link, IconButton, Grid } from "@mui/material";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#111",
        color: "#fff",
        padding: "40px 260px",
        textAlign: { xs: "center", md: "left" },
        "@media (max-width:1300px)": {
          padding: "37px 130px",
        },
        "@media (max-width:1100px)": {
          padding: "37px 70px",
        },
        "@media (max-width:900px)": {
          padding: "37px 70px",
        },
      }}
    >
      <Box
        display={"flex"}
        sx={{
          justifyContent: "space-between",
          alignItems: "start",
          "@media (max-width:900px)": {
            flexWrap: "wrap",
            rowGap: "50px",
          },
        }}
      >
        {/* Brand */}
        <Grid
          sx={{
            "@media (max-width:900px)": {
              width: "50%",
            },
            "@media (max-width:700px)": {
              width: "100%",
            },
          }}
          item
          xs={12}
          md={3}
        >
          <Typography variant="h6" sx={{}}>
            ZE Barber Shop
          </Typography>
          <Typography sx={{ color: "#ffffff94" }}>
            Platforme pour découvrir nos <br />
            services et nos barbiers
          </Typography>
        </Grid>

        {/* Adresse */}
        <Grid
          sx={{
            "@media (max-width:900px)": {
              width: "50%",
            },
            "@media (max-width:700px)": {
              width: "100%",
            },
          }}
          item
          xs={12}
          md={3}
        >
          <Typography variant="subtitle1" sx={{ color: "#ffffff94" }}>
            Adresse
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, color: "#ffffff" }}>
            4 Rue des Peupliers, 74240
            <br />
            Gaillard, France
          </Typography>
        </Grid>

        {/* Contact */}
        <Grid
          sx={{
            "@media (max-width:900px)": {
              width: "50%",
            },
            "@media (max-width:700px)": {
              width: "100%",
            },
          }}
          item
          xs={12}
          md={3}
        >
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
        </Grid>

        {/* Social */}
        <Grid
          sx={{
            "@media (max-width:900px)": {
              width: "50%",
            },
            "@media (max-width:700px)": {
              width: "100%",
            },
          }}
          item
          xs={12}
          md={3}
        >
          <Typography variant="subtitle1" sx={{ color: "#ffffff94" }}>
            Follow Us
          </Typography>
          <Box sx={{ mt: 1 }} marginLeft={"-9px"}>
            <IconButton
              href="#"
              sx={{
                color: "#d4a017",
                "&:hover": { color: "#be8e12ff" },
                transition: "0.6s",
              }}
            >
              <Facebook sx={{ fontSize: "22px" }} />
            </IconButton>
            <IconButton
              href="#"
              sx={{
                color: "#d4a017",
                "&:hover": { color: "#be8e12ff" },
                transition: "0.6s",
              }}
            >
              <Instagram sx={{ fontSize: "22px" }} />
            </IconButton>
            <IconButton
              href="#"
              sx={{
                color: "#d4a017",
                "&:hover": { color: "#be8e12ff" },
                transition: "0.6s",
              }}
            >
              <WhatsApp sx={{ fontSize: "22px" }} />
            </IconButton>
          </Box>
        </Grid>
      </Box>

      {/* Bottom text */}
      <Box
        sx={{
          textAlign: "center",
          mt: 4,
          color: "#ffffff85",
          fontSize: "14px",
        }}
      >
        © 2025 ZE Barber Shop Tous droits réservés.
      </Box>
    </Box>
  );
}
