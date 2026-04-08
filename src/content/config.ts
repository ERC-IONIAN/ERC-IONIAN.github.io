import { defineCollection, z } from 'astro:content';

const imageSchema = z
  .object({
    path: z.string().optional(),
    thumbnail: z.string().optional(),
  })
  .optional();

const authorSchema = z
  .object({
    name: z.string().optional(),
    picture: z.string().optional(),
    email: z.string().optional(),
    links: z
      .array(
        z.object({
          title: z.string(),
          url: z.string(),
          icon: z.string().optional(),
        }),
      )
      .optional(),
  })
  .optional();

const team = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    role: z.string().optional(),
    date: z.coerce.date().optional(),
    image: imageSchema,
    author: authorSchema,
    affiliation: z.string().optional(),
    bio: z.string().optional(),
    website: z.string().optional(),
    research_areas: z
      .array(
        z.object({
          name: z.string(),
          description: z.string(),
        }),
      )
      .optional(),
    education: z
      .array(
        z.object({
          degree: z.string(),
          institution: z.string(),
          location: z.string(),
          years: z.string(),
        }),
      )
      .optional(),
    experience: z
      .array(
        z.object({
          title: z.string(),
          institution: z.string(),
          location: z.string(),
          years: z.string(),
        }),
      )
      .optional(),
    current_projects: z
      .array(
        z.object({
          name: z.string(),
          description: z.string(),
        }),
      )
      .optional(),
    service: z.array(z.string()).optional(),
    news: z
      .array(
        z.object({
          year: z.string(),
          text: z.string(),
        }),
      )
      .optional(),
    pre_ionian_work: z
      .array(
        z.object({
          title: z.string(),
          authors: z.string(),
          venue: z.string(),
          year: z.string(),
          links: z
            .object({
              paper: z.string().optional(),
              code: z.string().optional(),
              project: z.string().optional(),
            })
            .optional(),
        }),
      )
      .optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    image: imageSchema,
    link: z.string().optional(),
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
