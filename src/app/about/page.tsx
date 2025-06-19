import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import AboutHistory from '@/components/about/AboutHistory';
import AboutTeam from '@/components/about/AboutTeam';
import AboutValues from '@/components/about/AboutValues';
import AboutCTA from '@/components/about/AboutCTA';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AboutHero />
      <AboutHistory />
      <AboutTeam />
      <AboutValues />
      <AboutCTA />
    </div>
  );
}
