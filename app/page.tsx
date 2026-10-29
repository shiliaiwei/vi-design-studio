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

      {/* Primary Modules: Course Catalogue & Includes Library */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1: Course Catalogue */}
          <div className="p-6 sm:p-8 bg-white border border-vi-border rounded-glass shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="vi-pill bg-blue-50 text-vi-sparkBlue border border-blue-200">
                  NEW LAYOUT
                </span>
                <span className="text-xs font-mono text-vi-muted">
                  4 SECTIONS / BILINGUAL EN-KM
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-vi-slate uppercase tracking-tight">
                Curated Course Catalogue
              </h3>
              <div className="text-xs font-semibold text-vi-emeraldDark font-sans mt-0.5 mb-1.5">
                កាតាឡុកវគ្គបណ្តុះបណ្តាល និងស្ថាប័នអប់រំ
              </div>
              <p className="text-xs sm:text-sm text-vi-muted leading-relaxed">
                A structured discovery interface organized into 4 sections: Featured Courses, Self-Directed Courses, Accredited Courses, and Training Providers. Built with reusable modular components and high-contrast typography.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-vi-border flex items-center justify-between">
              <span className="text-[11px] font-mono text-vi-muted">
                9 COURSES / 4 PROVIDERS
              </span>
              <a
                href="/courses"
                className="vi-button-eager px-5 py-2.5 text-xs font-mono tracking-wider uppercase font-bold"
              >
                [ VIEW CATALOGUE ]
              </a>
            </div>
          </div>

          {/* Card 2: Includes Library */}
          <div className="p-6 sm:p-8 bg-white border border-vi-border rounded-glass shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="vi-pill bg-emerald-50 text-vi-emeraldDark border border-emerald-200">
                  SYSTEM PROMPTS
                </span>
                <span className="text-xs font-mono text-vi-muted">
                  11 DOMAINS / 53 INCLUDES
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-vi-slate uppercase tracking-tight">
                System Architecture Includes
              </h3>
              <div className="text-xs font-semibold text-vi-muted font-sans mt-0.5 mb-1.5">
                បណ្តុំប្រព័ន្ធស្ថាបត្យកម្ម និងយុទ្ធសាស្ត្រ
              </div>
              <p className="text-xs sm:text-sm text-vi-muted leading-relaxed">
                Modular prompt includes covering the 22 System Design Strategies for Fault Tolerance & Resilience, 10 core UI components (Snackbar, Bottom Sheet, Dialog, Chips, FAB, etc.), plus distributed systems, databases, and AI agents.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-vi-border flex items-center justify-between">
              <span className="text-[11px] font-mono text-vi-muted">
                RES-001 TO RES-022
              </span>
              <a
                href="/includes"
                className="vi-button-primary px-5 py-2.5 text-xs font-mono tracking-wider uppercase font-bold"
              >
                [ OPEN INCLUDES ]
              </a>
            </div>
          </div>
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
