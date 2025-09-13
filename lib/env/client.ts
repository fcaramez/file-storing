import { z } from 'zod/v4';

const clientSchema = z.object({
  NEXT_PUBLIC_CONVEX_URL: z.url(),
});

const clientEnv = clientSchema.safeParse({
  NEXT_PUBLIC_CONVEX_URL: process.env.NEXT_PUBLIC_CONVEX_URL,
});

if (!clientEnv.success) {
  const errorMessage = '❌ Invalid CLIENT environment variables';
  throw new Error(errorMessage);
}

export const _clientEnvData = clientEnv.data;
