import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#0A0D14",
          card: "rgba(16, 22, 36, 0.7)",
          border: "rgba(255, 255, 255, 0.1)",
          cyan: "#00F0FF",
          violet: "#8B5CF6",
          sky: "#38BDF8",
          dark: "#05070B",
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "marquee-reverse": "marquee-reverse 28s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite alternate",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": {
            filter: "drop-shadow(0 0 15px rgba(0, 240, 255, 0.4))",
          },
          "100%": {
            filter: "drop-shadow(0 0 30px rgba(139, 92, 246, 0.6))",
          },
        },
      },
      backgroundImage: {
        "cyber-gradient": "linear-gradient(135deg, rgba(0, 240, 255, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)",
        "glow-conic": "conic-gradient(from 180deg at 50% 50%, #00F0FF 0deg, #8B5CF6 180deg, #00F0FF 360deg)",
      },
    },
  },
  plugins: [],
};

export default config;
