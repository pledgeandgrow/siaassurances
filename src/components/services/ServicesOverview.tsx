'use client';

import React, { useState } from 'react';
import { FaShieldAlt, FaBuilding, FaTools, FaHandshake, FaHardHat, FaUserTie } from 'react-icons/fa';

// Types pour les services
type Service = {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
  features: string[];
};

type ServiceCardProps = {
  service: Service;
};

// Types pour les catégories
type Category = {
  id: string;
  name: string;
};

// Définition des catégories de services
const categories: Category[] = [
  { id: 'all', name: 'Tous les services' },
  { id: 'construction', name: 'Construction' },
  { id: 'responsabilite', name: 'Responsabilité' },
  { id: 'entreprise', name: 'Entreprise' },
];

// Définition des services avec leurs catégories

const services: Service[] = [
  {
    id: 1,
    icon: FaBuilding,
    title: "Garantie décennale",
    description: "Assurance obligatoire pour les professionnels du bâtiment selon l'article 1792 du Code civil.",
    features: ["Protection contre les dommages affectant la solidité de l'ouvrage", "Couverture sur 10 ans après réception", "Gage de sérieux auprès de vos clients"],
    category: "construction"
  },
  {
    id: 2,
    icon: FaTools,
    title: "Garantie tous risques chantier",
    description: "Couverture de la phase de construction jusqu'à l'achèvement de l'ouvrage.",
    features: ["Protection contre effondrements et incendies", "Couverture des dégâts des eaux", "Garanties complémentaires disponibles"],
    category: "construction"
  },
  {
    id: 3,
    icon: FaShieldAlt,
    title: "Dommages ouvrage",
    description: "Obligation d'assurance pour tous les maîtres d'ouvrage selon l'article L 242-1 du Code des assurances.",
    features: ["Pré-financement des dommages de nature décennale", "Couverture indépendante de la recherche de responsabilité", "Garantie sur 10 ans"],
    category: "construction"
  },
  {
    id: 4,
    icon: FaHandshake,
    title: "RC Promoteur",
    description: "Couverture de la responsabilité lors de la réalisation d'opérations immobilières.",
    features: ["Protection lors des opérations en VEFA", "Couverture des missions administratives et juridiques", "Solutions adaptées auprès des assureurs"],
    category: "responsabilite"
  },
  {
    id: 5,
    icon: FaHardHat,
    title: "Garantie constructeur non réalisateur",
    description: "Assurance obligatoire pour le constructeur n'ayant pas participé matériellement à l'acte de construire.",
    features: ["Assimilation au constructeur selon l'article 1792-1", "Obligation d'assurance décennale", "Protection complète"],
    category: "construction"
  },
  {
    id: 6,
    icon: FaUserTie,
    title: "Responsabilité civile des mandataires sociaux",
    description: "Protection de la responsabilité personnelle des dirigeants d'entreprise.",
    features: ["Couverture des frais de défense civils et pénaux", "Protection du patrimoine personnel et professionnel", "Couverture des dommages et intérêts"],
    category: "entreprise"
  }
];

const ServicesOverview = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Filtrer les services en fonction de la catégorie active
  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50/30 to-white relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/20 rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-100/10 rounded-tr-full" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-200/10 rounded-full" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          {/* Badge supérieur */}
          <div className="inline-flex items-center justify-center px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full mb-4 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-semibold">Nos services d&apos;assurance</span>
          </div>
          
          {/* Titre principal */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-blue-800">Solutions d&apos;assurance </span>
            <span className="text-blue-600">professionnelles</span>
          </h2>
          
          {/* Séparateur */}
          <div className="w-24 h-1 mx-auto bg-blue-600 rounded-full mb-6" />
          
          {/* Description */}
          <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-10">
            Nous proposons des solutions d&apos;assurance adaptées aux professionnels du bâtiment et aux chefs d&apos;entreprise, 
            avec un accompagnement personnalisé dans le domaine des assurances de biens, de personnes et de responsabilités.
          </p>
          
          {/* Filtres de catégories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${activeCategory === category.id 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-100'}`}
              >
                {category.id === 'all' && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
                )}
                {category.id === 'construction' && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                  </svg>
                )}
                {category.id === 'responsabilite' && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                )}
                {category.id === 'entreprise' && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
                  </svg>
                )}
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Message si aucun service ne correspond au filtre */}
        {filteredServices.length === 0 ? (
          <div className="text-center p-10 bg-gray-50 rounded-lg shadow-sm">
            <p className="text-gray-600">Aucun service ne correspond à cette catégorie.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}
        
        {/* Badge décoratif */}
        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full group hover:bg-blue-100 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
            <span className="text-sm font-medium">Solutions SIA Assurances</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Version simplifiée du composant ServiceCard sans animations framer-motion
const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 group relative">
      {/* Barre colorée en haut */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-600" />
      
      <div className="p-6">
        <div className="flex items-center mb-5">
          <div className="bg-blue-50 p-3 rounded-lg mr-4 group-hover:bg-blue-100 transition-colors duration-300">
            <service.icon className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
            {service.title}
          </h3>
        </div>
        
        <p className="text-gray-600 mb-5 leading-relaxed">{service.description}</p>
        
        <div className="bg-blue-50/50 rounded-lg p-4 mb-5">
          <ul className="space-y-2.5">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="h-5 w-5 text-blue-600 mr-2.5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Badge Solution SIA */}
        <div className="flex justify-end">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
            Solution SIA
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;
