'use client';

import dynamic from 'next/dynamic';

// Import dynamique du composant PerformanceOptimizer pour éviter de bloquer le rendu initial
const PerformanceOptimizer = dynamic(
  () => import("./PerformanceOptimizer"),
  { ssr: false } // Désactiver le rendu côté serveur pour ce composant
);

export default function ClientPerformanceWrapper() {
  return <PerformanceOptimizer />;
}
