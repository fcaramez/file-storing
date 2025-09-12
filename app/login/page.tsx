"use client";

import { useAuthActions } from "@convex-dev/auth/react";

export default function SignIn() {
  const { signIn } = useAuthActions();

  return (
    <div className="flex flex-col gap-8 w-96 mx-auto h-screen justify-center items-center">
      <button
        onClick={() =>
          void signIn("google", {
            redirectTo: "/",
          })
        }
        className="px-4 py-2 rounded-md bg-black text-white"
      >
        Login with Google
      </button>
    </div>
  );
}
