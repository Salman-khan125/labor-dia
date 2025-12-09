// src/components/HeroSection.jsx
import React from "react";
import { Box, Button, Container, Typography, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const HeroSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        pt: { xs: 6, md: 8 },
        pb: { xs: 8, md: 16 },
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={10}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* LEFT SIDE — TEXT + BUTTONS + QR CODES */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                lineHeight: 1.2,
                fontSize: { xs: "2rem", sm: "2.6rem", md: "3.4rem" },
                maxWidth: "600px",
                ml: { xs: "1px", md: "70px" },
              }}
            >
              Download Labor Dia, Invite friends and earn discounts
            </Typography>

            <Typography
              sx={{
                ml: { xs: "1px", md: "70px" },

                mt: 2,
                color: theme.palette.text.secondary,
                maxWidth: "480px",
                fontSize: { xs: "0.9rem", md: "1rem" },
              }}
            >
              Download the Labor Dia app from the Google Play store or App
              store, create an account, order food, invite friends, and earn
              discounts.
            </Typography>

            {/* Store Buttons */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                mt: 4,
                flexDirection: { xs: "column", md: "row" },
                alignItems: { xs: "flex-start", md: "center" },
                ml: { xs: "30px", md: "70px" },
              }}
            >
              {/* Google Play Button */}
              <Box
                component="img"
                src="/assets/hero/google.png"
                alt="Google Play"
                sx={{
                  height: 60,
                  width: "auto",
                  cursor: "pointer",
                  transition: "all 0.3s ease",

                  "&:hover": {
                    transform: "translateY(-5px)",
                    filter: "brightness(1.1)", // slight highlight
                  },

                  "&:active": {
                    transform: "translateY(-2px)",
                  },
                }}
              />

              {/* App Store Button */}
              <Box
                component="img"
                src="/assets/hero/app.png"
                alt="App Store"
                sx={{
                  height: 60,
                  width: "auto",
                  cursor: "pointer",
                  transition: "all 0.3s ease",

                  "&:hover": {
                    transform: "translateY(-5px)",
                    filter: "brightness(1.1)",
                  },

                  "&:active": {
                    transform: "translateY(-2px)",
                  },
                }}
              />
            </Box>

            {/* QR CODES */}
            <Box
              sx={{
                display: "flex",
                gap: 6,
                mt: 4,
                flexDirection: { xs: "row", md: "row" }, // stack on small screens
                alignItems: { xs: "flex-start", md: "center" },
                ml: { xs: "30px", md: "110px" },
              }}
            >
              <Box
                component="img"
                src="/assets/hero/appstore.png"
                alt="QR Code"
                sx={{ height: 90, width: 90 }}
              />
              <Box
                component="img"
                src="/assets/hero/playstore.png"
                alt="QR Code"
                sx={{
                  height: 90,
                  width: 90,
                  ml: { xs: "-20px", md: "100px" },
                }}
              />
            </Box>
          </Grid>

          {/* RIGHT SIDE — PHONE IMAGE */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              alignItems: "center",
              mt: { xs: -4, md: 0 },
              right: 50,

              // ⭐ Move phone more to the right
              pr: { md: 4, lg: 8 },
            }}
          >
            <Box
              component="img"
              src="/assets/hero/phone.png"
              alt="Phone Mockup"
              sx={{
                width: { xs: "100%", sm: "65%", md: "70%" },
                maxWidth: "500px",
                height: "auto",
                userSelect: "none",
                py: { xs: -50, md: 0 },
                ml: { xs: 8, lg: 2 },
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
