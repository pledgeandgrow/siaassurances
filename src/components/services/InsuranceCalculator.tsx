'use client';

import React, { useState, useCallback, useMemo } from 'react';
// Suppression de l'import motion car nous utilisons maintenant les animations CSS

// Types pour les options de la calculatrice
type InsuranceType = 'decennale' | 'dommages-ouvrage' | 'rc-promoteur';
type CompanySize = 'auto-entrepreneur' | 'petite' | 'moyenne' | 'grande';
type ActivityType = 'gros-oeuvre' | 'second-oeuvre' | 'corps-etat-technique';
type Experience = 'moins-2-ans' | '2-5-ans' | 'plus-5-ans';

// Type pour les options de sélection
type SelectOption = {
  value: string;
  label: string;
};

// Composant réutilisable pour les champs de sélection
const SelectField = ({ 
  id, 
  label, 
  value, 
  onChange, 
  options, 
  icon 
}: { 
  id: string; 
  label: string; 
  value: string; 
  onChange: (value: string) => void; 
  options: SelectOption[];
  icon: React.ReactNode;
}) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
      <label htmlFor={id} className="flex items-center text-sm font-semibold text-gray-800 mb-2">
        {icon}
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="block cursor-pointer w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 bg-white appearance-none pr-10 transition-colors duration-200 text-gray-900 font-medium"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value} className="text-gray-900 cursor-pointer font-medium">
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-600">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

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
  
  // Options pour les sélecteurs (mémorisées pour éviter les recréations)
  const insuranceOptions = useMemo<SelectOption[]>(() => [
    { value: 'decennale', label: 'Assurance Décennale' },
    { value: 'dommages-ouvrage', label: 'Dommages-Ouvrage' },
    { value: 'rc-promoteur', label: 'RC Promoteur' },
  ], []);
  
  const companySizeOptions = useMemo<SelectOption[]>(() => [
    { value: 'auto-entrepreneur', label: 'Auto-entrepreneur' },
    { value: 'petite', label: 'Petite entreprise (1-10 employés)' },
    { value: 'moyenne', label: 'Moyenne entreprise (11-50 employés)' },
    { value: 'grande', label: 'Grande entreprise (50+ employés)' },
  ], []);
  
  const activityOptions = useMemo<SelectOption[]>(() => [
    { value: 'gros-oeuvre', label: 'Gros œuvre' },
    { value: 'second-oeuvre', label: 'Second œuvre' },
    { value: 'corps-etat-technique', label: 'Corps d\'\u00e9tat technique' },
  ], []);
  
  const experienceOptions = useMemo<SelectOption[]>(() => [
    { value: 'moins-2-ans', label: 'Moins de 2 ans' },
    { value: '2-5-ans', label: '2 à 5 ans' },
    { value: 'plus-5-ans', label: 'Plus de 5 ans' },
  ], []);
  
  // Icônes pour les sélecteurs
  const insuranceIcon = useMemo(() => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ), []);
  
  const companyIcon = useMemo(() => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ), []);
  
  const activityIcon = useMemo(() => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ), []);
  
  const experienceIcon = useMemo(() => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ), []);
  
  // Gestionnaires de changement mémorisés pour tous les champs
  const handleInsuranceTypeChange = useCallback((value: string) => {
    setInsuranceType(value as InsuranceType);
  }, []);
  
  const handleCompanySizeChange = useCallback((value: string) => {
    setCompanySize(value as CompanySize);
  }, []);
  
  const handleActivityTypeChange = useCallback((value: string) => {
    setActivityType(value as ActivityType);
  }, []);
  
  const handleExperienceChange = useCallback((value: string) => {
    setExperience(value as Experience);
  }, []);
  
  const handleRevenueChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setRevenue(parseInt(e.target.value));
  }, []);

  // Constantes pour les taux et multiplicateurs (définies en dehors du rendu pour éviter les recréations)
  const INSURANCE_RATES = useMemo(() => ({
    'decennale': 0.005, // 0.5% du CA
    'dommages-ouvrage': 0.02, // 2% du montant des travaux
    'rc-promoteur': 0.01 // 1% du CA
  }), []);
  
  const SIZE_MULTIPLIERS = useMemo(() => ({
    'auto-entrepreneur': 1.2, // +20% (risque plus élevé)
    'petite': 1,
    'moyenne': 0.9, // -10%
    'grande': 0.8 // -20%
  }), []);
  
  const ACTIVITY_MULTIPLIERS = useMemo(() => ({
    'gros-oeuvre': 1.5, // +50% (risque plus élevé)
    'second-oeuvre': 1,
    'corps-etat-technique': 1.3 // +30%
  }), []);
  
  const EXPERIENCE_MULTIPLIERS = useMemo(() => ({
    'moins-2-ans': 1.4, // +40% (entreprises récentes)
    '2-5-ans': 1.1, // +10%
    'plus-5-ans': 0.9 // -10%
  }), []);

  // Fonction pour calculer l'estimation de la prime (optimisée avec useCallback)
  const calculatePremium = useCallback(() => {
    setIsCalculating(true);
    setShowResult(false);
    
    // Simulation d'un calcul avec délai réduit pour améliorer la réactivité
    setTimeout(() => {
      // Récupération des taux depuis les constantes
      const baseRate = INSURANCE_RATES[insuranceType] || 0;
      const sizeMultiplier = SIZE_MULTIPLIERS[companySize] || 1;
      const activityMultiplier = ACTIVITY_MULTIPLIERS[activityType] || 1;
      const experienceMultiplier = EXPERIENCE_MULTIPLIERS[experience] || 1;
      
      // Calcul de la prime estimée
      const calculatedPremium = revenue * baseRate * sizeMultiplier * activityMultiplier * experienceMultiplier;
      
      // Arrondi à l'entier le plus proche
      setEstimatedPremium(Math.round(calculatedPremium));
      setIsCalculating(false);
      setShowResult(true);
    }, 500); // Réduction du délai pour améliorer la réactivité
  }, [insuranceType, companySize, activityType, experience, revenue, INSURANCE_RATES, SIZE_MULTIPLIERS, ACTIVITY_MULTIPLIERS, EXPERIENCE_MULTIPLIERS]);
  // Rendu mémorisé pour les éléments statiques
  const staticElements = useMemo(() => (
    <div className="text-center mb-10">
      <div className="inline-flex items-center bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-3 shadow-md">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        Estimation rapide et gratuite
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Calculez votre prime d&apos;assurance</h2>
      <div className="w-32 h-1.5 bg-blue-500 mx-auto mb-6 rounded-full"></div>
      <p className="text-gray-700 max-w-2xl mx-auto text-lg font-medium">
        Obtenez une estimation immédiate de votre prime d&apos;assurance en fonction de votre profil et de votre activité professionnelle.
      </p>
    </div>
  ), []);
  
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-white via-blue-50/30 to-blue-100/40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {staticElements}

          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-200">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Type d'assurance - Utilisation du composant SelectField */}
                <SelectField
                  id="insurance-type"
                  label="Type d'assurance"
                  value={insuranceType}
                  onChange={handleInsuranceTypeChange}
                  options={insuranceOptions}
                  icon={insuranceIcon}
                />

                {/* Taille de l'entreprise - Utilisation du composant SelectField */}
                <SelectField
                  id="company-size"
                  label="Taille de votre entreprise"
                  value={companySize}
                  onChange={handleCompanySizeChange}
                  options={companySizeOptions}
                  icon={companyIcon}
                />
                
                {/* Type d'activité - Utilisation du composant SelectField */}
                <SelectField
                  id="activity-type"
                  label="Type d'activité"
                  value={activityType}
                  onChange={handleActivityTypeChange}
                  options={activityOptions}
                  icon={activityIcon}
                />

                {/* Expérience - Utilisation du composant SelectField */}
                <SelectField
                  id="experience"
                  label="Expérience dans le domaine"
                  value={experience}
                  onChange={handleExperienceChange}
                  options={experienceOptions}
                  icon={experienceIcon}
                />

                {/* Chiffre d'affaires - Optimisé avec useCallback pour la gestion du changement */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm col-span-1 md:col-span-2">
                  <label htmlFor="revenue" className="flex items-center text-sm font-semibold text-gray-800 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Chiffre d&apos;affaires annuel
                  </label>
                  <div className="text-center my-2">
                    <span className="text-2xl font-bold text-blue-600">{revenue.toLocaleString('fr-FR')} €</span>
                  </div>
                  <input
                    type="range"
                    id="revenue"
                    min="10000"
                    max="1000000"
                    step="10000"
                    value={revenue}
                    onChange={handleRevenueChange}
                    className="w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2 accent-blue-600"
                  />
                  <div className="flex justify-between text-xs text-gray-700 font-medium mt-2">
                    <span>10 000 €</span>
                    <span>1 000 000 €</span>
                  </div>
                </div>

                {/* Bouton de calcul - Optimisé avec des icônes mémorisées */}
                <div className="mt-8 flex justify-center col-span-1 md:col-span-2">
                  <button
                    type="button"
                    onClick={calculatePremium}
                    disabled={isCalculating}
                    className="px-8 py-4 bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg flex items-center"
                  >
                    {isCalculating ? (
                      <>
                        <div className="animate-spin -ml-1 mr-3 h-5 w-5 text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        </div>
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
              </div>
            </form>
            {/* Affichage du résultat - Composant mémorisé pour de meilleures performances */}
            {showResult && (
              <div
                className="mt-8 bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 shadow-md relative overflow-hidden animate-fadeIn"
              >
                {/* Élément décoratif statique */}
                <div className="absolute -right-6 -top-6 bg-blue-600 rounded-full w-24 h-24 opacity-10"></div>
                <div className="absolute top-4 right-4 bg-blue-600 rounded-full p-2 shadow-md">
                  {/* Icône mémorisée pour éviter les recréations */}
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                {/* Contenu du résultat */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Estimation de votre prime</h3>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-3">
                  {estimatedPremium?.toLocaleString('fr-FR')}<span className="text-sm font-medium text-gray-800 ml-1">/ an</span>
                </div>
                <p className="text-gray-800 mb-4 font-medium">
                  Cette estimation est basée sur les informations que vous avez fournies. Pour obtenir un devis personnalisé et détaillé, contactez nos experts.
                </p>
                
                {/* Lien vers la page de devis avec bouton optimisé */}
                <a
                  href="/devis"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg cursor-pointer"
                >
                  <span>Demander un devis personnalisé</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceCalculator;
