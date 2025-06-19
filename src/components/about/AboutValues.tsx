'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AboutValues = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16 relative overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-blue-100 opacity-30 blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.2, 0.3]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut", 
            type: "tween"
          }}
        />
        <motion.div 
          className="absolute -bottom-32 -left-16 w-80 h-80 rounded-full bg-blue-200 opacity-20 blur-3xl"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.15, 0.2]
          }}
          transition={{ 
            duration: 12, 
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut", 
            type: "tween"
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center mb-3 px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            Notre philosophie
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 mb-5"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Nos Valeurs
          </motion.h2>
          
          <motion.div 
            className="w-0 h-1.5 mx-auto bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-5"
            initial={{ width: 0 }}
            whileInView={{ width: "70px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
          
          <motion.p 
            className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Des engagements qui guident notre accompagnement pour mieux vous servir
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Variante de l'animation pour un effet staggeré */}
          {[
            {
              id: 1,
              title: "Expertise",
              color: "blue",
              description: "L'expérience acquise auprès des compagnies et les courtiers de renom nous permettent de vous proposer les meilleures solutions en fonction de vos besoins.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              )
            },
            {
              id: 2,
              title: "Engagement",
              color: "blue",
              description: "Nous nous engageons à revenir vers vous dans les 24H et à vous accompagner tout au long de la vie de votre contrat même 10 ans après la résiliation.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              )
            },
            {
              id: 3,
              title: "Indépendance",
              color: "blue",
              description: "Courtier indépendant, SIA Assurances s'engage à solliciter les meilleurs assureurs pour la couverture et de vos risques. Notre rémunération est constituée de frais de gestion et de commissions versées par les compagnies d'assurance.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              )
            }
          ].map((value, index) => (
            <motion.div 
              key={value.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: 0.2 * (index + 1),
                ease: "easeOut"
              }}
            >
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 h-full relative overflow-hidden"
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Background decorative element */}
                <motion.div 
                  className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-${value.color}-50 z-0 opacity-40`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                
                {/* Icon with glowing circle */}
                <div className="relative z-10 mb-6">
                  <motion.div 
                    className={`h-16 w-16 rounded-lg bg-gradient-to-br from-${value.color}-100 to-${value.color}-50 flex items-center justify-center relative p-3`}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: `0 0 20px 2px rgba(${value.color === 'blue' ? '59, 130, 246' : value.color === 'indigo' ? '99, 102, 241' : '168, 85, 247'}, 0.3)`
                    }}
                  >
                    <div className={`text-${value.color}-700 h-10 w-10`}>
                      {value.icon}
                    </div>
                  </motion.div>
                </div>
                
                <motion.h3 
                  className={`text-xl font-bold mb-3 text-${value.color}-900 relative z-10`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (0.2 * index), duration: 0.5 }}
                >
                  {value.title}
                </motion.h3>
                
                <motion.div 
                  className="w-10 h-1 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full mb-3"
                  initial={{ width: 0 }}
                  whileInView={{ width: "2.5rem" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (0.2 * index), duration: 0.4 }}
                />
                
                <motion.p 
                  className="text-gray-600 relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (0.2 * index), duration: 0.5 }}
                >
                  {value.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutValues;
