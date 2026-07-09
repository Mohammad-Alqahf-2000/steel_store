// Material Ui
import Button from "@mui/material/Button";
import LanguageIcon from "@mui/icons-material/Language";

// i18n
import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
  };

  return (
    <>
      <Button
        // color="inherit"
        onClick={toggleLanguage}
        startIcon={<LanguageIcon />}
        sx={{}}
        variant="contained"
      >
        {i18n.language === "en" ? "العربية" : "English"}
      </Button>
    </>
  );
}
