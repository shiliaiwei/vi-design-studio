"use client";

import React, { useState } from "react";

interface TokenItem {
  id: string;
  name: string;
  hex: string;
  rgb: string;
  role: string;
  variable: string;
  darkText: boolean;
}

const TOKENS: TokenItem[] = [
  {
    id: "01",
    name: "Canvas White",
    hex: "#FAFCFF",
    rgb: "rgb(250, 252, 255)",
    role: "Foundation canvas and root application surface",
    variable: "--vi-canvas",
    darkText: true,
  },
  {
    id: "02",
    name: "Slate-900",
    hex: "#0F172A",
    rgb: "rgb(15, 23, 42)",
    role: "Master typography and solid structural borders (16.8:1 AAA)",
    variable: "--vi-slate",
    darkText: false,
  },
  {
    id: "03",
    name: "Primary Emerald",
    hex: "#10B981",
    rgb: "rgb(16, 185, 129)",
    role: "Core brand interactive CTA action buttons",
    variable: "--vi-emerald",
    darkText: false,
  },
  {
    id: "04",
    name: "Deep Emerald",
    hex: "#059669",
    rgb: "rgb(5, 150, 105)",
    role: "3D button bottom extrusion and deep contrast tags",
    variable: "--vi-emerald-dark",
    darkText: false,
  },
  {
    id: "05",
    name: "Eager Green",
    hex: "#58CC02",
    rgb: "rgb(88, 204, 2)",
    role: "Tactile sticker CTA fill and progression indicators",
    variable: "--vi-eager-green",
    darkText: false,
  },
  {
    id: "06",
    name: "Spark Blue",
    hex: "#1CB0F6",
    rgb: "rgb(28, 176, 246)",
    role: "Interactive links, secondary actions, and ghost borders",
    variable: "--vi-spark-blue",
    darkText: false,
  },
  {
    id: "07",
    name: "Accent Cyan",
    hex: "#0891B2",
    rgb: "rgb(8, 145, 178)",
    role: "Release tags, code telemetry chips, and edge headers",
    variable: "--vi-cyan",
    darkText: false,
  },
  {
    id: "08",
    name: "Accent Crimson",
    hex: "#FF0050",
    rgb: "rgb(255, 0, 80)",
    role: "Critical alerts, prompt cues, and high-visibility badges",
    variable: "--vi-crimson",
    darkText: false,
  },
];

export default function PaletteTokens() {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <section id="tokens" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-vi-border">
        <div>
          <span className="vi-pill bg-slate-100 text-vi-slate mb-2">
            CLOSED SYSTEM
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-vi-slate tracking-tight uppercase">
            The 8 Closed Color Tokens
          </h2>
          <p className="mt-1 text-sm text-vi-muted">
            Strict closed palette. Never use colors outside these 8 registered tokens.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 font-mono text-xs text-vi-muted">
          FIDELITY: 100% SOLID ONLY
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {TOKENS.map((token) => (
          <div
            key={token.id}
            className="vi-glass-card overflow-hidden flex flex-col justify-between"
          >
            {/* Color Swatch */}
            <div
              className="h-28 w-full p-4 flex flex-col justify-between border-b border-vi-border"
              style={{ backgroundColor: token.hex }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="font-mono text-xs font-bold px-2 py-0.5 rounded"
                  style={{
                    backgroundColor: token.darkText
                      ? "rgba(15, 23, 42, 0.1)"
                      : "rgba(255, 255, 255, 0.2)",
                    color: token.darkText ? "#0F172A" : "#FFFFFF",
                  }}
                >
                  TOKEN {token.id}
                </span>
                <button
                  onClick={() => handleCopy(token.hex)}
                  className="font-mono text-[10px] font-bold px-2 py-1 rounded transition-opacity uppercase tracking-wider"
                  style={{
                    backgroundColor: token.darkText ? "#0F172A" : "#FFFFFF",
                    color: token.darkText ? "#FFFFFF" : "#0F172A",
                  }}
                >
                  {copiedHex === token.hex ? "COPIED" : "COPY HEX"}
                </button>
              </div>

              <div
                className="font-mono text-sm font-black tracking-wider"
                style={{ color: token.darkText ? "#0F172A" : "#FFFFFF" }}
              >
                {token.hex}
              </div>
            </div>

            {/* Token Metadata */}
            <div className="p-4 flex-1 flex flex-col justify-between bg-white">
              <div>
                <div className="text-base font-bold text-vi-slate">
                  {token.name}
                </div>
                <div className="mt-1 font-mono text-xs text-vi-cyan">
                  {token.variable}
                </div>
                <p className="mt-2 text-xs text-vi-muted leading-relaxed">
                  {token.role}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>RGB</span>
                <span>{token.rgb}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
