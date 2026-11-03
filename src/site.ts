// Site-wide settings. Change a link here and it updates everywhere it is used.
import portraitAbout from './assets/portraits/portrait-about.webp';
import portraitHero from './assets/portraits/portrait-hero.webp';

export const site = {
  name: 'Techy Pabs',
  owner: 'Abraham Bassey',
  email: 'basseyabraham988@gmail.com',
  whatsapp: 'https://wa.me/2347084361745',
  github: 'https://github.com/Techy-Pabs',
  // Still to be supplied. Empty links are left out until filled in.
  linkedin: '',
  upwork: '',
  // Placeholder until Abraham supplies his own words.
  bioShort:
    "[Two or three sentences in your own words: where you're based, what you build, and why you care about software that works the first time.]",
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

// Contact buttons, in order. Channels without a link yet are skipped.
export const contactChannels = [
  { label: 'Hire me on Upwork', href: site.upwork, external: true },
  { label: 'Chat on WhatsApp', href: site.whatsapp, external: true },
  { label: 'Email me', href: `mailto:${site.email}`, external: false },
].filter((channel) => channel.href !== '');
