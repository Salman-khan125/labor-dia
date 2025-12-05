// src/components/Navbar.jsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navItems = ["Home", "About us", "Services", "Referrals"];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250, p: 2 }}>
     <Box
  sx={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mb: 3,
  }}
>
  {/* Logo — uses Box so sx breakpoints work */}
  <Box
    component="img"
    src="assets/navbar/logo.png"
    alt="Logo"
    sx={{
      width: "auto",
      height: 40,
      // move logo slightly to the left only on xs
      ml: { xs: "10px", sm: "24px", md: 0 },
      // ensure it doesn't overflow inside the drawer
      maxWidth: { xs: "70%", md: "100%" },
      display: "block",
    }}
  />

  <IconButton onClick={handleDrawerToggle}>
    <CloseIcon />
  </IconButton>
</Box>

      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding sx={{ mb: 1 }}>
            <Button
              fullWidth
              sx={{
                textAlign: "left",
                justifyContent: "flex-start",
                color: theme.palette.text.primary,
                fontSize: "1.1rem",
                py: 1.5,
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            >
              {item}
            </Button>
          </ListItem>
        ))}
        <ListItem disablePadding sx={{ mt: 2 }}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.primary.main,
              py: 5,
              fontSize: "1.1rem",
              "&:hover": {
                backgroundColor: theme.palette.secondary.dark,
              },
            }}
          >
            Contact
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "transparent",
          color: theme.palette.text.primary,
          boxShadow: "none",
          py: 2,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            {/* Logo - Left aligned */}
           <Box
  component="img"
  src="assets/navbar/logo.png"
  alt="Labor Dia Logo"
  sx={{
    height: 50,
    width: "auto",
    maxWidth: 150,

    // move logo left only on small screens
    ml: { xs: 0, sm: 6, md: 10 },

    display: "block",
  }}
/>

            {/* Navigation Links - Center aligned */}
            <Box
              sx={{
                flex: 2,
                display: { xs: "none", md: "flex" },
                justifyContent: "right",
                gap: 2,
                ml: 50,
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color: theme.palette.text.primary,
                    textTransform: "none",
                    fontSize: "1rem",
                    fontWeight: 500,
                    position: "relative",
                    "&:hover": {
                      color: theme.palette.secondary.main,
                      backgroundColor: "transparent",
                      "&::after": {
                        width: "100%",
                      },
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -5,
                      left: 0,
                      width: 0,
                      height: 2,
                      backgroundColor: theme.palette.secondary.main,
                      transition: "width 0.3s ease",
                    },
                    "&.active::after": {
                      width: "100%",
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>

            {/* Contact Button - Right aligned */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.secondary.main,
                  color: theme.palette.primary.main,
                  textTransform: "none",
                  fontSize: "1rem",
                  fontWeight: 600,
                  px: 4,
                  py: 1,
                  borderRadius: theme.shape.borderRadius,
                  display: { xs: "none", md: "block" },
                  "&:hover": {
                    backgroundColor: theme.palette.secondary.dark,
                    transform: "translateY(-2px)",
                    boxShadow: theme.shadows[4],
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Contact
              </Button>

              {/* Mobile menu button */}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{
                  display: { md: "none" },
                  color: theme.palette.secondary.main,
                  ml: 2,
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: 280,
            backgroundColor: theme.palette.primary.main,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
