'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Type pour les questions/réponses
type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: "Qu'est-ce que l'assurance décennale et qui doit la souscrire ?",
    answer: "L'assurance décennale est une garantie obligatoire pour tous les professionnels du bâtiment selon l'article 1792 du Code civil. Elle couvre les dommages qui compromettent la solidité de l'ouvrage ou le rendent impropre à sa destination pendant une période de 10 ans après la réception des travaux. Tous les artisans et entreprises du bâtiment doivent la souscrire avant de commencer leurs travaux."
  },
  {
    question: "Quelle est la différence entre la garantie décennale et la garantie dommages-ouvrage ?",
    answer: "La garantie décennale est souscrite par les professionnels du bâtiment et les couvre pendant 10 ans pour les dommages affectant la solidité de l'ouvrage. La garantie dommages-ouvrage est souscrite par le maître d'ouvrage (client) et permet d'obtenir une indemnisation rapide sans attendre la recherche de responsabilités. Ces deux assurances sont complémentaires mais ont des souscripteurs différents."
  },
  {
    question: "Comment est calculée la prime d'assurance pour une garantie tous risques chantier ?",
    answer: "La prime d'assurance pour une garantie tous risques chantier est calculée en fonction de plusieurs critères : le coût total des travaux, la nature de la construction, la durée du chantier, les techniques utilisées, l'expérience du constructeur, et les garanties choisies. Plus le chantier est complexe ou risqué, plus la prime sera élevée."
  },
  {
    question: "Quels sont les délais pour déclarer un sinistre dans le cadre d'une assurance construction ?",
    answer: "Pour une assurance construction, le sinistre doit être déclaré dès sa constatation et au plus tard dans les 5 jours ouvrés suivant sa découverte. Pour la garantie décennale, la déclaration doit être faite dans les 2 ans suivant la découverte du dommage, sachant que le dommage doit apparaître dans les 10 ans suivant la réception des travaux."
  },
  {
    question: "Un auto-entrepreneur du bâtiment doit-il souscrire une assurance décennale ?",
    answer: "Oui, les auto-entrepreneurs exerçant une activité dans le domaine du bâtiment sont soumis aux mêmes obligations que les autres professionnels. Ils doivent obligatoirement souscrire une assurance décennale avant de commencer leurs travaux, quelle que soit la taille des chantiers entrepris."
  },
  {
    question: "Que couvre exactement la RC Promoteur ?",
    answer: "La RC Promoteur (Responsabilité Civile Promoteur) couvre la responsabilité du promoteur immobilier lors de la réalisation d'opérations immobilières. Elle protège contre les conséquences pécuniaires des dommages causés aux tiers, les erreurs de conception, les vices de construction, les défauts de conformité, et les problèmes liés à la commercialisation des biens immobiliers."
  }
];

// Composant pour un élément FAQ individuel
const FAQItem: React.FC<{ item: FAQItem; isOpen: boolean; onClick: () => void; index: number }> = ({ 
  item, 
  isOpen, 
  onClick,
  index
}) => {
  return (
    <motion.div 
      className="border border-gray-200 rounded-lg mb-4 overflow-hidden bg-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: isOpen ? 1 : 1.01 }}
    >
      <button
        className={`w-full text-left p-5 flex justify-between items-center focus:outline-none ${
          isOpen ? 'bg-blue-50' : 'hover:bg-gray-50'
        }`}
        onClick={onClick}
      >
        <h3 className={`font-medium text-lg ${isOpen ? 'text-blue-700' : 'text-gray-800'}`}>
          {item.question}
        </h3>
        <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg
            className={`w-5 h-5 ${isOpen ? 'text-blue-600' : 'text-gray-500'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-0 border-t border-gray-100">
              <p className="text-gray-600">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Composant principal FAQ
const ServicesFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section 
      className="py-16 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.span 
            className="text-blue-600 font-medium text-sm uppercase tracking-wider"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Questions fréquentes
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">Foire aux questions</h2>
          <motion.div 
            className="w-20 h-1 bg-blue-600 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          <p className="text-gray-600">
            Retrouvez les réponses aux questions les plus fréquemment posées sur nos services d'assurance.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
              index={index}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="text-gray-600 mb-6">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            Contactez-nous
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesFAQ;
