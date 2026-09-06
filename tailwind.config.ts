import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0a0b0c",
          900: "#101214",
          800: "#16191c",
          700: "#202428",
          600: "#2c3136",
          500: "#454b52",
          400: "#6b7278",
          300: "#9a9fa4",
        },
        paper: {
          50: "#faf8f4",
          100: "#f4f1e9",
          200: "#e9e4d8",
        },
        signal: {
          DEFAULT: "#3ecf8e",
          dim: "#2a9e6c",
          bright: "#5be8a8",
        },
        gold: {
          DEFAULT: "#d9a94e",
          bright: "#eec472",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1280px",
      },
      transitionTimingFunction: {
        signature: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
