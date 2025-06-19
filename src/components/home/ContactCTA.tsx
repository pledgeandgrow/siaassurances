'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Composants de particules supprimés pour améliorer les performances

const ContactCTA = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10
      }
    }
  };
  
  // Effet de pulsation pour attirer l'attention
  const pulseAnimation = {
    scale: [1, 1.02],
    transition: {
      duration: 2,
      ease: "easeInOut" as const,
      repeat: Infinity,
      repeatType: "reverse" as const,
      type: "tween" as const
    }
  };
  
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-2">
      {/* Motif de points en arrière-plan */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="1" fill="#fff" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      
      {/* Éléments décoratifs animés */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 w-60 h-60 bg-gradient-to-r from-blue-100 to-white rounded-full blur-3xl opacity-20"
          animate={{
            x: [-10, 20],
            y: [-10, 15],
            opacity: [0.1, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "easeInOut" as const,
            type: "tween" as const
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute bottom-0 right-20 w-80 h-80 bg-gradient-to-tr from-blue-300 to-white rounded-full blur-[100px] opacity-15"
          animate={{
            x: [20, -30],
            y: [5, -10],
            scale: [1, 1.1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "easeInOut" as const,
            type: "tween" as const
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.2],
            opacity: [0.05, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "easeInOut" as const,
            type: "tween" as const
          }}
        ></motion.div>
      </div>
      
      {/* Effet de vagues en bas de la section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 opacity-30 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full absolute bottom-0">
            <motion.path 
              fill="#ffffff" 
              fillOpacity="0.2"
              d="M0,32L48,48C96,64,192,96,288,101.3C384,107,480,85,576,90.7C672,96,768,128,864,138.7C960,149,1056,139,1152,122.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              animate={{
                d: [
                  "M0,32L48,48C96,64,192,96,288,101.3C384,107,480,85,576,90.7C672,96,768,128,864,138.7C960,149,1056,139,1152,122.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,64L48,69.3C96,75,192,85,288,122.7C384,160,480,224,576,218.7C672,213,768,139,864,117.3C960,96,1056,128,1152,122.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,32L48,48C96,64,192,96,288,101.3C384,107,480,85,576,90.7C672,96,768,128,864,138.7C960,149,1056,139,1152,122.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut" as const
              }}
            />
          </svg>
        </motion.div>
      </div>
      
      {/* Étoiles/particules scintillantes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* StarryParticles supprimé pour améliorer les performances */}
      </div>
      
      <motion.div 
        className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="lg:flex lg:items-center lg:justify-between">
          <motion.div className="lg:max-w-xl" variants={itemVariants}>
            <motion.span 
              className="inline-block px-5 py-2 mb-6 text-sm font-medium text-blue-100 bg-blue-700 bg-opacity-40 backdrop-blur-sm rounded-full border border-blue-500/30 shadow-lg shadow-blue-900/20"
              variants={itemVariants}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 58, 138, 0.5)" }}
              transition={{ type: "spring" as const, stiffness: 300, damping: 10 }}
            >
              Courtage, audit, conseil
            </motion.span>
            
            <motion.div
              className="relative"
            >
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white"
                variants={itemVariants}
              >
                <motion.span 
                  className="block relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  L'expérience à
                </motion.span>
                <motion.span 
                  className="block relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-100">service</span>
                </motion.span>
                <motion.span 
                  className="block text-blue-200 mt-3 text-2xl md:text-3xl lg:text-4xl relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  Des solutions adaptées à vos besoins
                </motion.span>
                
                {/* Effet de surlignage dynamique */}
                <motion.div 
                  className="absolute -bottom-2 left-0 h-3 bg-blue-500/30 blur-sm rounded-full"
                  style={{ width: '30%' }}
                  animate={{ 
                    width: ['30%', '80%', '30%'],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 8, 
                    ease: "easeInOut" as const, 
                    repeat: Infinity 
                  }}
                />
              </motion.h2>
            </motion.div>
            
            <motion.div 
              className="w-28 h-1.5 bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 rounded-full my-8 shadow-lg shadow-blue-500/20"
              variants={itemVariants}
              whileHover={{ 
                width: '40%', 
                boxShadow: '0 0 20px 0 rgba(96, 165, 250, 0.5)'  
              }}
              transition={{ 
                type: "spring" as const, 
                stiffness: 400, 
                damping: 10 
              }}
            />
            
            <motion.p 
              className="mt-4 text-xl leading-relaxed text-blue-100/90 max-w-xl font-light"
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              L'expérience acquise auprès des compagnies et les courtiers de renom nous permet 
              de vous proposer les meilleures solutions en fonction de vos besoins spécifiques.
            </motion.p>
            
            {/* Éléments décoratifs supplémentaires */}
            <motion.div 
              className="absolute top-10 right-10 w-20 h-20 border border-blue-400/30 rounded-full"
              style={{ opacity: 0.2 }}
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 0.8] }}
              transition={{ 
                duration: 4, 
                ease: "easeOut" as const, 
                delay: 1.2,
                repeat: Infinity,
                repeatDelay: 5
              }}
            />
          </motion.div>
          
          <motion.div 
            className="mt-10 lg:mt-0 lg:flex-shrink-0 lg:flex lg:flex-col lg:items-end"
            variants={itemVariants}
          >
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
              variants={itemVariants}
            >
              {/* Premier bouton avec effet de glow */}
              <motion.div 
                className="relative group"
                whileHover={{ y: -5 }}
                whileTap={{ y: 0 }}
                transition={{ type: "spring" as const, stiffness: 400, damping: 10 }}
              >
                {/* Effet de glow autour du bouton uniquement au survol */}
                <div
                  className="absolute -inset-1 rounded-xl bg-gradient-to-r from-white to-blue-100 opacity-0 group-hover:opacity-50 blur-sm transition-all duration-300"
                />
                
                <Link 
                  href="/devis" 
                  className="relative inline-flex items-center justify-center px-6 py-4 bg-white rounded-lg text-blue-800 font-medium text-base border border-blue-100/50 backdrop-blur-sm shadow-lg z-10 overflow-hidden group-hover:text-blue-900 group-hover:bg-blue-50"
                >
                  {/* Effet de particules animées dans le bouton */}
                  <div className="absolute inset-0 overflow-hidden">
                    {typeof window !== 'undefined' && [...Array(8)].map((_, i) => {
                      // Positions fixes pour éviter les erreurs d'hydratation
                      const positions = [
                        { top: "29.97%", left: "20.36%" },
                        { top: "17.78%", left: "31.42%" },
                        { top: "41.14%", left: "9.76%" },
                        { top: "63.02%", left: "76.28%" },
                        { top: "49.45%", left: "54.42%" },
                        { top: "41.36%", left: "72.55%" },
                        { top: "88.16%", left: "90.22%" },
                        { top: "13.58%", left: "80.19%" },
                      ];
                      
                      return (
                        <motion.div 
                          key={i}
                          className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
                          style={{
                            top: positions[i].top,
                            left: positions[i].left,
                          }}
                          animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 0.4, 0],
                            x: [0, i % 2 === 0 ? 10 : -10], // Déterministe
                            y: [0, i % 3 === 0 ? 10 : -10], // Déterministe
                          }}
                          transition={{
                            duration: 3 + (i % 4), // Déterministe
                            repeat: Infinity,
                            repeatDelay: i * 0.1, // Déterministe
                            ease: "easeInOut" as const,
                          }}
                        />
                      );
                    })}
                  </div>
                  
                  {/* Contenu du bouton */}
                  <motion.span
                    className="flex items-center relative z-10"
                  >
                    <motion.svg 
                      className="w-5 h-5 mr-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ 
                        duration: 5, 
                        ease: "easeInOut" as const,
                        repeat: Infinity,
                        repeatType: "mirror" as const
                      }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </motion.svg>
                    <motion.span
                      initial={{ opacity: 1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      Obtenir un devis gratuit
                    </motion.span>
                  </motion.span>
                </Link>
              </motion.div>
              
              {/* Second bouton avec effet 3D subtil */}
              <motion.div 
                className="relative group"
                whileHover={{ y: -5 }}
                whileTap={{ y: 0 }}
                transition={{ type: "spring" as const, stiffness: 400, damping: 10 }}
              >
                {/* Effet de glow/ombre uniquement au survol */}
                <div 
                  className="absolute -inset-1 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-40 blur-sm transition-all duration-300"
                />
                
                <Link 
                  href="/contact" 
                  className="relative inline-flex items-center justify-center px-6 py-4 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-lg text-white font-medium text-base border border-blue-500/50 shadow-lg z-10 overflow-hidden group-hover:shadow-blue-500/30"
                >
                  {/* Effet de particules supprimé pour améliorer les performances */}
                  
                  {/* Contenu du bouton */}
                  <motion.span
                    className="flex items-center relative z-10"
                  >
                    <motion.svg 
                      className="w-5 h-5 mr-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ 
                        duration: 3, 
                        ease: "easeInOut" as const,
                        repeat: Infinity,
                        repeatType: "mirror" as const
                      }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </motion.svg>
                    <motion.span
                      initial={{ opacity: 1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      Contactez-moi
                    </motion.span>
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="mt-6 relative"
            >
              <motion.p 
                className="text-sm text-blue-200 italic font-light px-4 py-2 backdrop-blur-sm bg-blue-500/10 rounded-full border border-blue-300/20 shadow-inner"
                variants={itemVariants}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.15)" }}
                transition={{ type: "spring" as const, stiffness: 300 }}
              >
                <motion.svg 
                  className="w-4 h-4 inline-block mr-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" as const }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </motion.svg>
                Nous nous engageons à revenir vers vous dans les 24H
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactCTA;
