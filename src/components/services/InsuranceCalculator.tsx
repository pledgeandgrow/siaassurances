'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
    setShowResult(false);
    
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
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-white via-blue-50/30 to-blue-100/40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-3 shadow-md">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Estimation rapide et gratuite
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Calculez votre prime d&apos;assurance</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg font-medium">
              Obtenez une estimation immédiate de votre prime d&apos;assurance en fonction de votre profil et de votre activité professionnelle.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-200">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              {/* Type d'assurance */}
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
                <label htmlFor="insurance-type" className="flex items-center text-sm font-semibold text-gray-800 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Type d&apos;assurance
                </label>
                <div className="relative">
                  <select
                    id="insurance-type"
                    value={insuranceType}
                    onChange={(e) => setInsuranceType(e.target.value as InsuranceType)}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none pr-10 transition-colors duration-200 text-gray-900 font-medium"
                  >
                    <option value="decennale" className="text-gray-900 font-medium">Assurance Décennale</option>
                    <option value="dommages-ouvrage" className="text-gray-900 font-medium">Dommages-Ouvrage</option>
                    <option value="rc-promoteur" className="text-gray-900 font-medium">RC Promoteur</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-600">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Taille de l'entreprise */}
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
                <label htmlFor="company-size" className="flex items-center text-sm font-semibold text-gray-800 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Taille de votre entreprise
                </label>
                <div className="relative">
                  <select
                    id="company-size"
                    value={companySize}
                    onChange={(e) => setCompanySize(e.target.value as CompanySize)}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none pr-10 transition-colors duration-200 text-gray-900 font-medium"
                  >
                    <option value="auto-entrepreneur" className="text-gray-900 font-medium">Auto-entrepreneur</option>
                    <option value="petite" className="text-gray-900 font-medium">Petite entreprise (1-10 employés)</option>
                    <option value="moyenne" className="text-gray-900 font-medium">Moyenne entreprise (11-50 employés)</option>
                    <option value="grande" className="text-gray-900 font-medium">Grande entreprise (50+ employés)</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-600">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Type d'activité */}
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
                <label htmlFor="activity-type" className="flex items-center text-sm font-semibold text-gray-800 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Type d&apos;activité
                </label>
                <div className="relative">
                  <select
                    id="activity-type"
                    value={activityType}
                    onChange={(e) => setActivityType(e.target.value as ActivityType)}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none pr-10 transition-colors duration-200 text-gray-900 font-medium"
                  >
                    <option value="gros-oeuvre" className="text-gray-900 font-medium">Gros œuvre</option>
                    <option value="second-oeuvre" className="text-gray-900 font-medium">Second œuvre</option>
                    <option value="corps-etat-technique" className="text-gray-900 font-medium">Corps d&apos;état technique</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-600">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Expérience */}
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
                <label htmlFor="experience" className="flex items-center text-sm font-semibold text-gray-800 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Expérience dans le domaine
                </label>
                <div className="relative">
                  <select
                    id="experience"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value as Experience)}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none pr-10 transition-colors duration-200 text-gray-900 font-medium"
                  >
                    <option value="moins-2-ans" className="text-gray-900 font-medium">Moins de 2 ans</option>
                    <option value="2-5-ans" className="text-gray-900 font-medium">2 à 5 ans</option>
                    <option value="plus-5-ans" className="text-gray-900 font-medium">Plus de 5 ans</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-600">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Chiffre d'affaires */}
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
                <label htmlFor="revenue" className="flex items-center text-sm font-semibold text-gray-800 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Chiffre d&apos;affaires annuel
                </label>
                <div className="text-center my-2">
                  <span className="text-2xl font-bold text-blue-700">{revenue.toLocaleString('fr-FR')} €</span>
                </div>
                <input
                  type="range"
                  id="revenue"
                  min="10000"
                  max="1000000"
                  step="10000"
                  value={revenue}
                  onChange={(e) => setRevenue(parseInt(e.target.value))}
                  className="w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2 accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-700 font-medium mt-2">
                  <span>10 000 €</span>
                  <span>1 000 000 €</span>
                </div>
              </div>

              {/* Bouton de calcul */}
              <div className="mt-10 flex justify-center">
                <button
                  type="button"
                  onClick={calculatePremium}
                  disabled={isCalculating}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center transform hover:-translate-y-1"
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
            </form>
            {/* Affichage du résultat */}
            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-8 bg-gradient-to-r from-blue-500/10 to-blue-600/10 p-6 rounded-lg border border-blue-200 shadow-md relative overflow-hidden"
              >
                <div className="absolute -right-6 -top-6 bg-blue-600 rounded-full w-24 h-24 opacity-10"></div>
                <div className="absolute top-4 right-4 bg-blue-600 rounded-full p-2 shadow-md">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Estimation de votre prime</h3>
                <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-3">
                  {estimatedPremium?.toLocaleString('fr-FR')}                <span className="text-sm font-medium text-gray-600">/ an</span>
                </div>
                <p className="text-gray-700 mb-4 font-medium">
                  Cette estimation est basée sur les informations que vous avez fournies. Pour obtenir un devis personnalisé et détaillé, contactez nos experts.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  <span>Demander un devis personnalisé</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceCalculator;
