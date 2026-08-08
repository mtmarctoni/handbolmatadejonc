export interface TranslationContent {
  site: {
    name: string;
    tagline: string;
  };
  nav: {
    about: string;
    sponsors: string;
    contact: string;
    instagram: string;
  };
  hero: {
    intro: string;
    cta: string;
  };
  about: {
    title: string;
    history: string;
    joinLink: string;
    valueProps: {
      training: { title: string; description: string };
      effort: { title: string; description: string };
      values: { title: string; description: string };
      success: { title: string; description: string };
    };
  };
  gallery: {
    title: string;
    subtitle: string;
    lightbox: {
      close: string;
      prev: string;
      next: string;
      alt: string;
    };
    photos: {
      match: string;
      training: string;
      celebration: string;
      action: string;
      session: string;
      community: string;
    };
  };
  teams: {
    title: string;
    subtitle: string;
    list: {
      name: string;
      category: string;
      description: string;
    }[];
  };
  sponsors: {
    title: string;
    intro: string;
    names: string[];
    collaboratorNames: string[];
  };
  collaborators: {
    title: string;
  };
  becomeSponsor: {
    title: string;
    description: string;
  };
  becomeMember: {
    title: string;
    subtitle: string;
    benefits: {
      training: { title: string; description: string };
      community: { title: string; description: string };
      values: { title: string; description: string };
    };
    stats: {
      years: string;
      athletes: string;
      teams: string;
    };
  };
  contact: {
    title: string;
    intro: string;
    addressLabel: string;
    emailLabel: string;
    phoneLabel: string;
    address: string;
    email: string;
    phone: string;
  };
  contactForm: {
    name: { label: string; placeholder: string };
    email: { label: string; placeholder: string };
    subject: { label: string; placeholder: string };
    message: { label: string; placeholder: string };
    submit: string;
    subjectHidden: string;
  };
  footer: {
    copyright: string;
    tagline: string;
    contactTitle: string;
    navigation: string;
    madeWith: string;
  };
  header: {
    menuOpen: string;
    menuClose: string;
  };
  a11y: {
    skipToContent: string;
  };
}
