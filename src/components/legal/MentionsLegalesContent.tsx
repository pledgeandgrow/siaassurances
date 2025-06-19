"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const MentionsLegalesContent = () => {
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
            Mentions légales
          </h1>
          <p className="mt-2 text-blue-100">
            Informations légales relatives à notre site internet
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
                <a href="#" className="text-sm text-blue-700 hover:text-blue-900 hover:underline flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" />
                  </svg>
                  Éditeur du site
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-blue-700 hover:text-blue-900 hover:underline flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2" />
                  </svg>
                  Hébergement
                </a>
              </li>
              <li>
                <a href="#data-protection" className="text-sm text-blue-700 hover:text-blue-900 hover:underline flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Protection des données
                </a>
              </li>
              <li>
                <a href="#cookies" className="text-sm text-blue-700 hover:text-blue-900 hover:underline flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m-6-8h6M9 20h6M5 8a2 2 0 110-4h14a2 2 0 110 4M5 20a2 2 0 110-4h14a2 2 0 110 4v-6a2 2 0 110-4H5a2 2 0 110 4v6z" />
                  </svg>
                  Cookies
                </a>
              </li>
            </ul>
          </motion.section>
          <motion.section 
            className="mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}>
            <h2 className="text-xl font-semibold text-blue-900 mb-4 flex items-center bg-blue-50 py-2 px-4 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Éditeur du site
            </h2>
            <p className="text-gray-700 mb-4">
              SIA Assurances, SAS au capital de 100 000 €<br/>
              Immatriculée au RCS de Paris sous le numéro B 123 456 789<br/>
              Siège social : 123 Avenue des Assurances, 75001 Paris<br/>
              Numéro de TVA intracommunautaire : FR 12 345 678 901<br/>
              Numéro ORIAS : 12 345 678 (www.orias.fr)<br/>
            </p>
            <p className="text-gray-700">
              Directeur de la publication : Jean Dupont<br/>
              Email : contact@siaassurances.fr<br/>
              Téléphone : 01 23 45 67 89
            </p>
          </motion.section>

          <motion.section 
            className="mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}>
            <h2 className="text-xl font-semibold text-blue-900 mb-4 flex items-center bg-blue-50 py-2 px-4 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
              </svg>
              Hébergement
            </h2>
            <div className="bg-white p-4 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <p className="text-gray-700 mb-4">
                <strong className="text-blue-800">OVH SAS</strong><br />
                Société par actions simplifiée au capital de 10 069 020 €<br />
                RCS Lille Métropole 424 761 419 00045<br />
                Siège social : 2 rue Kellermann, 59100 Roubaix - France<br />
                <Link href="https://www.ovhcloud.com" className="text-blue-600 hover:text-blue-800 underline flex items-center mt-1 w-fit" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  www.ovhcloud.com
                </Link>
              </p>
            </div>
          </motion.section>

          <motion.section 
            className="mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}>
            <h2 className="text-xl font-semibold text-blue-900 mb-4 flex items-center bg-blue-50 py-2 px-4 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
              </svg>
              Propriété intellectuelle
            </h2>
            <p className="text-gray-700 mb-4">
              L&apos;ensemble de ce site est soumis à la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
            <p className="text-gray-700 mb-4">
              La reproduction de tout ou partie de ce site sur quelque support que ce soit est formellement interdite sauf autorisation expresse de SIA Assurances.
            </p>
          </motion.section>

          <motion.section 
            className="mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}>
            <h2 id="data-protection" className="text-xl font-semibold text-blue-900 mb-4 flex items-center bg-blue-50 py-2 px-4 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Protection des données personnelles
            </h2>
            <p className="text-gray-700 mb-4">
              Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de limitation, d&apos;opposition et de portabilité des données vous concernant.
            </p>
            <p className="text-gray-700 mb-4">
              Pour en savoir plus sur la gestion de vos données et vos droits, consultez notre <Link href="/confidentialite" className="text-blue-600 hover:text-blue-800 underline">politique de confidentialité</Link>.
            </p>
          </motion.section>

          <motion.section 
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}>
            <h2 id="cookies" className="text-xl font-semibold text-blue-900 mb-4 flex items-center bg-blue-50 py-2 px-4 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m-6-8h6M9 20h6M5 8a2 2 0 110-4h14a2 2 0 110 4M5 20a2 2 0 110-4h14a2 2 0 110 4v-6a2 2 0 110-4H5a2 2 0 110 4v6z" />
              </svg>
              Cookies
            </h2>
            <p className="text-gray-700 mb-4">
              Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez configurer votre navigateur pour refuser les cookies ou être informé de leur utilisation.
            </p>
          </motion.section>
        </div>
        </motion.div>
      </div>
    </main>
  );
};

export default MentionsLegalesContent;
