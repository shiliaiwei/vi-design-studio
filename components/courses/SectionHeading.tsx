"use client";

import React from "react";

interface SectionHeadingProps {
  badge: string;
  titleEn: string;
  titleKm: string;
  descriptionEn: string;
  descriptionKm: string;
  count?: number;
  actionHref?: string;
  actionText?: string;
}

export default function SectionHeading({
  badge,
  titleEn,
  titleKm,
  descriptionEn,
  descriptionKm,
  count,
  actionHref,
  actionText = "VIEW ALL",
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 pb-4 border-b border-vi-border">
      <div>
        <div className="flex items-center space-x-2 mb-2">
          <span className="vi-pill bg-slate-100 text-vi-slate text-[10px]">
            {badge}
          </span>
          {count !== undefined && (
            <span className="font-mono text-xs text-vi-muted">
              ({count} AVAILABLE)
            </span>
          )}
        </div>

        {/* Dual Language Heading */}
        <h2 className="text-2xl sm:text-3xl font-black text-vi-slate tracking-tight uppercase">
          {titleEn}
        </h2>
        <div className="text-sm font-semibold text-vi-emeraldDark font-sans mt-0.5">
          {titleKm}
        </div>

        {/* Dual Language Description */}
        <p className="mt-1.5 text-xs text-vi-muted max-w-2xl leading-relaxed">
          <span>{descriptionEn}</span>
          <span className="block mt-0.5 text-slate-500">{descriptionKm}</span>
        </p>
      </div>

      {actionHref && (
        <a
          href={actionHref}
          className="vi-button-ghost px-4 py-2 text-xs font-mono tracking-wider uppercase shrink-0 self-start sm:self-end"
        >
          [ {actionText} ]
        </a>
      )}
    </div>
  );
}
