
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFF8E2",
      light: "#FFFBEF",
      dark: "#E6E0C8",
    },
    secondary: {
      main: "#782F40",
      light: "#9E4357",
      dark: "#571F2D", 
    },
    background: {
      default: "#ffffff",
    },
    text: {
       main: "#FFF8E2",
      light: "#FFFBEF",
      dark: "#E6E0C8",
      primary: "#1A1A1A",
      secondary: "#444444",
      
    },
    components: {
  MuiSvgIcon: {
    styleOverrides: {
      root: {
        color: "#782F40",
      },
    },
  },
}
  },

  typography: {
    fontFamily: "Montserrat, sans-serif",

    h1: { fontFamily: "Roboto Condensed, sans-serif", fontWeight: 700 },
    h2: { fontFamily: "Roboto Condensed, sans-serif", fontWeight: 700 },
    h3: { fontFamily: "Roboto Condensed, sans-serif", fontWeight: 600 },
    h4: { fontFamily: "Roboto Condensed, sans-serif", fontWeight: 600 },
    h5: { fontFamily: "Roboto Condensed, sans-serif", fontWeight: 500 },
    h6: { fontFamily: "Roboto Condensed, sans-serif", fontWeight: 500 },

    body1: { fontFamily: "Montserrat, sans-serif" },
    body2: { fontFamily: "Montserrat, sans-serif" },
    button: { fontFamily: "Montserrat, sans-serif" },
  },

  shape: {
    borderRadius: 12,
  },

  shadows: [
    "none",
    "0px 2px 4px rgba(0,0,0,0.05)",
    "0px 3px 8px rgba(0,0,0,0.08)",
    "0px 4px 12px rgba(0,0,0,0.1)",
    "0px 6px 20px rgba(0,0,0,0.12)",
    "0px 10px 30px rgba(0,0,0,0.16)",
    "0px 14px 40px rgba(0,0,0,0.18)",
    "0px 20px 50px rgba(0,0,0,0.22)", // strong shadow
    ...Array(17).fill("none"), 
  ],
});

export default theme;
