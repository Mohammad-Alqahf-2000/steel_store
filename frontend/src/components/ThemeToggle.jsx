import IconButton from "@mui/material/IconButton";
// import Brightness4Icon from "@mui/icons-material/Brightness4";
// import Brightness7Icon from "@mui/icons-material/Brightness7";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useColorMode } from "../contexts/ThemeContext";

export default function ThemeToggle() {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <>
      <IconButton onClick={toggleColorMode} color="inherit">
        {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </>
  );
}
