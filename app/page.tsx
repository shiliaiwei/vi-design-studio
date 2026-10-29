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

      {/* Feature Callout: Includes Library */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="p-6 sm:p-8 bg-white border border-vi-border rounded-glass shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="vi-pill bg-emerald-50 text-vi-emeraldDark border border-emerald-200">
                NEW FEATURE
              </span>
              <span className="text-xs font-mono text-vi-muted">
                11 DOMAINS / 53 INCLUDES
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-vi-slate uppercase tracking-tight">
              System Architecture & UI Includes Library
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-vi-muted max-w-2xl leading-relaxed">
              Explore 53 modular prompt includes covering the 22 System Design Strategies for Fault Tolerance & Resilience, 10 core UI components (Snackbar, Bottom Sheet, Dialog, Bottom Nav, Toggle Switch, Chips, FAB, Card, Dropdown, Tooltip), plus distributed systems, databases, security, and AI agents.
            </p>
          </div>

          <a
            href="/includes"
            className="vi-button-eager px-6 py-3 text-xs sm:text-sm font-mono tracking-wider uppercase font-bold shrink-0"
          >
            [ OPEN INCLUDES LIBRARY ]
          </a>
        </div>
      </section>

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
