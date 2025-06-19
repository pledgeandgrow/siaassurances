'use client';

import React from 'react';
import { DevisFormData, ErrorState } from './types';

interface DevisStepTwoProps {
  formData: DevisFormData;
  errors: ErrorState;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const DevisStepTwo: React.FC<DevisStepTwoProps> = ({ formData, errors, handleChange }) => {
  // Types d'assurances disponibles
  const insuranceTypes = [
    { id: 'auto', name: 'Assurance Auto' },
    { id: 'habitation', name: 'Assurance Habitation' },
    { id: 'sante', name: 'Assurance Santé' },
    { id: 'vie', name: 'Assurance Vie' },
    { id: 'professionnelle', name: 'Assurance Professionnelle' }
  ];

  // Options de couverture par type d'assurance
  const coverageOptions: Record<string, { id: string; label: string }[]> = {
    auto: [
      { id: 'tiers', label: 'Responsabilité civile (tiers)' },
      { id: 'intermediaire', label: 'Tiers + vol, incendie' },
      { id: 'tous_risques', label: 'Tous risques' },
      { id: 'assistance', label: 'Assistance' },
      { id: 'conducteur', label: 'Protection du conducteur' }
    ],
    habitation: [
      { id: 'responsabilite', label: 'Responsabilité civile' },
      { id: 'vol', label: 'Vol et vandalisme' },
      { id: 'incendie', label: 'Incendie et explosion' },
      { id: 'degats_eaux', label: 'Dégâts des eaux' },
      { id: 'catastrophes', label: 'Catastrophes naturelles' },
      { id: 'juridique', label: 'Protection juridique' }
    ],
    sante: [
      { id: 'base', label: 'Soins de base' },
      { id: 'hospitalisation', label: 'Hospitalisation' },
      { id: 'optique', label: 'Optique' },
      { id: 'dentaire', label: 'Dentaire' },
      { id: 'specialistes', label: 'Médecins spécialistes' }
    ],
    vie: [
      { id: 'deces', label: 'Capital décès' },
      { id: 'invalidite', label: 'Invalidité' },
      { id: 'revenu', label: 'Perte de revenu' },
      { id: 'epargne', label: 'Épargne' }
    ],
    professionnelle: [
      { id: 'responsabilite_pro', label: 'Responsabilité civile professionnelle' },
      { id: 'locaux', label: 'Locaux commerciaux' },
      { id: 'materiel', label: 'Équipements et matériel' },
      { id: 'perte_exploitation', label: 'Perte d\'exploitation' },
      { id: 'protection_juridique', label: 'Protection juridique' }
    ]
  };

  return (
    <div className="space-y-8 bg-white p-6 sm:p-8 rounded-xl shadow-sm">
      <div className="flex items-center space-x-4 mb-6">
        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-bold text-blue-900">Type d&apos;assurance</h3>
          <p className="text-blue-800 text-sm">Choisissez le type d&apos;assurance qui vous convient</p>
        </div>
      </div>
      
      <div className="form-group">
        <label className="block text-sm font-semibold text-blue-800 mb-3">
          Sélectionnez le type d&apos;assurance souhaité <span className="text-red-500 font-bold">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {insuranceTypes.map((type) => (
            <div key={type.id} className="relative">
              <input
                type="radio"
                id={`type_${type.id}`}
                name="insuranceType"
                value={type.id}
                checked={formData.insuranceType === type.id}
                onChange={handleChange}
                className="peer absolute opacity-0 w-full h-full"
              />
              <label
                htmlFor={`type_${type.id}`}
                className="flex items-center justify-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer transition-all duration-300 hover:border-blue-400 hover:bg-blue-50 hover:shadow-md peer-checked:border-blue-600 peer-checked:bg-blue-50 peer-checked:shadow-lg text-center"
              >
                <span className="text-sm font-semibold text-slate-800 peer-checked:text-blue-700">{type.name}</span>
              </label>
            </div>
          ))}
        </div>
        {errors.insuranceType && <p className="mt-2 text-sm text-red-600 flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>{errors.insuranceType}</p>}
      </div>
      
      {/* Options de couverture basées sur le type d&apos;assurance sélectionné */}
      {formData.insuranceType && (
        <div className="mt-8 form-group animate-fadeIn">
          <div className="flex items-center space-x-3 mb-4">
            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <label className="block text-sm font-semibold text-blue-800">
              Options de couverture souhaitées <span className="text-red-500">*</span>
            </label>
          </div>
          
          <div className="bg-white p-5 rounded-xl border border-blue-100 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {coverageOptions[formData.insuranceType]?.map((option) => (
                <div key={option.id} className="flex items-center p-3 border border-gray-100 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-all duration-200">
                  <input
                    type="checkbox"
                    id={`coverage_${option.id}`}
                    name={`coverage_${option.id}`}
                    checked={formData.specificCoverage.includes(option.id)}
                    onChange={handleChange}
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor={`coverage_${option.id}`} className="ml-3 block text-sm font-medium text-slate-800 cursor-pointer select-none">
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
          {errors.specificCoverage && <p className="mt-2 text-sm text-red-600 flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>{errors.specificCoverage}</p>}
        </div>
      )}
    </div>
  );
};

export default DevisStepTwo;
