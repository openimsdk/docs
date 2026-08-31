import { defineConfig, defineDocs } from 'fumadocs-mdx/config';
import { pageSchema } from 'fumadocs-core/source/schema';
import { z } from 'zod';

export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    // Dynamic mode keeps development and production builds responsive as the
    // current SDK and Server API content grows.
    dynamic: true,
    schema: pageSchema.extend({
      product: z.string().default('chat'),
      context: z.string().default('chat'),
      template: z.enum(['landing', 'overview', 'guide', 'api']).default('guide'),
      status: z.enum(['scaffold', 'draft', 'published', 'deprecated']).default('scaffold'),
      version: z.string().optional(),
      platform: z.string().optional(),
      lastUpdated: z.string().optional(),
      sourcePath: z.string().optional(),
      edition: z.enum(['open-source', 'enterprise']).optional(),
    }),
  },
});

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      themes: {
        light: 'github-dark',
        dark: 'github-dark',
      },
    },
  },
});
