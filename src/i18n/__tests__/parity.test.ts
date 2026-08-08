import { describe, expect, it } from "vitest";
import { ca } from "../ca";
import { en } from "../en";
import { es } from "../es";

function getKeys<T extends object>(obj: T, prefix = ""): string[] {
  const record = obj as Record<string, unknown>;
  return Object.keys(obj).flatMap((key) => {
    const value = record[key];
    const path = prefix ? `${prefix}.${key}` : key;
    return typeof value === "object" && value !== null ? getKeys(value as object, path) : [path];
  });
}

describe("i18n parity", () => {
  const caKeys = getKeys(ca);
  const esKeys = getKeys(es);
  const enKeys = getKeys(en);

  it("ca and es have same keys", () => {
    expect(esKeys.sort()).toEqual(caKeys.sort());
  });

  it("ca and en have same keys", () => {
    expect(enKeys.sort()).toEqual(caKeys.sort());
  });
});
