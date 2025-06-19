'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutTeam = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Éléments de fond décoratifs */}
        <div className="absolute left-0 right-0 overflow-hidden z-0 opacity-20 pointer-events-none">
          <motion.div 
            className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-blue-300 blur-3xl"
            animate={{ 
              opacity: [0.2, 0.3, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut", 
              type: "tween"
            }}
          />
          
          <motion.div 
            className="absolute top-40 right-20 w-60 h-60 rounded-full bg-blue-200 blur-3xl"
            animate={{ 
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 10, 
              delay: 1,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut", 
              type: "tween"
            }}
          />
        </div>
        
        <motion.div 
          className="text-center mb-16 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block px-4 py-1.5 mb-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Qui suis-je?
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Expertise et Expérience
          </motion.h2>
          
          <motion.div 
            className="h-1 w-0 mx-auto bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
          
          <motion.p 
            className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            Une expertise acquise au service de vos projets d&apos;assurance
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Membre d'équipe 1 */}
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            {/* Carte avec effet de hover */}
            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300"
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="relative h-64 bg-gradient-to-br from-blue-100 to-blue-50 overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0">
                  <motion.div 
                    className="absolute top-4 right-4 w-24 h-24 bg-blue-200 rounded-full opacity-30 blur-xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.2, 0.3]
                    }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut", 
                      type: "tween"
                    }}
                  />
                </div>
                
                {/* Profile picture placeholder with glow */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden border-2 border-white">
                  <motion.div
                    className="w-full h-full bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center text-white text-3xl font-bold"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    SA
                    {/* Remplacer par <Image src="/images/team/sia-founder.jpg" alt="Fondateur SIA" fill className="object-cover" /> */}
                  </motion.div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <motion.h3 
                      className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-800 transition-colors duration-300"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      Fondateur SIA Assurances
                    </motion.h3>
                    <motion.p 
                      className="text-blue-700 font-medium"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      Expert en assurance construction
                    </motion.p>
                  </div>
                  
                  <motion.div 
                    className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-800"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "#1e40af",
                      color: "#ffffff"
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    <span className="font-medium text-blue-700">Titulaire d'un Master 2 en Droit des affaires</span>, spécialisé en assurances / banque, j'ai travaillé pendant plus de 10 ans dans les compagnies d'assurance et les grands cabinets de courtage (Paris et Rennes).
                  </p>
                  
                  <div className="flex gap-2">
                    <motion.span 
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      whileHover={{ scale: 1.05 }}
                    >
                      Courtage
                    </motion.span>
                    <motion.span 
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      whileHover={{ scale: 1.05 }}
                    >
                      Audit
                    </motion.span>
                    <motion.span 
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      whileHover={{ scale: 1.05 }}
                    >
                      Conseil
                    </motion.span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Membre d'équipe 2 */}
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {/* Carte avec effet de hover */}
            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300"
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="relative h-64 bg-gradient-to-br from-purple-100 to-blue-50 overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0">
                  <motion.div 
                    className="absolute bottom-4 left-4 w-28 h-28 bg-purple-200 rounded-full opacity-40 blur-xl"
                    animate={{ 
                      scale: [1, 1.15, 1],
                      opacity: [0.4, 0.3, 0.4]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut", 
                      type: "tween"
                    }}
                  />
                </div>
                
                {/* Profile picture placeholder with glow */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden border-2 border-white">
                  <motion.div
                    className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white text-3xl font-bold"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    SM
                    {/* Remplacer par <Image src="/images/team/sophie.jpg" alt="Sophie Martin" fill className="object-cover" /> */}
                  </motion.div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <motion.h3 
                      className="text-xl font-bold text-gray-900 mb-1 group-hover:text-purple-700 transition-colors duration-300"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      Sophie Martin
                    </motion.h3>
                    <motion.p 
                      className="text-purple-700 font-medium"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      Directrice des Opérations
                    </motion.p>
                  </div>
                  
                  <motion.div 
                    className="h-8 w-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-700"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "#7e22ce",
                      color: "#ffffff"
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Avec <span className="font-medium text-purple-700">15 ans d&apos;expérience</span> en gestion de risques, Sophie supervise les opérations quotidiennes et garantit l&apos;excellence dans chaque interaction avec nos clients.
                  </p>
                  
                  <div className="flex gap-2">
                    <motion.span 
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800"
                      whileHover={{ scale: 1.05 }}
                    >
                      Gestion
                    </motion.span>
                    <motion.span 
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800"
                      whileHover={{ scale: 1.05 }}
                    >
                      Opérations
                    </motion.span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Membre d'équipe 3 */}
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Carte avec effet de hover */}
            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300"
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="relative h-64 bg-gradient-to-br from-green-100 to-blue-50 overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0">
                  <motion.div 
                    className="absolute top-10 left-10 w-32 h-32 bg-green-200 rounded-full opacity-30 blur-xl"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.2, 0.3]
                    }}
                    transition={{ 
                      duration: 7, 
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut", 
                      type: "tween"
                    }}
                  />
                </div>
                
                {/* Profile picture placeholder with glow */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden border-2 border-white">
                  <motion.div
                    className="w-full h-full bg-gradient-to-br from-green-600 to-teal-500 flex items-center justify-center text-white text-3xl font-bold"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    TL
                    {/* Remplacer par <Image src="/images/team/thomas.jpg" alt="Thomas Laurent" fill className="object-cover" /> */}
                  </motion.div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <motion.h3 
                      className="text-xl font-bold text-gray-900 mb-1 group-hover:text-green-700 transition-colors duration-300"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      Thomas Laurent
                    </motion.h3>
                    <motion.p 
                      className="text-green-700 font-medium"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      Expert Assurance Construction
                    </motion.p>
                  </div>
                  
                  <motion.div 
                    className="h-8 w-8 rounded-full bg-green-50 flex items-center justify-center text-green-700"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "#15803d",
                      color: "#ffffff"
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    <span className="font-medium text-green-700">Spécialiste reconnu</span> dans le domaine de l&apos;assurance construction, Thomas accompagne nos clients professionnels pour leur garantir une protection optimale adaptée à leurs projets.
                  </p>
                  
                  <div className="flex gap-2">
                    <motion.span 
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                      whileHover={{ scale: 1.05 }}
                    >
                      Construction
                    </motion.span>
                    <motion.span 
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                      whileHover={{ scale: 1.05 }}
                    >
                      Expert
                    </motion.span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
