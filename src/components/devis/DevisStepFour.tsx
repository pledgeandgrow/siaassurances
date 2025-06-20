'use client';

import React from 'react';
import { DevisFormData, ErrorState } from './types';
import ReCAPTCHA from 'react-google-recaptcha';

interface DevisStepFourProps {
  formData: DevisFormData;
  errors: ErrorState;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  captchaToken?: string | null;
  onCaptchaChange?: (token: string | null) => void;
  recaptchaRef?: React.RefObject<ReCAPTCHA | null>;
}

const DevisStepFour: React.FC<DevisStepFourProps> = ({ formData, errors, handleChange, onCaptchaChange }) => {
  return (
    <div className="space-y-8 bg-white p-6 sm:p-8 rounded-xl shadow-sm">
      <div className="flex items-center space-x-4 mb-6">
        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-bold text-blue-900">Finalisation de votre demande</h3>
          <p className="text-blue-800 text-sm">Dernière étape avant l&apos;envoi de votre demande de devis</p>
        </div>
      </div>
      
      {/* Date souhaitée */}
      <div className="form-group">
        <div className="flex items-center space-x-3 mb-2">
          <div className="h-7 w-7 rounded-full bg-blue-100 flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </div>
          <label htmlFor="startDate" className="block text-sm font-semibold text-blue-800">
            Date souhaitée pour le début de votre contrat <span className="text-red-500 font-bold">*</span>
          </label>
        </div>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className={`w-full px-4 py-3 border ${errors.startDate ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-blue-400'} rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800`}
        />
        {errors.startDate && <p className="mt-2 text-sm text-red-600 flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>{errors.startDate}</p>}
      </div>
      
      {/* Message ou précisions */}
      <div className="form-group">
        <div className="flex items-center space-x-3 mb-2">
          <div className="h-7 w-7 rounded-full bg-blue-100 flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
            </svg>
          </div>
          <label htmlFor="message" className="block text-sm font-semibold text-blue-800">
            Message ou précisions
          </label>
        </div>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Ajoutez des détails supplémentaires concernant votre demande..."
          className={`w-full px-4 py-3 border ${errors.message ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-blue-400'} rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800`}
        ></textarea>
        {errors.message && <p className="mt-2 text-sm text-red-600 flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>{errors.message}</p>}
      </div>
      
      {/* Préférences de contact */}
      <div className="form-group">
        <div className="flex items-center space-x-3 mb-3">
          <div className="h-7 w-7 rounded-full bg-blue-100 flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"></path>
            </svg>
          </div>
          <label className="block text-sm font-semibold text-blue-800">
            Comment préférez-vous être contacté? <span className="text-red-500">*</span>
          </label>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all duration-200 ${formData.contactPreference === 'email' ? 'border-blue-500 bg-blue-50 shadow-sm' : 'border-gray-200 hover:border-blue-400 hover:bg-blue-50'}`}>
            <input
              type="radio"
              id="contact_email"
              name="contactPreference"
              value="email"
              checked={formData.contactPreference === 'email'}
              onChange={handleChange}
              className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <label htmlFor="contact_email" className="ml-3 cursor-pointer flex items-center">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span className="text-sm font-medium text-slate-800">Email</span>
            </label>
          </div>
          
          <div className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all duration-200 ${formData.contactPreference === 'phone' ? 'border-blue-500 bg-blue-50 shadow-sm' : 'border-gray-200 hover:border-blue-400 hover:bg-blue-50'}`}>
            <input
              type="radio"
              id="contact_phone"
              name="contactPreference"
              value="phone"
              checked={formData.contactPreference === 'phone'}
              onChange={handleChange}
              className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <label htmlFor="contact_phone" className="ml-3 cursor-pointer flex items-center">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span className="text-sm font-medium text-slate-800">Téléphone</span>
            </label>
          </div>
          
          <div className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all duration-200 ${formData.contactPreference === 'either' ? 'border-blue-500 bg-blue-50 shadow-sm' : 'border-gray-200 hover:border-blue-400 hover:bg-blue-50'}`}>
            <input
              type="radio"
              id="contact_either"
              name="contactPreference"
              value="either"
              checked={formData.contactPreference === 'either'}
              onChange={handleChange}
              className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <label htmlFor="contact_either" className="ml-3 cursor-pointer flex items-center">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
              </svg>
              <span className="text-sm font-medium text-slate-800">Peu importe</span>
            </label>
          </div>
        </div>
        
        {errors.contactPreference && <p className="mt-2 text-sm text-red-600 flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>{errors.contactPreference}</p>}
      </div>
      
      {/* Consentement RGPD */}
      <div className="pt-6 space-y-3">
        <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 mb-5">
          <div className="flex items-start space-x-3">
            <div className="h-7 w-7 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">Protection des données</h4>
              <p className="text-sm text-slate-800">
                En soumettant ce formulaire, vous acceptez que SIA Assurances traite vos données personnelles afin de répondre à votre demande de devis. 
                Pour en savoir plus sur la gestion de vos données et vos droits, consultez notre <a href="/privacy" className="text-blue-600 hover:text-blue-700 font-medium">politique de confidentialité</a>.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex items-start p-4 border border-gray-200 hover:border-blue-300 rounded-lg bg-white transition-all duration-200 hover:shadow-sm">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className={`h-5 w-5 mt-0.5 text-blue-600 focus:ring-blue-500 ${errors.consent ? 'border-red-400' : 'border-gray-300'}`}
          />
          <label htmlFor="consent" className="ml-3 block text-sm text-slate-800 cursor-pointer">
            J&apos;accepte que mes données soient traitées conformément à la politique de confidentialité de SIA Assurances <span className="text-red-500 font-bold">*</span>
          </label>
        </div>
        {errors.consent && <p className="mt-2 text-sm text-red-600 flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>{errors.consent}</p>}
      </div>
      
      {/* reCAPTCHA */}
      <div className="pt-6">
        <div className="flex items-start space-x-3 mb-3">
          <div className="h-7 w-7 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-blue-800 mb-1">Vérification de sécurité</h4>
            <p className="text-sm text-slate-700">Veuillez confirmer que vous n&apos;êtes pas un robot <span className="text-red-500 font-bold">*</span></p>
          </div>
        </div>
        
        <div className="pl-10">
          {/* Utilisation conditionnelle de la référence pour éviter les erreurs de type */}
          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Clé de test Google, à remplacer par votre clé réelle
            onChange={onCaptchaChange}
            className="mt-2"
          />
          {errors.recaptcha && <p className="mt-2 text-sm text-red-600 flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>{errors.recaptcha}</p>}
        </div>
      </div>
    </div>
  );
};

export default DevisStepFour;
