import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/placeholder-styles.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ClientPerformanceWrapper from "../components/common/ClientPerformanceWrapper";
import ClientAnalyticsScript from "../components/common/ClientAnalyticsScript";
import ScrollToTop from "../components/common/ScrollToTop";

// Optimisation du chargement des polices
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",        // Affiche une police de substitution pendant le chargement
  preload: true,         // Précharge la police
  fallback: ["system-ui", "sans-serif"], // Polices de substitution
  adjustFontFallback: true, // Ajuste les polices de substitution
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["monospace"],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  // Métadonnées de base pour le SEO
  title: "SIA Assurances | Courtage, Audit et Conseil en Assurance Construction",
  description: "Cabinet de courtage spécialisé en assurance construction, garantie décennale, dommages ouvrage, RC promoteur et protection des professionnels. Expertise et conseil personnalisé.",
  keywords: "assurance construction, garantie décennale, dommages ouvrage, RC promoteur, courtier assurance, SIA Assurances, assurance professionnelle, assurance entreprise",
  authors: [{ name: "SIA Assurances" }],
  generator: "Next.js",
  applicationName: "SIA Assurances",
  referrer: "origin-when-cross-origin",
  creator: "SIA Assurances",
  publisher: "SIA Assurances",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://siaassurances.com"),
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/fr",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Métadonnées Open Graph pour les partages sociaux
  openGraph: {
    title: "SIA Assurances | Experts en Assurance Construction",
    description: "Découvrez SIA Assurances pour trouver les meilleures offres d'assurance pour vos risques professionnels. Cabinet spécialisé en assurance construction.",
    url: "https://siaassurances.com",
    siteName: "SIA Assurances",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SIA Assurances - Courtage en assurance construction",
      },
    ],
  },
  
  // Métadonnées Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "SIA Assurances | Experts en Assurance Construction",
    description: "Cabinet de courtage spécialisé en assurance construction et protection des professionnels.",
    images: ["/twitter-image.jpg"],
    creator: "@SIAAssurances",
  },
  
  // Métadonnées pour les appareils mobiles
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  
  // Métadonnées pour les thèmes de couleur
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#35789B" }],
  
  // Icônes
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#35789B",
      },
    ],
  },
  
  // Manifeste pour PWA
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Préchargement des ressources critiques */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Préchargement des images critiques */}
        <link rel="preload" as="image" href="/logo.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* Composant d'optimisation des performances */}
        <ClientPerformanceWrapper />
        
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        
        {/* Bouton pour remonter en haut de la page */}
        <ScrollToTop />
        
        {/* Script d'analyse de performance - à charger en différé */}
        <ClientAnalyticsScript />
      </body>
    </html>
  );
}
