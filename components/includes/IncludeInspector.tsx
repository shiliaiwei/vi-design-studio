"use client";

import React, { useState } from "react";
import { IncludeItem } from "../../lib/types-includes";
import { XIcon, CopyIcon, CheckIcon } from "../icons/KeylineSystemIcons";

interface IncludeInspectorProps {
  item: IncludeItem | null;
  onClose: () => void;
}

export default function IncludeInspector({
  item,
  onClose,
}: IncludeInspectorProps) {
  const [copied, setCopied] = useState(false);

  if (!item) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(item.promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="inspector-title"
      className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm animate-in fade-in duration-150"
    >
      <div className="w-full max-w-2xl bg-white h-full overflow-y-auto p-6 sm:p-8 flex flex-col justify-between shadow-2xl border-l border-vi-border animate-in slide-in-from-right duration-200">
        <div>
          {/* Header */}
          <div className="flex items-start justify-between pb-4 border-b border-vi-border">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="vi-pill bg-slate-100 text-vi-slate text-[10px]">
                  {item.domainLabel}
                </span>
                <span className="font-mono text-xs font-bold text-vi-slate bg-slate-100 px-2 py-0.5 rounded">
                  {item.code}
                </span>
                <span className="font-mono text-[11px] text-vi-muted">
                  {item.tokenCount} TOKENS
                </span>
              </div>
              <h3
                id="inspector-title"
                className="text-xl font-black text-vi-slate uppercase"
              >
                {item.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-vi-muted hover:text-vi-slate rounded-sticker hover:bg-slate-100"
              aria-label="Close inspector"
            >
              <XIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Metadata Grid */}
          <div className="my-6 grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
            <div className="p-3 bg-slate-50 border border-vi-border rounded-sticker">
              <span className="text-[10px] text-vi-muted block uppercase">
                CATEGORY
              </span>
              <span className="font-bold text-vi-slate">{item.category}</span>
            </div>
            <div className="p-3 bg-slate-50 border border-vi-border rounded-sticker">
              <span className="text-[10px] text-vi-muted block uppercase">
                FORMAT
              </span>
              <span className="font-bold text-vi-slate uppercase">{item.format}</span>
            </div>
            <div className="p-3 bg-slate-50 border border-vi-border rounded-sticker">
              <span className="text-[10px] text-vi-muted block uppercase">
                TOKEN WEIGHT
              </span>
              <span className="font-bold text-vi-emeraldDark">
                ~{item.tokenCount}
              </span>
            </div>
            <div className="p-3 bg-slate-50 border border-vi-border rounded-sticker">
              <span className="text-[10px] text-vi-muted block uppercase">
                STATUS
              </span>
              <span className="font-bold text-vi-sparkBlue">VERIFIED</span>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-6">
            <h4 className="text-xs font-bold font-mono text-vi-slate uppercase mb-1">
              ARCHITECTURAL PURPOSE
            </h4>
            <p className="text-xs text-vi-muted leading-relaxed">
              {item.summary}
            </p>
          </div>

          {/* Labeled Raw Textarea */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="raw-prompt-textarea"
                className="text-xs font-bold font-mono text-vi-slate uppercase block"
              >
                RAW PROMPT INCLUDE TEXT (READ-ONLY)
              </label>
              <span className="text-[11px] font-mono text-vi-muted">
                READY TO INJECT
              </span>
            </div>

            <textarea
              id="raw-prompt-textarea"
              readOnly
              value={item.promptText}
              rows={12}
              className="w-full p-4 bg-slate-900 text-slate-100 font-mono text-xs rounded-sticker border border-slate-700 outline-none focus:ring-2 focus:ring-vi-sparkBlue/30 select-all"
            />
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-4 border-t border-vi-border flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="vi-button-ghost px-5 py-2.5 text-xs font-mono uppercase"
          >
            [ CLOSE ]
          </button>

          <button
            onClick={handleCopy}
            className="vi-button-primary px-6 py-2.5 text-xs font-mono uppercase inline-flex items-center space-x-2"
          >
            {copied ? (
              <>
                <CheckIcon className="w-4 h-4 text-white" />
                <span>[ COPIED TO CLIPBOARD ]</span>
              </>
            ) : (
              <>
                <CopyIcon className="w-4 h-4 text-white" />
                <span>[ COPY ENTIRE INCLUDE ]</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
