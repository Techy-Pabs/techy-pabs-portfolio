# TechyPabs portfolio site: build spec

The personal portfolio of Abraham Bassey, an AI backend engineer, under the brand TechyPabs. It shows every project he ships, now and in future, and turns visitors into client enquiries.

The approved mockups are in `design/mockups/` (desktop at 1440 px wide and phone at 390 px wide for each page). Build to match them. Images are in `src/assets/` (`portraits/` and `projects/<slug>/`), so Astro can optimise them.

## Stack

- Astro (latest stable), static output, deployed on Vercel
- Tailwind CSS, with the design tokens below set in the theme
- Fonts self hosted with Fontsource packages, not loaded from Google
- Content collections in Markdown for projects and services, so new work is added as files, never by editing page code
- GSAP only for the scroll animations CSS can't do; everything else in CSS
- Every animation turns off when the visitor's device asks for reduced motion

## Design tokens

Colours
| Token | Value | Use |
|---|---|---|
| black | #000000 | page background |
| charcoal | #1C1D20 | dark sections and cards |
| amber | #FFBB18 | the one accent: buttons, labels, highlighted words, portrait frames |
| light | #F4F4F4 | light sections and light cards |
| white | #FFFFFF | cards on light sections |
| text-soft | #D1D1D1 | secondary text on dark |
| text-muted | #A8A49E | body text on dark |
| text-muted-light | #494C4F | body text on light |
| line | rgba(249,249,249,0.16) | dividers and borders on dark |

The hero background is `linear-gradient(277deg, #1C1D20 0%, #000000 100%)`. Primary buttons use `linear-gradient(217deg, #FFBB18 69%, #F4F4F4 100%)` with black text.

Type
| Role | Font | Notes |
|---|---|---|
| Headings and body | Outfit 400 to 700 | headings 700, tight letter spacing (about -0.04em) |
| Label pills | Ropa Sans 400 | 15 px, letter spacing 0.5 px, amber 1 px outline, fully rounded |
| Buttons | Roboto 500 | letter spacing 0.5 px |
| Code and technical labels | Geist Mono 400 and 500 | terminal card, diagram, small uppercase labels |

Highlighted words in headings are the same font in amber, never italic.

Layout: content max width 1240 px with 24 px side padding. Cards 24 to 36 px radius, buttons and pills fully rounded. Touch targets at least 44 px. Below 760 px wide the nav links and the "Start a project" button are replaced by a round menu button that opens a full screen menu.

## Pages

All pages share the nav (logo "tp" tile plus "TechyPabs"; links Work, Services, About, Contact, with the current page highlighted in amber; "Start a project" outline button) and the fat footer (`footer-*.jpg` mockups): the logo, the studio description from `site.ts` and a "Start a project" button; four link columns, Services and Work built from the collections (plus "All services" and "All projects"), TechyPabs (About Abraham, How I work, Contact) and Connect (Upwork, GitHub, LinkedIn, WhatsApp, Email, with empty links hidden); a bottom row with the copyright and location, Sitemap and Back to top; and a large "techypabs" wordmark cut off by the page edge, hidden from screen readers.

Every page has a unique title and meta description that includes its main search phrase.

