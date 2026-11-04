import { getCollection } from 'astro:content';

// All services, in their `order` (lower numbers first).
export async function getServices() {
  return (await getCollection('services')).sort((a, b) => a.data.order - b.data.order);
}

// Link to a service's own page.
export const serviceHref = (slug: string) => `/services/${slug}`;
