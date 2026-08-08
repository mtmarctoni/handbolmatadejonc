import { ca } from "./ca";
import { en } from "./en";
import { es } from "./es";
import type { TranslationContent } from "./types";

export type { TranslationContent } from "./types";
export type Locale = "ca" | "es" | "en";

const dictionaries: Record<Locale, TranslationContent> = {
  ca,
  es,
  en,
};

export function getDictionary(locale: Locale): TranslationContent {
  return dictionaries[locale];
}
