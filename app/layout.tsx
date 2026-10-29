import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OFFLINE — VI Design Studio",
  description:
    "System temporarily offline for architectural refactoring and UI overhaul.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
