import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#07111f",
        surface: "rgba(11, 23, 40, 0.72)",
        line: "rgba(255,255,255,0.12)",
        accent: "#ff7a18",
        accentSoft: "#ff9b4a",
        primary: "#5aa8ff",
      },
      boxShadow: {
        glow: "0 20px 60px rgba(16, 72, 140, 0.35)",
        cta: "0 10px 30px rgba(255, 122, 24, 0.35)",
      },
      backgroundImage: {
        hero: "linear-gradient(90deg, rgba(5,10,18,0.88) 0%, rgba(8,15,26,0.70) 45%, rgba(6,10,18,0.88) 100%), radial-gradient(circle at top left, rgba(90,168,255,0.18), transparent 30%), radial-gradient(circle at bottom right, rgba(255,122,24,0.12), transparent 26%)",
      },
    },
  },
  plugins: [],
};

export default config;
