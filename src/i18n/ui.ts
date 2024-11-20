import { es } from "./lang/es/translate";
import { en } from "./lang/en/translate";

export const languages = {
  es: "Español",
  en: "English",
} as const;

export const flags = {
  es: "/flags/co.svg",
  en: "/flags/eeuu.svg",
} as const;
export const defaultLang = "es";

export const ui: Record<keyof typeof languages, Record<string, string>> = {
  es,
  en,
};
