import React, { useState } from "react";
import { Box, Typography, ToggleButton, ToggleButtonGroup } from "@mui/material";
import Contractor from "./parts/Contractor";
import Laborer from "./parts/Laborer";

const WeOffer = () => {
  const [selected, setSelected] = useState("contractor"); // default view

  const handleChange = (event, newSelection) => {
    if (newSelection !== null) {
      setSelected(newSelection);
    }
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#fff",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h4"
        color="text.primary"
        sx={{ fontWeight: 700, mb: 5 }}
      >
        How Job Site Route Works
      </Typography>

      {/* Toggle Buttons */}
      <ToggleButtonGroup
        color="primary"
        exclusive
        value={selected}
        onChange={handleChange}
        sx={{
          backgroundColor: "#F9F9F9",
          borderRadius: "12px",
          p: "6px",
          mb: 6,
          display: "inline-flex",
          "& .MuiToggleButton-root": {
            textTransform: "none",
            fontWeight: 600,
            fontSize: "16px",
            px: 3,
            py: 1.2,
            border: "none",
            borderRadius: "20px !important",
            color: "#000",
            "&.Mui-selected": {
              backgroundColor: "secondary.main",
              color: "#fff",
              "&:hover": {
                backgroundColor: "secondary.dark",
              },
            },
          },
        }}
      >
        <ToggleButton value="contractor">Contractor</ToggleButton>
        <ToggleButton value="laborer">Laborer</ToggleButton>
      </ToggleButtonGroup>

      {/* Render Based on Selection */}
      {selected === "contractor" && <Contractor />}
      {selected === "laborer" && <Laborer />}
    </Box>
  );
};

export default WeOffer;
