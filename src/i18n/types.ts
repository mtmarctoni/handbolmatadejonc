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
  about: {
    title: string;
    history: string;
  };
  gallery: {
    title: string;
    subtitle: string;
  };
  teams: {
    title: string;
    subtitle: string;
  };
  sponsors: {
    title: string;
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
  };
  contact: {
    title: string;
    address: string;
    email: string;
    phone: string;
  };
  footer: {
    copyright: string;
  };
}
