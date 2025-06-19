"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const CGVContent = () => {
  const pathname = usePathname();
  
  // Liste des pages légales pour la navigation
  const legalPages = [
    { title: 'Mentions légales', path: '/mentions-legales' },
    { title: 'CGV', path: '/cgv' },
    { title: 'Politique de confidentialité', path: '/confidentialite' }
  ];
  
  return (
    <main className="min-h-screen bg-white">
      <div className="px-4 sm:px-6 lg:px-8 pb-16 pt-8 transition-all duration-300 max-w-4xl mx-auto">
        <motion.div 
          className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
        {/* En-tête avec dégradé */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-10 sm:px-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -translate-x-20 -translate-y-20"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-blue-400 opacity-10 rounded-full translate-x-5 translate-y-10"></div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Conditions Générales de Vente
          </h1>
          <p className="mt-2 text-blue-100">
            Applicables à compter du 1er janvier 2025
          </p>
        </div>
        
        {/* Navigation horizontale */}
        <div className="px-6 py-4 sm:px-8 bg-blue-50/70 border-b border-blue-100">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-3">
            <Link href="/" className="flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors mb-3 sm:mb-0">
              <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="text-sm">Retour au site</span>
            </Link>
          </div>
          <nav className="flex flex-wrap gap-2 justify-center">
            {legalPages.map((page) => (
              <Link
                key={page.path}
                href={page.path}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  pathname === page.path
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-blue-700 hover:bg-blue-100 hover:text-blue-800'
                }`}
              >
                {page.title}
              </Link>
            ))}
          </nav>
        </div>
        
        {/* Contenu principal */}
        <div className="px-6 py-8 sm:px-8 relative">
          <div className="absolute top-10 right-10 w-64 h-64 bg-blue-50 rounded-full opacity-20 blur-3xl -z-10"></div>
          
          <motion.h1 
            className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 flex items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m-6-8h6M9 20h12M5 8a2 2 0 110-4h14a2 2 0 110 4M5 20a2 2 0 110-4h14a2 2 0 110 4v-6a2 2 0 110-4H5a2 2 0 110 4v6z" />
            </svg>
            Conditions Générales de Vente
          </motion.h1>

          <motion.section
            className="mb-8 p-4 border border-blue-100 rounded-lg bg-blue-50/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}>
            <h3 className="text-md font-medium text-blue-800 mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Sommaire
            </h3>
            <ul className="space-y-1">
              <li>
                <a href="#preambule" className="text-sm text-blue-700 hover:text-blue-900 hover:underline flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Préambule
                </a>
              </li>
              <li>
                <a href="#article1" className="text-sm text-blue-700 hover:text-blue-900 hover:underline flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Article 1 - Objet
                </a>
              </li>
              <li>
                <a href="#article2" className="text-sm text-blue-700 hover:text-blue-900 hover:underline flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2" />
                  </svg>
                  Article 2 - Prix
                </a>
              </li>
              <li>
                <a href="#article3" className="text-sm text-blue-700 hover:text-blue-900 hover:underline flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Article 3 - Disponibilité et délais
                </a>
              </li>
            </ul>
          </motion.section>

          <motion.section 
            className="mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}>
            <h2 id="article1" className="text-xl font-semibold text-blue-900 mb-4 flex items-center bg-blue-50 py-2 px-4 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Article 1 - Définitions
            </h2>
            <p className="text-gray-700 mb-4">
              <strong>Courtier :</strong> désigne la société SIA Assurances, SAS au capital de 100 000 €, immatriculée au RCS de Paris sous le numéro B 123 456 789, dont le siège social est situé 123 Avenue des Assurances, 75001 Paris, immatriculée à l&apos;ORIAS sous le numéro 12345678.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Client :</strong> désigne toute personne physique ou morale qui souscrit à un service proposé par SIA Assurances.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Contrat :</strong> désigne l&apos;ensemble des documents contractuels émis par SIA Assurances ou par les compagnies d&apos;assurances partenaires.
            </p>
          </motion.section>

          <motion.section 
            className="mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}>
            <h2 id="article2" className="text-xl font-semibold text-blue-900 mb-4 flex items-center bg-blue-50 py-2 px-4 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Article 2 - Objet
            </h2>
            <p className="text-gray-700 mb-4">
              Les présentes Conditions Générales de Vente ont pour objet de définir les conditions dans lesquelles SIA Assurances fournit au Client ses services de courtage en assurances et de conseil. Elles s&apos;appliquent à toutes les prestations fournies par SIA Assurances.
            </p>
            <p className="text-gray-700 mb-4">
              Toute demande de prestation adressée à SIA Assurances implique l&apos;acceptation sans réserve des présentes conditions générales de vente, qui prévalent sur tout autre document émis par le Client.
            </p>
          </motion.section>

          <motion.section 
            className="mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}>
            <h2 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
              <span className="inline-block w-1.5 h-6 bg-blue-600 mr-3 rounded-md"></span>
              Article 3 - Services
            </h2>
            <p className="text-gray-700 mb-4">
              SIA Assurances propose les services suivants :
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Conseil et analyse des besoins en assurance</li>
              <li>Recherche et comparaison des offres d&apos;assurance adaptées</li>
              <li>Présentation des garanties et tarifs</li>
              <li>Assistance à la souscription des contrats</li>
              <li>Suivi et gestion des contrats</li>
              <li>Assistance en cas de sinistre</li>
            </ul>
          </motion.section>

          <motion.section 
            className="mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}>
            <h2 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
              <span className="inline-block w-1.5 h-6 bg-blue-600 mr-3 rounded-md"></span>
              Article 4 - Tarifs et paiement
            </h2>
            <p className="text-gray-700 mb-4">
              La rémunération de SIA Assurances est principalement constituée de commissions versées par les compagnies d&apos;assurances. Dans certains cas, des honoraires complémentaires peuvent être facturés au Client, selon un barème communiqué préalablement.
            </p>
            <p className="text-gray-700 mb-4">
              Le paiement des primes d&apos;assurance s&apos;effectue selon les modalités prévues dans le contrat, généralement par prélèvement automatique, virement bancaire ou carte bancaire. Le non-paiement d&apos;une prime peut entraîner la suspension des garanties, conformément au Code des assurances.
            </p>
          </motion.section>

          <motion.section 
            className="mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}>
            <h2 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
              <span className="inline-block w-1.5 h-6 bg-blue-600 mr-3 rounded-md"></span>
              Article 5 - Obligations du Client
            </h2>
            <p className="text-gray-700 mb-4">
              Le Client s&apos;engage à :
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Fournir des informations exactes et complètes nécessaires à l&apos;évaluation du risque</li>
              <li>Déclarer toute modification de sa situation pouvant affecter le contrat</li>
              <li>Payer les primes d&apos;assurance aux échéances convenues</li>
              <li>Déclarer les sinistres dans les délais impartis par le contrat</li>
            </ul>
          </motion.section>

          <motion.section 
            className="mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}>
            <h2 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
              <span className="inline-block w-1.5 h-6 bg-blue-600 mr-3 rounded-md"></span>
              Article 6 - Durée et résiliation
            </h2>
            <p className="text-gray-700 mb-4">
              Le mandat de courtage est conclu pour la durée du contrat d&apos;assurance. Il peut être résilié par l&apos;une ou l&apos;autre des parties par lettre recommandée avec accusé de réception moyennant un préavis de deux mois.
            </p>
            <p className="text-gray-700 mb-4">
              La résiliation du mandat de courtage n&apos;entraîne pas automatiquement la résiliation du contrat d&apos;assurance qui reste soumis à ses propres conditions de résiliation.
            </p>
          </motion.section>

          <motion.section 
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}>
            <h2 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
              <span className="inline-block w-1.5 h-6 bg-blue-600 mr-3 rounded-md"></span>
              Article 7 - Droit applicable et litiges
            </h2>
            <p className="text-gray-700 mb-4">
              Les présentes conditions générales sont soumises au droit français. En cas de litige, les parties s&apos;efforceront de résoudre leur différend à l&apos;amiable. À défaut d&apos;accord amiable, le litige sera porté devant les tribunaux compétents du siège social de SIA Assurances.
            </p>
            <p className="text-gray-700 mb-4">
              Le Client peut également recourir au médiateur de l&apos;assurance dont les coordonnées sont disponibles sur demande ou sur le site <Link href="https://www.mediation-assurance.org" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">www.mediation-assurance.org</Link>.
            </p>
          </motion.section>
        </div>
        </motion.div>
      </div>
    </main>
  );
};

export default CGVContent;
