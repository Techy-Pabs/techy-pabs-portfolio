import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/*
  Content collections: each Markdown file in src/content/projects or src/content/services
  is one entry. The schemas below are checked on every build, so a missing field, a typo
  in a tag or a broken image path stops the build with a clear error instead of shipping.
*/

const kebabCase = z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, 'Use lowercase words joined by hyphens');

// The case study sections a service can link to as proof (the ids on /work/[slug]).
export const caseStudySections = ['problem', 'parts', 'under-the-hood', 'quality', 'results'] as const;

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  // `image` checks the path points to a real image and lets Astro optimise it.
  schema: ({ image }) => {
    const picture = z.strictObject({ src: image(), alt: z.string().min(1) });

    return z
      .strictObject({
        title: z.string(),
        slug: kebabCase, // becomes the URL: /work/<slug>
        summary: z.string(),
        kind: z.string(), // e.g. "AI customer support"
        year: z.number().int().min(2000),
        tags: z.array(z.enum(['ai', 'backend', 'client'])).min(1),
        featured: z.boolean().default(false),
        order: z.number().int(), // lower numbers are listed first
        role: z.string(),
        timeline: z.string(),
        stack: z.array(z.string()).min(1), // the first three are the "core stack"
        links: z.strictObject({
          live: z.url().optional(),
          code: z.url().optional(),
          docs: z.url().optional(),
        }),
        cover: picture,
        parts: z
          .array(
            z.strictObject({
              label: z.string(), // e.g. "Customer chat"
              title: z.string(),
              body: z.string(),
              image: picture,
              link: z.strictObject({ label: z.string(), href: z.url() }).optional(),
            }),
          )
          .min(1),
        partsTitle: z.string(),
        problem: z.strictObject({
          headline: z.string(),
          highlight: z.string(), // the words in the headline shown in amber
          body: z.string(),
        }),
        diagram: z.strictObject({
          title: z.string(),
          steps: z
            .array(
              z.strictObject({
                label: z.string(), // small mono label, e.g. "FastAPI"
                text: z.string(),
                highlight: z.boolean().default(false),
              }),
            )
            .min(2),
        }),
        decisions: z.array(z.strictObject({ title: z.string(), body: z.string() })).min(1),
        quality: z.array(z.strictObject({ value: z.string(), label: z.string() })).min(1),
        results: z.array(z.string()).min(1),
        nextSteps: z.array(z.string()),
      })
      .refine((p) => p.problem.headline.includes(p.problem.highlight), {
        message: 'problem.highlight must be words copied exactly from problem.headline',
        path: ['problem', 'highlight'],
      });
  },
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.strictObject({
    title: z.string(),
    order: z.number().int(),
    summary: z.string(), // short card text; the Markdown body is the longer description
    goodFor: z.array(z.string()).min(1),
    deliverables: z.array(z.string()).min(1),
    // Required: a service is only published once a shipped project proves it.
    proof: z.strictObject({
      project: reference('projects'), // build fails if no project has this slug
      section: z.enum(caseStudySections),
      label: z.string(),
    }),
  }),
});

export const collections = { projects, services };
