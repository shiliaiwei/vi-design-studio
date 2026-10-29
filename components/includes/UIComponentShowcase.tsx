"use client";

import React, { useState } from "react";
import {
  SnackbarIcon,
  BottomSheetIcon,
  DialogIcon,
  BottomNavIcon,
  ToggleSwitchIcon,
  ChipsIcon,
  FabIcon,
  CardIcon,
  DropdownIcon,
  TooltipIcon,
  CheckIcon,
  CopyIcon,
  XIcon,
} from "../icons/KeylineSystemIcons";
import { INCLUDES_DATA } from "../../lib/includes-data";

export default function UIComponentShowcase() {
  // State for interactive UI components
  const [activeComponent, setActiveComponent] = useState<string>("snackbar");
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("Operation completed successfully");
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [bottomNavIndex, setBottomNavIndex] = useState(0);
  const [toggleState1, setToggleState1] = useState(true);
  const [toggleState2, setToggleState2] = useState(false);
  const [selectedChips, setSelectedChips] = useState<string[]>(["ARCHITECTURE", "SECURITY"]);
  const [fabCount, setFabCount] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("Production Standard");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyPrompt = (code: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const triggerSnackbar = (msg: string) => {
    setSnackbarMessage(msg);
    setShowSnackbar(true);
    setTimeout(() => setShowSnackbar(false), 4000);
  };

  const toggleChip = (chip: string) => {
    setSelectedChips((prev) =>
      prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]
    );
  };

  const currentInclude = INCLUDES_DATA.find(
    (item) => item.componentType === activeComponent
  );

  return (
    <div className="vi-glass-card p-6 sm:p-8 bg-white border border-vi-border mb-12">
      {/* Component Navigation Ribbon */}
      <div className="mb-6 pb-4 border-b border-vi-border">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="vi-pill bg-emerald-50 text-vi-emeraldDark border border-emerald-200 mb-2">
              INTERACTIVE COMPONENT SUITE
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-vi-slate uppercase tracking-tight">
              10 Production UI Component Includes
            </h3>
            <p className="mt-1 text-xs text-vi-muted">
              Select any component to interact with live state, inspect keyline specifications, and copy the prompt include.
            </p>
          </div>

          {currentInclude && (
            <button
              onClick={() => handleCopyPrompt(currentInclude.code, currentInclude.promptText)}
              className="vi-button-primary px-4 py-2 text-xs font-mono tracking-wider uppercase inline-flex items-center space-x-2"
            >
              {copiedCode === currentInclude.code ? (
                <>
                  <CheckIcon className="w-3.5 h-3.5 text-white" />
                  <span>[ COPIED INCLUDE ]</span>
                </>
              ) : (
                <>
                  <CopyIcon className="w-3.5 h-3.5 text-white" />
                  <span>[ COPY {currentInclude.code} PROMPT ]</span>
                </>
              )}
            </button>
          )}
        </div>

        {/* 10 Component Filter Tabs */}
        <div className="mt-6 flex flex-wrap gap-2">
          {[
            { id: "snackbar", label: "Snackbar", icon: SnackbarIcon },
            { id: "bottom-sheet", label: "Bottom Sheet", icon: BottomSheetIcon },
            { id: "dialog", label: "Dialog", icon: DialogIcon },
            { id: "bottom-nav", label: "Bottom Nav", icon: BottomNavIcon },
            { id: "toggle-switch", label: "Toggle Switch", icon: ToggleSwitchIcon },
            { id: "chips", label: "Chips", icon: ChipsIcon },
            { id: "fab", label: "FAB", icon: FabIcon },
            { id: "card", label: "Card", icon: CardIcon },
            { id: "dropdown", label: "Dropdown", icon: DropdownIcon },
            { id: "tooltip", label: "Tooltip", icon: TooltipIcon },
          ].map((item) => {
            const Icon = item.icon;
            const isSelected = activeComponent === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveComponent(item.id)}
                className={`px-3 py-1.5 text-xs font-mono font-bold uppercase rounded-sticker transition-all inline-flex items-center space-x-1.5 ${
                  isSelected
                    ? "bg-vi-slate text-white border border-vi-slate shadow-sm"
                    : "bg-slate-50 text-vi-muted hover:text-vi-slate border border-vi-border"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Component Stage */}
      <div className="p-6 bg-slate-50 rounded-sticker border border-vi-border">
        {/* 1. SNACKBAR */}
        {activeComponent === "snackbar" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="text-sm font-bold text-vi-slate uppercase">
                  Snackbar Trigger & Feedback Test
                </h4>
                <p className="text-xs text-vi-muted">
                  Triggers an accessible floating toast at screen bottom with auto-dismiss in 4 seconds.
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => triggerSnackbar("Security policy updated successfully")}
                  className="vi-button-eager px-3 py-1.5 text-xs"
                >
                  [ TRIGGER SUCCESS SNACKBAR ]
                </button>
                <button
                  onClick={() => triggerSnackbar("Database connection retry in progress")}
                  className="vi-button-ghost px-3 py-1.5 text-xs"
                >
                  [ TRIGGER INFO SNACKBAR ]
                </button>
              </div>
            </div>

            {/* Live Inline Preview Container */}
            <div className="relative h-28 bg-white border border-vi-border rounded-sticker p-4 flex items-end justify-center overflow-hidden">
              {showSnackbar ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="w-full max-w-md bg-vi-slate text-white px-4 py-2.5 rounded-sticker border border-slate-700 shadow-md flex items-center justify-between text-xs font-mono animate-in fade-in slide-in-from-bottom-2 duration-200"
                >
                  <span>{snackbarMessage}</span>
                  <button
                    onClick={() => setShowSnackbar(false)}
                    className="text-vi-emerald font-bold hover:underline ml-3"
                  >
                    [ DISMISS ]
                  </button>
                </div>
              ) : (
                <span className="text-xs font-mono text-vi-muted">
                  [ SNACKBAR STAGE: IDLE - CLICK TRIGGER TO ACTIVATE ]
                </span>
              )}
            </div>
          </div>
        )}

        {/* 2. BOTTOM SHEET */}
        {activeComponent === "bottom-sheet" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="text-sm font-bold text-vi-slate uppercase">
                  Modal Bottom Sheet with Tactile Drag Handle
                </h4>
                <p className="text-xs text-vi-muted">
                  Mobile drawer sheet with rounded top corners, backdrop blur, and scrollable content.
                </p>
              </div>
              <button
                onClick={() => setShowBottomSheet(true)}
                className="vi-button-primary px-4 py-2 text-xs"
              >
                [ OPEN BOTTOM SHEET ]
              </button>
            </div>

            {/* Live Bottom Sheet Drawer */}
            {showBottomSheet && (
              <div
                role="dialog"
                aria-modal="true"
                className="fixed inset-0 z-50 flex flex-col justify-end bg-black/50 backdrop-blur-sm"
              >
                <div className="bg-white border-t border-vi-border rounded-t-2xl max-w-xl mx-auto w-full p-6 animate-in slide-in-from-bottom duration-200 shadow-2xl">
                  {/* Drag Handle Indicator */}
                  <div className="w-10 h-1.5 bg-slate-300 rounded-full mx-auto mb-4" />

                  <div className="flex items-center justify-between pb-3 border-b border-vi-border mb-4">
                    <h5 className="text-base font-bold text-vi-slate uppercase">
                      Architecture Action Sheet
                    </h5>
                    <button
                      onClick={() => setShowBottomSheet(false)}
                      className="p-1 text-vi-muted hover:text-vi-slate rounded"
                    >
                      <XIcon className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-2 text-xs font-mono">
                    <div className="p-3 bg-slate-50 border border-vi-border rounded-sticker flex items-center justify-between">
                      <span className="text-vi-slate font-bold">EXPORT TO POSTGRES SCHEMA</span>
                      <span className="text-vi-muted">ACID v16.2</span>
                    </div>
                    <div className="p-3 bg-slate-50 border border-vi-border rounded-sticker flex items-center justify-between">
                      <span className="text-vi-slate font-bold">GENERATE OPENNEXT CLUSTER</span>
                      <span className="text-vi-muted">EDGE V8</span>
                    </div>
                    <div className="p-3 bg-slate-50 border border-vi-border rounded-sticker flex items-center justify-between">
                      <span className="text-vi-slate font-bold">ENFORCE 198 PILLARS CHECKLIST</span>
                      <span className="text-vi-muted">AUDIT MODE</span>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={() => setShowBottomSheet(false)}
                      className="vi-button-ghost px-4 py-2 text-xs w-full sm:w-auto"
                    >
                      [ CLOSE SHEET ]
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="p-6 bg-white border border-vi-border rounded-sticker text-center text-xs font-mono text-vi-muted">
              Click "[ OPEN BOTTOM SHEET ]" above to test modal opening and drag handle geometry.
            </div>
          </div>
        )}

        {/* 3. DIALOG */}
        {activeComponent === "dialog" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="text-sm font-bold text-vi-slate uppercase">
                  Confirmation Modal Dialog
                </h4>
                <p className="text-xs text-vi-muted">
                  High-focus modal dialog with rigid 3-part layout and accessible keyboard dismiss.
                </p>
              </div>
              <button
                onClick={() => setShowDialog(true)}
                className="vi-button-primary px-4 py-2 text-xs"
              >
                [ OPEN CONFIRMATION DIALOG ]
              </button>
            </div>

            {/* Live Dialog */}
            {showDialog && (
              <div
                role="dialog"
                aria-modal="true"
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
              >
                <div className="bg-white border border-vi-border rounded-glass max-w-md w-full p-6 shadow-2xl animate-in zoom-in-95 duration-150">
                  <span className="vi-pill bg-rose-50 text-vi-crimson border border-rose-200 mb-2">
                    CONFIRMATION REQUIRED
                  </span>
                  <h5 className="text-lg font-bold text-vi-slate uppercase mt-1">
                    Purge Stale Edge Cache?
                  </h5>
                  <p className="mt-2 text-xs text-vi-muted leading-relaxed">
                    This action will invalidate all cached static includes across 300+ Cloudflare edge data centers. Next requests will warm from origin.
                  </p>

                  <div className="mt-6 pt-4 border-t border-vi-border flex items-center justify-end space-x-3">
                    <button
                      onClick={() => setShowDialog(false)}
                      className="vi-button-ghost px-4 py-2 text-xs"
                    >
                      [ CANCEL ]
                    </button>
                    <button
                      onClick={() => {
                        setShowDialog(false);
                        triggerSnackbar("Edge cache purge initiated");
                      }}
                      className="vi-button-eager px-4 py-2 text-xs"
                    >
                      [ CONFIRM PURGE ]
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="p-6 bg-white border border-vi-border rounded-sticker text-center text-xs font-mono text-vi-muted">
              Click "[ OPEN CONFIRMATION DIALOG ]" to inspect rigid 3-part modal anatomy.
            </div>
          </div>
        )}

        {/* 4. BOTTOM NAV */}
        {activeComponent === "bottom-nav" && (
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold text-vi-slate uppercase">
                Bottom Navigation Bar Control
              </h4>
              <p className="text-xs text-vi-muted">
                Fixed mobile bottom navigation bar with keyline icon states and active indicators.
              </p>
            </div>

            <div className="bg-white border border-vi-border rounded-sticker overflow-hidden p-6 max-w-md mx-auto">
              <div className="h-32 bg-slate-50 border border-slate-200 rounded flex items-center justify-center text-xs font-mono text-vi-slate mb-4">
                ACTIVE VIEW: {[ "STUDIO HOME", "INCLUDES REPO", "SECURITY VAULT", "SETTINGS" ][bottomNavIndex]}
              </div>

              {/* Bottom Nav Bar */}
              <div className="h-14 bg-white border-t border-vi-border flex items-center justify-around px-2">
                {[
                  { label: "HOME", icon: CardIcon },
                  { label: "INCLUDES", icon: ChipsIcon },
                  { label: "SECURITY", icon: DialogIcon },
                  { label: "SETTINGS", icon: ToggleSwitchIcon },
                ].map((tab, idx) => {
                  const Icon = tab.icon;
                  const isActive = bottomNavIndex === idx;
                  return (
                    <button
                      key={tab.label}
                      onClick={() => setBottomNavIndex(idx)}
                      className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors ${
                        isActive ? "text-vi-emeraldDark font-bold" : "text-vi-muted hover:text-vi-slate"
                      }`}
                    >
                      <Icon className="w-4 h-4 mb-1" />
                      <span className="text-[10px] font-mono tracking-wider">{tab.label}</span>
                      {isActive && <div className="w-6 h-0.5 bg-vi-emerald mt-0.5 rounded-full" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* 5. TOGGLE SWITCH */}
        {activeComponent === "toggle-switch" && (
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold text-vi-slate uppercase">
                Toggle Switch Control (Accessible Binary Input)
              </h4>
              <p className="text-xs text-vi-muted">
                Physical thumb slide transition with mandatory associated HTML &lt;label&gt;.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
              {/* Switch 1 */}
              <div className="p-4 bg-white border border-vi-border rounded-sticker flex items-center justify-between">
                <div>
                  <label
                    htmlFor="toggle-edge-cache"
                    className="text-xs font-bold font-mono text-vi-slate uppercase block cursor-pointer"
                  >
                    EDGE V8 CACHING
                  </label>
                  <span className="text-[11px] text-vi-muted">Cloudflare KV TTL 3600s</span>
                </div>

                <button
                  id="toggle-edge-cache"
                  role="switch"
                  aria-checked={toggleState1}
                  onClick={() => setToggleState1((prev) => !prev)}
                  className={`w-11 h-6 rounded-full p-1 transition-colors relative ${
                    toggleState1 ? "bg-vi-emerald" : "bg-slate-300"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${
                      toggleState1 ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* Switch 2 */}
              <div className="p-4 bg-white border border-vi-border rounded-sticker flex items-center justify-between">
                <div>
                  <label
                    htmlFor="toggle-strict-schema"
                    className="text-xs font-bold font-mono text-vi-slate uppercase block cursor-pointer"
                  >
                    STRICT ZOD GUARD
                  </label>
                  <span className="text-[11px] text-vi-muted">Reject loose JSON payloads</span>
                </div>

                <button
                  id="toggle-strict-schema"
                  role="switch"
                  aria-checked={toggleState2}
                  onClick={() => setToggleState2((prev) => !prev)}
                  className={`w-11 h-6 rounded-full p-1 transition-colors relative ${
                    toggleState2 ? "bg-vi-emerald" : "bg-slate-300"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${
                      toggleState2 ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 6. CHIPS */}
        {activeComponent === "chips" && (
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold text-vi-slate uppercase">
                Chips & Filter Pills
              </h4>
              <p className="text-xs text-vi-muted">
                Compact selection and choice chips with active solid background states.
              </p>
            </div>

            <div className="p-5 bg-white border border-vi-border rounded-sticker">
              <span className="text-xs font-mono font-bold text-vi-muted uppercase block mb-3">
                CLICK TO TOGGLE CHIP FILTER SELECTION:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "ARCHITECTURE",
                  "SECURITY",
                  "DATABASE",
                  "AI-AGENTS",
                  "RAG-EMBEDDINGS",
                  "CLOUDFLARE",
                  "DEVOPS",
                  "ZERO-EMOJI",
                ].map((chip) => {
                  const isSelected = selectedChips.includes(chip);
                  return (
                    <button
                      key={chip}
                      onClick={() => toggleChip(chip)}
                      className={`px-3 py-1.5 text-xs font-mono font-bold uppercase rounded-full transition-all border ${
                        isSelected
                          ? "bg-vi-slate text-white border-vi-slate shadow-sm"
                          : "bg-slate-50 text-vi-slate border-vi-border hover:bg-slate-100"
                      }`}
                    >
                      {isSelected ? `[x] ${chip}` : `[ ] ${chip}`}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-mono text-vi-muted flex items-center justify-between">
                <span>ACTIVE FILTERS:</span>
                <span className="font-bold text-vi-slate">
                  {selectedChips.length > 0 ? selectedChips.join(", ") : "NONE"}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* 7. FAB */}
        {activeComponent === "fab" && (
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold text-vi-slate uppercase">
                Floating Action Button (FAB) Physics
              </h4>
              <p className="text-xs text-vi-muted">
                Prominent action button with 4px solid bottom extrusion and tactile press states.
              </p>
            </div>

            <div className="p-6 bg-white border border-vi-border rounded-sticker flex flex-wrap items-center justify-around gap-6">
              {/* Standard Circular FAB */}
              <div className="text-center space-y-2">
                <button
                  onClick={() => setFabCount((c) => c + 1)}
                  className="w-14 h-14 rounded-full bg-vi-emerald text-white border-t border-l border-white/40 border-b-4 border-vi-emeraldDark flex items-center justify-center font-bold text-lg shadow-md active:translate-y-1 active:border-b transition-all mx-auto"
                  aria-label="Add include"
                >
                  <FabIcon className="w-6 h-6 text-white" />
                </button>
                <span className="text-[11px] font-mono text-vi-muted block">
                  STANDARD CIRCULAR (56PX)
                </span>
              </div>

              {/* Extended FAB */}
              <div className="text-center space-y-2">
                <button
                  onClick={() => setFabCount((c) => c + 1)}
                  className="vi-button-eager px-5 py-3 text-xs uppercase tracking-wider inline-flex items-center space-x-2"
                >
                  <FabIcon className="w-4 h-4 text-white" />
                  <span>[ EXTENDED ACTION FAB ]</span>
                </button>
                <span className="text-[11px] font-mono text-vi-muted block">
                  EXTENDED PILL (48PX HEIGHT)
                </span>
              </div>

              <div className="p-4 bg-slate-50 border border-vi-border rounded-sticker text-xs font-mono text-center">
                <span>TRIGGERED COUNT:</span>
                <div className="text-2xl font-black text-vi-slate font-mono mt-1">
                  {fabCount}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 8. CARD */}
        {activeComponent === "card" && (
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold text-vi-slate uppercase">
                Card Surface & Panel Variants
              </h4>
              <p className="text-xs text-vi-muted">
                Content containers with solid borders, 16px radius, and tactile hover physics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Variant 1: Outlined Standard */}
              <div className="p-5 bg-white border border-vi-border rounded-glass shadow-sm hover:border-slate-400 transition-colors">
                <span className="vi-pill bg-slate-100 text-vi-slate mb-2">
                  OUTLINED
                </span>
                <h5 className="text-sm font-bold text-vi-slate uppercase">
                  Standard Outlined Card
                </h5>
                <p className="mt-2 text-xs text-vi-muted leading-relaxed">
                  Clean 1px solid #E2E8F0 border on pure white ground. Used for list items and metrics.
                </p>
              </div>

              {/* Variant 2: Accent Bevel */}
              <div className="p-5 bg-white border border-vi-border border-b-4 border-b-vi-emerald rounded-glass shadow-sm hover:translate-y-[-1px] transition-transform">
                <span className="vi-pill bg-emerald-50 text-vi-emeraldDark mb-2">
                  BEVELED
                </span>
                <h5 className="text-sm font-bold text-vi-slate uppercase">
                  Tactile Beveled Card
                </h5>
                <p className="mt-2 text-xs text-vi-muted leading-relaxed">
                  Solid 4px bottom border in Primary Emerald. Provides physical depth without gradients.
                </p>
              </div>

              {/* Variant 3: Frosted Specular */}
              <div className="p-5 vi-glass-card shadow-sm hover:border-vi-sparkBlue transition-colors">
                <span className="vi-pill bg-blue-50 text-vi-sparkBlue mb-2">
                  SPECULAR GLASS
                </span>
                <h5 className="text-sm font-bold text-vi-slate uppercase">
                  Frosted Liquid Glass
                </h5>
                <p className="mt-2 text-xs text-vi-muted leading-relaxed">
                  Backdrop blur 20px with 88% opacity fill. Reflects subtle underlying canvas tone.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 9. DROPDOWN */}
        {activeComponent === "dropdown" && (
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold text-vi-slate uppercase">
                Dropdown Menu & Popover
              </h4>
              <p className="text-xs text-vi-muted">
                Action dropdown menu with absolute positioning and outside click dismissal.
              </p>
            </div>

            <div className="p-6 bg-white border border-vi-border rounded-sticker max-w-md">
              <label
                htmlFor="dropdown-button"
                className="text-xs font-bold font-mono uppercase text-vi-slate block mb-1.5"
              >
                SELECT SPECIFICATION PROFILE
              </label>

              <div className="relative">
                <button
                  id="dropdown-button"
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={dropdownOpen}
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="w-full px-4 py-2.5 bg-white border border-vi-border rounded-sticker text-xs font-mono text-vi-slate flex items-center justify-between hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-vi-sparkBlue/30"
                >
                  <span className="font-bold">{dropdownValue}</span>
                  <DropdownIcon className="w-4 h-4 text-vi-muted" />
                </button>

                {dropdownOpen && (
                  <div
                    role="menu"
                    className="absolute top-full left-0 right-0 mt-1 bg-white border border-vi-border rounded-sticker shadow-xl z-30 py-1 font-mono text-xs animate-in fade-in duration-100"
                  >
                    {[
                      "Production Standard (198 Pillars)",
                      "Strict Security & Crypto (OWASP)",
                      "Edge Cloudflare Isolates (V8)",
                      "Multi-Agent Orchestrator (Zod)",
                      "High-Performance Database (ACID)",
                    ].map((option) => (
                      <button
                        key={option}
                        type="button"
                        role="menuitem"
                        onClick={() => {
                          setDropdownValue(option);
                          setDropdownOpen(false);
                          triggerSnackbar(`Profile updated to: ${option}`);
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-slate-50 transition-colors flex items-center justify-between ${
                          dropdownValue === option ? "text-vi-emeraldDark font-bold bg-emerald-50/50" : "text-vi-slate"
                        }`}
                      >
                        <span>{option}</span>
                        {dropdownValue === option && <CheckIcon className="w-3.5 h-3.5 text-vi-emerald" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* 10. TOOLTIP */}
        {activeComponent === "tooltip" && (
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold text-vi-slate uppercase">
                Tooltip Micro-Label Component
              </h4>
              <p className="text-xs text-vi-muted">
                Micro informational text bubble on hover and focus with aria-describedby binding.
              </p>
            </div>

            <div className="p-8 bg-white border border-vi-border rounded-sticker flex flex-wrap items-center justify-around gap-6">
              {/* Tooltip Target 1 */}
              <div className="relative group">
                <button
                  aria-describedby="tooltip-audit"
                  className="vi-button-primary px-4 py-2 text-xs"
                >
                  [ HOVER FOR AUDIT HINT ]
                </button>
                <div
                  id="tooltip-audit"
                  role="tooltip"
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-vi-slate text-white text-[11px] font-mono px-3 py-1.5 rounded whitespace-nowrap shadow-md z-20"
                >
                  Evaluates 198 Production Engineering checks
                  <div className="w-2 h-2 bg-vi-slate rotate-45 absolute top-full left-1/2 -translate-x-1/2 -mt-1" />
                </div>
              </div>

              {/* Tooltip Target 2 */}
              <div className="relative group">
                <button
                  aria-describedby="tooltip-edge"
                  className="vi-button-ghost px-4 py-2 text-xs"
                >
                  [ HOVER FOR EDGE HINT ]
                </button>
                <div
                  id="tooltip-edge"
                  role="tooltip"
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-vi-slate text-white text-[11px] font-mono px-3 py-1.5 rounded whitespace-nowrap shadow-md z-20"
                >
                  Zero-cold-start V8 isolates global deployment
                  <div className="w-2 h-2 bg-vi-slate rotate-45 absolute top-full left-1/2 -translate-x-1/2 -mt-1" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
