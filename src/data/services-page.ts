/*
  The text on the /services overview page (the service blocks themselves come from src/content/services).
*/

export const servicesPage = {
  hero: {
    headline: 'Backend and AI systems, built to last.',
    highlight: 'built to last.',
    intro:
      'From a single API to a full AI product. You get working software, clear documentation and a live deploy, not just code in a folder.',
    cta: 'Discuss your project',
  },

  process: {
    title: 'How a project runs.',
    steps: [
      { title: 'Discovery call', text: 'We talk through the problem, your users and what success looks like.' },
      { title: 'Written spec', text: 'Features, data model and endpoints agreed in writing before any code.' },
      { title: 'Build in slices', text: "Working pieces you can try early, each one tested before it's shown." },
      { title: 'Launch and handover', text: 'Live deploy, API docs and a README, so the system is truly yours.' },
    ],
  },

  toolbox: {
    title: 'The stack I build with.',
    // `highlight` shows the item in amber.
    items: [
      { name: 'Python' },
      { name: 'FastAPI', highlight: true },
      { name: 'PostgreSQL' },
      { name: 'SQLAlchemy' },
      { name: 'Alembic' },
      { name: 'pgvector', highlight: true },
      { name: 'JWT auth' },
      { name: 'Docker' },
      { name: 'Pytest' },
      { name: 'LLM APIs', highlight: true },
      { name: 'React' },
      { name: 'Render' },
      { name: 'Vercel' },
      { name: 'Git and GitHub' },
    ],
  },

  faq: {
    title: 'Common questions.',
    items: [
      {
        question: 'Which AI model will my product use?',
        answer:
          'Whichever fits your budget and needs. The AI layer is provider agnostic, so OpenAI, Anthropic or another model can be swapped in through configuration, on your own account.',
      },
      {
        question: 'Do you build the frontend too?',
        answer:
          "My focus is the backend and the AI layer, but I can build the frontend that goes with it. ShopAssist's customer chat and owner dashboard were built in React alongside the API.",
      },
      {
        question: 'How long does a typical project take?',
        answer:
          'It depends on the scope, which we agree in the written spec before any code. For reference, ShopAssist took three weeks from start to a live deploy.',
      },
      {
        question: 'How do we work together and get paid?',
        answer:
          'We start with a discovery call, agree the scope, timeline and payment terms in a written spec, and then I build in slices you can try as we go.',
      },
    ],
  },

  closing: { heading: "Not sure which service fits? Let's talk it through.", button: 'Book a call' },
};
