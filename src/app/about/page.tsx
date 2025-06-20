import React from 'react';
import AboutHistory from '@/components/about/AboutHistory';
import AboutKeyFigures from '@/components/about/AboutKeyFigures';
import AboutValues from '@/components/about/AboutValues';
import AboutCTA from '@/components/about/AboutCTA';
import { aboutMetadata } from '../metadata-utils';
import type { Metadata } from 'next';

// Métadonnées optimisées pour la page À propos
export const metadata: Metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <AboutHero /> */}
      <AboutHistory />
      <AboutKeyFigures />
      <AboutValues />
      <AboutCTA />
    </div>
  );
}
