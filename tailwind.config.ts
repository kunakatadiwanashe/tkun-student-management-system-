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
        kunPrimary: "#4B49AC",
        kunLight: "#98BDFF",
        kunLight2: "#7DA0FA",
        kunPurple: "#7978E9",
        kunOrange: "#F3797E",
        
      },
    },
  },
  plugins: [],
};
export default config;
