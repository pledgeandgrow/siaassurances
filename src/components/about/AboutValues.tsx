'use client';

import React from 'react';

const AboutValues = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50/50 to-white relative overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/30 rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-100/20 rounded-tr-full" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-200/10 rounded-full" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4 px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            Notre philosophie
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-blue-800">Nos </span>
            <span className="text-blue-600">Valeurs</span>
          </h2>
          
          <div className="w-20 h-1 mx-auto bg-blue-600 rounded-full mb-6" />
          
          <p className="max-w-2xl mx-auto text-gray-700 text-lg">
            Des engagements qui guident notre accompagnement pour mieux vous servir au quotidien
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {[
            {
              id: 1,
              title: "Expertise",
              color: "blue",
              description: "Notre expertise nous permet de vous proposer des solutions adaptées à vos besoins et à votre budget. Nous analysons vos risques et vous proposons des solutions sur-mesure pour vous protéger efficacement.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              )
            },
            {
              id: 2,
              title: "Proximité",
              color: "indigo",
              description: "Nous sommes à vos côtés pour vous accompagner dans la gestion de vos contrats d'assurance. Nous vous aidons à comprendre vos garanties et à optimiser votre protection.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              )
            },
            {
              id: 3,
              title: "Indépendance",
              color: "blue",
              description: "Courtier indépendant, SIA Assurances s'engage à solliciter les meilleurs assureurs pour la couverture et de vos risques. Notre rémunération est constituée de frais de gestion et de commissions versées par les compagnies d'assurance.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              )
            }
          ].map((value) => (
            <div key={value.id} className="group">
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-full border border-blue-50 overflow-hidden">
                {/* En-tête avec icône et titre */}
                <div className={`p-6 border-b border-gray-100 flex items-center ${value.color === 'blue' ? 'bg-blue-50/50' : 'bg-indigo-50/50'}`}>
                  <div className={`h-12 w-12 rounded-lg ${value.color === 'blue' ? 'bg-blue-100 text-blue-700' : 'bg-indigo-100 text-indigo-700'} flex items-center justify-center mr-4`}>
                    <div className="h-6 w-6">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className={`text-xl font-bold ${value.color === 'blue' ? 'text-blue-800' : 'text-indigo-800'}`}>
                    {value.title}
                  </h3>
                </div>
                
                {/* Corps de la carte avec description */}
                <div className="p-6">
                  <div className={`w-12 h-1 ${value.color === 'blue' ? 'bg-blue-600' : 'bg-indigo-600'} rounded-full mb-4`} />
                  
                  <p className="text-gray-700">
                    {value.description}
                  </p>
                  
                  {/* Badge décoratif */}
                  <div className="mt-6 flex justify-end">
                    <div className={`inline-flex items-center text-xs font-medium ${value.color === 'blue' ? 'text-blue-700 bg-blue-50' : 'text-indigo-700 bg-indigo-50'} px-2.5 py-1 rounded-full`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      Engagement SIA
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
