/*
  All the text on the About page, in one place.
  Lines marked PLACEHOLDER are waiting for Abraham's own words: replace the text in [brackets].
*/

export interface TimelineEntry {
  year: number | string; // a number sorts by year; text such as "[Year]" stays at the end
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
  intro: "I'm the engineer behind Techy Pabs. I build the backend and AI systems that make products actually work.",
  // PLACEHOLDER
  story:
    '[Your story in a few sentences: how you got into building software, what draws you to backend and AI work, and what clients can expect working with you.]',

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
        // PLACEHOLDER
        text: '[A line on your design background and how it shapes the products you build.]',
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
    entries: [
      // PLACEHOLDER
      { year: '[Year]', title: '[Milestone]', text: '[One line about it.]' },
      // PLACEHOLDER
      { year: '[Year]', title: '[Education]', text: '[School and course, if you want it shown.]' },
    ] as TimelineEntry[],
  },

  // The Credentials section stays hidden until this list has entries.
  credentials: [] as Credential[],

  closing: "Let's build something that works.",
};
