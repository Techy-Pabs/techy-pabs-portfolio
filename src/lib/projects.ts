import type { CollectionEntry } from 'astro:content';

type Project = CollectionEntry<'projects'>;

// Sort helper for "newest first", by ship date: projects.sort(newestFirst)
export const newestFirst = (a: Project, b: Project) => b.data.shipped.getTime() - a.data.shipped.getTime();

// The project tags, with the label shown on filter buttons and the word used in sentences.
export const projectTags = [
  { tag: 'ai', label: 'AI', noun: 'AI' },
  { tag: 'backend', label: 'Backend', noun: 'backend' },
  { tag: 'client', label: 'Client work', noun: 'client' },
] as const;
