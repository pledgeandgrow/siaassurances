import React from 'react';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';
import { contactMetadata } from '../metadata-utils';
import type { Metadata } from 'next';

// Métadonnées optimisées pour la page contact
export const metadata: Metadata = contactMetadata;

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero de la page */}
      <ContactHero />

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Informations de contact */}
          <div>
            <ContactInfo />
          </div>
          
          {/* Formulaire de contact */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
