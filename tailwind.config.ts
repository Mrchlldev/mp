import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        main: "hsl(var(--main))",
        "main-foreground": "hsl(var(--main-foreground))",
        "secondary-background": "hsl(var(--secondary-background))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
      },
      borderRadius: { base: "var(--radius-base)" },
      boxShadow: { shadow: "var(--shadow)" },
      fontFamily: { sans: ["var(--font-space-grotesk)", "sans-serif"], display: ["var(--font-archivo)", "sans-serif"] },
    },
  },
  plugins: [animate],
};
export default config;