1. **Home** (`/`): hero with headline "AI backend engineer for products that need to actually work.", the cutout portrait rising above an amber block, a typing terminal card and a "Latest ship" tag (both from the most recently shipped project); a light scrolling capabilities strip with a pause/play button; "What I build" services from the services collection; "Selected work" showing featured projects; a short About teaser with the second portrait; an amber contact block with Upwork, WhatsApp and email.
2. **Work** (`/work`): "All work." with automatic counts (shipped, live demos); filter buttons All, AI, Backend, Client work (from project tags) with an honest empty state; one large row per project linking to its case study.
3. **Case study** (`/work/[slug]`): one template for every project. Title, summary, role, timeline, core stack, Live demo and Code buttons; hero screenshot on an amber panel; The problem; Three parts, one system (or however many parts the project has); Under the hood with a step diagram and key decisions; Quality numbers; Results and next steps; closing call to action; "All work" and GitHub links.
4. **Services** (`/services`): hero; one block per service from the services collection, each with "Good for", "What you get" and a link to its own service page; a four step process (`#process`, the footer's "How I work"); the tech stack; an FAQ; a call to action. The page text lives in `src/data/services-page.ts`.
4a. **Service page** (`/services/[slug]`, `service-page-*.jpg` mockups): one template for every service. Breadcrumb, hero with headline, intro, CTA, a "See [project]" button and the service's hero image on an amber panel; What you get with Good for tags and deliverable cards; the proof card linking to the proving project's section; the service's FAQ; related services (all the others, automatically); closing call to action.
5. **About** (`/about`): "Hi, I'm Abraham." with portrait, three paragraphs and four value points with amber check icons; quick facts strip; What I bring; a journey timeline (shipped projects added automatically, plus any real milestones); credentials (hidden until there are entries); call to action. All About text, including the home teaser's ("Meet the engineer behind TechyPabs.", paragraph 1, the value points and "Work with me"), lives in `src/data/about.ts`.
6. **Contact** (`/contact`): direct channels (Upwork, WhatsApp, email) and a project form (name, email, what you need, budget, message). "What you need" has one option per service (its `shortName`) plus "Not sure yet", so new services appear automatically. The form posts to a small FastAPI endpoint built later; until then it can use a mailto fallback.
7. **404** page in the same style.

## Content model

Projects (`src/content/projects/*.md`): title, titleHighlight (optional; the part of the title shown in amber on the case study, copied exactly from the title), slug, summary, kind, year, tags (ai, backend, client), featured, order, role, timeline, stack (the first three are the core stack), links (live, code, docs), cover image, parts (label, title, body, image, optional link with label and href), partsTitle (the heading above the parts), problem (headline, highlight, body; highlight must be words copied exactly from the headline), diagram (title, steps with label, text and an optional highlight flag), decisions (title, body), quality (value, label), results, nextSteps. The Markdown body is optional extra write up.

Two more project fields: `shipped` is the required ship date, written unquoted as YYYY-MM-DD, and is used for any "newest first" ordering, including choosing the project for the home page's "Latest ship" tag. `coverMobile` is optional and holds `src` only: when set, the case study hero shows it instead of the cover below 760 px, through a `<picture>`/`<source>` element so phones only download the mobile image. It has no alt of its own: a `<picture>` carries one alt text, so the cover's alt is the single description for both images and must suit both. `terminal` is optional and holds the home hero's terminal card for that project: method, path, question, trace and response (for example POST, /conversations/42/messages, "Is delivery within Lagos free?", "3 sources found · pgvector", "200 OK · cites delivery.md").

Every image (the cover and each part's image) is written as `{ src, alt }`: `src` is a path into `src/assets/` and `alt` is required, non-empty alt text.

Services (`src/content/services/*.md`): title, slug (the URL `/services/<slug>`), order, shortName (the contact form option), summary (home card text), tagline (related services cards), hero (headline, highlight, intro, cta, image as `{ src, alt }`; highlight must be words copied exactly from the headline), goodFor (tags), deliverablesIntro, deliverables (title, body), proof (project, section, label), faqTitle, faqs (question, answer), closing (call to action heading). The Markdown body is the longer description on the Services overview. Service text must only claim what the proving project shows. `proof.project` must be the slug of an existing project, and `proof.section` must be one of the case study section anchors: `problem`, `parts`, `under-the-hood`, `quality` or `results`. A service is published only once a shipped project proves it.

The schemas are strict: unknown fields, missing images, bad URLs or a proof that points to a missing project fail the build.

Site settings (`src/site.ts`): name, email basseyabraham988@gmail.com, WhatsApp link https://wa.me/2347084361745, GitHub https://github.com/Techy-Pabs, LinkedIn and Upwork (to be supplied), location and time zone, the footer description, the reply time ("I usually reply within minutes during working hours (WAT).") and the budget ranges (Under $500, $500 to $1,500, $1,500 to $5,000, $5,000+, Not sure yet).

The first project entry is ShopAssist: timeline 3 weeks, October to November 2026; live demo https://shopassist-five.vercel.app; API docs https://shopassist-022b.onrender.com/docs; code https://github.com/Techy-Pabs/shopassist; quality 350+ backend tests, 450+ frontend tests, a 24 question answer quality check, live on Render, Neon and Vercel.

## Motion

- Home: headline words rise in on load; the terminal card types its lines in order; the capabilities strip scrolls slowly, pauses on hover, and has a pause/play button (keyboard focusable, at least 44 px, labelled "Pause scrolling" / "Play scrolling", not shown under reduced motion) so keyboard and touch users can stop it; service cards lift on hover; the featured project's screens fan apart as it scrolls into view.
- Clicking a project carries its image into the case study page (Astro view transitions).
- Case study: the parts reveal in turn; the diagram draws step by step as it scrolls into view; quality numbers count up once.

## Quality bar

Lighthouse 95 or higher for performance, accessibility, best practices and SEO; no horizontal scroll at 390 px; text contrast at least 4.5:1; every image has alt text; page titles, descriptions and a social preview image on every page.

## Still to come from Abraham

Education and other journey milestones, certifications, logo, LinkedIn and Upwork links, a CV file, and the domain name.
