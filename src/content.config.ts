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
    links: z
      .array(
        z.object({
          type: z.enum(['figma', 'repository', 'prototype']),
          url: z.url({ protocol: /^https?$/ }),
        }),
      )
      .min(1)
      .max(2)
      .optional(),
    order: z.number(),
    placeholder: z.boolean().default(true),
  }),
});

const now = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/now' }),
  schema: z.object({ updated: z.string() }),
});

// Share project metadata with the full article; these files contain only the short version.
const projectSummaries = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects/tldr' }),
  schema: z.object({}),
});

export const collections = { projects, projectSummaries, now };
