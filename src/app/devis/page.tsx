import React from 'react';
import DevisHero from '@/components/devis/DevisHero';
import DevisForm from '@/components/devis/DevisForm';
import { devisMetadata } from '../metadata-utils';
import type { Metadata } from 'next';

// Métadonnées optimisées pour la page de devis
export const metadata: Metadata = devisMetadata;

export default function DevisPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      <DevisHero />
      
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <DevisForm />
      </section>
    </main>
  );
}
