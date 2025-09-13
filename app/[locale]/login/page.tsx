'use client';

import { useAuthActions } from '@convex-dev/auth/react';
import { useTranslations } from 'next-intl';

export default function SignIn() {
  const t = useTranslations('Home');
  const { signIn } = useAuthActions();

  return (
    <div className="mx-auto flex h-screen w-96 flex-col items-center justify-center gap-8">
      <button
        onClick={() =>
          void signIn('google', {
            redirectTo: '/',
          })
        }
        className="rounded-md bg-black px-4 py-2 text-white"
      >
        {t('google-login')}
      </button>
    </div>
  );
}
