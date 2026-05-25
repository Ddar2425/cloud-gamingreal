"use client";

import Link from "next/link";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";

export default function Sidebar() {
  return (
    <div style={{ width: 200, padding: 20 }}>
      <h2>Menu</h2>

      <Link href="/">Home</Link><br />
      <Link href="/login">Login</Link><br />

      <button
        onClick={() => signOut(auth)}
        style={{ marginTop: 20 }}
      >
        Logout
      </button>
    </div>
  );
}