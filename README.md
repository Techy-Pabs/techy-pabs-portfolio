# Techy Pabs

The portfolio site of Abraham Bassey, AI backend engineer. Built with Astro and Tailwind CSS as a static site. The build spec and approved mockups are in [`design/`](design/SPEC.md).

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
public/                   files served as-is, e.g. the favicon
src/
  assets/                 images Astro optimises: portraits and project screenshots
  content/                projects and services as Markdown files
  content.config.ts       the schemas those Markdown files must match
  site.ts                 site name, email and social links, nav links
  styles/global.css       Tailwind import and the design tokens (colours, fonts, breakpoints)
  layouts/BaseLayout.astro  the HTML shell every page uses: fonts, header, footer
  components/             Logo, SiteHeader (nav + phone menu), SiteFooter
  pages/                  one file per URL: index.astro is "/"
```

## Design tokens

The colours, fonts and the 760 px breakpoint from the spec are defined once in the `@theme` block of `src/styles/global.css` and used as Tailwind classes, for example `bg-charcoal`, `text-amber`, `font-mono`, `md:flex`. Fonts are self-hosted from Fontsource npm packages, so no requests go to Google.
