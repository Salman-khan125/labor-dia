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
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom"; // ✅ ADD THIS IMPORT

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();

  // ✅ Update navItems to include route paths
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About us", path: "/aboutus" },
    { label: "Services", path: "/service" },
    { label: "Referrals", path: "/referrals" }
  ];

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleItemClick = () => setMobileOpen(false);

  const drawer = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        p: 2,
      }}
    >
      {/* Top header with logo + close button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Box
          component={Link} // ✅ Change to Link
          to="/" // ✅ Add to="/"
          onClick={handleItemClick}
        >
          <Box
            component="img"
            src="assets/navbar/logo.png"
            alt="Logo"
            sx={{ height: 40 }}
          />
        </Box>

        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Navigation links */}
      <List sx={{ flexGrow: 1 }}>
        {navItems.map((item) => (
          <ListItem
            key={item.label}
            disablePadding
            onClick={handleItemClick}
          >
            <Button
              component={Link} // ✅ Add this
              to={item.path} // ✅ Add this
              fullWidth
              sx={{
                justifyContent: "flex-start",
                color: theme.palette.text.primary,
                fontSize: "1.1rem",
                py: 1.5,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            >
              {item.label}
            </Button>
          </ListItem>
        ))}
      </List>

      {/* Contact Button — STICKY BOTTOM */}
      <Box sx={{ pb: 2 }}>
        <Button
          component={Link} // ✅ Add this
          to="/contact" // ✅ Add this
          fullWidth
          variant="contained"
          onClick={handleItemClick}
          sx={{
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.main,
            py: 1.3,
            fontSize: "1.1rem",
            textTransform: "none",
            "&:hover": {
              backgroundColor: theme.palette.secondary.dark,
            },
          }}
        >
          Contact
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      {/* TOP NAV */}
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "transparent",
          color: theme.palette.secondary.main,
          py: 2,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            {/* Logo */}
            <Box
              component={Link} // ✅ Change to Link
              to="/" // ✅ Add to="/"
            >
              <Box
                component="img"
                src="assets/navbar/logo.png"
                alt="Labor Dia Logo"
                sx={{
                  height: 50,
                  width: "auto",
                  display: "block",
                  ml: { xs: 0, sm: 4, md: 7 },
                }}
              />
            </Box>

            {/* Desktop nav links */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 2,
                ml: 70,
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link} // ✅ Add this
                  to={item.path} // ✅ Add this
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
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Desktop contact */}
            <Button
              component={Link} // ✅ Add this
              to="/contact" // ✅ Add this
              variant="contained"
              sx={{
                display: { xs: "none", md: "block" },
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.primary.main,
                textTransform: "none",
                px: 4,
                py: 1,
                fontWeight: 600,
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: theme.palette.secondary.dark,
                  transform: "translateY(-2px)",
                  boxShadow: theme.shadows[4],
                },
              }}
            >
              Contact
            </Button>

            {/* Mobile menu button */}
            <IconButton
              sx={{ display: { md: "none" }, color: theme.palette.secondary.main }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
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
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;