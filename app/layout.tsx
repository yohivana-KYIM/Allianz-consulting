import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Allianz Consulting Sarl — Fiscalité, comptabilité, audit, finance",
  description:
    "Cabinet Allianz Consulting Sarl : fiscalité, comptabilité, management, ingénierie financière, audit, douane & transit, ressources humaines et création d'entreprise à Douala.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${sora.variable} ${manrope.variable}`}>
      <head>
        <link rel="stylesheet" href="/tabler-icons/tabler-icons.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
