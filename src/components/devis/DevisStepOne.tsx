'use client';

import React, { useState } from 'react';
import { DevisFormData, ErrorState } from './types';
import { motion } from 'framer-motion';

interface DevisStepOneProps {
  formData: DevisFormData;
  errors: ErrorState;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const DevisStepOne: React.FC<DevisStepOneProps> = ({ formData, errors, handleChange }) => {
  const [focused, setFocused] = useState<string | null>(null);
  
  // Animation variants sans effet d'apparition
  const containerVariants = {
    visible: {
      opacity: 1
    }
  };
  
  const itemVariants = {
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring' as const, stiffness: 300 } 
    }
  };

  const handleFocus = (name: string) => setFocused(name);
  const handleBlur = () => setFocused(null);

  // Style personnalisé pour les champs avec focus
  const getInputClasses = (fieldName: string, hasError: boolean) => {
    const baseClasses = "w-full px-4 py-3 border rounded-lg transition-all duration-300 outline-none text-gray-800";
    const focusClasses = focused === fieldName ? "shadow-lg transform -translate-y-1 border-blue-400 ring-2 ring-blue-200 input-focus" : "";
    const errorClasses = hasError ? "border-red-400 bg-red-50" : "border-gray-300 focus:border-blue-500 hover:border-blue-400";
    return `${baseClasses} ${focusClasses} ${errorClasses}`;
  };

  // Style pour les labels animés
  const getLabelClasses = (fieldName: string) => {
    return `block text-sm font-semibold mb-2 transition-colors duration-300 ${focused === fieldName ? 'text-blue-600 font-bold' : 'text-blue-800'}`;
  };

  // Animation pour les messages d'erreur
  const errorVariants = {
    hidden: { opacity: 0, height: 0, y: -10 },
    visible: { 
      opacity: 1, 
      height: 'auto', 
      y: 0,
      transition: { type: 'spring' as const, stiffness: 500 }
    }
  };

