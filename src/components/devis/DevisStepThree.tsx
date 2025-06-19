'use client';

import React from 'react';
import { DevisFormData, ErrorState } from './types';

interface DevisStepThreeProps {
  formData: DevisFormData;
  errors: ErrorState;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const DevisStepThree: React.FC<DevisStepThreeProps> = ({ formData, errors, handleChange }) => {
  // Rendu conditionnel en fonction du type d'assurance sélectionné
  const renderFieldsByInsuranceType = () => {
    switch (formData.insuranceType) {
      case 'auto':
        return (
          <>
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6-3v13m4.894-11.447l-5.447-2.724A1 1 0 0013 5.618v10.764a1 1 0 001.447.894l5.447-2.724A1 1 0 0020 13.382V8.618a1 1 0 00-.553-.894z"></path>
                </svg>
              </div>
              <h4 className="font-semibold text-blue-800">Détails du véhicule</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="form-group">
                <label htmlFor="propertyType" className="block text-sm font-semibold text-blue-800 mb-2">
                  Type de véhicule <span className="text-red-500 font-bold">*</span>
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  value={formData.propertyType || ''}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${errors.propertyType ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-blue-400'} rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                >
                  <option value="">Sélectionnez un type</option>
                  <option value="citadine">Citadine</option>
                  <option value="compacte">Compacte</option>
                  <option value="berline">Berline</option>
                  <option value="suv">SUV / Crossover</option>
                  <option value="monospace">Monospace</option>
                  <option value="utilitaire">Utilitaire</option>
                </select>
                {errors.propertyType && <p className="mt-2 text-sm text-red-600 flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>{errors.propertyType}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="propertyValue" className="block text-sm font-semibold text-blue-800 mb-2">
                  Valeur estimée du véhicule <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="propertyValue"
                  name="propertyValue"
                  value={formData.propertyValue || ''}
                  onChange={handleChange}
                  placeholder="ex: 15000 €"
                  className={`w-full px-4 py-3 border ${errors.propertyValue ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-blue-400'} rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800`}
                />
                {errors.propertyValue && <p className="mt-2 text-sm text-red-600 flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>{errors.propertyValue}</p>}
              </div>
            </div>
          </>
        );
        
      case 'habitation':
        return (
          <>
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <h4 className="font-semibold text-blue-800">Détails du logement</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="form-group">
                <label htmlFor="propertyType" className="block text-sm font-semibold text-blue-800 mb-2">
                  Type de logement <span className="text-red-500">*</span>
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  value={formData.propertyType || ''}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${errors.propertyType ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-blue-400'} rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                >
                  <option value="">Sélectionnez un type</option>
                  <option value="appartement">Appartement</option>
                  <option value="maison">Maison</option>
                  <option value="villa">Villa</option>
                  <option value="studio">Studio</option>
                  <option value="loft">Loft</option>
                </select>
                {errors.propertyType && <p className="mt-2 text-sm text-red-600 flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>{errors.propertyType}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="propertySize" className="block text-sm font-semibold text-blue-800 mb-2">
                  Superficie (m²) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="propertySize"
                  name="propertySize"
                  value={formData.propertySize || ''}
                  onChange={handleChange}
                  placeholder="ex: 75"
                  className={`w-full px-4 py-3 border ${errors.propertySize ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-blue-400'} rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                />
                {errors.propertySize && <p className="mt-2 text-sm text-red-600 flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>{errors.propertySize}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="propertyOwnership" className="block text-sm font-semibold text-blue-800 mb-2">
                  Statut <span className="text-red-500">*</span>
                </label>
                <select
                  id="propertyOwnership"
                  name="propertyOwnership"
                  value={formData.propertyOwnership || ''}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${errors.propertyOwnership ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-blue-400'} rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                >
                  <option value="">Sélectionnez un statut</option>
                  <option value="proprietaire">Propriétaire</option>
                  <option value="locataire">Locataire</option>
                </select>
                {errors.propertyOwnership && <p className="mt-2 text-sm text-red-600 flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>{errors.propertyOwnership}</p>}
              </div>
            </div>
          </>
        );
        
      case 'professionnelle':
        return (
          <>
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h4 className="font-semibold text-blue-800">Détails de votre entreprise</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="form-group">
                <label htmlFor="activitySector" className="block text-sm font-semibold text-blue-800 mb-2">
                  Secteur d&apos;activité <span className="text-red-500">*</span>
                </label>
                <select
                  id="activitySector"
                  name="activitySector"
                  value={formData.activitySector || ''}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${errors.activitySector ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-blue-400'} rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                >
                  <option value="">Sélectionnez un secteur</option>
                  <option value="commerce">Commerce</option>
                  <option value="artisanat">Artisanat</option>
                  <option value="profession_liberale">Profession libérale</option>
                  <option value="industrie">Industrie</option>
                  <option value="services">Services</option>
                  <option value="agriculture">Agriculture</option>
                  <option value="batiment">Bâtiment / Construction</option>
                </select>
                {errors.activitySector && <p className="mt-2 text-sm text-red-600 flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>{errors.activitySector}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="companySize" className="block text-sm font-semibold text-blue-800 mb-2">
                  Taille de l&apos;entreprise <span className="text-red-500">*</span>
                </label>
                <select
                  id="companySize"
                  name="companySize"
                  value={formData.companySize || ''}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${errors.companySize ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-blue-400'} rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                >
                  <option value="">Sélectionnez une taille</option>
                  <option value="independant">Indépendant</option>
                  <option value="micro">Micro-entreprise (1-3)</option>
                  <option value="tpe">TPE (4-10)</option>
                  <option value="pme">PME (11-250)</option>
                  <option value="eti">ETI (251-5000)</option>
                  <option value="ge">Grande entreprise (5000+)</option>
                </select>
                {errors.companySize && <p className="mt-2 text-sm text-red-600 flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>{errors.companySize}</p>}
              </div>
            </div>
          </>
        );
      
      default:
        // Pour les autres types d'assurance (santé, vie...)
        return (
          <div className="py-6 px-4 bg-blue-50 rounded-lg border border-blue-100">
            <div className="flex items-start space-x-3">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <p className="text-blue-800 font-medium mb-1">Information</p>
                <p className="text-slate-800">Merci de préciser vos besoins spécifiques dans le champ message lors de l&apos;étape suivante.</p>
              </div>
            </div>
          </div>
        );
    }
  };
  
  return (
    <div className="space-y-8 bg-white p-6 sm:p-8 rounded-xl shadow-sm">
      <div className="flex items-center space-x-4 mb-6">
        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-bold text-blue-900">Informations complémentaires</h3>
          <p className="text-blue-800 text-sm">Détails spécifiques selon votre type d'assurance</p>
        </div>
      </div>
      
      {/* Afficher les champs spécifiques selon le type d'assurance */}
      <div className="bg-white p-5 rounded-xl border border-blue-100 shadow-sm">
        {renderFieldsByInsuranceType()}
      </div>
      
      {/* Informations sur l'assurance actuelle - commun à tous les types */}
      <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
        <div className="flex items-center space-x-3 mb-4">
          <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h4 className="font-semibold text-blue-800">Votre assurance actuelle (optionnel)</h4>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="form-group">
            <label htmlFor="currentInsurer" className="block text-sm font-semibold text-blue-800 mb-2">
              Assureur actuel
            </label>
            <input
              type="text"
              id="currentInsurer"
              name="currentInsurer"
              value={formData.currentInsurer || ''}
              onChange={handleChange}
              placeholder="Nom de votre assureur actuel"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 text-gray-800"
            />
          </div>
          <div className="form-group">
            <label htmlFor="currentPremium" className="block text-sm font-semibold text-blue-800 mb-2">
              Prime annuelle actuelle
            </label>
            <input
              type="text"
              id="currentPremium"
              name="currentPremium"
              value={formData.currentPremium || ''}
              onChange={handleChange}
              placeholder="ex: 500 €"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 text-gray-800"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevisStepThree;
