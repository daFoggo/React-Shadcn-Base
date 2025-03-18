import { useTranslation } from "react-i18next";

export const useLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = async (language: string) => {
    try {
      const supportedLangs = Array.isArray(i18n.options.supportedLngs)
        ? i18n.options.supportedLngs
        : ["vi"];

      const validLanguage = supportedLangs.includes(language) ? language : "vi";

      await i18n.changeLanguage(validLanguage);
      localStorage.setItem("i18nextLng", validLanguage);
    } catch (error) {
      console.error("Failed to change language:", error);
      await i18n.changeLanguage("vi");
      localStorage.setItem("i18nextLng", "vi");
    }
  };

  const supportedLanguages = Array.isArray(i18n.options.supportedLngs)
    ? i18n.options.supportedLngs
    : ["vi"];

  return {
    currentLanguage: i18n.language || "vi",
    changeLanguage,
    languages: supportedLanguages.filter((lng) => lng !== "cimode"),
  };
};
