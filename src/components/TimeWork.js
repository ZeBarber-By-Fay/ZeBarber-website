import { Box } from "@mui/material";

import React from "react";

const TimeWork = ({ day, open, close }) => {
  return (
    <Box
      sx={{
        marginBottom: "10px",
        border: "1px solid #d4a017",
        borderRadius: "12px",
        padding: "10px",
      }}
    >
      <h2 style={{ marginBottom: "10px" }}>{day}</h2>
      <h3 style={{ color: "#d4a017" }}>
        {open} - {close}
      </h3>
    </Box>
  );
};

export default TimeWork;
