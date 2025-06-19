'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useRippleEffect } from '@/hooks/useRippleEffect';
import { buildingIcon, personIcon, shieldIcon, documentIcon, chatIcon, boltIcon } from './icons';
import Image from 'next/image';

// Types pour les composants
interface ButtonProps {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ href, variant = 'primary', size = 'md', className = '', children, onClick }) => {
  const baseClasses = 'inline-block font-medium rounded-md transition-all duration-300';
  
  const variantClasses = {
    primary: 'bg-blue-800 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-white',
    outline: 'bg-transparent border-2 border-blue-800 text-blue-800 hover:bg-blue-50'
  };
  
  const sizeClasses = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-2.5',
    lg: 'text-lg px-8 py-3'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return href ? (
    <a href={href} className={classes} onClick={onClick as any}>
      {children}
    </a>
  ) : (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

interface ServiceTabProps {
  id: string;
  name: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

// Variants d'animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      duration: 0.3,
      ease: "easeOut" as const,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 60,
      damping: 13
    }
  }
};

const tabVariants = {
  inactive: { scale: 1 },
  active: {
    scale: 1.05,
    backgroundColor: "rgba(239, 246, 255, 1)",
    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.15), 0 8px 10px -6px rgba(59, 130, 246, 0.1)",
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20
    }
  }
};

// Types pour les services
type ServiceDetailsProps = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  benefits: string[];
  imageSrc?: string;
  cta?: {
    text: string;
    url: string;
  };
};

// Données des services
const servicesData = {
  assuranceBiens: {
    id: "biens",
    title: "Garantie décennale",
    description: "L'article 1792 et suivants du Code civil instaurent l'obligation d'assurance pour les constructeurs de tous les corps d'état.",
    icon: buildingIcon,
    imageSrc: "/images/services/property-insurance.jpg",
    features: [
      "Couverture pour tous les corps d'état : maçonnerie, carrelage, couverture, étanchéité, plomberie, etc.",
      "Protection contre les dommages affectant la solidité de l'ouvrage",
      "Couverture sur 10 ans après réception du chantier",
      "Protection contre les sinistres pouvant coûter plusieurs centaines de milliers d'euros"
    ],
    benefits: [
      "Gage de sérieux et sécurité vis-à-vis de vos clients",
      "Conformité avec les obligations légales",
      "Protection de votre entreprise contre les conséquences financières néfastes"
    ],
    cta: {
      text: "Obtenir un devis gratuit",
      url: "/devis"
    }
  },
  assurancePersonnes: {
    id: "personne",
    title: "Garantie tous risques chantier",
    description: "Une police facultative mais vivement recommandée qui permet de couvrir toute la phase de construction d'un ouvrage jusqu'à son achèvement.",
    icon: personIcon,
    imageSrc: "/images/services/life-insurance.jpg",
    features: [
      "Protection contre les effondrements",
      "Couverture en cas d'incendie",
      "Garantie contre les dégâts des eaux",
      "Protection en cas de catastrophe naturelle, vol ou vandalisme"
    ],
    benefits: [
      "Garanties complémentaires disponibles pour les dommages immatériels",
      "Couverture des pertes d'exploitation",
      "Protection pour les dommages causés aux existants"
    ],
    cta: {
      text: "Demander un devis",
      url: "/devis"
    }
  },
  responsabiliteCivile: {
    id: "rc",
    title: "Dommages ouvrage",
    description: "L'article L 242-1 du Code des assurances instaure une obligation d'assurances pour tous les maîtres d'ouvrage, qu'ils soient professionnels ou particuliers.",
    icon: shieldIcon,
    imageSrc: "/images/services/liability-insurance.jpg",
    features: [
      "Pré-financement des dommages de nature décennale",
      "Couverture indépendante de toute recherche de responsabilité",
      "Protection des dommages compromettant la solidité de l'ouvrage",
      "Garantie bénéficiant aux propriétaires successifs pendant 10 ans"
    ],
    benefits: [
      "Indemnisation rapide sans attendre la recherche de responsabilité",
      "Transfert de la garantie aux propriétaires successifs",
      "Conformité avec les obligations légales pour les maîtres d'ouvrage"
    ],
    cta: {
      text: "Demander un devis",
      url: "/devis"
    }
  },
  auditContrats: {
    id: "audit",
    title: "RC Promoteur",
    description: "Lors de la réalisation d'opérations immobilières, notamment dans le cadre de la VEFA, le promoteur peut voir sa responsabilité engagée pour les dommages causés aux tiers.",
    icon: documentIcon,
    imageSrc: "/images/services/contract-audit.jpg",
    features: [
      "Couverture des études préalables et recherche de terrain",
      "Protection lors des travaux de démolition et construction",
      "Garantie pour la vente d'immeubles",
      "Couverture des missions administratives, juridiques et financières"
    ],
    benefits: [
      "Protection complète pour les opérations immobilières",
      "Solutions pertinentes auprès des assureurs",
      "Sécurisation de vos projets de promotion immobilière"
    ],
    cta: {
      text: "Demander un devis",
      url: "/devis"
    }
  },
  conseilPersonnalise: {
    id: "conseil",
    title: "Garantie constructeur non réalisateur",
    description: "Selon l'article 1792-1 du Code civil, toute personne qui vend, après achèvement, un ouvrage qu'elle a fait construire est assimilée à un constructeur.",
    icon: chatIcon,
    imageSrc: "/images/services/personal-advice.jpg",
    features: [
      "Obligation d'assurance décennale pour les constructeurs non réalisateurs",
      "Couverture pour les vendeurs d'immeubles après achèvement",
      "Protection pour les promoteurs et marchands de biens",
      "Garantie pour les maîtres d'ouvrage délégués"
    ],
    benefits: [
      "Conformité avec les obligations légales",
      "Protection contre les recours des acquéreurs",
      "Sécurisation de vos opérations immobilières"
    ],
    cta: {
      text: "Demander un devis",
      url: "/devis"
    }
  },
  gestionSinistres: {
    id: "sinistre",
    title: "Responsabilité civile des mandataires sociaux",
    description: "Protection de la responsabilité personnelle des dirigeants d'entreprise, qui peut être engagée pour des fautes de gestion commises dans l'exercice de leurs fonctions.",
    icon: boltIcon,
    imageSrc: "/images/services/claims-management.jpg",
    features: [
      "Couverture des frais de défense civils et pénaux",
      "Protection du patrimoine personnel et professionnel",
      "Couverture des dommages et intérêts",
      "Solutions adaptées aux PME et grandes entreprises"
    ],
    benefits: [
      "Sérénité dans l'exercice de vos fonctions de dirigeant",
      "Protection contre les actions en responsabilité",
      "Couverture étendue pour les administrateurs et dirigeants"
    ],
    cta: {
      text: "Demander un devis",
      url: "/devis"
    }
  }
};

