'use client';

import { useAuthActions } from '@convex-dev/auth/react';
import { useLocale, useTranslations } from 'next-intl';

export default function SignIn() {
  const { signIn } = useAuthActions();
  const t = useTranslations('Home');
  const locale = useLocale();

  return (
    <div className="mx-auto flex h-screen w-96 flex-col items-center justify-center gap-8">
      <button
        onClick={() => {
          void signIn('google', {
            redirectTo: `/${locale}/dashboard`,
          });
        }}
        className="rounded-md bg-black px-4 py-2 text-white"
      >
        {t('google-login')}
      </button>
    </div>
  );
}
