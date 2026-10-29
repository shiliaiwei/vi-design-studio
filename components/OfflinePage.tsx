"use client";

import React, { useState } from "react";

export default function OfflinePage() {
  const [isPinging, setIsPinging] = useState(false);
  const [consoleLog, setConsoleLog] = useState<string | null>(null);

  const handlePing = () => {
    setIsPinging(true);
    setConsoleLog(null);
    setTimeout(() => {
      setIsPinging(false);
      setConsoleLog("GATEWAY PING: TIMEOUT (503). Core remains offline pending design upgrade completion.");
    }, 900);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col justify-between selection:bg-[#FF0050] selection:text-white">
      {/* Scanline CRT Overlay */}
      <div className="pointer-events-none absolute inset-0 vi-scanlines opacity-50 z-10" />

      {/* Subtle Coordinate Grid Lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage:
            "linear-gradient(#27272a 1px, transparent 1px), linear-gradient(90deg, #27272a 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Top Cyber Keyline Navigation */}
      <header className="relative z-20 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-white text-black flex items-center justify-center font-mono font-black text-sm border-2 border-[#FF0050]">
              VI
            </div>
            <div>
              <div className="text-xs sm:text-sm font-mono font-bold tracking-wider text-white uppercase">
                VI DESIGN STUDIO
              </div>
              <div className="text-[10px] font-mono text-zinc-500 tracking-widest">
                SRIEVI ARCHITECTURE LAB // 0x503
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-xs font-mono">
            <div className="flex items-center space-x-2 px-3 py-1 bg-zinc-950 border border-zinc-800 text-zinc-400">
              <span className="w-2 h-2 bg-[#FF0050] inline-block animate-ping" />
              <span className="text-[11px] font-bold text-red-500 tracking-wider">
                [ SIGNAL: LOST ]
              </span>
            </div>
            <span className="hidden sm:inline-block px-2.5 py-1 bg-zinc-900 text-zinc-400 border border-zinc-800 text-[11px]">
              EDGE: WORKERS
            </span>
          </div>
        </div>
      </header>

      {/* Main Complete Dark Glitch Centerpiece */}
      <main className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-12 text-center">
        <div className="max-w-5xl w-full flex flex-col items-center">
          {/* Cyber Terminal Alert Tag */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-red-950/70 border border-red-700/80 text-red-400 font-mono text-xs uppercase tracking-widest font-bold mb-4">
            <span className="w-1.5 h-1.5 bg-red-500 inline-block" />
            <span>CRITICAL STATUS : SYSTEM OFFLINE // HTTP 503</span>
          </div>

          {/* Massive Cyber Glitch Text */}
          <div className="vi-glitch-wrapper my-2 sm:my-4 select-none">
            <h1
              className="vi-glitch-text text-7xl sm:text-9xl md:text-[11rem] lg:text-[14rem] font-black font-mono tracking-tighter uppercase leading-none"
              data-text="OFFLINE"
            >
              OFFLINE
            </h1>
          </div>

          {/* Bilingual Heading in Cyan */}
          <div className="text-xl sm:text-3xl md:text-4xl font-black font-sans text-cyan-400 uppercase tracking-tight mt-1">
            ប្រព័ន្ធផ្អាកដំណើរការបណ្តោះអាសន្ន
          </div>

          <div className="mt-2 text-xs sm:text-sm font-mono text-zinc-400 uppercase tracking-wider max-w-2xl leading-relaxed">
            SERVICE TEMPORARILY SUSPENDED FOR COMPLETE ARCHITECTURAL REFACTORING & REDESIGN
          </div>

          <div className="mt-1 text-xs sm:text-sm font-sans text-zinc-500 max-w-xl">
            ទំព័រនេះត្រូវបានផ្អាកដំណើរការទាំងស្រុងជាបណ្តោះអាសន្ន ដើម្បីធ្វើការកែលម្អប្រព័ន្ធ និងការរចនាទម្រង់ឡើងវិញ។
          </div>

          {/* Cyber Diagnostic Console Card */}
          <div className="mt-8 w-full max-w-2xl bg-zinc-950/90 border border-zinc-800 p-5 text-left font-mono text-xs rounded-none shadow-2xl">
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-zinc-800 text-[11px] text-zinc-500 tracking-wider">
              <span>&gt; TERMINAL DIAGNOSTIC LOG</span>
              <span className="text-red-500 font-bold">[ERR_CONNECTION_REFUSED]</span>
            </div>

            <div className="space-y-1.5 text-zinc-300 text-[11px] sm:text-xs">
              <div className="flex items-start space-x-2">
                <span className="text-zinc-600">[0.001s]</span>
                <span className="text-red-400">STATE:</span>
                <span>CORE_HALT_DIRECTIVE active across all public routes.</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-zinc-600">[0.014s]</span>
                <span className="text-cyan-400">REASON:</span>
                <span>User requested complete dark offline mode with massive glitch styling.</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-zinc-600">[0.029s]</span>
                <span className="text-amber-400">GATEWAY:</span>
                <span>Cloudflare Workers Anycast Node (V8 Isolates).</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-zinc-600">[0.041s]</span>
                <span className="text-emerald-400">RECOVERY:</span>
                <span>Standby for design re-dispatch.</span>
              </div>
            </div>

            {/* Diagnostic Console Message */}
            {consoleLog && (
              <div className="mt-3 pt-3 border-t border-zinc-800 text-amber-400 text-xs">
                &gt; {consoleLog}
              </div>
            )}
          </div>

          {/* Interactive Reconnect Trigger */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={handlePing}
              disabled={isPinging}
              className="px-8 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-white font-mono font-bold text-xs uppercase tracking-widest border border-zinc-700 hover:border-cyan-400 transition-all active:translate-y-0.5 disabled:opacity-50"
            >
              {isPinging ? "[ PINGING GATEWAY... ]" : "[ PING GATEWAY / ព្យាយាមភ្ជាប់ឡើងវិញ ]"}
            </button>
          </div>
        </div>
      </main>

      {/* Cyber Keyline Footer */}
      <footer className="relative z-20 w-full border-t border-zinc-800 bg-black/90 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-500 gap-2">
          <div className="flex items-center space-x-3">
            <span>VI DESIGN STUDIO (C) 2026</span>
            <span>//</span>
            <span className="text-zinc-400">STATUS: TOTAL_DARK_OFFLINE</span>
          </div>
          <div>
            <span>REF: VI-GLITCH-DARK-2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
