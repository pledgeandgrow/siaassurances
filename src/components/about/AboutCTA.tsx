'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { useRippleEffect } from '@/hooks/useRippleEffect';

const AboutCTA = () => {
  const { createRipple } = useRippleEffect();
  
  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };
  
  return (
    <div className="py-16 bg-white relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Motif de points décoratifs */}
        <div className="absolute w-full h-full opacity-20">
          {Array.from({ length: 20 }).map((_, i) => {
            const size = 1 + (i % 3);
            const top = (i * 5.3) % 100;
            const left = (i * 8.7) % 100;
            
            return (
              <div 
                key={i}
                className="absolute bg-blue-400 rounded-full"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  top: `${top}%`,
                  left: `${left}%`,
                }}
              />
            );
          })}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="relative bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-10 text-center shadow-xl"
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true, amount: 0.3 }}
          // variants={containerVariants}
        >
          {/* Cercles décoratifs avec glow */}
          <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-gradient-to-br from-blue-300/20 to-blue-400/10 rounded-full blur-3xl opacity-60 pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-10 w-64 h-40 bg-gradient-to-tr from-blue-200/20 to-indigo-300/10 rounded-full blur-3xl opacity-60 pointer-events-none" />
          
          <motion.div className="relative" variants={itemVariants}>
            <div className="inline-block bg-blue-100 rounded-full p-3 mb-6 shadow-inner">
              <svg className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-500 mb-4"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring" as const, stiffness: 300, damping: 5 }}
            >
              Besoin d&apos;un accompagnement personnalisé pour votre assurance ?
            </motion.h3>
            
            <motion.div 
              className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-400 to-blue-300 rounded-full mb-6"
              variants={itemVariants}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 96, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" as const }}
            />
            
            <motion.p 
              className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg"
              variants={itemVariants}
            >
              SIA Assurances met à votre service toute son expertise pour vous 
              <span className="text-blue-700 font-medium"> aider à mieux choisir la couverture de vos risques </span> 
              autour de la protection de votre activité, de vos moyens de production et de vous-même.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-6"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring" as const, stiffness: 400, damping: 10 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg blur-md opacity-80 group-hover:opacity-100 transition-opacity duration-300 -z-10 transform scale-[0.95]" />
                <Button 
                  href="/devis"
                  variant="cta"
                  size="lg"
                  onClick={createRipple}
                  className="shadow-lg hover:shadow-blue-200/50"
                  icon={(
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5"
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      animate={{ rotate: [0, 5] }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "mirror" as const,
                        duration: 2,
                        ease: "easeInOut" as const,
                        type: "tween" as const
                      }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </motion.svg>
                  )}
                >
                  Demander un devis
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring" as const, stiffness: 400, damping: 10 }}
              >
                <Button 
                  href="/contact"
                  variant="outline"
                  size="lg"
                  onClick={createRipple}
                  className="shadow-sm hover:shadow-md"
                  icon={(
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  )}
                >
                  Contacter un conseiller
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Badge décoratif en bas */}
          <motion.div 
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="bg-white px-4 py-1.5 rounded-full shadow-md border border-blue-100 flex items-center space-x-2">
              <svg className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-xs text-blue-800 font-medium">Courtier indépendant depuis 2010</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutCTA;
