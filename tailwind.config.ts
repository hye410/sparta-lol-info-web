import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
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
        darkBg: colors.zinc[950],
        lightBg: colors.neutral[200],
        accent: colors.rose[400],
        darkDefault: colors.zinc[300],
        darkPoint: colors.yellow[300],
        default: colors.stone[800],
        point: colors.orange[500],
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
