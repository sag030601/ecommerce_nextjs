"use client";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/home");
    }
  }, [status]);

  if (status === "loading") return <p>Checking session...</p>;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <button
        onClick={() => signIn("google", { callbackUrl: "/home" })}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
}
