import type { Metadata } from "next";
import { Anton, Dosis, Francois_One } from "next/font/google";
import "./globals.css";

const anton = Anton({ subsets: ["latin"], variable: "--font-anton", weight: "400" });
const dosis = Dosis({ subsets: ["latin"], variable: "--font-dosis", weight: "variable" });
const francois = Francois_One({
  subsets: ["latin"],
  variable: "--font-francois",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Kenneth Radin | Portfolio",
  description:
    "Portfolio of Kenneth Radin — aspiring IT professional and full-stack developer working with TypeScript, Next.js, Node.js, Flutter, and AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anton.variable} ${dosis.variable} ${francois.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
