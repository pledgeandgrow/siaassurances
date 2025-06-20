'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaEuroSign, FaUsers, FaHandshake } from 'react-icons/fa';

const AboutKeyFigures = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 overflow-hidden">
      {/* Éléments décoratifs subtils */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-blue-100 opacity-50" />
        <div className="absolute top-1/2 -right-20 w-60 h-60 rounded-full bg-blue-100 opacity-30" />
        <div className="absolute bottom-0 left-1/4 w-40 h-40 rounded-full bg-blue-100 opacity-20" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full shadow-sm">
            Nos chiffres clés
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-blue-900">SIA Assurances</span>
            <span className="text-blue-700"> en chiffres</span>
          </h2>
          
          <div className="h-1 w-20 mx-auto bg-blue-600 rounded-full mb-6" />
          
          <p className="max-w-2xl mx-auto text-gray-700 text-lg">
            Des résultats concrets pour nos clients et une expertise reconnue depuis plus de 10 ans
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {/* Chiffre clé 1 - Années d'expérience */}
          <div className="relative group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-blue-50">
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-600" />
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-3">
                  <FaCalendarAlt className="text-blue-700 text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-blue-900">Années d&apos;expérience</h3>
              </div>
              
              <div className="mt-2 mb-4">
                <div className="text-5xl font-bold text-blue-800">
                  11
                </div>
                <div className="text-sm text-blue-600 font-medium mt-1">ans d&apos;expertise</div>
              </div>
              
              <p className="text-gray-600 text-sm mt-auto">
                Plus d&apos;une décennie d&apos;expertise dans le domaine des assurances professionnelles
              </p>
            </div>
          </div>
          
          {/* Chiffre clé 2 - Économies réalisées */}
          <div className="relative group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-blue-50">
            <div className="absolute top-0 left-0 w-full h-1 bg-green-500" />
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-lg mr-3">
                  <FaEuroSign className="text-green-700 text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-blue-900">Économies réalisées</h3>
              </div>
              
              <div className="mt-2 mb-4">
                <div className="text-5xl font-bold text-green-600">
                  70k€
                </div>
                <div className="text-sm text-green-600 font-medium mt-1">d&apos;économies</div>
              </div>
              
              <p className="text-gray-600 text-sm mt-auto">
                Grâce au remplacement de l&apos;assurance emprunteur pour nos clients
              </p>
            </div>
          </div>
          
          {/* Chiffre clé 3 - Clients satisfaits */}
          <div className="relative group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-blue-50">
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-400" />
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center mb-4">
                <div className="bg-blue-50 p-3 rounded-lg mr-3">
                  <FaUsers className="text-blue-600 text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-blue-900">Clients satisfaits</h3>
              </div>
              
              <div className="mt-2 mb-4">
                <div className="text-5xl font-bold text-blue-600">
                  98%
                </div>
                <div className="text-sm text-blue-500 font-medium mt-1">de satisfaction</div>
              </div>
              
              <p className="text-gray-600 text-sm mt-auto">
                Un taux de satisfaction client qui témoigne de notre engagement pour un service de qualité
              </p>
            </div>
          </div>
          
          {/* Chiffre clé 4 - Partenaires */}
          <div className="relative group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-blue-50">
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-800" />
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-3">
                  <FaHandshake className="text-blue-800 text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-blue-900">Partenaires assureurs</h3>
              </div>
              
              <div className="mt-2 mb-4">
                <div className="text-5xl font-bold text-blue-800">
                  15+
                </div>
                <div className="text-sm text-blue-700 font-medium mt-1">compagnies partenaires</div>
              </div>
              
              <p className="text-gray-600 text-sm mt-auto">
                Des partenariats solides avec les meilleures compagnies d&apos;assurance pour vous offrir un large choix
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutKeyFigures;
