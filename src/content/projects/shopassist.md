---
title: ShopAssist
titleHighlight: Assist
slug: shopassist
summary: An AI support assistant that answers store customers from the store's own documents, and tells the owner exactly what it couldn't answer.
kind: AI customer support
year: 2026
shipped: 2026-11-02
tags: [ai, backend]
featured: true
order: 1
role: Solo, backend to frontend
timeline: 3 weeks · Oct to Nov 2026
stack: [FastAPI, PostgreSQL, pgvector, JWT, React]
links:
  live: https://shopassist-five.vercel.app
  code: https://github.com/Techy-Pabs/shopassist
  docs: https://shopassist-022b.onrender.com/docs
cover:
  src: ../../assets/projects/shopassist/chat.webp
  alt: The Loom & Lane demo store with the ShopAssist chat open, answering a customer's question about the price of the Gold stitch black kaftan.
coverMobile:
  src: ../../assets/projects/shopassist/chat-panel.webp
terminal:
  method: POST
  path: /conversations/42/messages
  question: Is delivery within Lagos free?
  trace: 3 sources found · pgvector
  response: 200 OK · cites delivery.md

problem:
  headline: Small online stores answer the same questions all day. Generic chatbots answer fast but invent things, like products that don't exist or discounts nobody approved.
  highlight: invent things,
  body: ShopAssist only answers from documents the owner controls, shows where each answer came from, and turns every question it can't answer into a task for the owner.

partsTitle: What the customer, the owner and the server each see.
parts:
  - label: Customer chat
    title: Answers shoppers can trust
    body: Shoppers sign in and ask about delivery, sizing or returns. Every reply is grounded in the store's documents.
    image:
      src: ../../assets/projects/shopassist/chat-panel.webp
      alt: The Loom & Lane chat panel. A shopper asks how much the gold stitch wear is, and the assistant replies that the Gold stitch black kaftan costs ₦54,000.
  - label: Owner dashboard
    title: Gaps become fixes
    body: The owner sees unanswered questions, the source behind each reply, and uploads a document to close the gap.
    image:
      src: ../../assets/projects/shopassist/dashboard.webp
      alt: The ShopAssist owner dashboard listing customer conversations, with one marked "Couldn't answer" and an "Add to knowledge" button beside it.
  - label: The API
    title: The backend behind both
    body: A documented FastAPI service handling auth, conversations, retrieval and admin, with live Swagger docs.
    image:
      src: ../../assets/projects/shopassist/api-docs.webp
      alt: ShopAssist's Swagger API docs showing the auth and conversations endpoints.
    link:
      label: Open API docs
      href: https://shopassist-022b.onrender.com/docs

diagram:
  title: How one answer gets made.
  steps:
    - label: Client
      text: Customer question
    - label: FastAPI
      text: Auth check, injection guard
      highlight: true
    - label: Postgres + pgvector
      text: Find matching chunks
    - label: AI layer
      text: LLM via OpenRouter
    - label: Response
      text: Answer + sources, or a flag

decisions:
  - title: Why pgvector, not a separate vector DB
    body: "Documents, conversations and embeddings live in one PostgreSQL database: one thing to run, back up and secure."
  - title: A provider agnostic AI layer
    body: The model sits behind one interface, so a client can switch to OpenAI or Anthropic through configuration.
  - title: Refusing is a feature
    body: When retrieval finds nothing relevant, the assistant says so and the question is flagged, instead of guessing.

quality:
  - value: 350+
    label: backend tests with Pytest
  - value: 450+
    label: frontend tests, axe and keyboard checks
  - value: "24"
    label: question answer quality check
  - value: Live
    label: deployed on Render, Neon and Vercel

results:
  - Answers grounded in the store's own documents, with the source shown
  - Every unanswered question flagged for the owner, with a one step fix
  - Follow up questions understood in context
  - "A store agnostic engine: a new store means new documents and one setting"

nextSteps:
  - Rate limiting on login and messages
  - Hybrid keyword and meaning search with reranking
  - Streamed replies and background document processing
  - An order lookup tool, so the assistant can act as well as answer
---
