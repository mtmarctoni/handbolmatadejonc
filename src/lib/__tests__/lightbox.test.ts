// @vitest-environment jsdom
import { describe, expect, it, vi } from "vitest";
import { createLightboxController } from "../lightbox";

const photos = [
  { src: "/images/hero.jpg", alt: "Photo one" },
  { src: "/images/hero.jpg", alt: "Photo two" },
  { src: "/images/hero.jpg", alt: "Photo three" },
];

function setup() {
  const dialog = document.createElement("dialog");
  const showModal = vi.fn();
  const close = vi.fn();
  Object.defineProperty(dialog, "showModal", { value: showModal, configurable: true });
  Object.defineProperty(dialog, "close", { value: close, configurable: true });
  const image = document.createElement("img");
  const counter = document.createElement("span");
  document.body.append(dialog, image, counter);
  return { dialog, image, counter, showModal, close };
}

describe("createLightboxController", () => {
  it("opens at an index, updates the image and counter, and calls showModal", () => {
    const { dialog, image, counter, showModal } = setup();
    const controller = createLightboxController(photos, { dialog, image, counter });

    controller.open(1);

    expect(controller.currentIndex()).toBe(1);
    expect(image.src).toContain(photos[1].src);
    expect(image.alt).toBe("Photo two");
    expect(counter.textContent).toBe("2 / 3");
    expect(showModal).toHaveBeenCalledTimes(1);
  });

  it("wraps indexes around the photos list", () => {
    const { dialog, image, counter } = setup();
    const controller = createLightboxController(photos, { dialog, image, counter });

    controller.open(-1);
    expect(controller.currentIndex()).toBe(2);
    controller.next();
    expect(controller.currentIndex()).toBe(0);
    controller.prev();
    expect(controller.currentIndex()).toBe(2);
  });

  it("closes the dialog", () => {
    const { dialog, image, counter, close } = setup();
    const controller = createLightboxController(photos, { dialog, image, counter });

    controller.close();

    expect(close).toHaveBeenCalledTimes(1);
  });
});
