"use client";

import React from "react";
import { TrainingProvider } from "../../lib/types-courses";

interface ProviderCardProps {
  provider: TrainingProvider;
  onSelect?: (provider: TrainingProvider) => void;
}

export default function ProviderCard({
  provider,
  onSelect,
}: ProviderCardProps) {
  return (
    <div className="vi-glass-card p-5 sm:p-6 bg-white border border-vi-border rounded-glass flex flex-col justify-between hover:border-slate-400 transition-all shadow-sm">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="font-mono text-xs font-black text-white bg-vi-slate px-2.5 py-1 rounded-sticker border-b-2 border-black">
            {provider.code}
          </span>
          <span className="vi-pill bg-emerald-50 text-vi-emeraldDark border border-emerald-200 text-[10px]">
            VERIFIED INSTITUTION
          </span>
        </div>

        {/* Dual Language Name */}
        <h3 className="text-base sm:text-lg font-bold text-vi-slate uppercase leading-snug">
          {provider.nameEn}
        </h3>
        <div className="text-xs sm:text-sm font-semibold text-vi-emeraldDark font-sans mt-0.5">
          {provider.nameKm}
        </div>

        {/* Type & Location */}
        <div className="mt-2 flex flex-wrap gap-2 text-[11px] font-mono text-vi-muted">
          <span>{provider.institutionTypeEn} ({provider.institutionTypeKm})</span>
          <span>•</span>
          <span>EST. {provider.establishedYear}</span>
        </div>

        {/* Dual Language Description */}
        <p className="mt-3 text-xs text-vi-muted leading-relaxed line-clamp-3">
          {provider.descriptionEn}
        </p>
        <p className="mt-1 text-xs text-slate-500 font-sans leading-relaxed line-clamp-2">
          {provider.descriptionKm}
        </p>

        {/* Accreditation Pill */}
        <div className="mt-4 p-2.5 bg-slate-50 border border-vi-border rounded-sticker text-[11px] font-mono text-vi-slate flex items-center justify-between">
          <span className="text-vi-muted uppercase text-[10px]">ACCREDITATION:</span>
          <span className="font-bold truncate max-w-[200px]" title={provider.accreditationStatus}>
            {provider.accreditationStatus}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
        <button
          onClick={() => onSelect && onSelect(provider)}
          className="vi-button-ghost py-2 px-4 text-xs font-mono uppercase tracking-wider flex-1"
        >
          [ VIEW COURSES / មើលវគ្គ ]
        </button>

        <span className="text-xs font-mono font-bold text-vi-emeraldDark shrink-0">
          {provider.totalCoursesOffered} COURSES
        </span>
      </div>
    </div>
  );
}
