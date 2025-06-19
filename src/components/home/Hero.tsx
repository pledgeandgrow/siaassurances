'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { useRippleEffect } from '@/hooks/useRippleEffect';
import { motion } from 'framer-motion';

// Variants pour les animations sans effet d'apparition
const containerVariants = {
  visible: {
    opacity: 1
  }
};

const itemVariants = {
  visible: {
    opacity: 1
  }
};

// Style global pour les boutons d'action
const buttonBaseStyle = "flex items-center justify-center px-6 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-md";

// Composant pour les badges de services
interface ServiceBadgeProps {
  text: string;
}

const ServiceBadge = ({ text }: ServiceBadgeProps) => (
  <div className="inline-block bg-blue-800 bg-opacity-80 text-white text-sm font-medium px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition-colors duration-200">
    {text}
  </div>
);

const Hero = () => {
  // Hook pour l'effet ripple sur les boutons
  const { createRipple } = useRippleEffect();
  
  // Référence pour détecter quand le composant est visible
  const heroRef = useRef(null);
  
  // Effet de parallax supprimé pour améliorer les performances
  
  return (
    <div ref={heroRef} className="relative bg-blue-50 pt-8 pb-12 overflow-hidden">
      {/* Éléments décoratifs simplifiés pour améliorer les performances */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Vagues décoratives simplifiées */}
        <div className="absolute bottom-0 left-0 right-0 h-24 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="currentColor" className="text-blue-700" fillOpacity="1" d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,138.7C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Partie gauche - Texte principal */}
          <motion.div 
            className="lg:col-span-7 xl:col-span-6 lg:mt-0 flex flex-col justify-center"
            initial="visible"
            animate="visible"
            variants={containerVariants}
          >
            {/* Badges de services */}
            <motion.div 
              className="flex flex-wrap gap-2 mb-6"
              variants={itemVariants}
            >
              <ServiceBadge text="Décennale" />
              <ServiceBadge text="RC Pro" />
              <ServiceBadge text="Prévoyance" />
              <ServiceBadge text="Mutuelle santé" />
            </motion.div>

            {/* Titre principal */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6"
              variants={itemVariants}
            >
              <motion.span className="block">
                L&apos;assurance
              </motion.span>
              <motion.span className="block text-blue-700">
                qui vous protège
              </motion.span>
            </motion.h1>

            {/* Texte descriptif */}
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl"
              variants={itemVariants}
            >
              Cabinet de courtage spécialisé dans l&apos;assurance construction et l&apos;assurance de personnes. 
              Un accompagnement personnalisé dans le domaine des assurances de biens, de personnes et de responsabilités.
            </motion.p>

            {/* Boutons d'action */}
            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              variants={itemVariants}
            >
              <button 
                className={`${buttonBaseStyle} bg-blue-700 hover:bg-blue-800 text-white focus:ring-blue-500`}
                onClick={(e) => createRipple(e)}
              >
                <span className="mr-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </span>
                Demander un devis
              </button>
              <Link href="/contact" className={`${buttonBaseStyle} bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500`}>
                Nous contacter
              </Link>
            </motion.div>

            {/* Indicateurs de confiance */}
            <motion.div 
              className="flex flex-wrap items-center gap-6 text-gray-500"
              variants={itemVariants}
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Plus de 10 ans d&apos;expérience</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Engagement de réponse sous 24H</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Partie droite - Visuel */}
          <div className="lg:col-span-5 xl:col-span-6 mt-12 lg:mt-0">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Fond décoratif */}
              <motion.div 
                className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl overflow-hidden shadow-xl"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
              >
                {/* Motif de grille */}
                <div className="absolute inset-0 opacity-15">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
                    <pattern id="grid" width="12" height="12" patternUnits="userSpaceOnUse">
                      <rect width="1" height="1" fill="#FFFFFF"></rect>
                    </pattern>
                    <rect width="100" height="100" fill="url(#grid)"></rect>
                  </svg>
                </div>
                
                {/* Contenu de la partie droite */}
                <div className="relative flex flex-col items-center justify-center p-8 z-10 py-12 lg:py-16">
                  {/* Image symbolique de construction */}
                  <div className="mb-10">
                    <div className="relative w-44 h-44 md:w-56 md:h-56 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                      <div className="absolute inset-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/20"></div>
                      <div className="relative z-10 text-white text-center">
                        <div className="font-bold text-4xl md:text-5xl mb-2">10+</div>
                        <div className="text-md md:text-lg font-medium">Années d&apos;expérience</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h2 className="text-white text-xl md:text-3xl font-bold mb-4">
                      Cabinet<br/>d&apos;expertise
                    </h2>
                    <p className="text-blue-100 text-md md:text-lg max-w-md mx-auto">
                      Un accompagnement personnalisé dans le domaine des assurances de biens, de personnes et de responsabilités
                    </p>
                  </div>
                  
                  {/* Indicateurs de confiance - Remis à l&apos;intérieur de la carte bleue */}
                  <div className="mt-8 mb-6 w-full grid grid-cols-2 gap-4 max-w-md mx-auto">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center shadow-lg">
                      <div className="text-white text-xl md:text-2xl font-bold">1000+</div>
                      <div className="text-blue-100 text-sm">Clients satisfaits</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center shadow-lg">
                      <div className="text-white text-xl md:text-2xl font-bold">99%</div>
                      <div className="text-blue-100 text-sm">Taux de satisfaction</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// Remarque: Les animations CSS keyframes ne sont plus nécessaires car nous utilisons maintenant Framer Motion
