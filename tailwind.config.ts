import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pastel: {
          pink: {
            50: "#FFF5F7",
            100: "#FEEBF0",
            200: "#FCD5E1",
            300: "#F9B2C7",
            400: "#F47FA4",
            500: "#EC4E80",
            600: "#D92E63",
            700: "#B81C4B",
          },
          rose: {
            50: "#FFF1F2",
            100: "#FFE4E6",
            200: "#FECDD3",
            300: "#FDA4AF",
            400: "#FB7185",
            500: "#F43F5E",
          },
          cream: {
            50: "#FFFDFB",
            100: "#FFF9F5",
            200: "#FEF2E8",
            300: "#FDE6D2",
          },
          mint: {
            50: "#F0FDFA",
            100: "#CCFBF1",
            200: "#99F6E4",
            300: "#5EEAD4",
            400: "#2DD4BF",
            500: "#14B8A6",
            600: "#0D9488",
          },
          slate: {
            50: "#F8FAFC",
            100: "#F1F5F9",
            200: "#E2E8F0",
            500: "#64748B",
            700: "#334155",
            800: "#1E293B",
            900: "#0F172A",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        heartbeat: "heartbeat 1.5s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        "blob-spin": "blob 10s infinite linear",
      },
      keyframes: {
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "14%": { transform: "scale(1.1)" },
          "28%": { transform: "scale(1)" },
          "42%": { transform: "scale(1.15)" },
          "70%": { transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        blob: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

