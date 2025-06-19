'use client';

import React from 'react';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesOverview from '@/components/services/ServicesOverview';
import ServicesDetail from '@/components/services/ServicesDetail';
import ServicesFAQ from '@/components/services/ServicesFAQ';
import InsuranceCalculator from '@/components/services/InsuranceCalculator';
import ServicesCTA from '@/components/services/ServicesCTA';

export default function ServicesPage() {
  // Pas de code de défilement automatique
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <ServicesHero /> */}
      <ServicesOverview />
      <ServicesDetail />
      <ServicesFAQ />
      <InsuranceCalculator />
      <ServicesCTA />
    </div>
  );
}
