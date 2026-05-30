import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        display: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      colors: {
        bg: {
          primary: "#070B14",
          secondary: "#0D1220",
          tertiary: "#111827",
          card: "#0F1A2E",
        },
        neon: {
          blue: "#00D4FF",
          purple: "#8B5CF6",
          cyan: "#06FFC8",
          pink: "#FF2D78",
        },
        accent: {
          blue: "#2563EB",
          violet: "#7C3AED",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #070B14 0%, #0D1220 50%, #0F1428 100%)",
        "neon-gradient": "linear-gradient(135deg, #00D4FF 0%, #8B5CF6 50%, #06FFC8 100%)",
        "card-gradient": "linear-gradient(145deg, rgba(15,26,46,0.9) 0%, rgba(13,18,32,0.95) 100%)",
      },
      boxShadow: {
        "neon-blue": "0 0 20px rgba(0, 212, 255, 0.3), 0 0 40px rgba(0, 212, 255, 0.1)",
        "neon-purple": "0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(139, 92, 246, 0.1)",
        "neon-cyan": "0 0 20px rgba(6, 255, 200, 0.3), 0 0 40px rgba(6, 255, 200, 0.1)",
        "card-glow": "0 8px 32px rgba(0, 212, 255, 0.08), 0 4px 16px rgba(0,0,0,0.4)",
        "card-hover": "0 16px 48px rgba(0, 212, 255, 0.15), 0 8px 24px rgba(139, 92, 246, 0.1)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delay": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 8s ease-in-out 1s infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "rotate-slow": "rotateSlow 20s linear infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "slide-up": "slideUp 0.6s ease forwards",
        "border-spin": "borderSpin 4s linear infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 212, 255, 0.6), 0 0 80px rgba(139, 92, 246, 0.2)" },
        },
        rotateSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        borderSpin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
