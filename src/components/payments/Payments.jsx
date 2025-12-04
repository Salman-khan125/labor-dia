import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const Payments = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 30 },
        px: { xs: 3, md: 8 },
        maxWidth: 1600,
        mx: "auto",
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        spacing={4}
      >
        {/* LEFT SIDE - Two Phones */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100%",
            mb: { xs: 6, md: 0 },
          }}
        >
          {/* BACK PHONE */}
          <Box
            component="img"
            src="/assets/payments/phone1.png"
            alt="Payment Status Screen"
            sx={{
              width: { xs: 180, md: 260 },
              position: "absolute",
              left: { xs: "30%", md: "50%", sm: "0%", lg: "70%" },
              bottom: { xs: "-110%", md: "20%" },
              zIndex: 1,
            }}
          />

          {/* FRONT PHONE */}
          <Box
            component="img"
            src="/assets/payments/phone2.png"
            alt="Payment Status Screen"
            sx={{
              width: { xs: 180, md: 260 },
              left: { xs: "30%", sm: "30%", md: "80%", lg: "160%" },
              bottom: { xs: "10%", sm: "15%", md: "30%" },
              position: "relative",
              zIndex: 2,
            }}
          />
        </Grid>

        {/* RIGHT SIDE - TEXT + STARS */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ mb: { md: 33 }, mr: { sm: 5, md: 0, lg: 16 } }}
        >
          {/* TITLE */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 2,
              textAlign: { xs: "center", md: "left" },
              mt:{xs:50}
            }}
          >
            Payments & Ratings
          </Typography>

          {/* SUBTITLE */}
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 420,
              mb: 4,
              textAlign: { xs: "center", md: "left" },
              mx: { xs: "auto", md: 0 },
            }}
          >
            Watch this video to find out more about how the Labor dia can help
            mobile food vendors increase sales, while saving contractors time
            and money.
          </Typography>

          {/* STARS + HAND IMAGE */}
          {/* STARS + HAND IMAGE */}
          <Box
            sx={{
              position: "relative",
              width: "fit-content",
              mx: { xs: "auto", md: 0 },
              mt: 10,
            }}
          >
            {/* Stars */}
            <Box
              component="img"
              src="/assets/payments/stars.png"
              alt="Rating Stars"
              sx={{
                width: { xs: 180, md: 220, lg: 270 },
              }}
            />

            {/* Hand — positioned on top */}
            <Box
              component="img"
              src="/assets/payments/hand.png"
              alt="Rating Hand Icon"
              sx={{
                width: { xs: 50, md: 60 },
                position: "absolute",
                bottom: { xs: "-10px", md: "-15px" }, // adjust as needed
                left: { xs: "55%", md: "60%" }, // move hand horizontally
                transform: "translateX(-50%)",
                zIndex: 2,
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Payments;
