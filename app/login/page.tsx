"use client";

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/lib/firebase";
import { useState } from "react";

export default function LoginPage() {
  const [user, setUser] = useState<any>(null);

  const login = async () => {
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Login</h1>

      <button onClick={login} style={{ padding: 10 }}>
        Sign in with Google
      </button>

      {user && (
        <div style={{ marginTop: 20 }}>
          <p>Welcome: {user.displayName}</p>
        </div>
      )}
    </div>
  );
}