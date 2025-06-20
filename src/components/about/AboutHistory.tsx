'use client';

import React from 'react';
import Image from 'next/image';

const AboutHistory = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Éléments décoratifs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-blue-100/30" />
          <div className="absolute top-1/3 -left-20 w-32 h-32 rounded-full bg-blue-50/50" />
        </div>
        
        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center justify-center px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full mb-4 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span className="text-sm font-semibold">Depuis 2010</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-blue-800">Notre </span>
            <span className="text-blue-600">Histoire</span>
          </h2>
          
          <div className="w-24 h-1 mx-auto bg-blue-600 rounded-full mb-6" />
        </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-50 relative">
          {/* Élément décoratif */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-3xl -z-10" />
          
          <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 flex items-center">
            <span className="inline-flex items-center justify-center mr-3 h-8 w-8 rounded-full bg-blue-100 text-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </span>
            Qui suis-je?
          </h3>
          
          <div className="space-y-4 text-gray-700">
            <p className="leading-relaxed">
              <span className="font-semibold text-blue-700">Titulaire d&apos;un Master 2 en Droit des affaires</span>, spécialisé en assurances / banque, j&apos;ai travaillé pendant plus de 10 ans dans les compagnies d&apos;assurance et les grands cabinets de courtage (Paris et Rennes).
            </p>
            
            <p className="leading-relaxed">
              Au cours de cette <span className="italic font-medium">riche expérience</span>, j&apos;ai eu la chance de conseiller et d&apos;accompagner des TPE, PME et de multinationales (fabricants, promoteurs, constructeurs de maisons individuelle, bureau d&apos;étude et architectes et artisans,) ainsi que des particuliers dans le domaine du droit de la construction et de l&apos;assurance construction.
            </p>
            
            <p className="leading-relaxed">
              Aujourd&apos;hui, je souhaite mettre cette expertise à votre service à travers le cabinet SIA Assurances dédié au courtage, audit et conseil dans les risques d&apos;entreprise notamment en assurance construction.
            </p>
          </div>
          
          <div className="mt-8 bg-blue-50 rounded-xl p-4 border-l-4 border-blue-600">
            <div className="flex gap-3 items-center text-blue-800">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                </svg>
              </span>
              <span className="font-medium">L&apos;objectif est d&apos;aider les artisans et les chefs d&apos;entreprise à mieux choisir la couverture de leurs risques</span>
            </div>
          </div>
        </div>
        
        <div className="relative h-96 md:h-[28rem] lg:h-[32rem] overflow-hidden rounded-2xl shadow-xl group">
          {/* Image de Drissa avec effet au survol */}
          <div className="relative w-full h-full overflow-hidden">
            <Image 
              src="/drissa.jpg" 
              alt="Drissa SIA Assurances" 
              className="object-cover w-full h-full rounded-2xl transition-transform duration-700 group-hover:scale-105"
              style={{ objectPosition: '50% 10%' }}
              fill
              priority
            />
            
            {/* Dégradé en bas de l'image */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/30 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-white bg-blue-700/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span>Depuis 2010 à vos côtés</span>
                </div>
                
                <h4 className="text-white text-xl md:text-2xl font-bold mb-2">Protéger votre activité</h4>
                <p className="text-blue-50 text-sm md:text-base max-w-md">Vos moyens de production et vous-même en tant que chef d&apos;entreprise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutHistory;
