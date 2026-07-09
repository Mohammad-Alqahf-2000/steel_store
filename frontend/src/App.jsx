// UI Material

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// i18next
import { useTranslation } from "react-i18next";

// My imports

import "./App.css";
import ThemeToggle from "./components/ThemeToggle";
import LanguageToggle from "./components/LanguageToggle";

function App() {
  // Test i18next
  const { t } = useTranslation();
  return (
    <>
      <div id="App" className="App">
        <Typography variant="h1">Test Materia ui text</Typography>
        <Typography variant="h1">اختبارللخط العربي </Typography>
        <br />
        <Button variant="contained">click</Button>
        <br />
        <Typography variant="p">Test languages : {t("hello world")}</Typography>
        <br />
        <LanguageToggle />
        <ThemeToggle />
        <br />
      </div>
    </>
  );
}

export default App;
