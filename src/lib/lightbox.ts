export interface LightboxPhoto {
  src: string;
  alt: string;
}

export interface LightboxElements {
  dialog: HTMLDialogElement;
  image: HTMLImageElement;
  counter: HTMLElement;
}

export interface LightboxController {
  open: (index: number) => void;
  close: () => void;
  next: () => void;
  prev: () => void;
  currentIndex: () => number;
  update: () => void;
}

function normalizeIndex(index: number, length: number): number {
  return ((index % length) + length) % length;
}

export function createLightboxController(
  photos: LightboxPhoto[],
  elements: LightboxElements,
): LightboxController {
  let current = 0;
  const { dialog, image, counter } = elements;

  function update(): void {
    const photo = photos[current];
    if (!photo) return;
    image.src = photo.src;
    image.alt = photo.alt;
    counter.textContent = `${current + 1} / ${photos.length}`;
  }

  return {
    open(index: number) {
      current = normalizeIndex(index, photos.length);
      update();
      if (typeof dialog.showModal === "function") {
        dialog.showModal();
      }
    },
    close() {
      if (typeof dialog.close === "function") {
        dialog.close();
      }
    },
    next() {
      current = (current + 1) % photos.length;
      update();
    },
    prev() {
      current = (current - 1 + photos.length) % photos.length;
      update();
    },
    currentIndex: () => current,
    update,
  };
}
