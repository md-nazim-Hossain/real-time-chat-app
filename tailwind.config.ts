import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#676667",
        "deep-gray": "#696969",
        "extra-dark-gray": "#424242",
        muted: "#727375",
        light: "#F8FAFF",
        "dark-light": "#161C24",
        "theme-light": "#F0F4FA",
        "theme-dark": "#212B36",
      },
      fontFamily: {
        manrope: ["var(--font-manrope)", "sans-serif"],
      },
      boxShadow: {
        sidebar: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            primary: "#5B96F7",
            secondary: "#709CE6",
          },
        },
        light: {
          colors: {
            primary: {
              DEFAULT: "#5B96F7",
              foreground: "#fff",
            },
            secondary: "#709CE6",
          },
        },
      },
    }),
  ],
};
export default config;
