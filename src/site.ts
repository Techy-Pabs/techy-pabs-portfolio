// Site-wide settings. Change a link here and it updates everywhere it is used.
export const site = {
  name: 'Techy Pabs',
  owner: 'Abraham Bassey',
  email: 'basseyabraham988@gmail.com',
  whatsapp: 'https://wa.me/2347084361745',
  github: 'https://github.com/Techy-Pabs',
  // Still to be supplied. Empty links are left out of the footer until filled in.
  linkedin: '',
  upwork: '',
} as const;

export const navLinks = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;
