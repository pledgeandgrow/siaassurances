'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import { useRippleEffect } from '@/hooks/useRippleEffect';
import Link from 'next/link';
import DevisProgress from './DevisProgress';
import DevisStepOne from './DevisStepOne';
import DevisStepTwo from './DevisStepTwo';
import DevisStepThree from './DevisStepThree';
import DevisStepFour from './DevisStepFour';
import { DevisFormData, ErrorState } from './types';

const DevisForm = () => {
  // État pour suivre l'étape actuelle
  const [currentStep, setCurrentStep] = useState(1);
  
  // État pour les données du formulaire
  const [formData, setFormData] = useState<DevisFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    insuranceType: '',
    specificCoverage: [],
    startDate: '',
    message: '',
    contactPreference: 'email',
    consent: false
  });
  
  // État pour les erreurs de validation
  const [errors, setErrors] = useState<ErrorState>({});
  
  // État pour le statut de soumission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Hook pour l'effet ripple sur les boutons
  const { createRipple } = useRippleEffect();

  // Gestion des changements de champs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    
    // Cas spécial pour les options de couverture (checkboxes multiples)
    if (name.startsWith('coverage_')) {
      const coverageValue = name.replace('coverage_', '');
      
      setFormData(prev => {
        const currentOptions = [...prev.specificCoverage];
        const optionIndex = currentOptions.indexOf(coverageValue);
        
        if (checked && optionIndex === -1) {
          // Ajouter l'option si cochée et pas déjà présente
          currentOptions.push(coverageValue);
        } else if (!checked && optionIndex !== -1) {
          // Retirer l'option si décochée et présente
          currentOptions.splice(optionIndex, 1);
        }
        
        return {
          ...prev,
          specificCoverage: currentOptions
        };
      });
    } else {
      // Gestion standard pour les autres champs
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
    
    // Effacer l'erreur lorsque l'utilisateur modifie le champ
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Validation du formulaire
  const validateForm = () => {
    const newErrors: ErrorState = {};
    
    // Valider les champs selon l'étape actuelle
    if (currentStep === 1) {
      if (!formData.firstName?.trim()) newErrors.firstName = 'Le prénom est requis';
      if (!formData.lastName?.trim()) newErrors.lastName = 'Le nom est requis';
      if (!formData.email?.trim()) {
        newErrors.email = 'L\'email est requis';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
        newErrors.email = 'Format d\'email invalide';
      }
      if (!formData.phone?.trim()) newErrors.phone = 'Le numéro de téléphone est requis';
    } else if (currentStep === 2) {
      if (!formData.insuranceType) newErrors.insuranceType = 'Veuillez sélectionner un type d\'assurance';
      
      if (formData.insuranceType && !formData.specificCoverage?.length) {
        newErrors.specificCoverage = 'Veuillez sélectionner au moins une option de couverture';
      }
    } else if (currentStep === 3) {
      // Validation spécifique selon le type d'assurance
      if (formData.insuranceType === 'auto' || formData.insuranceType === 'habitation') {
        if (!formData.propertyType) newErrors.propertyType = 'Ce champ est requis';
        if (!formData.propertyValue) newErrors.propertyValue = 'Ce champ est requis';
      } else if (formData.insuranceType === 'professionnelle') {
        if (!formData.activitySector) newErrors.activitySector = 'Ce champ est requis';
        if (!formData.companySize) newErrors.companySize = 'Ce champ est requis';
      // Pas de besoin de vérification spécifique pour la santé, géré par les champs généraux
      }
    } else if (currentStep === 4) {
      if (!formData.startDate) newErrors.startDate = 'La date est requise';
      if (!formData.contactPreference) newErrors.contactPreference = 'Veuillez sélectionner une préférence de contact';
      if (!formData.consent) newErrors.consent = 'Vous devez accepter la politique de confidentialité';
    }
    
    // Mise à jour des erreurs pour toutes les étapes
    setErrors(newErrors);
    
    return newErrors; // Retourner directement l'objet d'erreurs
  };

  // Gestion du passage à l'étape suivante
  const handleNext = () => {
    if (Object.keys(validateForm()).length === 0) {
      setCurrentStep(prevStep => prevStep + 1);
    }
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = async () => {
    // Validation avant envoi
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Simulation d'un appel API (à remplacer par un vrai appel API)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Données du formulaire soumises:', formData);
      
      // Réinitialiser le formulaire après soumission réussie
      setSubmitStatus('success');
    } catch (error) {
      console.error('Erreur lors de la soumission:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Navigation vers l'étape précédente
  const handlePrevStep = () => {
    setCurrentStep(prevStep => Math.max(prevStep - 1, 1));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden devis-form">
      {/* En-tête et progression */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Demande de devis</h2>
        <p className="text-gray-600 text-center mb-6">
          Complétez ce formulaire en {currentStep <= 4 ? '4' : '3'} étapes simples pour obtenir une estimation personnalisée.
        </p>
        
        <DevisProgress currentStep={currentStep} />
      </div>
      
      {/* Formulaire */}
      <form className="space-y-8">
        {/* Contenu de l'étape actuelle */}
        <div className={currentStep === 1 ? 'block' : 'hidden'}>
          <DevisStepOne formData={formData} errors={errors} handleChange={handleChange} />
        </div>
        
        <div className={currentStep === 2 ? 'block' : 'hidden'}>
          <DevisStepTwo formData={formData} errors={errors} handleChange={handleChange} />
        </div>
        
        <div className={currentStep === 3 ? 'block' : 'hidden'}>
          <DevisStepThree formData={formData} errors={errors} handleChange={handleChange} />
        </div>
        
        <div className={currentStep === 4 ? 'block' : 'hidden'}>
          <DevisStepFour formData={formData} errors={errors} handleChange={handleChange} />
        </div>

        {/* Message de confirmation après soumission */}
        {submitStatus === 'success' && (
          <div className="p-4 bg-green-50 border border-green-100 rounded-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-semibold text-green-800">Demande envoyée avec succès!</h3>
                <div className="mt-2 text-sm text-green-700">
                  <p>Merci pour votre demande de devis. Un de nos conseillers vous contactera très prochainement.</p>
                </div>
                <div className="mt-4">
                  <Link href="/" className="text-sm font-medium text-blue-600 hover:text-blue-700 underline">
                    Retour à l&apos;accueil
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Message d'erreur */}
        {submitStatus === 'error' && (
          <div className="p-4 bg-red-50 border border-red-100 rounded-lg shadow-sm">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-semibold text-red-800">Une erreur s&apos;est produite</h3>
                <p className="text-sm text-red-700 mt-1">
                  Nous n&apos;avons pas pu traiter votre demande. Veuillez vérifier vos informations et réessayer.
                </p>
              </div>
            </div>
          </div>
        )}
        
        {/* Boutons de navigation */}
        {submitStatus !== 'success' && (
          <div className="flex justify-between mt-8">
            {currentStep > 1 && (
              <Button
                type="button"
                onClick={(e) => {
                  createRipple(e as React.MouseEvent<HTMLButtonElement>);
                  handlePrevStep();
                }}
                variant="outline"
                size="md"
              >
                Précédent
              </Button>
            )}
            
            <div className="ml-auto">
              {currentStep < 4 ? (
                <Button
                  type="button"
                  onClick={(e) => {
                    createRipple(e as React.MouseEvent<HTMLButtonElement>);
                    handleNext();
                  }}
                  variant="primary"
                  size="md"
                  className="ml-auto"
                >
                  Suivant
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={(e) => {
                    createRipple(e as React.MouseEvent<HTMLButtonElement>);
                    // Valider le formulaire dans le gestionnaire d'événement plutôt que dans le rendu
                    handleSubmit();
                  }}
                  disabled={Object.keys(errors).length > 0 || isSubmitting}
                  variant="cta"
                  size="md"
                  className="ml-auto"
                  isLoading={isSubmitting}
                >
                  Envoyer ma demande
                </Button>
              )}
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default DevisForm;
