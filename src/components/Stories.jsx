import { Box, Typography } from "@mui/material";
import img3 from "../assets/3img.png";

const Stories = () => {
  return (
    <>
      <Box
        id="story"
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
              "@media (max-width:880px)": {
                fontSize: "35px",
              },
            }}
            variant="h2"
          >
            <span style={{ color: "#c89633" }}>Nos</span> Storie
          </Typography>
        </Box>
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
              width: "66%",

              "@media (max-width:1200px)": { width: "100%" },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                marginBottom: "10px",
                fontWeight: "bold",
                "@media (max-width:880px)": {
                  fontSize: "30px",
                },
              }}
            >
              <span style={{ color: "#c89633" }}>ZE</span> story
            </Typography>
            <Typography
              variant="h1"
              sx={{
                marginBottom: "10px",
                fontWeight: "bold",
                fontSize: "50px",
                "@media (max-width:880px)": {
                  fontSize: "30px",
                },
              }}
            >
              Nous avons <span style={{ color: "#c89633" }}>10 ans</span>{" "}
              d’expérience
            </Typography>
            <Typography
              sx={{
                "@media (max-width:880px)": {
                  fontSize: "12px",
                },
              }}
            >
              Après un parcours professionnel international, Fay est passé par
              plusieurs pays dont l’Angleterre, un des berceau des premiers
              Barber Shop. Fasciné par le style british Dandy & Gentleman et
              fort de 4 années d’expérience dans les barbershop locaux, il
              décide alors d’importer l’idée en France. Dans une ambiance
              authentique et traditionnelle, il allie la culture british et US à
              la french touch avec les techniques les plus traditionnelles aux
              méthodes plus contemporaines pour toujours satisfaire sa
              clientèle. Le salon propose aujourd’hui plusieurs prestations de
              coiffure, taille de barbe ainsi que différents soins esthétique
              pour homme. Le salon reçoit également femmes et enfants.
            </Typography>
          </Box>
          <Box
            sx={{
              width: "35%",
              padding: "25px",

              "@media (max-width:1200px)": {
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
                width: "80%",
              }}
              src={img3}
              alt=""
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",

          bgcolor: "#000",

          padding: "6px 85px",
          paddingBottom: "20px",
          "@media (max-width:800px)": {
            padding: "25px",
          },
        }}
      >
        <Box sx={{ width: "50%", height: "2px", bgcolor: "#c89633" }}></Box>
        <Box>
          <Typography
            sx={{
              color: "white",
              marginTop: "20px",
              "@media (max-width:880px)": {
                fontSize: "12px",
              },
            }}
          >
            Du Old School au plus classique en passant par un style actuel,
            toutes les prestations sont réalisées avec des produits artisanaux
            et traditionnelles. La politique du salon est le parfait respect du
            gentlemen’s code ainsi il séduit différents type de personnes des
            tous petits aux plus grands, de toute nationalité et de toute
            horizon. L’ambiance se veut décontractée, multiculturelle et ouverte
            sur le monde. Nous parlons le français, l’anglais, l’espagnol et
            l’arabe.
          </Typography>
          <Typography
            sx={{
              color: "white",
              marginTop: "20px",
              "@media (max-width:880px)": {
                fontSize: "12px",
              },
            }}
          >
            Venez comme vous êtes, notre équipe s’occupera de tout pour vous
            faire passer un excellent moment !
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Stories;
