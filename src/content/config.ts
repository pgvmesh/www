import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      ogImage: image().optional(),
      ogImageAlt: z.string().optional(),
      canonical: z.string().url().optional(),
      publishedAt: z.coerce.date().optional(),
    }),
});

export const collections = { pages };

