"use client";

import React, { useState } from "react";
import { IncludeItem } from "../../lib/types-includes";
import { CopyIcon, CheckIcon, EyeIcon } from "../icons/KeylineSystemIcons";

interface IncludeCardProps {
  item: IncludeItem;
  onInspect: (item: IncludeItem) => void;
}

export default function IncludeCard({ item, onInspect }: IncludeCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(item.promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getDomainColor = (domain: string) => {
    switch (domain) {
      case "ui-components":
        return "bg-emerald-50 text-vi-emeraldDark border-emerald-200";
      case "application-security":
      case "ai-safety":
        return "bg-rose-50 text-vi-crimson border-rose-200";
      case "cloud-infrastructure":
      case "devops-cicd":
        return "bg-cyan-50 text-vi-cyan border-cyan-200";
      case "system-architecture":
      case "backend-databases":
        return "bg-blue-50 text-vi-sparkBlue border-blue-200";
      default:
        return "bg-slate-100 text-vi-slate border-slate-200";
    }
  };

  return (
    <div className="vi-glass-card p-5 bg-white border border-vi-border flex flex-col justify-between hover:border-slate-400 transition-all">
      {/* Top Metadata */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center space-x-2">
            <span
              className={`vi-pill text-[10px] border ${getDomainColor(
                item.domain
              )}`}
            >
              {item.domainLabel}
            </span>
            <span className="font-mono text-xs font-bold text-vi-slate bg-slate-100 px-2 py-0.5 rounded">
              {item.code}
            </span>
          </div>

          <span className="font-mono text-[11px] text-vi-muted bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
            {item.tokenCount} TOKENS
          </span>
        </div>

        {/* Title */}
        <h4 className="text-base font-bold text-vi-slate uppercase leading-snug">
          {item.title}
        </h4>

        {/* Summary */}
        <p className="mt-2 text-xs text-vi-muted leading-relaxed line-clamp-3">
          {item.summary}
        </p>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {item.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-100"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
        <button
          onClick={handleCopy}
          className={`flex-1 py-2 px-3 text-xs font-mono font-bold tracking-wider uppercase rounded-sticker transition-all inline-flex items-center justify-center space-x-1.5 ${
            copied
              ? "bg-vi-emerald text-white border-b-2 border-vi-emeraldDark"
              : "vi-button-primary"
          }`}
        >
          {copied ? (
            <>
              <CheckIcon className="w-3.5 h-3.5 text-white" />
              <span>COPIED</span>
            </>
          ) : (
            <>
              <CopyIcon className="w-3.5 h-3.5 text-white" />
              <span>[ COPY PROMPT ]</span>
            </>
          )}
        </button>

        <button
          onClick={() => onInspect(item)}
          className="vi-button-ghost py-2 px-3 text-xs font-mono font-bold tracking-wider uppercase inline-flex items-center space-x-1"
          title="Inspect full include"
        >
          <EyeIcon className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">INSPECT</span>
        </button>
      </div>
    </div>
  );
}
