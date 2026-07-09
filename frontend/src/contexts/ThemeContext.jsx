import { createContext, useState, useMemo, useContext, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// direction
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
// import prefixer from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { useTranslation } from "react-i18next";

// my imports
import { getCustomTheme } from "../theme/theme";

// define context and set default values
const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: "dark",
});

// Create the Emotion cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
const cacheLtr = createCache({ key: "muiltr" });

export const ThemeContextProvider = ({ children }) => {
  const { i18n } = useTranslation();

  const [mode, setMode] = useState(() => {
    return localStorage.getItem("mode") === "light" ||
      localStorage.getItem("dark") === "dark"
      ? localStorage.getItem("mode")
      : "dark";
  });

  const colorMode = useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [mode],
  );

  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  // Language and direction
  const currentDirection = i18n.language === "ar" ? "rtl" : "ltr";
  useEffect(() => {
    document.documentElement.dir = currentDirection;
    document.documentElement.lang = i18n.language;
  }, [currentDirection, i18n.language]);

  const theme = useMemo(
    () => getCustomTheme(mode, currentDirection),
    [mode, currentDirection],
  );

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <CacheProvider
          key={currentDirection}
          value={currentDirection === "rtl" ? cacheRtl : cacheLtr}
        >
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </CacheProvider>
      </ColorModeContext.Provider>
    </>
  );
};

/* eslint-disable react-refresh/only-export-components */
export const useColorMode = () => useContext(ColorModeContext);
