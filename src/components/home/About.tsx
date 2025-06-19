'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Animation sans effet d'apparition
  const containerVariants = {
    visible: {
      opacity: 1
    }
  };
  
  const itemVariants = {
    visible: { 
      opacity: 1, 
      y: 0
    }
  };
  
  // Effet de parallax pour l'image/logo
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden" id="about" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Éléments décoratifs */}
        <div className="absolute left-0 top-1/4 w-64 h-64 bg-blue-50 rounded-full opacity-60 blur-3xl -z-10"></div>
        <div className="absolute right-10 bottom-1/4 w-72 h-72 bg-indigo-50 rounded-full opacity-50 blur-3xl -z-10"></div>
        
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center relative z-10">
          {/* Colonne de gauche - image/logo avec effet parallax */}
          <motion.div 
            className="relative"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ y }}
          >
            <div className="relative lg:h-96 h-72 rounded-2xl shadow-2xl overflow-hidden">
              <div className="h-full w-full relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark opacity-95"></div>
                {/* Pattern décoratif */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                  </svg>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <motion.div 
                      className="w-32 h-32 flex items-center justify-center mx-auto mb-6"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring" as const, stiffness: 400, damping: 10 }}
                    >
                      <Image 
                        src="/logo.png" 
                        alt="SIA Assurances" 
                        width={128}
                        height={64}
                        className="w-32 h-auto max-w-full"
                      />
                    </motion.div>
                    <motion.h3 
                      className="text-white text-3xl font-bold"
                      initial={{ opacity: 1, y: 0 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      SIA Assurances
                    </motion.h3>
                    <motion.div 
                      className="h-0.5 w-12 bg-white mx-auto my-3"
                      initial={{ width: 48 }}
                      animate={{ width: 48 }}
                    ></motion.div>
                    <motion.p 
                      className="text-blue-50 text-lg"
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                    >
                      Cabinet de courtage, audit et conseil
                    </motion.p>
                  </div>
                </div>
                
                {/* Effet de brillance */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0"
                  animate={{ 
                    opacity: [0, 0.1, 0],
                    left: ["-100%", "100%", "100%"]
                  }}
                  transition={{ 
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 5
                  }}
                ></motion.div>
              </div>
            </div>
          </motion.div>
          {/* Colonne de droite - texte et avantages */}
          <motion.div 
            className="mt-12 lg:mt-0"
            variants={containerVariants}
            initial="visible"
            animate="visible"
          >
            <motion.div className="mb-2" variants={itemVariants}>
              <span className="inline-block px-4 py-1.5 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                Qui sommes-nous
              </span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-2"
              variants={itemVariants}
            >
              À propos de SIA Assurances
            </motion.h2>
            
            <motion.div 
              className="w-16 h-1 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full mb-6"
              variants={itemVariants}
            ></motion.div>
            
            <motion.p 
              className="mt-3 text-lg text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              Titulaire d&apos;un Master 2 en Droit des affaires, spécialisé en assurances / banque, j&apos;ai travaillé pendant plus de 10 ans
              dans les compagnies d&apos;assurance et les grands cabinets de courtage (Paris et Rennes).
            </motion.p>
            
            <motion.p 
              className="mt-3 text-lg text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              Aujourd&apos;hui, je souhaite mettre cette expertise à votre service à travers le cabinet SIA Assurances dédié au
              courtage, audit et conseil dans les risques d&apos;entreprise notamment en assurance construction.
            </motion.p>
            
            <motion.div className="mt-10 space-y-8" variants={containerVariants}>
              <motion.div 
                className="flex items-start p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)" }}
              >
                <div className="flex-shrink-0">
                  <motion.div 
                    className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-blue-700 to-blue-600 text-white shadow-md"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Protection de l&apos;activité</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Décennale, responsabilité civile professionnelle et générale pour sécuriser votre entreprise.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)" }}
              >
                <div className="flex-shrink-0">
                  <motion.div 
                    className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-blue-700 to-blue-600 text-white shadow-md"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </motion.div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Protection des moyens</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Protection complète pour vos matériels, véhicules et locaux professionnels.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)" }}
              >
                <div className="flex-shrink-0">
                  <motion.div 
                    className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-blue-700 to-blue-600 text-white shadow-md"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </motion.div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Protection personnelle</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Solutions pour protéger l&apos;artisan et le chef d&apos;entreprise (santé, prévoyance et homme-clé).
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
