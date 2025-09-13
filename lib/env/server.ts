import { z } from 'zod/v4';

const serverSchema = z.object({
  CONVEX_DEPLOYMENT: z.string(),
  NODE_ENV: z.enum(['development', 'production']),
  SITE_URL: z.url(),
});

const serverEnv = serverSchema.safeParse({
  CONVEX_DEPLOYMENT: process.env.CONVEX_DEPLOYMENT,
  NODE_ENV: process.env.NODE_ENV,
  SITE_URL: process.env.SITE_URL,
});

if (!serverEnv.success) {
  const errorMessage = '❌ Invalid SERVER environment variables';
  throw new Error(errorMessage);
}

export const _serverEnvData = serverEnv.data;
