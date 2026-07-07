// UI Material
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// My imports
import { getCustomTheme } from "./theme/theme";

import "./App.css";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  localStorage.setItem("mode", "light");
  const theme = getCustomTheme(localStorage.getItem("mode") ?? "light");
  return (
    <>
      <ThemeProvider theme={theme}>
        <div id="App" className="App" dir="rtl">
          <Typography variant="h1">Test Materia ui text</Typography>
          <Typography variant="h1">اختبار للعربي </Typography>
          <Button variant="contained">click</Button>
          <ThemeToggle />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
