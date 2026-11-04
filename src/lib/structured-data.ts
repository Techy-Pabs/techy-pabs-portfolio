/*
  Structured data (JSON-LD) that tells search engines who Abraham is, what TechyPabs offers and
  where each page sits. Only facts that are already shown on the site belong here.
*/
import { site } from '../site';

const page = (path: string) => new URL(path, site.url).href;
const ids = { person: page('/#person'), business: page('/#business') };

const address = { '@type': 'PostalAddress', addressLocality: site.city, addressCountry: 'NG' };

// Profiles still waiting to be filled in (LinkedIn, Upwork) are left out.
const profiles = [site.github, site.linkedin, site.upwork].filter((url) => url !== '');

export const person = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': ids.person,
  name: site.owner,
  jobTitle: 'AI backend engineer',
  url: page('/about/'),
  email: site.email,
  address,
  worksFor: { '@id': ids.business },
  sameAs: profiles,
});

export const business = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': ids.business,
  name: site.name,
  description: site.description,
  url: page('/'),
  email: site.email,
  image: page('/og-default.jpg'),
  address,
  areaServed: 'Worldwide',
  founder: { '@id': ids.person },
});

export const service = (s: { title: string; summary: string; slug: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: s.title,
  serviceType: s.title,
  description: s.summary,
  url: page(`/services/${s.slug}/`),
  areaServed: 'Worldwide',
  provider: { '@type': 'ProfessionalService', '@id': ids.business, name: site.name, url: page('/') },
});

// e.g. breadcrumbs(['Services', '/services/'], ['AI chatbot development', '/services/ai-chatbot-development/'])
export const breadcrumbs = (...trail: [name: string, path: string][]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [['Home', '/'] as const, ...trail].map(([name, path], i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name,
    item: page(path),
  })),
});
