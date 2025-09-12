import { Box } from "@mui/material";
import React from "react";

const Separator = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "80px",
        bgcolor: "#201d1dff",
        display: "none",
        "@media (max-width:800px)": {
          display: "none",
        },
      }}
    >
      {" "}
    </Box>
  );
};

export default Separator;
