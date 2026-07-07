import { createContext, useState, useMemo, useContext, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { getCustomTheme } from "../theme/theme";

// define context and set default values
const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: "dark",
});

export const  ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("mode") === "light" ||
      localStorage.getItem("dark") === "dark"
      ? localStorage.getItem("mode")
      : "dark";
  });
  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [mode],
  );
  const theme = useMemo(() => getCustomTheme(mode), [mode]);

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
};

/* eslint-disable react-refresh/only-export-components */
export const useColorMode = () => useContext(ColorModeContext);
