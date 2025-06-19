'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Types pour les options de la calculatrice
type InsuranceType = 'decennale' | 'dommages-ouvrage' | 'rc-promoteur';
type CompanySize = 'auto-entrepreneur' | 'petite' | 'moyenne' | 'grande';
type ActivityType = 'gros-oeuvre' | 'second-oeuvre' | 'corps-etat-technique';
type Experience = 'moins-2-ans' | '2-5-ans' | 'plus-5-ans';

// Composant calculatrice d'assurance
const InsuranceCalculator = () => {
  // États pour les champs du formulaire
  const [insuranceType, setInsuranceType] = useState<InsuranceType>('decennale');
  const [companySize, setCompanySize] = useState<CompanySize>('petite');
  const [activityType, setActivityType] = useState<ActivityType>('second-oeuvre');
  const [experience, setExperience] = useState<Experience>('2-5-ans');
  const [revenue, setRevenue] = useState<number>(100000);
  const [estimatedPremium, setEstimatedPremium] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);

  // Fonction pour calculer l'estimation de la prime
  const calculatePremium = () => {
    setIsCalculating(true);
    
    // Simulation d'un calcul avec délai pour effet visuel
    setTimeout(() => {
      let baseRate = 0;
      
      // Taux de base selon le type d'assurance
      switch (insuranceType) {
        case 'decennale':
          baseRate = 0.005; // 0.5% du CA
          break;
        case 'dommages-ouvrage':
          baseRate = 0.02; // 2% du montant des travaux (revenue utilisé comme approximation)
          break;
        case 'rc-promoteur':
          baseRate = 0.01; // 1% du CA
          break;
      }
      
      // Multiplicateur selon la taille de l'entreprise
      let sizeMultiplier = 1;
      switch (companySize) {
        case 'auto-entrepreneur':
          sizeMultiplier = 1.2; // +20% pour les auto-entrepreneurs (risque plus élevé)
          break;
        case 'petite':
          sizeMultiplier = 1;
          break;
        case 'moyenne':
          sizeMultiplier = 0.9; // -10% pour les entreprises moyennes
          break;
        case 'grande':
          sizeMultiplier = 0.8; // -20% pour les grandes entreprises
          break;
      }
      
      // Multiplicateur selon le type d'activité
      let activityMultiplier = 1;
      switch (activityType) {
        case 'gros-oeuvre':
          activityMultiplier = 1.5; // +50% pour le gros œuvre (risque plus élevé)
          break;
        case 'second-oeuvre':
          activityMultiplier = 1;
          break;
        case 'corps-etat-technique':
          activityMultiplier = 1.3; // +30% pour les corps d'état techniques
          break;
      }
      
      // Multiplicateur selon l'expérience
      let experienceMultiplier = 1;
      switch (experience) {
        case 'moins-2-ans':
          experienceMultiplier = 1.4; // +40% pour les entreprises récentes
          break;
        case '2-5-ans':
          experienceMultiplier = 1.1; // +10% pour expérience moyenne
          break;
        case 'plus-5-ans':
          experienceMultiplier = 0.9; // -10% pour expérience confirmée
          break;
      }
      
      // Calcul de la prime estimée
      const calculatedPremium = revenue * baseRate * sizeMultiplier * activityMultiplier * experienceMultiplier;
      
      // Arrondi à l'entier le plus proche
      setEstimatedPremium(Math.round(calculatedPremium));
      setIsCalculating(false);
      setShowResult(true);
    }, 800);
  };

  // Réinitialiser le résultat quand les paramètres changent
  useEffect(() => {
    if (showResult) {
      setShowResult(false);
    }
  }, [insuranceType, companySize, activityType, experience, revenue]);

  return (
    <motion.section 
      className="py-16 bg-white"
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
            Estimation rapide
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">Calculatrice de prime d'assurance</h2>
          <motion.div 
            className="w-20 h-1 bg-blue-600 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          <p className="text-gray-600">
            Obtenez une estimation rapide de votre prime d'assurance en fonction de votre activité et de votre profil.
          </p>
        </div>

        <motion.div 
          className="bg-white rounded-xl shadow-lg p-6 md:p-8"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Type d'assurance */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">Type d'assurance</label>
              <select
                value={insuranceType}
                onChange={(e) => setInsuranceType(e.target.value as InsuranceType)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-800"
              >
                <option value="decennale">Garantie décennale</option>
                <option value="dommages-ouvrage">Dommages ouvrage</option>
                <option value="rc-promoteur">RC Promoteur</option>
              </select>
            </div>

            {/* Taille de l'entreprise */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">Taille de l'entreprise</label>
              <select
                value={companySize}
                onChange={(e) => setCompanySize(e.target.value as CompanySize)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-800"
              >
                <option value="auto-entrepreneur">Auto-entrepreneur</option>
                <option value="petite">Petite entreprise (1-10 salariés)</option>
                <option value="moyenne">Moyenne entreprise (11-50 salariés)</option>
                <option value="grande">Grande entreprise (50+ salariés)</option>
              </select>
            </div>

            {/* Type d'activité */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">Type d'activité</label>
              <select
                value={activityType}
                onChange={(e) => setActivityType(e.target.value as ActivityType)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-800"
              >
                <option value="gros-oeuvre">Gros œuvre (maçonnerie, charpente...)</option>
                <option value="second-oeuvre">Second œuvre (peinture, carrelage...)</option>
                <option value="corps-etat-technique">Corps d'état technique (électricité, plomberie...)</option>
              </select>
            </div>

            {/* Expérience */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">Expérience</label>
              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value as Experience)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-800"
              >
                <option value="moins-2-ans">Moins de 2 ans</option>
                <option value="2-5-ans">Entre 2 et 5 ans</option>
                <option value="plus-5-ans">Plus de 5 ans</option>
              </select>
            </div>

            {/* Chiffre d'affaires */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Chiffre d'affaires annuel (€)
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <input
                  type="number"
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  min="10000"
                  step="10000"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-800"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-700 sm:text-sm">€</span>
                </div>
              </div>
              <div className="mt-2">
                <input
                  type="range"
                  min="10000"
                  max="10000000"
                  step="10000"
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>10K€</span>
                  <span>10M€</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={calculatePremium}
              disabled={isCalculating}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300 shadow-md hover:shadow-lg flex items-center"
            >
              {isCalculating ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Calcul en cours...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Calculer ma prime
                </>
              )}
            </button>
          </div>

          {/* Résultat */}
          <AnimatedResult show={showResult} premium={estimatedPremium} />
          
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>Cette estimation est donnée à titre indicatif et ne constitue pas un engagement contractuel.</p>
            <p className="mt-1">Pour une offre personnalisée, veuillez nous contacter.</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// Composant pour afficher le résultat avec animation
const AnimatedResult: React.FC<{ show: boolean; premium: number | null }> = ({ show, premium }) => {
  if (!show || premium === null) return null;

  return (
    <motion.div
      className="mt-8 p-6 bg-blue-50 border border-blue-100 rounded-lg"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <h3 className="text-lg font-medium text-gray-900 mb-2">Estimation de votre prime annuelle</h3>
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
        >
          <span className="text-3xl font-bold text-blue-700">
            {premium.toLocaleString('fr-FR')} €
          </span>
          <span className="text-gray-500 ml-1 text-lg">/an</span>
        </motion.div>
        <p className="mt-4 text-sm text-gray-600">
          Cette estimation est basée sur les informations que vous avez fournies.
          Pour une offre sur mesure, n'hésitez pas à nous contacter.
        </p>
        <div className="mt-4">
          <a
            href="/devis"
            className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-md transition-colors duration-300"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Demander un devis précis
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default InsuranceCalculator;
