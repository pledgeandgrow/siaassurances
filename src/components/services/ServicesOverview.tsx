'use client';

import React, { useState } from 'react';
import { motion, easeOut } from 'framer-motion';
import { buildingIcon, personIcon, shieldIcon, documentIcon, chatIcon, boltIcon } from './icons';

// Types pour les services
type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  index?: number; // Pour les animations séquentielles
  category: string; // Catégorie du service
};

// Variants pour les animations sans effet d'apparition
const cardVariants = {
  visible: (i: number) => ({
    opacity: 1,
    y: 0
  }),
};

const iconVariants = {
  visible: {
    scale: 1,
    opacity: 1
  },
  hover: {
    scale: 1.15,
    rotate: [0, 5],
    transition: { 
      type: "tween" as const,
      duration: 0.6,
      ease: "easeInOut" as const,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
};

const featureVariants = {
  visible: (i: number) => ({
    opacity: 1,
    x: 0
  }),
  hover: { x: 5, transition: { duration: 0.2 } }
};

// Composant pour la carte de service
const ServiceCard = ({ icon, title, description, features, index = 0 }: ServiceCardProps) => {
  return (
    <motion.div 
      className="relative group bg-white p-6 rounded-xl overflow-hidden"
      initial="visible"
      animate="visible"
      custom={index}
      variants={cardVariants}
      whileHover={{ y: -5 }}
    >
      {/* Fond décoratif qui apparaît au survol */}
      <motion.div 
        className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-xl"
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
      />

      {/* Ombre stylisée */}
      <div className="absolute inset-0 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300"></div>
      <div className="absolute inset-0 rounded-xl border border-gray-100 group-hover:border-blue-100 transition-colors duration-300"></div>

      {/* Icone avec animation */}
      <motion.div 
        className="relative z-10 text-blue-800 mb-6 flex justify-center"
        variants={iconVariants}
        whileHover="hover"
      >
        <div className="p-3 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300 shadow-md group-hover:shadow-lg">
          {icon}
        </div>
      </motion.div>

      {/* Titre avec soulignement animé */}
      <div className="relative z-10 mb-4">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-800 transition-colors duration-300">
          {title}
        </h3>
        <motion.div 
          className="h-0.5 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full w-0 group-hover:w-1/3 transition-all duration-500 mt-1"
        />
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-5 relative z-10">{description}</p>

      {/* Liste de fonctionnalités */}
      <ul className="space-y-3 relative z-10">
        {features.map((feature, i) => (
          <motion.li 
            key={i} 
            className="flex items-start group/item"
            variants={featureVariants}
            custom={i}
            whileHover="hover"
          >
            <motion.div 
              className="mr-3 mt-0.5 flex-shrink-0 h-5 w-5 relative"
              whileHover={{ rotate: 10 }}
            >
              <motion.div 
                className="absolute inset-0 bg-blue-100 rounded-full opacity-0 group-hover/item:opacity-60 scale-0 group-hover/item:scale-100 transition-all duration-300"
              />
              <svg className="h-5 w-5 text-blue-800 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
            <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200">{feature}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

// Variants pour les animations de la section sans effet d'apparition
const sectionVariants = {
  visible: {
    opacity: 1
  },
};

const headingVariants = {
  visible: {
    opacity: 1,
    y: 0
  },
};

const underlineVariants = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: "70px",
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easeOut, // Utilisation de l'easing fonction importée de framer-motion
      delay: 0.5,
    },
  },
};

// Définition des catégories de services
type Category = {
  id: string;
  name: string;
};

const categories: Category[] = [
  { id: 'all', name: 'Tous les services' },
  { id: 'construction', name: 'Construction' },
  { id: 'responsabilite', name: 'Responsabilité' },
  { id: 'entreprise', name: 'Entreprise' },
];

// Définition des services avec leurs catégories
const services = [
  {
    icon: buildingIcon,
    title: "Garantie décennale",
    description: "Assurance obligatoire pour les professionnels du bâtiment selon l'article 1792 du Code civil.",
    features: ["Protection contre les dommages affectant la solidité de l'ouvrage", "Couverture sur 10 ans après réception", "Gage de sérieux auprès de vos clients"],
    category: "construction"
  },
  {
    icon: personIcon,
    title: "Garantie tous risques chantier",
    description: "Couverture de la phase de construction jusqu'à l'achèvement de l'ouvrage.",
    features: ["Protection contre effondrements et incendies", "Couverture des dégâts des eaux", "Garanties complémentaires disponibles"],
    category: "construction"
  },
  {
    icon: shieldIcon,
    title: "Dommages ouvrage",
    description: "Obligation d'assurance pour tous les maîtres d'ouvrage selon l'article L 242-1 du Code des assurances.",
    features: ["Pré-financement des dommages de nature décennale", "Couverture indépendante de la recherche de responsabilité", "Garantie sur 10 ans"],
    category: "construction"
  },
  {
    icon: documentIcon,
    title: "RC Promoteur",
    description: "Couverture de la responsabilité lors de la réalisation d'opérations immobilières.",
    features: ["Protection lors des opérations en VEFA", "Couverture des missions administratives et juridiques", "Solutions adaptées auprès des assureurs"],
    category: "responsabilite"
  },
  {
    icon: chatIcon,
    title: "Garantie constructeur non réalisateur",
    description: "Assurance obligatoire pour le constructeur n'ayant pas participé matériellement à l'acte de construire.",
    features: ["Assimilation au constructeur selon l'article 1792-1", "Obligation d'assurance décennale", "Protection complète"],
    category: "construction"
  },
  {
    icon: boltIcon,
    title: "Responsabilité civile des mandataires sociaux",
    description: "Protection de la responsabilité personnelle des dirigeants d'entreprise.",
    features: ["Couverture des frais de défense civils et pénaux", "Protection du patrimoine personnel et professionnel", "Couverture des dommages et intérêts"],
    category: "entreprise"
  }
];

const ServicesOverview = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Fonction pour filtrer les services selon la catégorie active
  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);
  
  return (
    <motion.div 
      className="py-16 bg-gray-50 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Motif de cercles */}
        <svg className="absolute right-0 top-0 h-64 w-64 text-blue-100 opacity-20 transform translate-x-1/4 -translate-y-1/4" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="50" cy="50" r="50" />
        </svg>
        <svg className="absolute left-0 bottom-0 h-80 w-80 text-blue-50 opacity-20 transform -translate-x-1/4 translate-y-1/4" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="50" cy="50" r="50" />
        </svg>
        
        {/* Grille décorative */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" className="absolute inset-0">
            <pattern id="services-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.5"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#services-grid)" />
          </svg>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          <motion.span 
            className="text-blue-600 font-medium text-sm uppercase tracking-wider"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Nos services d'assurance
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">Solutions d'assurance professionnelles</h2>
          <motion.div 
            className="w-20 h-1 bg-blue-600 mx-auto mb-6 rounded-full"
            initial={{ width: 80 }}
            animate={{ width: 80 }}
          />
          
          <motion.p 
            className="text-gray-600 text-lg max-w-3xl mx-auto mb-8"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Nous proposons des solutions d'assurance adaptées aux professionnels du bâtiment et aux chefs d'entreprise, 
            avec un accompagnement personnalisé dans le domaine des assurances de biens, de personnes et de responsabilités.
          </motion.p>
          
          {/* Filtres de catégories */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-8"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category.id 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Message si aucun service ne correspond au filtre */}
        {filteredServices.length === 0 ? (
          <motion.div 
            className="text-center p-10 bg-gray-50 rounded-lg shadow-sm"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-600">Aucun service ne correspond à cette catégorie.</p>
          </motion.div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
            initial="visible"
            animate="visible"
            variants={sectionVariants}
          >
            {filteredServices.map((service, index) => (
              <ServiceCard 
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                category={service.category}
                index={index}
              />
            ))}
          </motion.div>
        )}
        
        {/* Badge décoratif */}
        <motion.div 
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <div className="bg-blue-50 border border-blue-100 rounded-full px-5 py-2 shadow-md flex items-center space-x-3 hover:shadow-lg transition-shadow duration-300 group">
            <svg className="h-5 w-5 text-blue-700 group-hover:animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm font-medium text-blue-800">
              L'expérience à votre service
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServicesOverview;
