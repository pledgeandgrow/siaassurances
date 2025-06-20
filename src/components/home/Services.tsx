'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRippleEffect } from '@/hooks/useRippleEffect';

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <motion.div 
      className="relative bg-white p-6 rounded-xl shadow-lg overflow-hidden group backdrop-blur-sm border border-blue-50"
      whileHover={{ 
        y: -8,
        boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.3)",
      }}
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Élément décoratif d'arrière-plan avec animation */}
      <motion.div 
        className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-gradient-to-tr from-blue-200 to-blue-50 opacity-0 group-hover:opacity-60 transition-all duration-500"
        initial={{ scale: 0.8 }}
        whileHover={{ scale: 1.2, rotate: 15 }}
        animate={{ 
          scale: [0.8, 0.85], 
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" as const 
        }}
      ></motion.div>
      
      {/* Effet de glow sur le contour au survol */}
      <motion.div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
        style={{ 
          boxShadow: "0 0 20px rgba(59, 130, 246, 0.5) inset", 
          borderRadius: "0.75rem" 
        }}
      ></motion.div>
      
      <div className="relative z-10">
        {/* Icône avec effet de rebond, rotation et glow au survol */}
        <motion.div 
          className="text-blue-600 group-hover:text-blue-500 mb-5 inline-flex p-3 bg-blue-50 rounded-lg shadow-inner"
          whileHover={{ 
            scale: 1.15, 
            boxShadow: "0 0 15px rgba(59, 130, 246, 0.4), 0 0 5px rgba(59, 130, 246, 0.2) inset" 
          }}
          transition={{ type: "spring" as const, stiffness: 400, damping: 10 }}
        >
          <motion.div 
            whileHover={{ rotate: 15 }}
            animate={{ rotate: [0, 2] }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror" as const,
              duration: 3,
              ease: "easeInOut" as const,
              type: "tween" as const
            }}
          >
            {icon}
          </motion.div>
        </motion.div>
        
        {/* Titre avec effet de couleur et d'échelle au survol */}
        <motion.h3 
          className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-700 transition-colors duration-300"
          whileHover={{ scale: 1.02 }}
        >
          {title}
        </motion.h3>
        
        {/* Description avec transition fluide */}
        <motion.p 
          className="text-gray-600 group-hover:text-gray-700 transition-all duration-300"
          initial={{ lineHeight: 1.5 }}
          whileHover={{ lineHeight: 1.6 }}
        >
          {description}
        </motion.p>
        
        {/* Indicateur visuel amélioré avec animation */}
        <motion.div 
          className="mt-5 flex items-center text-blue-600 font-medium opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
          whileHover={{ x: 3 }}
        >
          <span className="mr-2">En savoir plus</span>
          <motion.svg 
            className="w-4 h-4 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={{ x: [0, 3] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse" as const,
              duration: 2,
              ease: "easeInOut" as const,
              type: "tween" as const
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </motion.svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  // Animation variants sans effet d'apparition
  const containerVariants = {
    visible: {
      opacity: 1
    }
  };
  
  const itemVariants = {
    visible: { opacity: 1, y: 0 }
  };
  
  // Hook pour l'effet ripple sur les boutons
  const { createRipple } = useRippleEffect();
  
  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden" id="services">
      {/* Motif de grille subtil sur tout l'arrière-plan */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#4B5563" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Éléments décoratifs d'arrière-plan animés */}
        <motion.div 
          className="absolute top-0 right-0 -translate-y-1/2 w-56 h-56 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full opacity-70 blur-3xl"
          animate={{ scale: [1, 1.1], rotate: [0, 5] }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse" as const,
            duration: 8,
            ease: "easeInOut" as const,
            type: "tween" as const
          }}

        ></motion.div>
        
        <motion.div 
          className="absolute -bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-blue-100 to-blue-50 rounded-full opacity-40 blur-3xl"
          animate={{ scale: [1, 1.15], x: [0, -20] }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse" as const,
            duration: 10,
            ease: "easeInOut" as const,
            type: "tween" as const
          }}

        ></motion.div>
        
        <motion.div
          className="absolute top-1/3 left-0 w-32 h-32 bg-gradient-to-r from-blue-200 to-blue-100 rounded-full opacity-30 blur-2xl"
          animate={{ y: [-10, 10] }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse" as const,
            duration: 6,
            ease: "easeInOut" as const,
            type: "tween" as const
          }}

        ></motion.div>
        
        <motion.div
          className="absolute top-2/3 right-10 w-40 h-40 bg-gradient-to-bl from-blue-200 to-transparent rounded-full opacity-20 blur-xl"
          animate={{ scale: [0.8, 1] }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse" as const,
            duration: 7,
            ease: "easeInOut" as const,
            type: "tween" as const
          }}

        ></motion.div>
        
        <motion.div 
          className="text-center relative z-10"
          initial="visible"
          animate="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring" as const, stiffness: 300, damping: 10 }}
          >
            <span className="inline-flex items-center px-5 py-2 mb-5 text-sm font-semibold text-blue-800 bg-gradient-to-r from-blue-50 to-blue-100 rounded-full shadow-sm border border-blue-100 hover:shadow-md hover:border-blue-200 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
              Une offre complète
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-3"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring" as const, stiffness: 200, damping: 10 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
            Nos Services
          </motion.h2>
          
          <motion.div 
            className="w-24 h-2 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mb-8 shadow-lg"
            variants={itemVariants}
            whileHover={{ width: '7rem', boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
            transition={{ type: "spring" as const, stiffness: 500, damping: 10 }}
          ></motion.div>
          
          <motion.p 
            className="max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed"
            variants={itemVariants}
            // initial={{ opacity: 0, y: 20 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ delay: 0.3, duration: 0.5 }}
          >
            Une expertise complète pour répondre à tous vos besoins en assurance
          </motion.p>
        </motion.div>

        <motion.div 
          className="mt-16 grid gap-8 sm:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
              }
            }
          }}
        >
          <ServiceCard
            title="Décennale"
            description="Obligation légale, l'assurance décennale couvre les dommages qui compromettent la solidité de l'ouvrage ou le rendent impropre à sa destination, pendant 10 ans après la réception des travaux."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            }
          />
          <ServiceCard
            title="RC Promoteur"
            description="Garantie pour les promoteurs immobiliers couvrant les conséquences pécuniaires de leur responsabilité civile en cas de dommages corporels, matériels ou immatériels causés à des tiers."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            }
          />
          <ServiceCard
            title="Prévoyance"
            description="La garantie prévoyance permet de se prémunir contre les risques financiers dus aux aléas de la vie : maladie, invalidité, accident de travail, chômage et décès. Un complément indispensable à votre régime obligatoire."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            }
          />
          <ServiceCard
            title="Mutuelle santé"
            description="La mutuelle santé vous permet de bénéficier d'un remboursement des soins (dentaires, optiques, etc). Non obligatoire mais vivement recommandée pour diminuer le montant à votre charge."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            }
          />
          <ServiceCard
            title="Fraude et Cyber-risque"
            description="Pour faire face aux nouveaux risques liés à la numérisation : fraude au faux virement, arrêt d'activité suite à un logiciel malveillant, transmission de virus vers le système d'un tiers."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            }
          />
          <ServiceCard
            title="Assistance"
            description="SIA Assurances vous assiste pour tout litige amiable portant sur les assurances. Nous vous accompagnons dès la survenance du sinistre : rédaction de déclaration, expertise, réclamation et contestation des conclusions."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
          />
        </motion.div>
        
        {/* Section CTA avec animation et effets visuels */}
        <motion.div 
          className="mt-20 text-center relative z-10"
          // initial={{ opacity: 0, y: 30 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true, margin: "-50px" }}
          // transition={{ 
          //   type: "spring" as const, 
          //   stiffness: 50, 
          //   damping: 15,
          //   delay: 0.6
          // }}
        >
          {/* Élément décoratif ligne zigzag */}
          <div className="flex justify-center mb-8">
            <svg width="120" height="10" viewBox="0 0 120 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path 
                d="M0 5 L20 9 L40 1 L60 9 L80 1 L100 9 L120 5" 
                stroke="#93C5FD" 
                strokeWidth="2"
                strokeLinecap="round"
                // initial={{ pathLength: 0, opacity: 0 }}
                // animate={{ pathLength: 1, opacity: 1 }}
                // transition={{ duration: 1.5, ease: "easeInOut" as const, delay: 0.8 }}
              />
            </svg>
          </div>
          
          <motion.h3 
            className="text-2xl font-bold text-gray-800 mb-6"
            // initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            // transition={{ delay: 0.9 }}
          >
            Besoin d&apos;une solution personnalisée pour votre entreprise ?
          </motion.h3>
          
          <motion.div
            className="inline-block relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring" as const, stiffness: 400, damping: 10 }}
          >
            {/* Effet de glow supprimé pour éviter les conflits d'animation */}
            
            {/* Bouton CTA principal */}
            <motion.button 
              onClick={(e) => {
                createRipple(e);
                window.location.href = '/contact';
              }} 
              className="flex items-center justify-center px-6 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:shadow-xl hover:shadow-blue-100/50 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-md bg-blue-700 hover:bg-blue-800 text-white focus:ring-blue-500"
              whileHover={{ scale: 1.05 }}
            >
              {/* Effet de particules supprimé pour améliorer les performances */}
              
              <span className="mr-2">Demander un devis personnalisé</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Composant de particules supprimé pour améliorer les performances

export default Services;
