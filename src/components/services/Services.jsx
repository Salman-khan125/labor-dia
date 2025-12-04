import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const steps = [
  {
    img: "assets/services/one.png",
    title: "Login to Job site Route",
    desc: "Download Labor dia app from Play store or App store,create an account, order food, invite friends and earn discounts!",
  },
  {
    img: "assets/services/two.png",
    title: "Login to Job site Route",
    desc: "Download Labor dia app from Play store or App store, create an account, order food, invite friends and earn discounts!",
  },
  {
    img: "assets/services/three.png",
    title: "Login to Job site Route",
    desc: "Download Labor dia app from Play store or App store, create an account, order food, invite friends and earn discounts!",
  },
  {
    img: "assets/services/four.png",
    title: "Login to Job site Route",
    desc: "Download Labor dia app from Play store or App store, create an account, order food, invite friends and earn discounts!",
  },
];

const Services = () => {
  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 6, md: 12 },
        px: { xs: 2, sm: 4, md: 8 },
      }}
    >
      <Grid
        container
        spacing={0}
        alignItems="center"
      
        justifyContent="space-between"
      >
        {/* LEFT SIDE — Phone Image */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{ display: "flex", justifyContent: "center" , ml:{md:"40px",lg:"70px"}}}
        >
          <Box
            component="img"
            src="assets/services/phone.png"
            alt="Phone"
            sx={{
              width: { xs: "50%", sm: "55%", md: "70%" },
              maxWidth: "420px",
            }}
          />
        </Grid>

        {/* RIGHT SIDE — Title + Steps */}
        <Grid item xs={12} md={7}  sx={{
    mr: { md: "50px", lg: "80px" },
      mt: { xs: 8, sm: 5, md: 0 } 
  }}>
          {/* CATEGORY */}
          <Typography
            sx={{
              fontSize: "0.9rem",
              fontWeight: 600,
              mb: 1,
              color: "#555",
            }}
          >
            CATEGORY
          </Typography>

          {/* MAIN TITLE */}
          <Typography
            sx={{
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" },
              fontWeight: 700,
              mb: 4,
              lineHeight: 1.2,
            }}
          >
            We Offer Best Services
          </Typography>

          {/* 4 STEPS */}
          <Box>
            {steps.map((step, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  gap: 2,
                  mb: 4,
                  alignItems: "flex-start",
                }}
              >
                {/* Number bubble */}
                <Box
                  component="img"
                  src={step.img}
                  alt={`step-${index}`}
                  sx={{
                    width: "55px",
                    height: "55px",
                  }}
                />

                {/* Text */}
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: "1rem",
                      mb: 1,
                    }}
                  >
                    {step.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      color: "#555",
                      maxWidth: "420px",
                    }}
                  >
                    {step.desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Services;
