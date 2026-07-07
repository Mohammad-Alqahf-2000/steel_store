import { createTheme } from "@mui/material/styles";
import { tokens } from "./palette";

// Light Palette config
const lightPalette = {
  mode: "light",
  primary: {
    main: tokens.luxuryGold,
    contrastText: tokens.pureWhite,
  },
  secondary: {
    main: tokens.charcoal,
  },
  background: {
    default: tokens.offWhite,
  },
  text: {
    primary: tokens.darkGray,
    secondary: tokens.mutedGray,
  },
};
// Dark Palette config
const darkPalette = {
  mode: "dark",
  primary: {
    main: tokens.brightGold,
    contrastText: "#000000",
  },
  secondary: {
    main: tokens.pureWhite,
  },
  background: {
    default: tokens.midnightBlack,
  },
  text: {
    primary: tokens.pureWhite,
    secondary: tokens.silverGray,
  },
};

export const getCustomTheme = (mode = "dark") => {
  return createTheme({
    palette: mode === "dark" ? darkPalette : lightPalette,
    shape: {
      borderRadius: 8,
    },
    typography: {
      fontFamily: '"Tajawal","Cairo", "Roboto" , sans-serif',
      h1: { fontWeight: 700 },
    },
  });
};
