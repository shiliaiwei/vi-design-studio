"use client";

import React, { useState } from "react";

export default function ComponentLab() {
  const [clickCount, setClickCount] = useState(0);
  const [inputText, setInputText] = useState("vi-design-core");
  const [activeTab, setActiveTab] = useState<"buttons" | "badges" | "inputs" | "cards">("buttons");

  return (
    <section id="components" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-vi-border">
        <div>
          <span className="vi-pill bg-emerald-50 text-vi-emeraldDark mb-2">
            INTERACTIVE LAB
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-vi-slate tracking-tight uppercase">
            Component Engineering Lab
          </h2>
          <p className="mt-1 text-sm text-vi-muted">
            12px tactile sticker physics, specular frosted surfaces, and pure typography.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="mt-4 sm:mt-0 flex flex-wrap gap-2">
          {(["buttons", "badges", "inputs", "cards"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`vi-pill transition-all uppercase tracking-wider ${
                activeTab === tab
                  ? "bg-vi-slate text-white"
                  : "bg-white text-vi-muted hover:text-vi-slate border border-vi-border"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Tab Content */}
      <div className="vi-glass-card p-6 sm:p-8 bg-white">
        {activeTab === "buttons" && (
          <div>
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100">
              <span className="text-xs font-mono font-bold uppercase text-vi-slate">
                12px Tactile Sticker Buttons (Active Downward Press Physics)
              </span>
              <span className="font-mono text-xs text-vi-muted">
                TRIGGER COUNT: {clickCount}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
              {/* Primary Emerald Button */}
              <div className="p-4 border border-vi-border rounded-glass bg-slate-50 flex flex-col items-center justify-center space-y-3">
                <button
                  onClick={() => setClickCount((c) => c + 1)}
                  className="vi-button-primary px-5 py-2.5 text-xs w-full"
                >
                  [ PRIMARY EMERALD ]
                </button>
                <span className="text-[11px] font-mono text-vi-muted">
                  fill: #10B981 | btm: 4px
                </span>
              </div>

              {/* Eager Green Button */}
              <div className="p-4 border border-vi-border rounded-glass bg-slate-50 flex flex-col items-center justify-center space-y-3">
                <button
                  onClick={() => setClickCount((c) => c + 1)}
                  className="vi-button-eager px-5 py-2.5 text-xs w-full"
                >
                  [ EAGER GREEN ]
                </button>
                <span className="text-[11px] font-mono text-vi-muted">
                  fill: #58CC02 | btm: 4px
                </span>
              </div>

              {/* Spark Blue Button */}
              <div className="p-4 border border-vi-border rounded-glass bg-slate-50 flex flex-col items-center justify-center space-y-3">
                <button
                  onClick={() => setClickCount((c) => c + 1)}
                  className="vi-button-spark px-5 py-2.5 text-xs w-full"
                >
                  [ SPARK BLUE ]
                </button>
                <span className="text-[11px] font-mono text-vi-muted">
                  fill: #1CB0F6 | btm: 4px
                </span>
              </div>

              {/* Ghost Slate Button */}
              <div className="p-4 border border-vi-border rounded-glass bg-slate-50 flex flex-col items-center justify-center space-y-3">
                <button
                  onClick={() => setClickCount((c) => c + 1)}
                  className="vi-button-ghost px-5 py-2.5 text-xs w-full"
                >
                  [ GHOST SLATE ]
                </button>
                <span className="text-[11px] font-mono text-vi-muted">
                  fill: #FFFFFF | btm: 3px
                </span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "badges" && (
          <div>
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100">
              <span className="text-xs font-mono font-bold uppercase text-vi-slate">
                Monospace Telemetry Pills & Badges (Pure Typography)
              </span>
              <span className="font-mono text-xs text-vi-muted">
                FONT: SF MONO
              </span>
            </div>

            <div className="flex flex-wrap gap-3 items-center">
              <span className="vi-pill bg-emerald-50 text-vi-emerald border border-emerald-300">
                [ STATUS: ACTIVE ]
              </span>
              <span className="vi-pill bg-blue-50 text-vi-sparkBlue border border-blue-300">
                [ PROTOCOL: HTTPS ]
              </span>
              <span className="vi-pill bg-cyan-50 text-vi-cyan border border-cyan-300">
                [ RUNTIME: WORKER ]
              </span>
              <span className="vi-pill bg-rose-50 text-vi-crimson border border-rose-300">
                [ ALERT: CRITICAL ]
              </span>
              <span className="vi-pill bg-slate-100 text-vi-slate border border-slate-300">
                [ ENV: PRODUCTION ]
              </span>
              <span className="vi-pill bg-slate-900 text-white border border-slate-900">
                [ BRAND: VI-STUDIO ]
              </span>
            </div>
          </div>
        )}

        {activeTab === "inputs" && (
          <div>
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100">
              <span className="text-xs font-mono font-bold uppercase text-vi-slate">
                High-Contrast Form Input & Command Field
              </span>
              <span className="font-mono text-xs text-vi-muted">
                STATE: BOUND
              </span>
            </div>

            <div className="max-w-xl space-y-4">
              <div>
                <label className="block text-xs font-bold font-mono uppercase text-vi-slate mb-1">
                  MODULE IDENTIFIER
                </label>
                <div className="flex rounded-sticker border border-vi-border overflow-hidden bg-white focus-within:border-vi-sparkBlue focus-within:ring-2 focus-within:ring-vi-sparkBlue/20">
                  <span className="px-3 py-2 bg-slate-50 border-r border-vi-border text-xs font-mono text-vi-muted">
                    PKG://
                  </span>
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className="flex-1 px-3 py-2 text-sm font-mono text-vi-slate outline-none"
                    placeholder="Enter package name"
                  />
                </div>
              </div>

              <div className="p-3 bg-slate-50 border border-vi-border rounded-sticker text-xs font-mono text-vi-muted flex items-center justify-between">
                <span>RESOLVED TARGET:</span>
                <span className="text-vi-slate font-bold">
                  @vi/{inputText || "default"}
                </span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "cards" && (
          <div>
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100">
              <span className="text-xs font-mono font-bold uppercase text-vi-slate">
                Frosted Specular Glass Card Panels
              </span>
              <span className="font-mono text-xs text-vi-muted">
                OPACITY: 0.88 | BLUR: 20PX
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="vi-glass-card p-5 border-l-4 border-l-vi-emerald">
                <span className="vi-pill bg-emerald-50 text-vi-emeraldDark mb-2">
                  MODULE 01
                </span>
                <h3 className="text-base font-bold text-vi-slate uppercase">
                  Design Token Architecture
                </h3>
                <p className="mt-1 text-xs text-vi-muted leading-relaxed">
                  Locked 8-token closed color space guaranteeing zero gradient pollution
                  and 100% accessible typography contrast ratios.
                </p>
              </div>

              <div className="vi-glass-card p-5 border-l-4 border-l-vi-sparkBlue">
                <span className="vi-pill bg-blue-50 text-vi-sparkBlue mb-2">
                  MODULE 02
                </span>
                <h3 className="text-base font-bold text-vi-slate uppercase">
                  Edge Runtime Delivery
                </h3>
                <p className="mt-1 text-xs text-vi-muted leading-relaxed">
                  Compiled directly into standard V8 worker isolates via OpenNext for
                  sub-50ms global response times across Cloudflare Edge.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
