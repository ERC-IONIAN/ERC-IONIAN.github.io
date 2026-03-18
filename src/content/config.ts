import { defineCollection, z } from 'astro:content';

const imageSchema = z.object({
  path: z.string().optional(),
  thumbnail: z.string().optional(),
}).optional();

const authorSchema = z.object({
  name: z.string().optional(),
  picture: z.string().optional(),
  email: z.string().optional(),
  links: z.array(z.object({
    title: z.string(),
    url: z.string(),
    icon: z.string().optional(),
  })).optional(),
}).optional();

const team = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    role: z.string().optional(),
    date: z.coerce.date().optional(),
    image: imageSchema,
    author: authorSchema,
    affiliation: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    image: imageSchema,
  }),
});

const labs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    image: imageSchema,
  }),
});

const topics = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    image: imageSchema,
  }),
});

export const collections = { team, projects, labs, topics };
