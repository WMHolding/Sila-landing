import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        serif: ["Instrument Serif", "Georgia", ...fontFamily.serif],
        mono: ["Space Grotesk", "JetBrains Mono", ...fontFamily.mono],
      },
      colors: {
        // Obsidian Theme
        obsidian: {
          bg: "#0A0A0B",
          surface: "#141416",
          border: "#1F1F23",
          text: "#FAFAFA",
          muted: "#71717A",
          gold: "#D4AF37",
          amber: "#F59E0B",
        },
        // Quantum Theme
        quantum: {
          bg: "#020617",
          surface: "#0F172A",
          border: "#1E293B",
          text: "#F8FAFC",
          muted: "#94A3B8",
          cyan: "#38BDF8",
          indigo: "#818CF8",
        },
        // Velocity Theme
        velocity: {
          bg: "#FFFFFF",
          surface: "#FAFAFA",
          text: "#0A0A0A",
          muted: "#525252",
          orange: "#F97316",
          border: "#E5E5E5",
        },
        // Precision Theme (refined current)
        precision: {
          bg: "#FFFFFF",
          surface: "#F8FAFC",
          text: "#0F172A",
          muted: "#64748B",
          blue: "#2563EB",
          "blue-light": "#DBEAFE",
          "blue-dark": "#1D4ED8",
          border: "#E2E8F0",
        },
      },
      animation: {
        "gradient-x": "gradient-x 3s ease infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow": {
          "0%": { boxShadow: "0 0 20px rgba(212, 175, 55, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(212, 175, 55, 0.6)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