interface ServiceTabProps {
  id: string;
  name: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

// Composant pour les onglets de navigation des services
const ServiceTab: React.FC<ServiceTabProps> = ({ id, name, icon, isActive, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg w-full text-left transition-all ${isActive 
        ? 'bg-blue-50 text-blue-800 shadow-sm'
        : 'bg-white text-gray-700 hover:bg-gray-50'}`}
      variants={tabVariants}
      animate={isActive ? "active" : "inactive"}
      whileHover={{ x: isActive ? 0 : 5 }}
      transition={{ type: "spring" as const, stiffness: 300, damping: 15 }}
    >
      <motion.div 
        className={`${isActive ? 'text-blue-700' : 'text-gray-500'}`}
        animate={{ rotate: isActive ? [0, -10] : 0 }}
        transition={{
          repeat: isActive ? Infinity : 0,
          repeatType: "mirror" as const,
          duration: 1.5,
          ease: "easeInOut" as const,
          type: "tween" as const
        }}

      >
        {icon}
      </motion.div>
      <span className="font-medium">{name}</span>
    </motion.button>
  );
};

// Composant pour le détail d'un service individuel
const ServiceDetailsItem = ({ id, title, description, icon, features, benefits, imageSrc, cta }: ServiceDetailsProps) => {
  const { createRipple } = useRippleEffect();
  
  return (
    <motion.div 
      id={id}
      className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden mb-16 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      transition={{ type: "spring" as const, stiffness: 200, damping: 20 }}
    >
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        <div className="absolute right-0 top-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-transparent rounded-full transform translate-x-1/3 -translate-y-1/3 opacity-20"></div>
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-gradient-to-tr from-green-100 to-transparent rounded-full transform -translate-x-1/3 translate-y-1/3 opacity-20"></div>
      </div>
      
      <div className="md:flex relative z-10">
        <motion.div 
          className="md:w-1/2"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-br from-blue-800 to-blue-900 p-8 flex justify-center items-center h-40 md:h-full">
            <motion.div 
              className="text-white h-20 w-20"
              whileHover={{ scale: 1.15, rotate: -5 }}
              transition={{ type: "spring" as const, stiffness: 300, damping: 10 }}
            >
              {icon}
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 p-8"
          variants={itemVariants}
        >
          <motion.div 
            className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            Solution spécialisée
          </motion.div>
          
          <motion.h3 
            className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600"
            variants={itemVariants}
            whileHover={{ x: 5 }}
            transition={{ type: "spring" as const, stiffness: 500 }}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="text-gray-600 mb-6 leading-relaxed"
            variants={itemVariants}
          >
            {description}
          </motion.p>
          
          {cta && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring" as const, stiffness: 400, damping: 10 }}
            >
              <Button 
                href={cta.url}
                variant="primary"
                size="lg"
                className="shadow-lg hover:shadow-blue-200/50"
                onClick={(e) => createRipple(e as any)}
              >
                {cta.text}
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
      
      {imageSrc && (
        <motion.div 
          className="px-8 py-4 bg-gray-50"
          variants={itemVariants}
        >
          <motion.div 
            className="relative h-64 w-full rounded-lg overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image 
              src={imageSrc}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
          </motion.div>
        </motion.div>
      )}
      
      <motion.div 
        className="p-8 grid md:grid-cols-2 gap-8"
        variants={containerVariants}
      >
        <motion.div 
          className="bg-blue-50 p-6 rounded-lg border border-blue-100 relative overflow-hidden"
          variants={itemVariants}
          whileHover={{ y: -5, boxShadow: "0 4px 20px -5px rgba(59, 130, 246, 0.3)" }}
          transition={{ type: "spring" as const, stiffness: 200, damping: 20 }}
        >
          {/* Élément décoratif */}
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-blue-200 opacity-10 transform translate-x-1/3 -translate-y-1/3" />
          
          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center relative z-10">
            <motion.div
              animate={{ rotate: [0, 10] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror" as const,
                duration: 2,
                ease: "easeInOut" as const,
                type: "tween" as const
              }}

              className="mr-2"
            >
              <svg className="h-5 w-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </motion.div>
            Caractéristiques clés
          </h4>
          
          <ul className="space-y-3 relative z-10">
            {features.map((feature, index) => (
              <motion.li 
                key={index} 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="mr-3 mt-0.5 flex-shrink-0"
                >
                  <svg className="h-5 w-5 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <span className="text-gray-700">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div 
          className="bg-green-50 p-6 rounded-lg border border-green-100 relative overflow-hidden"
          variants={itemVariants}
          whileHover={{ y: -5, boxShadow: "0 4px 20px -5px rgba(34, 197, 94, 0.3)" }}
          transition={{ type: "spring" as const, stiffness: 200, damping: 20 }}
        >
          {/* Élément décoratif */}
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-green-200 opacity-10 transform translate-x-1/3 -translate-y-1/3" />
          
          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center relative z-10">
            <motion.div
              animate={{ rotate: [0, 15] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror" as const,
                duration: 2.5,
                ease: "easeInOut" as const,
                type: "tween" as const
              }}

              className="mr-2"
            >
              <svg className="h-5 w-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </motion.div>
            Avantages
          </h4>
          
          <ul className="space-y-3 relative z-10">
            {benefits.map((benefit, index) => (
              <motion.li 
                key={index} 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="mr-3 mt-0.5 flex-shrink-0"
                >
                  <svg className="h-5 w-5 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                </motion.div>
                <span className="text-gray-700">{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Composant principal
const ServicesDetail = () => {
  // Aucun onglet actif par défaut
  const [activeTab, setActiveTab] = useState("");
  const { createRipple } = useRippleEffect();
  const contentRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);
  const isManualChange = useRef(false);
  
  // Références pour chaque section de service
  const sectionRefs = {
    biens: useRef<HTMLDivElement>(null),
    personne: useRef<HTMLDivElement>(null),
    rc: useRef<HTMLDivElement>(null),
    audit: useRef<HTMLDivElement>(null),
    conseil: useRef<HTMLDivElement>(null),
    sinistre: useRef<HTMLDivElement>(null),
  };
  
  // Animation variants pour le conteneur principal
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };
  
  // Fonction pour changer de service actif
  const handleServiceChange = (service: { id: string, name: string, icon?: React.ReactNode }) => {
    // Marquer ce changement comme manuel pour permettre le défilement 
    isManualChange.current = true;
    
    // Si l'onglet est déjà actif et qu'on clique dessus à nouveau, on le désactive
    // sinon on l'active
    setActiveTab(activeTab === service.id ? "" : service.id);
  };
  
  // Réactivation du défilement fluide mais uniquement lorsqu'un onglet est sélectionné
  useEffect(() => {
    // Ne pas scroller lors du premier rendu (chargement initial de la page)
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    
    // Si l'utilisateur a cliqué manuellement sur un onglet
    if (activeTab && isManualChange.current) {
      isManualChange.current = false;
      
      const targetElement = document.getElementById(`service-${activeTab}`);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [activeTab]);
  
  // Configuration de l'Intersection Observer pour mettre à jour le menu lors du défilement
  useEffect(() => {
    // Attendre que le DOM soit complètement chargé
    if (!isInitialMount.current) {
      const observerOptions = {
        root: null, // utiliser le viewport comme zone d'observation
        rootMargin: '-100px 0px -60% 0px', // décaler la zone d'intersection
        threshold: 0.2, // déclencher lorsque 20% de l'élément est visible
      };
      
      // Gestionnaire d'intersection
      const handleIntersect = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Extraire l'ID de section du format "service-xxx"
            const sectionId = entry.target.id.replace('service-', '');
            
            // Ne mettre à jour l'onglet actif que si le changement n'est pas déjà en cours
            // pour éviter les boucles infinies
            if (activeTab !== sectionId && !isManualChange.current) {
              setActiveTab(sectionId);
            }
          }
        });
      };
      
      // Créer l'observer
      const observer = new IntersectionObserver(handleIntersect, observerOptions);
      
      // Observer toutes les sections
      document.querySelectorAll('[id^="service-"]').forEach((section) => {
        observer.observe(section);
      });
      
      // Nettoyage
      return () => {
        observer.disconnect();
      };
    }
  }, [activeTab]);
  
  const servicesTabs = [
    { id: "biens", name: "Garantie décennale", icon: buildingIcon },
    { id: "personne", name: "Garantie tous risques chantier", icon: personIcon },
    { id: "rc", name: "Dommages ouvrage", icon: shieldIcon },
    { id: "audit", name: "RC Promoteur", icon: documentIcon },
    { id: "conseil", name: "Garantie constructeur non réalisateur", icon: chatIcon },
    { id: "sinistre", name: "RC mandataires sociaux", icon: boltIcon },
  ];
  
  return (
    <motion.section 
      className="py-16 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={pageVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          variants={itemVariants}
        >
          <motion.span 
            className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-3"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Assurances professionnelles
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Nos produits d'assurance</h2>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg">Découvrez nos solutions d'assurance spécialisées pour les professionnels du bâtiment et les chefs d'entreprise.</p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <motion.div 
            className="lg:w-1/4"
            variants={itemVariants}
          >
            <div className="bg-white rounded-xl shadow-md p-4 sticky top-24">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 px-2">Nos produits</h3>
              <div className="space-y-2">
                {servicesTabs.map(service => (
                  <ServiceTab
                    key={service.id}
                    id={service.id}
                    name={service.name}
                    icon={service.icon}
                    isActive={activeTab === service.id}
                    onClick={() => handleServiceChange(service)}
                  />
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-3/4"
            variants={containerVariants}
            ref={contentRef}
          >
            {/* Assurance de Biens */}
            <div className="scroll-mt-32" id="service-biens">
              <ServiceDetailsItem 
                {...servicesData.assuranceBiens}
              />
            </div>
            
            {/* Assurance de Personnes */}
            <div className="scroll-mt-32" id="service-personne">
              <ServiceDetailsItem 
                {...servicesData.assurancePersonnes}
              />
            </div>
            
            {/* Responsabilité Civile */}
            <div className="scroll-mt-32" id="service-rc">
              <ServiceDetailsItem 
                {...servicesData.responsabiliteCivile}
              />
            </div>
            
            {/* Audit de Contrats */}
            <div className="scroll-mt-32" id="service-audit">
              <ServiceDetailsItem
                {...servicesData.auditContrats}
              />
            </div>
            
            {/* Conseil Personnalisé */}
            <div className="scroll-mt-32" id="service-conseil">
              <ServiceDetailsItem 
                {...servicesData.conseilPersonnalise}
              />
            </div>
            
            {/* Gestion de Sinistres */}
            <div className="scroll-mt-32" id="service-sinistre">
              <ServiceDetailsItem 
                {...servicesData.gestionSinistres}
              />
            </div>
            
            {/* Bouton retour en haut */}
            <motion.div 
              className="flex justify-center mt-10"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 px-5 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                Retour en haut
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesDetail;
