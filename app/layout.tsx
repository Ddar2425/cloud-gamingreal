import Sidebar from "@/components/Sidebar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white m-0">
        <div className="flex h-screen overflow-hidden">

          {/* Sidebar */}
          <Sidebar />

          {/* Main content */}
          <main className="flex-1 p-6 overflow-y-auto bg-gradient-to-b from-black to-zinc-950">
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}