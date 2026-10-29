"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-vi-border bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand Column */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-sticker bg-vi-slate text-white flex items-center justify-center font-mono font-bold text-xs border-b-2 border-black">
            VI
          </div>
          <div>
            <div className="text-xs font-bold text-vi-slate uppercase tracking-wider">
              VI DESIGN STUDIO
            </div>
            <div className="text-[10px] font-mono text-vi-muted">
              SRIEVI COMPONENT ENGINEERING SYSTEM
            </div>
          </div>
        </div>

        {/* System Telemetry */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-vi-muted">
          <span>STACK: NEXT.JS 15</span>
          <span>RUNTIME: CLOUDFLARE WORKERS</span>
          <span>PALETTE: 8 TOKENS</span>
          <span>EMOJI: 0</span>
        </div>

        {/* Copyright */}
        <div className="text-[11px] font-mono text-vi-muted">
          (C) 2026 VI DESIGN STUDIO. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
