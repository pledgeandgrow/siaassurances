'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaEuroSign, FaUsers, FaHandshake } from 'react-icons/fa';

const AboutKeyFigures = () => {
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
            Nos chiffres clés
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            SIA Assurances en chiffres
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
            Des résultats concrets pour nos clients et une expertise reconnue
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Chiffre clé 1 - Années d'expérience */}
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 h-full"
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="p-8 flex flex-col items-center justify-center text-center h-full">
                <div className="mb-6 bg-blue-100 p-4 rounded-full">
                  <FaCalendarAlt className="text-blue-800 text-3xl" />
                </div>
                
                <motion.div 
                  className="text-5xl font-bold text-blue-800 mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                >
                  11
                </motion.div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Années d&apos;expérience</h3>
                
                <p className="text-gray-600">
                  Plus d&apos;une décennie d&apos;expertise dans le domaine des assurances à votre service
                </p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Chiffre clé 2 - Économies réalisées */}
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 h-full"
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="p-8 flex flex-col items-center justify-center text-center h-full">
                <div className="mb-6 bg-blue-100 p-4 rounded-full">
                  <FaEuroSign className="text-blue-800 text-3xl" />
                </div>
                
                <motion.div 
                  className="text-5xl font-bold text-blue-800 mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
                >
                  +70 000€
                </motion.div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Économies réalisées</h3>
                
                <p className="text-gray-600">
                  Grâce au remplacement de l&apos;assurance emprunteur pour nos clients
                </p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Chiffre clé 3 - Clients satisfaits */}
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 h-full"
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="p-8 flex flex-col items-center justify-center text-center h-full">
                <div className="mb-6 bg-blue-100 p-4 rounded-full">
                  <FaUsers className="text-blue-800 text-3xl" />
                </div>
                
                <motion.div 
                  className="text-5xl font-bold text-blue-800 mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
                >
                  98%
                </motion.div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Clients satisfaits</h3>
                
                <p className="text-gray-600">
                  Un taux de satisfaction client qui témoigne de notre engagement pour un service de qualité
                </p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Chiffre clé 4 - Partenaires */}
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 h-full"
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="p-8 flex flex-col items-center justify-center text-center h-full">
                <div className="mb-6 bg-blue-100 p-4 rounded-full">
                  <FaHandshake className="text-blue-800 text-3xl" />
                </div>
                
                <motion.div 
                  className="text-5xl font-bold text-blue-800 mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                >
                  15+
                </motion.div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Partenaires assureurs</h3>
                
                <p className="text-gray-600">
                  Des partenariats solides avec les meilleures compagnies d&apos;assurance pour vous offrir un large choix
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutKeyFigures;
