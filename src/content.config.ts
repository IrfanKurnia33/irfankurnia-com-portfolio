import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    role: z.string(),
    timeline: z.string(),
    date: z.string(),
    tools: z.array(z.string()),
    cover: z.string().optional(),
    order: z.number(),
    placeholder: z.boolean().default(true),
  }),
});

const now = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/now' }),
  schema: z.object({ updated: z.string() }),
});

export const collections = { projects, now };
