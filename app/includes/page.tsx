import type { Metadata } from "next";
import Header from "@/components/Header";
import IncludesExplorer from "@/components/includes/IncludesExplorer";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Includes Library — System Architecture & UI Component Prompts",
  description:
    "Production library of includes for system architecture, backend engineering, cloud infrastructure, AI agents, and 10 keyline UI components.",
};

export default function IncludesPage() {
  return (
    <div className="min-h-screen bg-vi-canvas text-vi-slate flex flex-col justify-between selection:bg-vi-emerald selection:text-white">
      {/* Top Navigation */}
      <Header />

      {/* Main Explorer View */}
      <main className="flex-1">
        <IncludesExplorer />
      </main>

      {/* Edge Telemetry Footer */}
      <Footer />
    </div>
  );
}
