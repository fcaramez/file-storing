'use client';

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton oauthFlow="popup">
          <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>
    </main>
  );
}
