"use client";

import React, { useState, useMemo } from "react";
import { INCLUDES_DATA } from "../../lib/includes-data";
import { IncludeItem, DomainCategory } from "../../lib/types-includes";
import DomainFilterRibbon from "./DomainFilterRibbon";
import IncludeCard from "./IncludeCard";
import IncludeInspector from "./IncludeInspector";
import UIComponentShowcase from "./UIComponentShowcase";
import { SearchIcon, XIcon, FilterIcon } from "../icons/KeylineSystemIcons";

export default function IncludesExplorer() {
  const [selectedDomain, setSelectedDomain] = useState<DomainCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [inspectedItem, setInspectedItem] = useState<IncludeItem | null>(null);

  // Compute counts per domain
  const domainCounts = useMemo(() => {
    const map: Record<string, number> = {};
    for (const item of INCLUDES_DATA) {
      map[item.domain] = (map[item.domain] || 0) + 1;
    }
    return map;
  }, []);

  // Filtered dataset
  const filteredIncludes = useMemo(() => {
    return INCLUDES_DATA.filter((item) => {
      // Domain filter
      if (selectedDomain !== "all" && item.domain !== selectedDomain) {
        return false;
      }

      // Tag filter
      if (selectedTag && !item.tags.includes(selectedTag)) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesCode = item.code.toLowerCase().includes(q);
        const matchesSummary = item.summary.toLowerCase().includes(q);
        const matchesPrompt = item.promptText.toLowerCase().includes(q);
        const matchesTags = item.tags.some((t) => t.toLowerCase().includes(q));

        if (
          !matchesTitle &&
          !matchesCode &&
          !matchesSummary &&
          !matchesPrompt &&
          !matchesTags
        ) {
          return false;
        }
      }

      return true;
    });
  }, [selectedDomain, selectedTag, searchQuery]);

  // Aggregate telemetry
  const totalTokens = useMemo(() => {
    return filteredIncludes.reduce((sum, item) => sum + item.tokenCount, 0);
  }, [filteredIncludes]);

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="mb-8">
        <span className="vi-pill bg-slate-100 text-vi-slate mb-2">
          LIBRARY OF INCLUDES
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-vi-slate tracking-tight uppercase">
          System Architecture & Engineering Includes
        </h2>
        <p className="mt-2 text-sm text-vi-muted max-w-3xl leading-relaxed">
          Modular, composable prompt fragments, engineering directives, and keyline UI component specifications ready for direct injection into system instructions, agents, and software prototypes.
        </p>
      </div>

      {/* Labeled Search Input Bar (Mandatory Explicit Label) */}
      <div className="mb-6 p-4 sm:p-5 bg-white border border-vi-border rounded-glass shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex-1">
            <label
              htmlFor="includes-search-input"
              className="text-xs font-bold font-mono uppercase text-vi-slate block mb-1.5"
            >
              SEARCH PROMPT INCLUDES & DIRECTIVES
            </label>
            <div className="relative flex items-center">
              <div className="absolute left-3.5 pointer-events-none text-vi-muted">
                <SearchIcon className="w-4 h-4" />
              </div>
              <input
                id="includes-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by topic, keyword (e.g. snackbar, outbox, jwt, rag, postgres)..."
                className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-vi-border rounded-sticker text-xs font-mono text-vi-slate placeholder-slate-400 outline-none focus:bg-white focus:border-vi-sparkBlue focus:ring-2 focus:ring-vi-sparkBlue/20 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 p-1 text-vi-muted hover:text-vi-slate"
                  aria-label="Clear search query"
                >
                  <XIcon className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center space-x-3 pt-2 sm:pt-4 text-xs font-mono">
            <div className="p-2.5 bg-slate-50 border border-vi-border rounded-sticker text-center">
              <span className="text-[10px] text-vi-muted block uppercase">
                INCLUDES MATCHED
              </span>
              <span className="font-bold text-vi-slate">
                {filteredIncludes.length} / {INCLUDES_DATA.length}
              </span>
            </div>
            <div className="p-2.5 bg-slate-50 border border-vi-border rounded-sticker text-center">
              <span className="text-[10px] text-vi-muted block uppercase">
                TOTAL TOKENS
              </span>
              <span className="font-bold text-vi-emeraldDark">
                ~{totalTokens.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Selected Tag Clear Badge */}
        {selectedTag && (
          <div className="mt-3 pt-3 border-t border-slate-100 flex items-center space-x-2 text-xs font-mono">
            <span className="text-vi-muted">ACTIVE TAG FILTER:</span>
            <span className="vi-pill bg-slate-900 text-white">
              #{selectedTag}
            </span>
            <button
              onClick={() => setSelectedTag(null)}
              className="text-xs text-vi-crimson hover:underline"
            >
              [ CLEAR TAG ]
            </button>
          </div>
        )}
      </div>

      {/* Domain Filter Ribbon */}
      <div className="mb-8">
        <DomainFilterRibbon
          selectedDomain={selectedDomain}
          onSelectDomain={(d) => {
            setSelectedDomain(d);
            setSelectedTag(null);
          }}
          counts={domainCounts}
        />
      </div>

      {/* Interactive UI Component Playground (Featured when UI Components or All is selected) */}
      {(selectedDomain === "all" || selectedDomain === "ui-components") && (
        <UIComponentShowcase />
      )}

      {/* Includes Cards Grid */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-vi-border">
          <div className="flex items-center space-x-2">
            <FilterIcon className="w-4 h-4 text-vi-slate" />
            <h3 className="text-sm font-bold font-mono uppercase text-vi-slate">
              FILTERED INCLUDE CATALOG ({filteredIncludes.length})
            </h3>
          </div>
          <span className="text-xs font-mono text-vi-muted">
            ONE-CLICK CLIPBOARD COPY
          </span>
        </div>

        {filteredIncludes.length === 0 ? (
          <div className="p-12 text-center bg-white border border-vi-border rounded-glass">
            <h4 className="text-base font-bold text-vi-slate uppercase">
              No matching includes found
            </h4>
            <p className="mt-1 text-xs text-vi-muted font-mono">
              Try adjusting your search query or selecting "ALL INCLUDES" from the ribbon.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedDomain("all");
                setSelectedTag(null);
              }}
              className="mt-4 vi-button-ghost px-4 py-2 text-xs font-mono"
            >
              [ RESET ALL FILTERS ]
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredIncludes.map((item) => (
              <IncludeCard
                key={item.id}
                item={item}
                onInspect={(itm) => setInspectedItem(itm)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Slide-over Full Raw Inspector */}
      <IncludeInspector
        item={inspectedItem}
        onClose={() => setInspectedItem(null)}
      />
    </section>
  );
}
