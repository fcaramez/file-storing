import { clsx, type ClassValue } from 'clsx';
import { ConvexReactClient } from 'convex/react';
import { twMerge } from 'tailwind-merge';
import { clientEnv } from './env/client';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export const renderConvexClient = (): ConvexReactClient => {
  if (!clientEnv.NEXT_PUBLIC_CONVEX_URL) {
    throw new Error('Missing NEXT_PUBLIC_CONVEX_URL in your .env file');
  }

  return new ConvexReactClient(clientEnv.NEXT_PUBLIC_CONVEX_URL);
};
