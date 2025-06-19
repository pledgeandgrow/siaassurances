'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const ServicesHero = () => {
  // Référence pour l'effet de parallaxe
  const heroRef = useRef<HTMLDivElement>(null);

  // Animation variants pour les éléments sans effet d'apparition
  const titleVariants = {
    visible: { 
      opacity: 1, 
      y: 0
    }
  };
  
  const descriptionVariants = {
    visible: { 
      opacity: 1, 
      scale: 1
    }
  };
  
  const decorationVariants = {
    visible: { 
      opacity: 1
    }
  };
  
  // Effet de parallaxe sur scroll
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const elements = heroRef.current.querySelectorAll('.parallax-element');
        
        elements.forEach((element, index) => {
          const speed = index % 2 === 0 ? 0.05 : 0.08;
          const yPos = -scrollY * speed;
          (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div 
      ref={heroRef}
      className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20 lg:py-24 relative overflow-hidden"
    >
      {/* Éléments décoratifs en arrière-plan */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-30"
        initial="visible"
        animate="visible"
        variants={decorationVariants}
      >
        {/* Cercles décoratifs avec animation */}
        <motion.div 
          className="parallax-element absolute top-10 left-[10%] w-64 h-64 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 blur-[80px] opacity-40"
          variants={{
            visible: { 
              opacity: 0.4, 
              scale: 1
            }
          }}
          animate={{
            x: [0, 10],
            y: [0, -15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="parallax-element absolute top-[60%] right-[5%] w-40 h-40 rounded-full bg-gradient-to-l from-blue-300 to-indigo-600 blur-[60px] opacity-40"
          variants={{
            visible: { 
              opacity: 0.4, 
              scale: 1
            }
          }}
          animate={{
            x: [0, -15],
            y: [0, 10],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Motif de grille subtil */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" className="absolute inset-0">
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="0.5"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>
        
        {/* Points brillants */}
        {Array.from({ length: 20 }).map((_, i) => {
          const size = 1 + (i % 3);
          const top = (i * 7.3) % 100;
          const left = (i * 13.7) % 100;
          
          return (
            <motion.div 
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${top}%`,
                left: `${left}%`,
              }}
              variants={{
                visible: { 
                  opacity: 0.7, 
                  scale: 1
                }
              }}
            />
          );
        })}
      </motion.div>
      
      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          Nos Produits
        </motion.h1>
        
        <motion.div 
          className="w-24 h-1.5 bg-gradient-to-r from-blue-400 via-white to-blue-400 mx-auto rounded-full mb-8 shadow-lg"
          initial={{ width: '6rem', opacity: 1 }}
          animate={{ 
            width: '6rem', 
            opacity: 1
          }}
        />
        
        <motion.p 
          className="text-xl md:text-2xl max-w-3xl mx-auto font-light"
          initial="visible"
          animate="visible"
          variants={descriptionVariants}
        >
          Des solutions d&apos;assurance 
          <span className="font-semibold relative">
            <motion.span
              className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 rounded"
              initial={{ width: '100%' }}
              animate={{ width: '100%' }}
            />
            personnalisées
          </span> 
          pour les professionnels et les particuliers
        </motion.p>
        
        {/* Badge décoratif */}
        <motion.div 
          className="mt-8 inline-block"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="px-4 py-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full border border-white border-opacity-20 shadow-xl">
            <div className="flex items-center space-x-2">
              <svg className="h-5 w-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium text-blue-800">Courtage, audit et conseil</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesHero;
