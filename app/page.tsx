import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PaletteTokens from "@/components/PaletteTokens";
import ComponentLab from "@/components/ComponentLab";
import DirectivesList from "@/components/DirectivesList";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-vi-canvas text-vi-slate flex flex-col justify-between selection:bg-vi-emerald selection:text-white">
      {/* Top Navigation */}
      <Header />

      {/* Hero Showcase */}
      <Hero />

      {/* 8 Closed Color Tokens */}
      <PaletteTokens />

      {/* Interactive Component Lab */}
      <ComponentLab />

      {/* The 16 Immutable Directives */}
      <DirectivesList />

      {/* Edge Telemetry Footer */}
      <Footer />
    </main>
  );
}
