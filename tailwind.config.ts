import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vi: {
          canvas: "#FAFCFF",
          slate: "#0F172A",
          muted: "#64748B",
          border: "#E2E8F0",
          emerald: "#10B981",
          emeraldDark: "#059669",
          eagerGreen: "#58CC02",
          sparkBlue: "#1CB0F6",
          cyan: "#0891B2",
          crimson: "#FF0050",
        },
      },
      fontFamily: {
        sans: [
          "Google Sans",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "SF Mono",
          "ui-monospace",
          "Menlo",
          "Monaco",
          "Cascadia Mono",
          "Consolas",
          "monospace",
        ],
      },
      borderRadius: {
        sticker: "12px",
        glass: "16px",
      },
    },
  },
  plugins: [],
};

export default config;
