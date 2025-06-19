'use client';

import React from 'react';
import { motion } from 'framer-motion';

type TestimonialProps = {
  id: number;
  content: string;
  author: string;
  role: string;
  avatar?: string;
};

const TestimonialCard = ({ content, author, role }: TestimonialProps) => {
  return (
    <motion.div 
      className="bg-white rounded-xl p-8 relative overflow-hidden group backdrop-blur-sm border border-gray-100/80 shadow-lg"
      initial={{ opacity: 1, y: 0, scale: 1 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ 
        y: -8,
        scale: 1.03,
        boxShadow: "0 25px 35px -12px rgba(0, 0, 0, 0.2), 0 10px 20px -10px rgba(59, 130, 246, 0.1)",
      }}
    >
      {/* Arrière-plan avec effet de glow au survol */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50/50 z-0" />
      
      {/* Éléments décoratifs */}
      <motion.div 
        className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-80 z-0"
        animate={{ scale: [0.8, 1], opacity: [0, 0.1] }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse" as const,
          duration: 3,
          ease: "easeInOut" as const,
          type: "tween" as const
        }}

      />
      
      <motion.div 
        className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-100 to-blue-50 rounded-full -ml-16 -mb-16 opacity-0 group-hover:opacity-70 z-0"
        animate={{ scale: [1, 1.2], opacity: [0, 0.15] }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse" as const,
          duration: 4,
          ease: "easeInOut" as const,
          type: "tween" as const
        }}

      />
      
      <div className="relative z-10">
        {/* Icône de citation avec animation avancée */}
        <motion.div className="relative mb-6">
          <motion.div 
            className="absolute -top-4 -left-2 w-16 h-16 bg-blue-100/50 rounded-full blur-md opacity-0 group-hover:opacity-100"
            animate={{ scale: [1, 1.2], opacity: [0, 0.6] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse" as const,
              duration: 5,
              ease: "easeInOut" as const,
              type: "tween" as const
            }}

          />
          
          <motion.svg 
            className="h-12 w-12 text-blue-400 relative z-10" 
            fill="currentColor" 
            viewBox="0 0 32 32" 
            aria-hidden="true"
            initial={{ opacity: 0.7, scale: 0.9 }}
            whileHover={{ scale: 1.15, rotate: -5, color: "#3b82f6" }}
            animate={{ 
              y: [0, -3, 0],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              type: "spring" as const, 
              stiffness: 300,
              y: { repeat: Infinity, duration: 3, ease: "easeInOut" as const },
              opacity: { repeat: Infinity, duration: 4, ease: "easeInOut" as const }
            }}
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </motion.svg>
        </motion.div>
        
        {/* Contenu avec animation d'apparition et effet de style au survol */}
        <motion.p 
          className="text-gray-600 leading-relaxed mb-6 relative z-10 group-hover:text-gray-800 transition-colors duration-300 text-lg"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          {/* Guillemet ouvrant décoratif */}
          <motion.span 
            className="absolute -left-2 -top-3 text-4xl text-blue-200 font-serif"
            animate={{ opacity: [0.3, 0.6, 0.3] }}

          >
            &quot;
          </motion.span>
          
          {/* Texte du témoignage */}
          {content}
          
          {/* Guillemet fermant décoratif */}
          <motion.span 
            className="absolute text-4xl text-blue-200 font-serif ml-1"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const, delay: 1.5 }}
          >
            &quot;
          </motion.span>
        </motion.p>
        
        {/* Séparateur animé */}
        <motion.div 
          className="w-16 h-0.5 bg-gradient-to-r from-blue-100 to-blue-300 mb-6 rounded-full"
          whileHover={{ width: "60%" }}
          transition={{ type: "spring" as const, stiffness: 400, damping: 10 }}
        />
        
        {/* Information sur l'auteur avec animation améliorée */}
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          <motion.div 
            className="relative flex-shrink-0 h-14 w-14 rounded-full overflow-hidden shadow-xl"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring" as const, stiffness: 300, damping: 10 }}
          >
            {/* Effet de glow autour de l'avatar */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full blur-md opacity-0 group-hover:opacity-70"
              animate={{ scale: [1, 1.2] }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse" as const,
                duration: 2,
                ease: "easeInOut" as const,
                type: "tween" as const
              }}

            />
            
            {/* Avatar */}
            <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center z-10">
              <motion.span 
                className="text-white font-bold text-xl"
                animate={{ scale: [1, 1.1] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse" as const,
                  duration: 1.5,
                  ease: "easeInOut" as const,
                  type: "tween" as const
                }}
    
              >
                {author.charAt(0)}
              </motion.span>
            </div>
          </motion.div>
          
          <motion.div 
            className="ml-4"
            whileHover={{ x: 3 }}
            transition={{ type: "spring" as const, stiffness: 300 }}
          >
            <motion.p 
              className="text-base font-semibold text-gray-900"
              whileHover={{ color: "#3b82f6", scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {author}
            </motion.p>
            
            <motion.p 
              className="text-sm text-blue-600 font-medium"
            >
              {role}
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  // Données de témoignages basées sur les valeurs de l'entreprise
  const testimonials = [
    {
      id: 1,
      content: "L'expérience acquise auprès des compagnies et les courtiers de renom permet à SIA Assurances de proposer les meilleures solutions en fonction de mes besoins spécifiques.",
      author: "Marie Dupont",
      role: "Dirigeante, PME BTP"
    },
    {
      id: 2,
      content: "J'apprécie particulièrement l'engagement de SIA Assurances à revenir vers moi dans les 24H et leur accompagnement constant, même bien après la souscription de mon contrat.",
      author: "Thomas Laurent",
      role: "Architecte indépendant"
    },
    {
      id: 3,
      content: "En tant que courtier indépendant, SIA Assurances a su solliciter les meilleurs assureurs pour la couverture de mes risques professionnels, avec un conseil vraiment impartial.",
      author: "Sophie Martin",
      role: "Artisan, rénovation d'intérieur"
    },
    {
      id: 4,
      content: "La transparence de SIA Assurances sur leur rémunération par frais de gestion et commissions des compagnies d'assurance est un gage de confiance pour une relation à long terme.",
      author: "Philippe Moreau",
      role: "Promoteur immobilier"
    }
  ];

  // Nous n'avons que 3 témoignages, donc nous les affichons tous directement
  // sans navigation ni pagination
  
  // Nous n'utilisons plus la détection de taille d'écran car tous les témoignages sont affichés
  
  // Nous avons supprimé l'effet useEffect car nous n'utilisons plus la détection de taille d'écran
  
  // Animation variants simplifiés sans effet d'apparition
  const containerVariants = {
    visible: {
      opacity: 1
    }
  };
  
  const itemVariants = {
    visible: {
      opacity: 1,
      y: 0
    }
  };
  
  // Les variantes pour les transitions entre témoignages ont été supprimées
  // car tous les témoignages sont affichés en même temps
  
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden relative" id="testimonials">
      {/* Motifs décoratifs en arrière-plan */}
      <div className="absolute inset-0 opacity-5 z-0 overflow-hidden">
        {/* Motif en grille */}
        <svg width="100%" height="100%" className="absolute inset-0">
          <pattern id="testimonials-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#testimonials-grid)" />
        </svg>
        
        {/* Points aléatoires - fixés pour éviter des calculs aléatoires à chaque rendu */}
        {Array.from({ length: 50 }).map((_, i) => {
          // Utiliser l'indice pour générer des valeurs pseudo-aléatoires mais consistantes
          const size = 1 + (i % 3);
          const top = (i * 7.3) % 100;
          const left = (i * 13.7) % 100;
          const opacity = 0.05 + (i % 10) / 100;
          
          return (
            <div 
              key={i}
              className="absolute bg-blue-900 rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${top}%`,
                left: `${left}%`,
                opacity,
              }}
            />
          );
        })}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Éléments décoratifs animés */}
        <motion.div 
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full opacity-60 blur-[100px]"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" as const 
          }}
        />
        
        <motion.div 
          className="absolute -bottom-20 right-1/3 w-80 h-80 bg-gradient-to-tr from-indigo-50 to-blue-50 rounded-full opacity-50 blur-[80px]"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" as const 
          }}
        />
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"
          initial="visible"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }}>
            <span className="inline-block px-5 py-2 mb-5 text-sm font-medium text-blue-800 bg-gradient-to-r from-blue-50 to-blue-100 rounded-full shadow-sm border border-blue-100 hover:shadow-md hover:border-blue-200 transition-all duration-300 relative">
              <div className="absolute inset-0 bg-blue-400 opacity-0 rounded-full blur-md group-hover:opacity-20 transition-opacity duration-300"></div>
              <span className="relative inline-flex items-center">
                <motion.svg className="w-4 h-4 mr-1 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                  animate={{ rotate: [0, 15] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "mirror" as const,
                    duration: 1.5,
                    ease: "easeInOut" as const,
                    type: "tween" as const
                  }}

                >
                  <path d="M12 17L6 17M18 7L12 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </motion.svg>
                Témoignages
              </span>
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 relative z-10"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring" as const, stiffness: 200 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-500">
              Ce que nos clients disent
            </span>
            
            {/* Points décoratifs autour du titre */}
            <motion.div 
              className="absolute -top-6 -right-6 w-4 h-4 bg-blue-200 rounded-full opacity-50"
              animate={{ scale: [1, 1.5] }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse" as const,
                duration: 2,
                ease: "easeInOut" as const,
                type: "tween" as const
              }}

            />
            <motion.div 
              className="absolute -bottom-6 -left-6 w-3 h-3 bg-blue-300 rounded-full opacity-60"
              animate={{ scale: [1, 1.3] }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse" as const,
                duration: 2.5,
                ease: "easeInOut" as const,
                type: "tween" as const
              }}

            />
          </motion.h2>
          
          <motion.div 
            className="w-32 h-1.5 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 mx-auto rounded-full mb-8 shadow-lg"
            variants={itemVariants}
            whileHover={{ 
              width: '12rem', 
              boxShadow: '0 0 15px rgba(59, 130, 246, 0.6)' 
            }}
            animate={{
              backgroundPosition: ['0%', '100%', '0%'],
            }}
            transition={{ 
              backgroundPosition: {
                duration: 10,
                repeat: Infinity,
                ease: "linear" as const
              },
              width: {
                type: "spring" as const,
                stiffness: 400,
                damping: 10
              }
            }}
            style={{
              backgroundSize: '200% 100%'
            }}
          />
          
          <motion.p 
            className="mt-6 max-w-2xl text-xl leading-relaxed text-gray-600 mx-auto font-light"
            variants={itemVariants}
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Découvrez les témoignages de ceux qui nous font confiance
            <motion.span 
              className="inline-block ml-1 text-blue-500"
              animate={{ y: [0, -3] }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse" as const,
                duration: 1.5,
                ease: "easeInOut" as const,
                type: "tween" as const
              }}

            >
              .
            </motion.span>
          </motion.p>
        </motion.div>
        
        {/* Grille des témoignages sans animation de transition */}
        <div className="mt-12 relative">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial) => (
                <motion.div 
                  key={testimonial.id}
                  className="h-full"
                  initial={{ opacity: 1, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <TestimonialCard
                    id={testimonial.id}
                    content={testimonial.content}
                    author={testimonial.author}
                    role={testimonial.role}
                  />
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
