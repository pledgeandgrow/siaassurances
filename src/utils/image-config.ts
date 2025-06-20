/**
 * Configuration pour l'optimisation des images
 * Ce fichier contient des constantes et des fonctions utilitaires pour optimiser les images
 */

// Tailles d'images prédéfinies pour différents types d'écrans
export const imageSizes = {
  thumbnail: { width: 100, height: 100 },
  small: { width: 300, height: 200 },
  medium: { width: 600, height: 400 },
  large: { width: 900, height: 600 },
  hero: { width: 1920, height: 1080 },
};

// Formats d'images modernes pour une meilleure compression
export const imageFormats = ['webp', 'avif', 'jpg'];

// Qualité d'image par défaut (75% offre un bon équilibre entre qualité et taille)
export const defaultQuality = 80;

// Images critiques à précharger
export const criticalImages = [
  '/logo.svg',
  '/og-image.jpg',
  '/drissa.jpg',
];

// Images à charger en différé
export const lazyLoadImages = [
  '/testimonials/*.jpg',
  '/services/*.jpg',
  '/blog/*.jpg',
];

// Fonction pour générer des attributs srcSet pour les images responsives
export const generateSrcSet = (src: string, widths: number[] = [640, 750, 828, 1080, 1200, 1920]) => {
  // Extraire l'extension du fichier
  const extension = src.split('.').pop() || 'jpg';
  
  // Générer le srcSet pour chaque largeur
  return widths
    .map(width => {
      // Pour les images externes, on ne peut pas générer de srcSet
      if (src.startsWith('http')) {
        return `${src} ${width}w`;
      }
      
      // Pour les images locales, on peut générer un srcSet avec Next.js
      const basePath = src.substring(0, src.lastIndexOf('.'));
      return `${basePath}-${width}.${extension} ${width}w`;
    })
    .join(', ');
};

// Fonction pour générer des attributs sizes pour les images responsives
export const generateSizes = (
  mobile: string = '100vw',
  tablet: string = '50vw',
  desktop: string = '33vw'
) => {
  return `(max-width: 640px) ${mobile}, (max-width: 1024px) ${tablet}, ${desktop}`;
};

// Fonction pour générer une URL de placeholder pour les images
export const generatePlaceholder = (width: number = 20, height: number = 20, color: string = '#e6effa') => {
  // Créer un SVG simple comme placeholder
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="100%" height="100%" fill="${color}"/></svg>`;
  
  // Encoder le SVG en base64
  const encoded = Buffer.from(svg).toString('base64');
  
  // Retourner l'URL data
  return `data:image/svg+xml;base64,${encoded}`;
};

// Configuration pour l'optimisation des images dans next/image
export const imageConfig = {
  domains: ['images.unsplash.com', 'via.placeholder.com'],
  formats: ['image/avif', 'image/webp'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  quality: defaultQuality,
};
