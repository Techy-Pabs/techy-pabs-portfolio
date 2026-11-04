---
title: AI chatbot development
slug: ai-chatbot-development
order: 1
shortName: AI chatbot
summary: Chatbots and assistants that answer from your own documents, cite their sources and refuse to make things up.
tagline: Assistants that answer from your documents, with sources.
hero:
  headline: AI chatbots that answer from your own documents, not guesses.
  highlight: not guesses.
  intro: I build customer support and knowledge assistants that use retrieval (RAG) over your documents, cite where each answer came from, and flag the questions they couldn't answer so you can fill the gap.
  cta: Discuss your chatbot
  image:
    src: ../../assets/projects/shopassist/chat-panel.webp
    alt: The ShopAssist chat panel on the Loom & Lane demo store, answering a shopper's question about the price of the Gold stitch black kaftan.
goodFor: [Online stores, Customer support teams, Internal knowledge bases]
deliverablesIntro: A working assistant, live on your site, with the backend and documentation to keep it running.
deliverables:
  - title: Document ingestion
    body: Your policies, product details and FAQs turned into a searchable knowledge base.
  - title: Grounded answers
    body: Replies built only from your documents, with the source shown.
  - title: Owner dashboard
    body: See conversations, unanswered questions and the documents behind each reply.
  - title: Safety and quality checks
    body: Prompt injection testing, capped reply length and an answer quality test set.
proof:
  project: shopassist
  section: under-the-hood
  label: See how its answers are grounded
faqTitle: Questions about AI chatbots.
faqs:
  - question: Will the chatbot make things up?
    answer: It's built to answer only from your documents. When it can't find the answer there, it says so and flags the question for you, instead of guessing.
  - question: What documents can it learn from?
    answer: Written documents such as your policies, product details and FAQs. In ShopAssist the owner adds them from the dashboard, and they're searched with pgvector inside the same PostgreSQL database as everything else.
  - question: Which AI model does it use?
    answer: The model sits behind one provider agnostic layer. ShopAssist runs through OpenRouter, and can be switched to OpenAI or Anthropic through configuration.
closing: Need a chatbot that gets it right?
---

Assistants that answer from your documents, product data or policies. They cite where each answer came from, refuse to guess, and flag the questions they couldn't answer.
