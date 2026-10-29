"use client";

import React from "react";
import { DOMAINS } from "../../lib/includes-data";
import { DomainCategory } from "../../lib/types-includes";

interface DomainFilterRibbonProps {
  selectedDomain: DomainCategory | "all";
  onSelectDomain: (domain: DomainCategory | "all") => void;
  counts: Record<string, number>;
}

export default function DomainFilterRibbon({
  selectedDomain,
  onSelectDomain,
  counts,
}: DomainFilterRibbonProps) {
  const totalAll = Object.values(counts).reduce((a, b) => a + b, 0);

  return (
    <div className="w-full overflow-x-auto pb-2 scrollbar-thin">
      <div className="flex items-center space-x-2 min-w-max">
        {/* All Button */}
        <button
          onClick={() => onSelectDomain("all")}
          className={`px-3.5 py-1.5 text-xs font-mono font-bold uppercase rounded-sticker transition-all border ${
            selectedDomain === "all"
              ? "bg-vi-slate text-white border-vi-slate shadow-sm"
              : "bg-white text-vi-muted hover:text-vi-slate border-vi-border"
          }`}
        >
          <span>ALL INCLUDES</span>
          <span className="ml-1.5 text-[10px] opacity-75">({totalAll})</span>
        </button>

        {/* Domain Tabs */}
        {DOMAINS.map((domain) => {
          const isSelected = selectedDomain === domain.id;
          const count = counts[domain.id] || 0;

          return (
            <button
              key={domain.id}
              onClick={() => onSelectDomain(domain.id)}
              className={`px-3.5 py-1.5 text-xs font-mono font-bold uppercase rounded-sticker transition-all border ${
                isSelected
                  ? "bg-vi-slate text-white border-vi-slate shadow-sm"
                  : "bg-white text-vi-muted hover:text-vi-slate border-vi-border"
              }`}
            >
              <span>{domain.label}</span>
              <span className="ml-1.5 text-[10px] opacity-75">({count})</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
