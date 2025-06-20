import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuration pour l'optimisation des images
  images: {
    // Domaines autorisés pour les images externes
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    // Format d'images modernes pour une meilleure compression
    formats: ['image/avif', 'image/webp'],
    // Tailles d'images prédéfinies pour optimiser le chargement
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Note: quality option removed as it's not supported by Turbopack
  },
  // Compression des assets statiques
  compress: true,
  // Optimisation des scripts
  reactStrictMode: true,
  // Note: optimizeFonts et swcMinify ont été supprimés car non supportés par Turbopack
  // Configuration pour la production
  productionBrowserSourceMaps: false,
  // Configuration pour les en-têtes HTTP
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
