// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { createMobileMenuController } from "../menu";

function setup() {
  const menu = document.createElement("div");
  menu.classList.add("hidden");
  const openIcon = document.createElement("svg");
  openIcon.classList.add("hamburger-open");
  const closeIcon = document.createElement("svg");
  closeIcon.classList.add("hamburger-close", "hidden");
  const toggle = document.createElement("button");
  toggle.append(openIcon, closeIcon);
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Obrir menú");
  document.body.append(menu, toggle);
  return { menu, toggle, openIcon, closeIcon };
}

describe("createMobileMenuController", () => {
  it("starts closed", () => {
    const { menu, toggle } = setup();
    const controller = createMobileMenuController(
      { toggle, menu },
      { open: "Obrir menú", close: "Tancar menú" },
    );
    expect(controller.isOpen()).toBe(false);
  });

  it("opens and closes the menu with aria state and icon swap", () => {
    const { menu, toggle, openIcon, closeIcon } = setup();
    const controller = createMobileMenuController(
      { toggle, menu },
      { open: "Obrir menú", close: "Tancar menú" },
    );

    controller.open();
    expect(controller.isOpen()).toBe(true);
    expect(menu.classList.contains("hidden")).toBe(false);
    expect(toggle.getAttribute("aria-expanded")).toBe("true");
    expect(toggle.getAttribute("aria-label")).toBe("Tancar menú");
    expect(openIcon.classList.contains("hidden")).toBe(true);
    expect(closeIcon.classList.contains("hidden")).toBe(false);

    controller.close();
    expect(controller.isOpen()).toBe(false);
    expect(toggle.getAttribute("aria-expanded")).toBe("false");
    expect(toggle.getAttribute("aria-label")).toBe("Obrir menú");
    expect(openIcon.classList.contains("hidden")).toBe(false);
    expect(closeIcon.classList.contains("hidden")).toBe(true);
  });

  it("toggles between open and closed", () => {
    const { menu, toggle } = setup();
    const controller = createMobileMenuController(
      { toggle, menu },
      { open: "Obrir menú", close: "Tancar menú" },
    );

    controller.toggle();
    expect(controller.isOpen()).toBe(true);
    controller.toggle();
    expect(controller.isOpen()).toBe(false);
  });
});
