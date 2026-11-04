/*
  All the About text, in one place: the About page and the About teaser on the home page.
*/

export interface TimelineEntry {
  year: number | string; // a number sorts by year; text stays at the end
  title: string;
  text: string;
}

export interface Credential {
  name: string;
  issuer: string;
  year: number;
  url?: string; // link to verify it, if there is one
}

export const about = {
  title: { lead: "Hi, I'm", highlight: 'Abraham.' },

  // The three About paragraphs. The home teaser shows the first one only.
  paragraphs: [
    "Hey, I'm Abraham Bassey, founder of TechyPabs, where solid backend engineering meets practical AI. I build the systems behind a product, the APIs, databases and AI features that decide whether it actually works.",
    "I started TechyPabs to help businesses get software and AI they can trust. Whatever the product, the standard is the same: clean architecture, secure data, AI that's grounded and tested, and systems that keep working as the business grows.",
  ],
  closingLine: "This isn't just code. It's the engine room your product runs on.", // shown in bold

  // Shown with amber check icons on the About page and the home teaser.
  values: ['Accuracy over hype', 'Tested before shipped', 'Built to scale', 'Clear communication'],

  // The About teaser on the home page.
  teaser: { heading: 'Meet the engineer behind TechyPabs.' },

  facts: [
    { value: 'Python', label: 'primary language' },
    { value: 'FastAPI', label: 'framework of choice' },
    { value: 'Remote', label: 'working worldwide' },
    { value: 'Open', label: 'to new projects' },
  ],

  bring: {
    title: 'An engineer who thinks like a designer.',
    items: [
      {
        title: 'Backend depth',
        text: 'Data models, authentication and APIs designed carefully, because everything else is built on top of them.',
      },
      {
        title: 'Responsible AI',
        text: "AI features that are grounded, tested and honest about what they don't know.",
      },
      {
        title: 'A design trained eye',
        text: "I trained in Industrial Design, so I think about the person on the other side of the screen: clear flows, honest error messages and interfaces that don't make people guess.",
      },
    ],
  },

  journey: {
    title: 'How I got here.',
    // Shipped projects are added to the timeline automatically from their project files.
    // Optional one-line descriptions for them, by project slug (otherwise the project summary is used).
    projectNotes: {
      shopassist: 'An AI customer support product, live with a full test suite and API docs.',
    } as Record<string, string>,
    // Other milestones, e.g. { year: 2024, title: 'Graduated', text: 'One line about it.' }
    entries: [] as TimelineEntry[],
  },

  // The Credentials section stays hidden until this list has entries.
  credentials: [] as Credential[],

  closing: "Let's build something that works.",
};
