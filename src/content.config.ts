import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    role: z.string(),
    technologies: z.array(z.string()),
    problem: z.string(),
    solution: z.string(),
    key_achievement: z.string(),
    github_url: z.string().url().optional(),
    demo_url: z.string().url().optional(),
    icon: z.enum(['database', 'server', 'code', 'fingerprint', 'bot', 'zap', 'smartphone']),
    gradient_from: z.string().default('from-cyan-500/10'),
    gradient_to: z.string().default('to-purple-500/10'),
    accent_color: z.string().default('cyan'),
    order: z.number(),
  }),
});

export const collections = { projects };
