"use client";

import React from "react";

interface Directive {
  id: string;
  title: string;
  summary: string;
  token: string;
}

const DIRECTIVES: Directive[] = [
  {
    id: "01",
    title: "Zero Emoji Policy",
    summary:
      "Emojis are strictly prohibited across all UI code, documentation, and assistant responses.",
    token: "ENFORCED",
  },
  {
    id: "02",
    title: "Pure Typography & Zero Decorative Glyphs",
    summary:
      "No icon fonts or arbitrary Unicode symbols. Use monospace code tokens and high-contrast labels.",
    token: "TYPOGRAPHY",
  },
  {
    id: "03",
    title: "Zero Muddy Grays",
    summary:
      "Generic dull grays are prohibited. Use crisp Canvas White #FAFCFF and Slate-900 #0F172A.",
    token: "HIGH-CONTRAST",
  },
  {
    id: "04",
    title: "Zero Gradient Policy (100% Solid Colors)",
    summary:
      "Linear, radial, and mesh gradients are banned. Every surface uses a single solid color token.",
    token: "SOLID-COLOR",
  },
  {
    id: "05",
    title: "Zero Mixed Color Blending",
    summary:
      "Components use exactly one solid color token without multi-color overlay blending.",
    token: "SINGLE-TOKEN",
  },
  {
    id: "06",
    title: "Strict 8-Token Closed Palette",
    summary:
      "Never introduce colors outside the 8 registered tokens (Canvas White through Accent Crimson).",
    token: "CLOSED-SYSTEM",
  },
  {
    id: "07",
    title: "12px Tactile Sticker Physics",
    summary:
      "Buttons feature 12px corner radii, solid 4px bottom 3D extrusions, and physical press states.",
    token: "STICKER-DNA",
  },
  {
    id: "08",
    title: "Monospace Telemetry Pills",
    summary:
      "Status indicators and telemetry chips are rendered strictly in uppercase SF Mono.",
    token: "SF-MONO",
  },
  {
    id: "09",
    title: "Canvas White Foundation",
    summary:
      "Root application canvas is grounded on #FAFCFF to guarantee print and screen clarity.",
    token: "#FAFCFF",
  },
  {
    id: "10",
    title: "Slate-900 Structural Framing",
    summary:
      "Master typography and major borders use #0F172A delivering a 16.8:1 AAA contrast ratio.",
    token: "#0F172A",
  },
  {
    id: "11",
    title: "4px Spacing Engine",
    summary:
      "All margins, paddings, gaps, and heights strictly adhere to the 4px baseline grid.",
    token: "GRID-4PX",
  },
  {
    id: "12",
    title: "Edge-Native Cloudflare Architecture",
    summary:
      "Zero Node native fs dependencies in runtime. Optimized for OpenNext on Cloudflare Workers.",
    token: "OPENNEXT-CF",
  },
  {
    id: "13",
    title: "Strict VI Brand Ownership",
    summary:
      "Root classes, components, and documentation strictly use VI / Srievi brand identifiers.",
    token: "VI-BRAND",
  },
  {
    id: "14",
    title: "Accessible Focus & Active States",
    summary:
      "All interactive elements provide visible high-contrast ring indicators and tactile feedback.",
    token: "WCAG-AAA",
  },
  {
    id: "15",
    title: "Zero Heavy Media Bloat",
    summary:
      "Heavy binaries and multimedia are excluded from repo version control per workspace rules.",
    token: "CLEAN-REPO",
  },
  {
    id: "16",
    title: "Single Source of Truth",
    summary:
      "All project configurations, design tokens, and components reside in verified local source paths.",
    token: "AUTHORITATIVE",
  },
];

export default function DirectivesList() {
  return (
    <section id="directives" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-vi-border">
        <div>
          <span className="vi-pill bg-cyan-50 text-vi-cyan mb-2">
            GOVERNANCE
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-vi-slate tracking-tight uppercase">
            The 16 Architecture Directives
          </h2>
          <p className="mt-1 text-sm text-vi-muted">
            Permanent, immutable design and engineering standards for all VI digital products.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 font-mono text-xs text-vi-muted">
          TOTAL DIRECTIVES: 16 / 16
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {DIRECTIVES.map((item) => (
          <div
            key={item.id}
            className="vi-glass-card p-5 flex flex-col justify-between bg-white"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-vi-slate bg-slate-100 px-2 py-0.5 rounded">
                  RULE {item.id}
                </span>
                <span className="vi-pill text-[9px] bg-slate-50 text-vi-muted border border-slate-200">
                  {item.token}
                </span>
              </div>
              <h3 className="text-sm font-bold text-vi-slate uppercase">
                {item.title}
              </h3>
              <p className="mt-2 text-xs text-vi-muted leading-relaxed">
                {item.summary}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] font-mono text-vi-emerald font-bold">
              STATUS: COMPLIANT
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
