import { z } from 'zod/v4';

const clientSchema = z.object({
  NEXT_PUBLIC_CONVEX_URL: z.url(),
  NEXT_PUBLIC_CLERK_FRONTEND_API_URL: z.url(),
});

const clientEnvData = clientSchema.safeParse({
  NEXT_PUBLIC_CONVEX_URL: process.env.NEXT_PUBLIC_CONVEX_URL,
  NEXT_PUBLIC_CLERK_FRONTEND_API_URL: process.env.NEXT_PUBLIC_CLERK_FRONTEND_API_URL,
});

if (!clientEnvData.success) {
  const errorMessage = '❌ Invalid CLIENT environment variables';
  throw new Error(errorMessage);
}

export const clientEnv = clientEnvData.data;
