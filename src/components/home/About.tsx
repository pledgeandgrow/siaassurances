'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section className="py-16 md:py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Éléments décoratifs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-blue-100/30" />
          <div className="absolute top-1/3 -left-20 w-32 h-32 rounded-full bg-blue-50/50" />
        </div>
        
        <div className="text-center mb-12 relative z-10">
          <div className="inline-flex items-center justify-center px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full mb-4 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
            <span className="text-sm font-semibold">À propos de nous</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-blue-800">SIA </span>
            <span className="text-blue-600">Assurances</span>
          </h2>
          
          <div className="w-24 h-1 mx-auto bg-blue-600 rounded-full mb-6" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
          {/* Colonne de gauche - image avec style cohérent */}
          <div className="relative h-96 md:h-[28rem] lg:h-[32rem] overflow-hidden rounded-2xl shadow-xl group">
            {/* Image avec effet au survol */}
            <div className="relative w-full h-full overflow-hidden">
              <Image 
                src="/drissa.jpg" 
                alt="SIA Assurances" 
                style={{ objectPosition: '50% 10%' }}
                className="object-cover w-full h-full rounded-2xl transition-transform duration-700 group-hover:scale-105"
                fill
                priority
              />
              
              {/* Dégradé en bas de l'image */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/30 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-white bg-blue-700/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                    </svg>
                    <span>Cabinet de courtage</span>
                  </div>
                  
                  <motion.div 
                    className="flex items-center mb-2"
                    whileHover={{ x: 5 }}
                  >
                    <Image 
                      src="/logo.png" 
                      alt="SIA Assurances" 
                      width={128}
                      height={64}
                      className="h-10 w-auto"
                    />
                  </motion.div>
                  <p className="text-blue-50 text-sm md:text-base max-w-md">Votre partenaire de confiance pour tous vos besoins en assurance professionnelle</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Colonne de droite - texte et avantages */}
          <div className="mt-12 lg:mt-0">
            <div className="mb-2">
              <span className="inline-block px-4 py-1.5 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                Qui sommes-nous
              </span>
            </div>
            
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-2">
              À propos de SIA Assurances
            </h2>
            
            <div className="w-16 h-1 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full mb-6"></div>
            
            <p className="mt-3 text-lg text-gray-600 leading-relaxed">
              Titulaire d&apos;un Master 2 en Droit des affaires, spécialisé en assurances / banque, j&apos;ai travaillé pendant plus de 10 ans
              dans les compagnies d&apos;assurance et les grands cabinets de courtage (Paris et Rennes).
            </p>
            
            <p className="mt-3 text-lg text-gray-600 leading-relaxed">
              Aujourd&apos;hui, je souhaite mettre cette expertise à votre service à travers le cabinet SIA Assurances dédié au
              courtage, audit et conseil dans les risques d&apos;entreprise notamment en assurance construction.
            </p>
            
            <div className="mt-10 space-y-8">
              <div className="flex items-start p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-blue-700 to-blue-600 text-white shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Protection de l&apos;activité</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Décennale, responsabilité civile professionnelle et générale pour sécuriser votre entreprise.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-blue-700 to-blue-600 text-white shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Protection des moyens</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Protection complète pour vos matériels, véhicules et locaux professionnels.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-blue-700 to-blue-600 text-white shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Protection personnelle</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Solutions pour protéger l&apos;artisan et le chef d&apos;entreprise (santé, prévoyance et homme-clé).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
