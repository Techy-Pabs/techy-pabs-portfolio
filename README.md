# TechyPabs

The portfolio site of Abraham Bassey, AI backend engineer. Built with Astro and Tailwind CSS as a static site, live at https://techy-pabs-portfolio.vercel.app. The build spec and approved mockups are in [`design/`](design/SPEC.md).

## Run it locally

You need Node.js 22.23 or newer.

```sh
npm install       # first time only: downloads Astro, Tailwind and the fonts
npm run dev       # starts the site at http://localhost:4321 and reloads as you edit
```

Stop the dev server with `Ctrl + C`.

## Other commands

| Command           | What it does                                                 |
| :---------------- | :----------------------------------------------------------- |
| `npm run build`   | Builds the finished site into `dist/`                        |
| `npm run preview` | Serves the built `dist/` folder so you can check it locally  |
| `npm run check`   | Type-checks every `.astro` and `.ts` file (TypeScript strict) |

## Where things live

```text
design/                   spec and mockups (not part of the built site)
public/                   files served as-is: icons and the default social preview image
vercel.json               security headers, and redirects from the old /work addresses to /portfolio
src/
  assets/                 images Astro optimises: portraits and project screenshots
  content/                projects and services as Markdown files
  content.config.ts       the schemas those Markdown files must match
  data/                   page text kept out of components (About, Services overview)
  site.ts                 site name and address, email and social links, nav links
  styles/global.css       Tailwind import and the design tokens (colours, fonts, breakpoints)
  layouts/BaseLayout.astro  the HTML shell every page uses: fonts, SEO tags, header, footer
  lib/                    small helpers: structured data, motion, text, services, projects
  components/             the building blocks of each page
  pages/                  one file per URL: index.astro is "/", portfolio/ holds the Portfolio page
                          and the case studies (/portfolio/<slug>); robots.txt.ts builds /robots.txt
```

## Design tokens

The colours, fonts and the 760 px breakpoint from the spec are defined once in the `@theme` block of `src/styles/global.css` and used as Tailwind classes, for example `bg-charcoal`, `text-amber`, `font-mono`, `md:flex`. Fonts are self-hosted from Fontsource npm packages, so no requests go to Google.

## Moving to a custom domain

Change the address in two places: `site` in `astro.config.mjs` and `url` in `src/site.ts`. The canonical links, social preview links, sitemap, robots.txt and structured data all follow from those.

## Security headers

`vercel.json` adds `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options` and a `Permissions-Policy` that turns off browser features the site never uses (camera, microphone, location, payments and so on). Vercel already sends HSTS on its own domains.

There is deliberately no `Content-Security-Policy` yet. JSON files can't hold comments, so the reason is here: Astro adds some inline scripts and styles of its own (the structured data, small styles it inlines), and a strict policy for a static site needs a hash for each of those, regenerated on every build. A policy that is slightly wrong silently breaks parts of the site, such as the menu, the filters or the contact form. It is worth adding with care once the site's content settles, and testing on a preview deploy first.
