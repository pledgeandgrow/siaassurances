import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/placeholder-styles.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SIA Assurances | Courtage, Audit et Conseil en Assurance",
  description: "Cabinet de courtage spécialisé en assurance construction, garantie décennale, dommages ouvrage, RC promoteur et protection des professionnels.",
  keywords: "assurance construction, garantie décennale, dommages ouvrage, RC promoteur, courtier assurance, SIA Assurances",
  authors: [{ name: "SIA Assurances" }],
  openGraph: {
    title: "SIA Assurances | Courtage, Audit et Conseil en Assurance",
    description: "Découvrez SIA Assurances pour trouver les meilleures offres d'assurance pour vos risques professionnels. Cabinet spécialisé en assurance construction.",
    url: "https://siaassurances.com",
    siteName: "SIA Assurances",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
