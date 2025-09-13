'use client';

import { useAuthActions } from '@convex-dev/auth/react';
import { useConvexAuth } from 'convex/react';

import { useRouter } from '@/lib/i18n/navigation';

export default function Home() {
  return (
    <>
      <header className="bg-background sticky top-0 z-10 flex flex-row items-center justify-between border-b-2 border-slate-200 p-4 dark:border-slate-800">
        Convex + Next.js + Convex Auth
        <SignOutButton />
      </header>
      <main className="flex flex-col gap-8 p-8">
        <h1 className="text-center text-4xl font-bold">Convex + Next.js + Convex Auth</h1>
      </main>
    </>
  );
}

function SignOutButton() {
  const { isAuthenticated } = useConvexAuth();
  const { signOut } = useAuthActions();
  const router = useRouter();

  return (
    <>
      {isAuthenticated && (
        <button
          className="text-foreground rounded-md bg-slate-200 px-2 py-1"
          onClick={() =>
            void signOut().then(() => {
              router.push('/login');
            })
          }
        >
          Sign out
        </button>
      )}
    </>
  );
}
