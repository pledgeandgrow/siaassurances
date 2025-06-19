'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AboutHistory = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.span 
          className="inline-block px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full mb-3"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Depuis 2010
        </motion.span>
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Notre Histoire
        </motion.h2>
        <motion.div 
          className="w-32 h-1 mx-auto my-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full shadow-sm"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "8rem", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Qui suis-je?
          </motion.h3>
          
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <p className="text-gray-600 leading-relaxed">
              <span className="font-medium text-blue-800">Titulaire d&apos;un Master 2 en Droit des affaires</span>, spécialisé en assurances / banque, j&apos;ai travaillé pendant plus de 10 ans dans les compagnies d&apos;assurance et les grands cabinets de courtage (Paris et Rennes).
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Au cours de cette <span className="italic">riche expérience</span>, j&apos;ai eu la chance de conseiller et d&apos;accompagner des TPE, PME et de multinationales (fabricants, promoteurs, constructeurs de maisons individuelle, bureau d&apos;étude et architectes et artisans,) ainsi que des particuliers dans le domaine du droit de la construction et de l&apos;assurance construction.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Aujourd&apos;hui, je souhaite mettre cette expertise à votre service à travers le cabinet SIA Assurances dédié au courtage, audit et conseil dans les risques d&apos;entreprise notamment en assurance construction.
            </p>
          </motion.div>
          
          <motion.div 
            className="pt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <div className="flex gap-2 items-center text-sm text-blue-800 font-medium">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                </svg>
              </span>
              <span>L&apos;objectif est d&apos;aider les artisans et les chefs d&apos;entreprise à mieux choisir la couverture de leurs risques</span>
            </div>
          </motion.div>
        </motion.div>
        <motion.div 
          className="relative h-72 md:h-80 lg:h-96 overflow-hidden rounded-xl shadow-xl"
          initial={{ opacity: 0, x: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Texture d'arrière-plan décorative */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-white opacity-80" />
          
          {/* Éléments décoratifs */}
          <motion.div 
            className="absolute top-4 left-4 w-24 h-24 rounded-full bg-blue-200 opacity-50 blur-md"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", type: "tween" }}
          />
          <motion.div 
            className="absolute bottom-8 right-8 w-32 h-32 rounded-full bg-blue-300 opacity-30 blur-lg"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", type: "tween" }}
          />
          
          {/* Contenu principal */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 mb-4 rounded-full bg-white shadow-md flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-800">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
              </svg>
            </div>
            
            <motion.h4 
              className="text-xl font-bold text-blue-900 mb-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Notre mission
            </motion.h4>
            
            <motion.p 
              className="text-blue-800 font-medium text-sm mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Protéger votre activité, vos moyens de production<br />et vous-même en tant que chef d&apos;entreprise
            </motion.p>
            
            <motion.div
              className="inline-flex items-center gap-1 text-xs font-medium text-blue-700 bg-blue-50 px-3 py-1 rounded-full shadow-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span>Depuis 2010 à vos côtés</span>
            </motion.div>
          </div>

          {/* Note: Remplacer cette structure par une vraie image quand disponible */}
          {/* <Image src="/images/building.jpg" alt="Bâtiment SIA" fill className="object-cover" /> */}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutHistory;
