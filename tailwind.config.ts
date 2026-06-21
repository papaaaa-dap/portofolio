import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // === NEOBRUTALISM COLOR PALETTE ===
      colors: {
        cream: "#FFFBF0",
        yellow: "#FFE135",
        coral: "#FF6B6B",
        tosca: "#4ECDC4",
        dark: "#0A0A0A",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      // Shadow offset neobrutalism
      boxShadow: {
        neo: "5px 5px 0px #0A0A0A",
        "neo-lg": "8px 8px 0px #0A0A0A",
        "neo-sm": "3px 3px 0px #0A0A0A",
        "neo-yellow": "5px 5px 0px #FFE135",
        "neo-coral": "5px 5px 0px #FF6B6B",
        "neo-tosca": "5px 5px 0px #4ECDC4",
      },
    },
  },
  plugins: [],
};

export default config;
