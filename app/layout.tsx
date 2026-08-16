import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Lexicon Protocol",
  description: "Open-source research framework for structured, machine-verifiable governance and human-centered AI-assisted decision systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
