'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 text-white py-24 md:py-32">
      {/* Éléments de background avec glow effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div 
          className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-200 opacity-10 blur-3xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue-400 opacity-10 blur-3xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-white opacity-5 blur-2xl"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 0.05 }}
          transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div 
            className="h-1.5 w-24 bg-gradient-to-r from-blue-300 to-blue-100 mx-auto mb-6 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "6rem", opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          />
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Courtage, audit, conseil
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Cabinet de courtage, SIA Assurances met à votre service toute une expertise acquise dans le domaine des assurances de biens, de personnes et de responsabilités.
          </motion.p>
        </motion.div>
        
        {/* Badge décoratif */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="inline-flex mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-sm border border-blue-300/20 rounded-full px-5 py-2 shadow-lg flex items-center space-x-3 hover:bg-white/15 transition-colors duration-300">
            <span className="text-blue-100 text-sm font-medium">
              Expertise en assurance construction
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutHero;
