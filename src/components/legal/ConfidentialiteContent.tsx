"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const ConfidentialiteContent = () => {
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
            Politique de confidentialité
          </h1>
          <p className="mt-2 text-blue-100">
            Protection de vos données personnelles
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Politique de confidentialité
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
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <li>
                <a href="#introduction" className="text-sm text-blue-700 hover:text-blue-900 hover:underline flex items-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Introduction
                </a>
              </li>
              <li>
                <a href="#collecte" className="text-sm text-blue-700 hover:text-blue-900 hover:underline flex items-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                  </svg>
                  Collecte des données
                </a>
              </li>
              <li>
                <a href="#utilisation" className="text-sm text-blue-700 hover:text-blue-900 hover:underline flex items-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  </svg>
                  Utilisation des données
                </a>
              </li>
              <li>
                <a href="#consentement" className="text-sm text-blue-700 hover:text-blue-900 hover:underline flex items-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Consentement
                </a>
              </li>
              <li>
                <a href="#destinataires" className="text-sm text-blue-700 hover:text-blue-900 hover:underline flex items-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Destinataires
                </a>
              </li>
              <li>
                <a href="#duree" className="text-sm text-blue-700 hover:text-blue-900 hover:underline flex items-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Durée de conservation
                </a>
              </li>
              <li>
                <a href="#securite" className="text-sm text-blue-700 hover:text-blue-900 hover:underline flex items-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Sécurité des données
                </a>
              </li>
              <li>
                <a href="#maj-politique" className="text-sm text-blue-700 hover:text-blue-900 hover:underline flex items-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Mise à jour de la politique
                </a>
              </li>
            </ul>
          </motion.section>
          
          <motion.section 
            className="mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}>
            <h2 id="introduction" className="text-xl font-semibold text-blue-900 mb-4 flex items-center bg-blue-50 py-2 px-4 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Introduction
            </h2>
            <p className="text-gray-700 mb-4">
              SIA Assurances accorde une grande importance à la protection de votre vie privée et de vos données à caractère personnel. Cette politique de confidentialité vous informe sur la façon dont nous collectons, utilisons et protégeons vos données personnelles lorsque vous utilisez notre site internet et nos services.
            </p>
            <p className="text-gray-700 mb-4">
              Cette politique s&apos;applique à toutes les données personnelles traitées par SIA Assurances en tant que responsable de traitement. Elle est conforme au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
            </p>
          </motion.section>

          <motion.section
            className="mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}>
            <h2 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
              <span className="inline-block w-1.5 h-6 bg-blue-600 mr-3 rounded-md"></span>
              Données collectées
            </h2>
            <p className="text-gray-700 mb-4">
              Nous collectons différents types d&apos;informations personnelles vous concernant, notamment :
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Informations d&apos;identification : nom, prénom, date de naissance, adresse, email, numéro de téléphone</li>
              <li>Informations professionnelles : profession, employeur, revenus</li>
              <li>Informations financières : coordonnées bancaires, historique des transactions</li>
              <li>Informations relatives aux contrats d&apos;assurance : type de contrat, garanties, sinistres</li>
              <li>Informations de navigation : adresse IP, cookies, pages visitées</li>
            </ul>
          </motion.section>

          <motion.section
            className="mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}>
            <h2 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
              <span className="inline-block w-1.5 h-6 bg-blue-600 mr-3 rounded-md"></span>
              Finalités du traitement
            </h2>
            <p className="text-gray-700 mb-4">
              Vos données personnelles sont collectées et traitées pour les finalités suivantes :
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Souscription, gestion et exécution des contrats d&apos;assurance</li>
              <li>Évaluation et tarification des risques</li>
              <li>Gestion des sinistres et prestations</li>
              <li>Lutte contre la fraude</li>
              <li>Respect des obligations légales et réglementaires</li>
              <li>Communication et prospection commerciale (avec votre consentement)</li>
              <li>Amélioration de nos services et de votre expérience utilisateur</li>
              <li>Études statistiques et analyses de marché</li>
            </ul>
          </motion.section>

          <motion.section 
            className="mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}>
            <h2 id="duree" className="text-xl font-semibold text-blue-900 mb-4 flex items-center bg-blue-50 py-2 px-4 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Durée de conservation
            </h2>
            <p className="text-gray-700 mb-4">
              Nous conservons vos données personnelles pendant la durée nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, augmentée des délais légaux de prescription.
            </p>
            <p className="text-gray-700 mb-4">
              À titre indicatif, les principales durées de conservation sont les suivantes :
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Données relatives aux contrats : durée du contrat + 5 ans après la fin du contrat</li>
              <li>Données relatives aux sinistres : durée du règlement du sinistre + 10 ans</li>
              <li>Données de prospection commerciale : 3 ans à compter du dernier contact</li>
              <li>Cookies : 13 mois maximum</li>
            </ul>
          </motion.section>

          <motion.section 
            className="mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}>
            <h2 id="consentement" className="text-xl font-semibold text-blue-900 mb-4 flex items-center bg-blue-50 py-2 px-4 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Consentement
            </h2>
            <p className="text-gray-700 mb-4">
              Conformément à la réglementation applicable en matière de protection des données personnelles, vous disposez des droits suivants :
            </p>
            <div className="bg-white p-4 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 mb-4">
              <ul className="list-none text-gray-700 space-y-3">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                  <span><strong className="text-blue-800">Droit d&apos;accès :</strong> obtenir la confirmation que des données vous concernant sont traitées et en obtenir une copie</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <span><strong className="text-blue-800">Droit de rectification :</strong> faire corriger des données inexactes ou incomplètes</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  <span><strong className="text-blue-800">Droit à l&apos;effacement :</strong> faire supprimer vos données dans certains cas</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span><strong className="text-blue-800">Droit à la limitation :</strong> faire suspendre temporairement l&apos;utilisation de vos données</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span><strong className="text-blue-800">Droit à la portabilité :</strong> récupérer vos données dans un format structuré</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                  <span><strong className="text-blue-800">Droit d&apos;opposition :</strong> vous opposer au traitement de vos données, notamment à des fins de prospection commerciale</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m-6-8h6M9 20h6M5 8a2 2 0 110-4h14a2 2 0 110 4M5 20a2 2 0 110-4h14a2 2 0 110 4v-6a2 2 0 110-4H5a2 2 0 110 4v6z" />
                  </svg>
                  <span><strong className="text-blue-800">Droit de définir des directives :</strong> relatives au sort de vos données après votre décès</span>
                </li>
              </ul>
            </div>
            <p className="text-gray-700 mb-4">
              Pour exercer ces droits, vous pouvez nous contacter par email à dpo@siaassurances.fr ou par courrier à l&apos;adresse suivante : SIA Assurances - DPO, 123 Avenue des Assurances, 75001 Paris. Une copie de votre pièce d&apos;identité pourra vous être demandée.
            </p>
          </motion.section>

          <motion.section 
            className="mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}>
            <h2 id="securite" className="text-xl font-semibold text-blue-900 mb-4 flex items-center bg-blue-50 py-2 px-4 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Sécurité des données
            </h2>
            <p className="text-gray-700 mb-4">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre la destruction accidentelle ou illicite, la perte accidentelle, l&apos;altération, la diffusion ou l&apos;accès non autorisés.
            </p>
            <p className="text-gray-700 mb-4">
              Ces mesures comprennent notamment :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white p-4 border border-blue-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center">
                <div className="bg-blue-50 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <span className="text-gray-700">Chiffrement des données sensibles</span>
              </div>
              <div className="bg-white p-4 border border-blue-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center">
                <div className="bg-blue-50 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                  </svg>
                </div>
                <span className="text-gray-700">Procédures de sauvegarde régulières</span>
              </div>
              <div className="bg-white p-4 border border-blue-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center">
                <div className="bg-blue-50 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-gray-700">Contrôles d&apos;accès stricts</span>
              </div>
              <div className="bg-white p-4 border border-blue-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center">
                <div className="bg-blue-50 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <span className="text-gray-700">Sensibilisation et formation du personnel</span>
              </div>
            </div>
          </motion.section>

          <motion.section 
            className="mb-10">
            <h2 id="destinataires" className="text-xl font-semibold text-blue-900 mb-4 flex items-center bg-blue-50 py-2 px-4 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Destinataires des données
            </h2>
            <p className="text-gray-700 mb-4">
              Dans le cadre des finalités décrites ci-dessus, vos données personnelles peuvent être transmises aux destinataires suivants :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <div className="bg-white p-4 border border-blue-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-2">
                  <div className="bg-blue-50 p-2 rounded-full mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <span className="font-medium text-blue-800">Compagnies d&apos;assurances</span>
                </div>
                <p className="text-gray-700 text-sm">Nos partenaires qui assurent les risques couverts par votre contrat</p>
              </div>
              <div className="bg-white p-4 border border-blue-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-2">
                  <div className="bg-blue-50 p-2 rounded-full mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="font-medium text-blue-800">Prestataires de services</span>
                </div>
                <p className="text-gray-700 text-sm">Impliqués dans la gestion et le suivi de votre contrat</p>
              </div>
              <div className="bg-white p-4 border border-blue-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-2">
                  <div className="bg-blue-50 p-2 rounded-full mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <span className="font-medium text-blue-800">Autorités administratives</span>
                </div>
                <p className="text-gray-700 text-sm">Dans le cadre de nos obligations légales et réglementaires</p>
              </div>
              <div className="bg-white p-4 border border-blue-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-2">
                  <div className="bg-blue-50 p-2 rounded-full mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="font-medium text-blue-800">Réassureurs</span>
                </div>
                <p className="text-gray-700 text-sm">Qui contribuent à la couverture des risques assurés</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              Nous veillons à ce que tous ces tiers présentent des garanties suffisantes pour assurer la protection de vos données personnelles, conformément à la réglementation en vigueur.
            </p>
          </motion.section>

          <motion.section 
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}>
            <h2 id="maj-politique" className="text-xl font-semibold text-blue-900 mb-4 flex items-center bg-blue-50 py-2 px-4 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Mise à jour de la politique
            </h2>
            <div className="bg-white p-4 border border-gray-100 rounded-lg shadow-sm mb-4">
              <p className="text-gray-700 mb-4">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. La version en vigueur est celle publiée sur notre site internet. Nous vous encourageons à consulter régulièrement cette page pour rester informé des éventuelles modifications.
              </p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-blue-700 font-medium">
                Dernière mise à jour : 1er janvier 2025
              </p>
            </div>
          </motion.section>

        </div>
        </motion.div>
      </div>
    </main>
  );
};

export default ConfidentialiteContent;
