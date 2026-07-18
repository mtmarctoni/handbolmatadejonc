export { ca } from './ca';
export { es } from './es';
export { en } from './en';
export type { TranslationContent } from './types';

import { ca } from './ca';
import { es } from './es';
import { en } from './en';
import type { TranslationContent } from './types';

export const locales = ['ca', 'es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'ca';

export const dictionaries: Record<Locale, TranslationContent> = {
  ca,
  es,
  en,
};

export function getDictionary(locale: Locale): TranslationContent {
  return dictionaries[locale];
}
