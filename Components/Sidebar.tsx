"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div
      style={{
        width: 260,
        background: "#0f1624",
        padding: 20,
        borderRight: "1px solid #1f2a44",
      }}
    >
      <h2 style={{ marginBottom: 30 }}>Cloud Gaming</h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <Link href="/">🏠 Home</Link>
        <Link href="/login">🔐 Login</Link>
      </nav>
    </div>
  );
}