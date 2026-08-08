export interface MobileMenuLabels {
  open: string;
  close: string;
}

export interface MobileMenuElements {
  toggle: HTMLElement;
  menu: HTMLElement;
}

export interface MobileMenuController {
  isOpen: () => boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export function createMobileMenuController(
  elements: MobileMenuElements,
  labels: MobileMenuLabels,
): MobileMenuController {
  const { toggle, menu } = elements;

  function applyState(open: boolean): void {
    menu.classList.toggle("hidden", !open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? labels.close : labels.open);
    toggle.querySelector(".hamburger-open")?.classList.toggle("hidden", open);
    toggle.querySelector(".hamburger-close")?.classList.toggle("hidden", !open);
  }

  return {
    isOpen: () => !menu.classList.contains("hidden"),
    open: () => applyState(true),
    close: () => applyState(false),
    toggle: () => applyState(menu.classList.contains("hidden")),
  };
}
