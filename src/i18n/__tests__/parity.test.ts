import { describe, it, expect } from 'vitest';
import { ca } from '../ca';
import { es } from '../es';
import { en } from '../en';
import type { TranslationContent } from '../types';

function getKeys(obj: any, prefix = ''): string[] {
  return Object.keys(obj).flatMap(key => {
    const path = prefix ? `${prefix}.${key}` : key;
    return typeof obj[key] === 'object' && obj[key] !== null
      ? getKeys(obj[key], path)
      : [path];
  });
}

describe('i18n parity', () => {
  const caKeys = getKeys(ca);
  const esKeys = getKeys(es);
  const enKeys = getKeys(en);

  it('ca and es have same keys', () => {
    expect(esKeys.sort()).toEqual(caKeys.sort());
  });

  it('ca and en have same keys', () => {
    expect(enKeys.sort()).toEqual(caKeys.sort());
  });
});
