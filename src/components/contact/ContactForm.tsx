'use client';

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false
  });
  
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Gestion des changements de champs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
    
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
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'Le prénom est requis';
    if (!formData.lastName.trim()) newErrors.lastName = 'Le nom est requis';
    
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Le numéro de téléphone est requis';
    } else if (!/^(\+\d{1,3}[- ]?)?\d{9,10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Format de téléphone invalide';
    }
    
    if (!formData.subject) newErrors.subject = 'Veuillez sélectionner un sujet';
    if (!formData.message.trim()) newErrors.message = 'Veuillez écrire un message';
    if (!formData.consent) newErrors.consent = 'Veuillez accepter la politique de confidentialité';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Soumission du formulaire
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Simuler l'envoi vers un backend (à remplacer par un vrai appel API)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Réinitialiser le formulaire après succès
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        consent: false
      });
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
      console.error('Erreur lors de l\'envoi du message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>
      
      {/* Message de succès */}
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-md">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Votre message a été envoyé avec succès. Nous vous contacterons dans les plus brefs délais.</span>
          </div>
        </div>
      )}
      
      {/* Message d'erreur */}
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-md">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Une erreur est survenue lors de l&apos;envoi du message. Veuillez réessayer ultérieurement.</span>
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        {/* Rangée nom et prénom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              Prénom *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
          </div>
          
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Nom *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
          </div>
        </div>
        
        {/* Rangée email et téléphone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Téléphone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
          </div>
        </div>
        
        {/* Sujet */}
        <div className="mb-6">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Sujet *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
          >
            <option value="">Sélectionner un sujet</option>
            <option value="devis">Demande de devis</option>
            <option value="information">Demande d&apos;information</option>
            <option value="sinistre">Déclaration de sinistre</option>
            <option value="reclamation">Réclamation</option>
            <option value="autre">Autre</option>
          </select>
          {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
        </div>
        
        {/* Message */}
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
          ></textarea>
          {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
        </div>
        
        {/* Consentement RGPD */}
        <div className="mb-6">
          <div className="flex items-start">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className={`h-4 w-4 mt-1 text-blue-600 focus:ring-blue-500 ${errors.consent ? 'border-red-500' : 'border-gray-300'}`}
            />
            <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
              J&apos;accepte que mes données soient traitées conformément à la <a href="/privacy" className="text-blue-800 hover:underline">politique de confidentialité</a> de SIA Assurances *
            </label>
          </div>
          {errors.consent && <p className="mt-1 text-sm text-red-600">{errors.consent}</p>}
        </div>
        
        {/* Bouton d'envoi */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full sm:w-auto px-6 py-3 bg-blue-800 text-white font-medium rounded-md hover:bg-blue-900 transition-colors duration-300 shadow-md ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
