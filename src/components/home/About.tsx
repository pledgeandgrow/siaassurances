import React from 'react';

const About = () => {
  return (
    <section className="py-12 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <div className="relative lg:h-80 h-64 rounded-lg shadow-xl overflow-hidden bg-blue-100">
              <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600">
                <div className="text-white text-3xl font-bold p-8 text-center">
                  SIA Assurances
                  <div className="text-xl font-normal mt-2">Votre partenaire en courtage depuis 2010</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              À propos de SIA Assurances
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Cabinet de courtage indépendant, SIA Assurances met à votre service toute une expertise acquise dans le domaine des assurances de biens, de personnes et de responsabilités.
            </p>
            <div className="mt-8">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Expertise</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Notre équipe possède une connaissance approfondie du marché de l&apos;assurance et de ses évolutions.
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Conseil personnalisé</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Nous analysons vos besoins spécifiques pour vous proposer des solutions sur-mesure.
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Disponibilité</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Nous sommes à vos côtés à chaque étape, de la souscription à la gestion des sinistres.
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
