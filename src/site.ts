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
  location: 'Lagos, Nigeria',
  city: 'Lagos',
  timezone: 'WAT (UTC+1)',
  // DRAFT for Abraham to confirm.
  replyTime: 'I usually reply within one working day.',
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

// Contact channels, in order. Channels without a link yet are skipped.
// `label` is the button text on the home page; `kind` and `detail` are used on the contact page cards.
export const contactChannels = [
  { kind: 'Upwork', label: 'Hire me on Upwork', detail: 'Hire me on Upwork', href: site.upwork, external: true },
  { kind: 'WhatsApp', label: 'Chat on WhatsApp', detail: 'Chat on WhatsApp', href: site.whatsapp, external: true },
  { kind: 'Email', label: 'Email me', detail: site.email, href: `mailto:${site.email}`, external: false },
].filter((channel) => channel.href !== '');

// Contact form choices.
export const projectTypes = ['AI assistant or RAG', 'API or backend', 'LLM integration', 'Not sure yet'];
// DRAFT budget ranges for Abraham to confirm.
export const budgetRanges = ['Under $500', '$500 to $1,500', '$1,500 to $5,000', '$5,000+', 'Not sure yet'];
