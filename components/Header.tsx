"use client";

import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-vi-border bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Mark */}
        <a href="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-sticker bg-vi-slate text-white flex items-center justify-center font-mono font-black text-base border-b-2 border-black">
            VI
          </div>
          <div>
            <div className="text-sm font-bold tracking-tight text-vi-slate uppercase">
              VI DESIGN STUDIO
            </div>
            <div className="text-[10px] font-mono text-vi-muted tracking-wider">
              SRIEVI ENGINEERING STANDARDS
            </div>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 text-xs font-semibold uppercase tracking-wider text-vi-muted">
          <a
            href="/courses"
            className="text-vi-sparkBlue font-bold hover:underline py-1"
          >
            Course Catalogue
          </a>
          <a
            href="/includes"
            className="text-vi-emeraldDark font-bold hover:underline py-1"
          >
            Includes Library
          </a>
          <a
            href="/#tokens"
            className="hover:text-vi-slate transition-colors py-1"
          >
            Closed Tokens
          </a>
          <a
            href="/#components"
            className="hover:text-vi-slate transition-colors py-1"
          >
            Component Lab
          </a>
          <a
            href="/#directives"
            className="hover:text-vi-slate transition-colors py-1"
          >
            16 Directives
          </a>
        </nav>

        {/* System Telemetry Badge */}
        <div className="flex items-center space-x-3">
          <span className="vi-pill bg-emerald-50 text-vi-emeraldDark border border-emerald-200">
            [ RUNTIME: WORKERS ]
          </span>
          <span className="vi-pill bg-vi-slate text-white hidden sm:inline-flex">
            VER: 1.0.0
          </span>
        </div>
      </div>
    </header>
  );
}
