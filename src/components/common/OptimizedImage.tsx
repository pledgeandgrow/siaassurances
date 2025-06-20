'use client';

import React from 'react';
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoadingComplete'> {
  fallbackSrc?: string;
  placeholderColor?: string;
  usePlaceholder?: boolean;
  customSizes?: string;
  customQuality?: number;
}

/**
 * Composant d'image optimisé avec chargement différé et gestion d'erreur
 * Version simplifiée compatible avec Turbopack
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  fallbackSrc = '/images/placeholder.svg',
  className = '',
  priority = false,
  placeholderColor = '#e6effa',
  usePlaceholder = true,
  customSizes,
  customQuality,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Classes pour l'effet de transition au chargement
  const transitionClass = isLoading 
    ? 'opacity-60 blur-sm scale-105' 
    : 'opacity-100 blur-0 scale-100';

  // Déterminer les tailles responsives à utiliser
  const sizes = customSizes || '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';

  // Qualité d'image par défaut
  const quality = customQuality || 80;

  return (
    <div className="relative overflow-hidden">
      <Image
        src={error ? fallbackSrc : src}
        alt={alt}
        className={`transition-all duration-500 ${transitionClass} ${className}`}
        loading={priority ? 'eager' : 'lazy'}
        quality={quality}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => setError(true)}
        sizes={sizes}
        placeholder={usePlaceholder ? 'blur' : 'empty'}
        blurDataURL={usePlaceholder ? placeholderColor : undefined}
        {...props}
      />
      
      {/* Effet de pulsation pendant le chargement */}
      {isLoading && (
        <div className="absolute inset-0 bg-blue-100/30 animate-pulse" />
      )}
    </div>
  );
};

export default OptimizedImage;
