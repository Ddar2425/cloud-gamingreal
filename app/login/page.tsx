"use client";

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/lib/firebase";

export default function LoginPage() {
  const login = async () => {
    try {
      await signInWithPopup(auth, provider);
      window.location.href = "/";
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-zinc-900 text-white">
      <div className="bg-zinc-900 border border-zinc-800 p-10 rounded-2xl w-[350px] text-center shadow-xl">
        
        <h1 className="text-3xl font-bold mb-2">Vortex Gaming</h1>
        <p className="text-zinc-400 mb-6">
          Sign in to continue
        </p>

        <button
          onClick={login}
          className="w-full bg-green-500 hover:bg-green-400 text-black font-semibold py-3 rounded-xl transition"
        >
          Sign in with Google
        </button>

        <p className="text-xs text-zinc-500 mt-6">
          Secure login powered by Firebase
        </p>
      </div>
    </div>
  );
}