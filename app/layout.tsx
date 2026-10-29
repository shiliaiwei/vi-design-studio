import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VI Design Studio — Component Engineering & Design System",
  description:
    "Authoritative design system, component engineering lab, and 8-token closed palette engine for VI brand digital products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-vi-canvas text-vi-slate antialiased">
        {children}
      </body>
    </html>
  );
}
