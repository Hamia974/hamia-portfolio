import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider, themeInitScript } from "@/lib/theme";
import { profile } from "@/data/profile";
import GrainOverlay from "@/components/GrainOverlay";

const fraunces = localFont({
  variable: "--font-display",
  display: "swap",
  src: [
    { path: "../fonts/fraunces-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/fraunces-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/fraunces-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/fraunces-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../fonts/fraunces-500-italic.woff2", weight: "500", style: "italic" },
    { path: "../fonts/fraunces-600-italic.woff2", weight: "600", style: "italic" },
  ],
});

const manrope = localFont({
  variable: "--font-sans",
  display: "swap",
  src: [
    { path: "../fonts/manrope-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/manrope-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/manrope-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/manrope-700.woff2", weight: "700", style: "normal" },
    { path: "../fonts/manrope-800.woff2", weight: "800", style: "normal" },
  ],
});

const jetbrainsMono = localFont({
  variable: "--font-mono",
  display: "swap",
  src: [
    { path: "../fonts/jetbrains-mono-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/jetbrains-mono-500.woff2", weight: "500", style: "normal" },
  ],
});

const siteUrl = "https://hamiakhalil.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hamia Khalil — Data, AI & Software Engineer",
    template: "%s — Hamia Khalil",
  },
  description: profile.summary,
  keywords: [
    "Hamia Khalil",
    "Data Engineer",
    "Machine Learning Engineer",
    "Full Stack Developer",
    "Data Science Portfolio",
    "AI Engineer Portfolio",
  ],
  authors: [{ name: "Hamia Khalil", url: profile.github }],
  creator: "Hamia Khalil",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Hamia Khalil — Data, AI & Software Engineer",
    description: profile.summary,
    siteName: "Hamia Khalil",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamia Khalil — Data, AI & Software Engineer",
    description: profile.summary,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${fraunces.variable} ${manrope.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
        <GrainOverlay />
      </body>
    </html>
  );
}
