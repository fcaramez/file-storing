import { z } from 'zod/v4';

const serverSchema = z.object({
  CONVEX_DEPLOYMENT: z.string(),
  NODE_ENV: z.enum(['development', 'production']),
  SITE_URL: z.url(),
  JWT_PRIVATE_KEY: z.string(),
  CLERK_JWT_ISSUER_DOMAIN: z.url(),
  CLERK_FRONTEND_API_URL: z.url(),
});

const serverEnvData = serverSchema.safeParse({
  CONVEX_DEPLOYMENT: process.env.CONVEX_DEPLOYMENT,
  NODE_ENV: process.env.NODE_ENV,
  SITE_URL: process.env.SITE_URL,
  JWT_PRIVATE_KEY: process.env.JWT_PRIVATE_KEY,
  CLERK_JWT_ISSUER_DOMAIN: process.env.CLERK_JWT_ISSUER_DOMAIN,
  CLERK_FRONTEND_API_URL: process.env.CLERK_FRONTEND_API_URL,
});

if (!serverEnvData.success) {
  const errorMessage = '❌ Invalid SERVER environment variables';
  throw new Error(errorMessage);
}

export const serverEnv = serverEnvData.data;
