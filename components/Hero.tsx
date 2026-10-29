"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto">
        {/* Status Pill */}
        <div className="inline-flex items-center space-x-2 mb-6">
          <span className="vi-pill bg-blue-50 text-vi-sparkBlue border border-blue-200">
            SPECIFICATION RELEASE
          </span>
          <span className="text-xs font-mono text-vi-muted">
            STANDARD: VI-DESIGN-V1
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-vi-slate tracking-tight uppercase leading-none">
          VI DESIGN STUDIO
        </h1>
        <p className="mt-4 text-base sm:text-lg text-vi-muted font-normal max-w-2xl mx-auto leading-relaxed">
          High-performance component architecture, 8 closed solid color tokens,
          12px tactile sticker physics, and edge-native deployment on Cloudflare Workers.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#tokens"
            className="vi-button-primary px-6 py-3 text-sm tracking-wider uppercase"
          >
            [ EXPLORE CLOSED TOKENS ]
          </a>
          <a
            href="#components"
            className="vi-button-ghost px-6 py-3 text-sm tracking-wider uppercase"
          >
            [ OPEN COMPONENT LAB ]
          </a>
        </div>
      </div>

      {/* Telemetry Metrics Grid */}
      <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        <div className="vi-glass-card p-5 text-center">
          <div className="text-2xl sm:text-3xl font-black text-vi-slate font-mono">
            8 / 8
          </div>
          <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-vi-muted">
            Closed Color Tokens
          </div>
        </div>

        <div className="vi-glass-card p-5 text-center">
          <div className="text-2xl sm:text-3xl font-black text-vi-emerald font-mono">
            100%
          </div>
          <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-vi-muted">
            Solid Color Fidelity
          </div>
        </div>

        <div className="vi-glass-card p-5 text-center">
          <div className="text-2xl sm:text-3xl font-black text-vi-crimson font-mono">
            0%
          </div>
          <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-vi-muted">
            Gradients / Emojis
          </div>
        </div>

        <div className="vi-glass-card p-5 text-center">
          <div className="text-2xl sm:text-3xl font-black text-vi-sparkBlue font-mono">
            16.8 : 1
          </div>
          <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-vi-muted">
            AAA Contrast Ratio
          </div>
        </div>
      </div>
    </section>
  );
}
