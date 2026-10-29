"use client";

import React, { useState } from "react";

export default function OfflinePage() {
  const [isChecking, setIsChecking] = useState(false);
  const [checkResult, setCheckResult] = useState<string | null>(null);

  const handleCheckStatus = () => {
    setIsChecking(true);
    setCheckResult(null);
    setTimeout(() => {
      setIsChecking(false);
      setCheckResult("System is currently offline for scheduled maintenance. Please check back later.");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-vi-canvas text-vi-slate flex flex-col justify-between selection:bg-vi-slate selection:text-white">
      {/* Top Header */}
      <header className="w-full border-b border-vi-border bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
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
          </div>

          <div className="flex items-center space-x-2">
            <span className="vi-pill bg-amber-50 text-amber-800 border border-amber-200">
              [ STATUS: OFFLINE ]
            </span>
          </div>
        </div>
      </header>

      {/* Main Offline Card Container */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="max-w-2xl w-full bg-white border border-vi-border rounded-glass p-6 sm:p-10 shadow-sm">
          {/* Status Badge */}
          <div className="flex items-center space-x-2 mb-4">
            <span className="vi-pill bg-red-50 text-red-700 border border-red-200">
              HTTP 503 : SERVICE UNAVAILABLE
            </span>
            <span className="text-xs font-mono text-vi-muted">
              MODE: TEMPORARY OFFLINE
            </span>
          </div>

          {/* Heading English & Khmer */}
          <h1 className="text-2xl sm:text-3xl font-black text-vi-slate uppercase tracking-tight">
            Service Temporarily Offline
          </h1>
          <div className="text-base sm:text-lg font-semibold text-vi-emeraldDark font-sans mt-1">
            ប្រព័ន្ធផ្អាកដំណើរការបណ្តោះអាសន្ន
          </div>

          {/* Descriptive Content */}
          <div className="mt-4 space-y-3 text-xs sm:text-sm text-vi-muted leading-relaxed">
            <p>
              VI Design Studio services, course discovery modules, and prompt includes libraries are temporarily offline for system maintenance and design refactoring.
            </p>
            <p className="font-sans text-slate-600">
              ទំព័រនេះត្រូវបានផ្អាកដំណើរការជាបណ្តោះអាសន្ន ដើម្បីធ្វើការកែលម្អរចនាសម្ព័ន្ធស្ថាបត្យកម្ម និងការរចនាទម្រង់ប្រព័ន្ធឡើងវិញ។ សេវាកម្មទាំងអស់នឹងត្រឡប់មកដំណើរការវិញក្នុងពេលឆាប់ៗនេះ។
            </p>
          </div>

          {/* Telemetry / Maintenance Parameters */}
          <div className="mt-6 p-4 bg-slate-50 border border-vi-border rounded-sticker font-mono text-xs space-y-2">
            <div className="text-[10px] uppercase font-bold text-vi-muted tracking-wider border-b border-vi-border pb-1">
              MAINTENANCE TELEMETRY
            </div>
            <div className="flex justify-between items-center py-0.5">
              <span className="text-vi-muted">Maintenance Code:</span>
              <span className="font-bold text-vi-slate">MAINT-REDESIGN-2026</span>
            </div>
            <div className="flex justify-between items-center py-0.5">
              <span className="text-vi-muted">Gateway Edge:</span>
              <span className="font-bold text-vi-slate">Cloudflare Workers Anycast</span>
            </div>
            <div className="flex justify-between items-center py-0.5">
              <span className="text-vi-muted">System State:</span>
              <span className="font-bold text-amber-700">Offline (Holding Page)</span>
            </div>
            <div className="flex justify-between items-center py-0.5">
              <span className="text-vi-muted">Access Level:</span>
              <span className="font-bold text-vi-slate">Public Traffic Restricted</span>
            </div>
          </div>

          {/* Live Check Status Action */}
          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-vi-border">
            <button
              type="button"
              onClick={handleCheckStatus}
              disabled={isChecking}
              className="vi-button-primary px-5 py-2.5 text-xs font-mono uppercase font-bold tracking-wider disabled:opacity-50"
            >
              {isChecking ? "[ PINGING EDGE... ]" : "[ CHECK STATUS / ពិនិត្យស្ថានភាព ]"}
            </button>

            <span className="text-[11px] font-mono text-vi-muted text-center sm:text-right">
              Ref: VI-STUDIO-HOLDING
            </span>
          </div>

          {/* Feedback message if checked */}
          {checkResult && (
            <div
              role="status"
              className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-sticker text-xs font-mono text-amber-800"
            >
              {checkResult}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-vi-border bg-white py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-vi-muted gap-2">
          <div>
            VI DESIGN STUDIO (C) 2026 &mdash; ALL RIGHTS RESERVED
          </div>
          <div>
            CONTACT: SRIREVI@TUTA.IO
          </div>
        </div>
      </footer>
    </div>
  );
}
