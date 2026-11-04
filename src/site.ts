// Site-wide settings. Change a link here and it updates everywhere it is used.
import portraitAbout from './assets/portraits/portrait-about.webp';
import portraitHero from './assets/portraits/portrait-hero.webp';

export const site = {
  name: 'TechyPabs',
  // The live address. Keep this the same as `site` in astro.config.mjs.
  url: 'https://techy-pabs-portfolio.vercel.app',
  owner: 'Abraham Bassey',
  email: 'basseyabraham988@gmail.com',
  whatsapp: 'https://wa.me/2347084361745',
  // "Prefer a call?" on the Contact page. Swap for a Cal.com or Calendly link here when there is one.
  callLink: `https://wa.me/2347084361745?text=${encodeURIComponent("Hi Abraham, I'd like to book a call about a project.")}`,
  github: 'https://github.com/Techy-Pabs',
  // Still to be supplied. Empty links are left out until filled in.
  linkedin: '',
  upwork: '',
  location: 'Lagos, Nigeria',
  city: 'Lagos',
  timezone: 'WAT (UTC+1)',
  replyTime: 'I usually reply within minutes during working hours (WAT).',
  // Shown in the footer on every page.
  description:
    'TechyPabs is the studio of Abraham Bassey, an AI backend engineer in Lagos, Nigeria, building backend systems and AI features for businesses worldwide.',
} as const;

export const navLinks = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

// The small mono list under the hero buttons.
export const heroStack = ['Python', 'FastAPI', 'PostgreSQL', 'RAG', 'LLM APIs', 'Docker'];

// The scrolling strip under the hero.
export const capabilities = ['RAG pipelines', 'LLM integration', 'Auth and security', 'Database design', 'Cloud deployment'];

export const portraits = {
  hero: { src: portraitHero, alt: 'Abraham Bassey in a black T-shirt, looking at the camera.' },
  about: { src: portraitAbout, alt: 'Abraham Bassey in a black sweatshirt, smiling slightly.' },
};

// Contact channels, in order. Channels without a link yet are skipped.
// `label` is the button text on the home page; `kind` and `detail` are used on the contact page cards.
export const contactChannels = [
  { kind: 'Upwork', label: 'Hire me on Upwork', detail: 'Hire me on Upwork', href: site.upwork, external: true },
  { kind: 'WhatsApp', label: 'Chat on WhatsApp', detail: 'Chat on WhatsApp', href: site.whatsapp, external: true },
  { kind: 'Email', label: 'Email me', detail: site.email, href: `mailto:${site.email}`, external: false },
].filter((channel) => channel.href !== '');

// Contact form budget choices. (The "What do you need?" options come from the services collection.)
export const budgetRanges = ['Under $500', '$500 to $1,500', '$1,500 to $5,000', '$5,000+', 'Not sure yet'];
