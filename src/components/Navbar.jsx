import React, { useState } from "react";
import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../assets/logo.png";

const navItems = [
  { label: "Home", link: "#", active: true },
  { label: "Story", link: "#story" },
  { label: "Services", link: "#services" },
  { label: "Coiffeur", link: "#coiffeur" },
  { label: "Produit", link: "#produit" },
  { label: "About Us", link: "#about" },
  { label: "Contact Us", link: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(true);

  return (
    <Box
      sx={{
        color: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        width: "100%",
      }}
    >
      {/* Container */}
      <Box
        sx={{
          bgcolor: "#000",
          width: "100%",
          margin: "0 auto",

          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: "60px",
          py: 1.5,
          "@media (max-width:1000px)": { px: "50px" },
          "@media (max-width:800px)": { px: "30px" },
          "@media (max-width:600px)": { px: "15px" },
        }}
      >
        {/* Logo */}
        <Box
          component="a"
          href="#"
          sx={{
            width: "120px",
          }}
        >
          <img width={"100%"} src={Logo} alt="" />
        </Box>

        {/* Desktop Menu */}
        <Box
          component="ul"
          sx={{
            listStyle: "none",
            display: { xs: "none", md: "flex" },
            gap: 3,
            m: 0,
            p: 0,
          }}
        >
          {navItems.map((item) => (
            <Box
              component="li"
              key={item.label}
              sx={{
                position: "relative",
                "& a": {
                  color: item.active ? "#d4a017" : "#fff",
                  fontWeight: item.active ? "bold" : "normal",
                  textDecoration: "none",

                  transition: "0.8s",
                  "&:hover": { color: "#d4a017" },
                },
                "&::after": item.active
                  ? {
                      content: '""',
                      position: "absolute",
                      bottom: "-4px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "110%",
                      height: "4px",
                      bgcolor: "#d4a017",
                    }
                  : {},
              }}
            >
              <a href={item.link}>{item.label}</a>
            </Box>
          ))}
        </Box>

        {/* Mobile Menu Button */}
        <Box
          sx={{
            display: { xs: "block", md: "none" },
            fontSize: "26px",
            cursor: "pointer",
          }}
        >
          {mobileOpen ? (
            <MenuIcon
              onClick={() => setMobileOpen(!mobileOpen)}
              sx={{ fontSize: "32px" }}
            />
          ) : (
            <CloseIcon
              onClick={() => setMobileOpen(!mobileOpen)}
              sx={{ fontSize: "32px" }}
            />
          )}
        </Box>
      </Box>

      <Box
        sx={{
          position: "absolute",

          display: { xs: "block", md: "none" },
          transition: "1s",
          margin: mobileOpen ? "0 0 0 -100%" : "0",

          bgcolor: "#000",
          width: "100%",
          height: "100vh",

          p: "16px",
          zIndex: "25400",
          top: "90px",
          border: "1px solid #999999",
          borderRadius: "3px",
        }}
      >
        {navItems.map((item, i) => {
          return (
            <ul
              key={i}
              sx={{
                bgcolor: "#000",
                marginTop: "15px",
                padding: "25px",
              }}
            >
              <li
                onClick={() => setMobileOpen(!mobileOpen)}
                style={{
                  listStyle: "none",
                  marginBottom: "8px",
                  textAlign: "center",
                }}
              >
                <Box
                  component="a"
                  href={item.link}
                  sx={{
                    color: item.active ? "#d4a017" : "#fff",
                    fontWeight: item.active ? "bold" : "normal",
                    textDecoration: "none",
                    transition: "0.8s",
                    "&:hover": { color: "#d4a017" },
                  }}
                >
                  {item.label}
                </Box>
              </li>
            </ul>
          );
        })}
      </Box>
    </Box>
  );
}
