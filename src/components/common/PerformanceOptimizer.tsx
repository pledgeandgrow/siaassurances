'use client';

import { useEffect } from 'react';

/**
 * Composant pour optimiser les performances du site
 * - Préchargement des ressources critiques
 * - Chargement différé des ressources non critiques
 * - Optimisation des polices
 * - Optimisation des images
 */
const PerformanceOptimizer = () => {
  useEffect(() => {
    // Fonction pour précharger les ressources critiques
    const preloadCriticalResources = () => {
      // Préchargement des images critiques
      const criticalImages = [
        '/logo.svg',
        '/og-image.jpg',
        '/drissa.jpg'
      ];
      
      criticalImages.forEach(imagePath => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = imagePath;
        document.head.appendChild(link);
      });
    };

    // Fonction pour charger les ressources non critiques en différé
    const lazyLoadNonCriticalResources = () => {
      // Attendre que la page soit complètement chargée
      if (document.readyState === 'complete') {
        // Ici, vous pouvez ajouter du code pour charger des ressources non critiques
        // Exemple: charger un script d'analyse après le chargement complet
        // const script = document.createElement('script');
        // script.src = 'https://example.com/analytics.js';
        // script.async = true;
        // document.body.appendChild(script);
        
        // Précharger les pages potentiellement visitées ensuite
        const prefetchPages = [
          '/services',
          '/contact',
          '/devis'
        ];
        
        prefetchPages.forEach(pagePath => {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = pagePath;
          document.head.appendChild(link);
        });
      }
    };

    // Optimisation des images
    const optimizeImages = () => {
      // Observer les images pour le chargement différé
      const imgObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imgObserver.unobserve(img);
            }
          }
        });
      }, { rootMargin: '200px' }); // Charger les images 200px avant qu'elles n'entrent dans la vue

      // Appliquer l'observer à toutes les images avec data-src
      document.querySelectorAll('img[data-src]').forEach(img => {
        imgObserver.observe(img);
      });
    };

    // Exécuter les optimisations
    preloadCriticalResources();
    
    // Ajouter un écouteur pour le chargement complet de la page
    if (document.readyState === 'complete') {
      lazyLoadNonCriticalResources();
    } else {
      window.addEventListener('load', lazyLoadNonCriticalResources);
    }
    
    // Optimiser les images après le premier rendu
    setTimeout(optimizeImages, 100);

    // Nettoyage
    return () => {
      window.removeEventListener('load', lazyLoadNonCriticalResources);
    };
  }, []);

  return null; // Ce composant ne rend rien visuellement
};

export default PerformanceOptimizer;