  return (
    <motion.div 
      className="space-y-8 bg-white p-6 sm:p-8 rounded-xl shadow-md"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="flex items-center space-x-4 mb-6" variants={itemVariants}>
        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
        </div>
        <div>
          <motion.h3 
            className="text-xl font-bold text-blue-900"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, type: "spring" as const }}
          >
            Informations personnelles
          </motion.h3>
          <p className="text-blue-800 text-sm">Parlez-nous de vous pour un devis personnalisé</p>
        </div>
      </motion.div>
      
      {/* Rangée nom et prénom */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6" variants={itemVariants}>
        <motion.div variants={itemVariants}>
          <label htmlFor="firstName" className={getLabelClasses('firstName')}>
            Prénom <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              onFocus={() => handleFocus('firstName')}
              onBlur={handleBlur}
              placeholder="Votre prénom"
              className={getInputClasses('firstName', !!errors.firstName)}
            />
            {focused === 'firstName' && (
              <motion.span 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 500 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </motion.span>
            )}
          </div>
          {errors.firstName && (
            <motion.p 
              className="mt-2 text-sm text-red-600 flex items-center"
              initial="hidden"
              animate="visible"
              variants={errorVariants}
            >
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd"></path>
              </svg>
              {errors.firstName}
            </motion.p>
          )}
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <label htmlFor="lastName" className={getLabelClasses('lastName')}>
            Nom <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              onFocus={() => handleFocus('lastName')}
              onBlur={handleBlur}
              placeholder="Votre nom"
              className={getInputClasses('lastName', !!errors.lastName)}
            />
            {focused === 'lastName' && (
              <motion.span 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 500 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </motion.span>
            )}
          </div>
          {errors.lastName && (
            <motion.p 
              className="mt-2 text-sm text-red-600 flex items-center"
              initial="hidden"
              animate="visible"
              variants={errorVariants}
            >
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd"></path>
              </svg>
              {errors.lastName}
            </motion.p>
          )}
        </motion.div>
      </motion.div>
      {/* Rangée email et téléphone */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6" variants={itemVariants}>
        <motion.div variants={itemVariants}>
          <label htmlFor="email" className={getLabelClasses('email')}>
            Email <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => handleFocus('email')}
              onBlur={handleBlur}
              placeholder="votre@email.com"
              className={getInputClasses('email', !!errors.email)}
            />
            {focused === 'email' && (
              <motion.span 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 500 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </motion.span>
            )}
          </div>
          {errors.email && (
            <motion.p 
              className="mt-2 text-sm text-red-600 flex items-center"
              initial="hidden"
              animate="visible"
              variants={errorVariants}
            >
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd"></path>
              </svg>
              {errors.email}
            </motion.p>
          )}
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <label htmlFor="phone" className={getLabelClasses('phone')}>
            Téléphone <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onFocus={() => handleFocus('phone')}
              onBlur={handleBlur}
              placeholder="06 XX XX XX XX"
              className={getInputClasses('phone', !!errors.phone)}
            />
            {focused === 'phone' && (
              <motion.span 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 500 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </motion.span>
            )}
          </div>
          {errors.phone && (
            <motion.p 
              className="mt-2 text-sm text-red-600 flex items-center"
              initial="hidden"
              animate="visible"
              variants={errorVariants}
            >
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd"></path>
              </svg>
              {errors.phone}
            </motion.p>
          )}
        </motion.div>
      </motion.div>
      
      {/* Adresse */}
      <motion.div className="mt-6" variants={itemVariants}>
        <label htmlFor="address" className={getLabelClasses('address')}>
          Adresse
        </label>
        <div className="relative">
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            onFocus={() => handleFocus('address')}
            onBlur={handleBlur}
            placeholder="Votre adresse complète"
            className={getInputClasses('address', !!errors.address)}
          />
          {focused === 'address' && (
            <motion.span 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 500 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </motion.span>
          )}
        </div>
        {errors.address && (
          <motion.p 
            className="mt-2 text-sm text-red-600 flex items-center"
            initial="hidden"
            animate="visible"
            variants={errorVariants}
          >
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd"></path>
            </svg>
            {errors.address}
          </motion.p>
        )}
      </motion.div>
      
      {/* Rangée ville et code postal */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6" variants={itemVariants}>
        <motion.div variants={itemVariants}>
          <label htmlFor="city" className={getLabelClasses('city')}>
            Ville
          </label>
          <div className="relative">
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              onFocus={() => handleFocus('city')}
              onBlur={handleBlur}
              placeholder="Votre ville"
              className={getInputClasses('city', !!errors.city)}
            />
            {focused === 'city' && (
              <motion.span 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 500 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </motion.span>
            )}
          </div>
          {errors.city && (
            <motion.p 
              className="mt-2 text-sm text-red-600 flex items-center"
              initial="hidden"
              animate="visible"
              variants={errorVariants}
            >
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd"></path>
              </svg>
              {errors.city}
            </motion.p>
          )}
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <label htmlFor="zipCode" className={getLabelClasses('zipCode')}>
            Code postal
          </label>
          <div className="relative">
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              onFocus={() => handleFocus('zipCode')}
              onBlur={handleBlur}
              placeholder="Code postal"
              className={getInputClasses('zipCode', !!errors.zipCode)}
            />
            {focused === 'zipCode' && (
              <motion.span 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 500 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </motion.span>
            )}
          </div>
          {errors.zipCode && (
            <motion.p 
              className="mt-2 text-sm text-red-600 flex items-center"
              initial="hidden"
              animate="visible"
              variants={errorVariants}
            >
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd"></path>
              </svg>
              {errors.zipCode}
            </motion.p>
          )}
        </motion.div>
      </motion.div>

      <motion.div 
        className="mt-8 bg-blue-50 rounded-lg p-4 border border-blue-100 shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="flex items-start">
          <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd"></path>
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-blue-800 mb-1">Protection de vos données</h4>
            <p className="text-sm text-slate-700">
              Toutes vos informations sont protégées et ne seront utilisées que pour établir votre devis d'assurance personnalisé.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DevisStepOne;
