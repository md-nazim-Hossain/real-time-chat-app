import { Manrope } from "next/font/google";
export const manrope = Manrope({
  variable: "--font-manrope",
  display: "swap",
  subsets: ["latin"],
  fallback: ["Helvetica", "Arial", "sans-serif"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});
