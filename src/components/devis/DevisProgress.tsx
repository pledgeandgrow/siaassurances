'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface DevisProgressProps {
  currentStep: number;
}

const DevisProgress: React.FC<DevisProgressProps> = ({ currentStep }) => {
  const [prevStep, setPrevStep] = useState(currentStep);
  const direction = currentStep > prevStep ? 1 : -1;
  
  useEffect(() => {
    setPrevStep(currentStep);
  }, [currentStep]);
  
  const steps = [
    { number: 1, name: 'Vos informations', icon: '👤' },
    { number: 2, name: 'Type d\'assurance', icon: '🛡️' },
    { number: 3, name: 'Détails', icon: '📋' },
    { number: 4, name: 'Finalisation', icon: '✅' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12 relative z-10"
    >
      {/* Version desktop */}
      <div className="hidden sm:flex items-center justify-center">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            {/* Étape */}
            <motion.div 
              className="relative"
              initial={false}
              animate={currentStep >= step.number ? "active" : "inactive"}
              variants={{
                active: { scale: 1.05 },
                inactive: { scale: 1 }
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className={`h-12 w-12 rounded-full flex items-center justify-center border-2 font-medium text-sm
                  shadow-lg transition-all duration-500 ease-in-out
                  ${currentStep >= step.number
                    ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white border-blue-400'
                    : 'bg-white text-gray-600 border-gray-300'
                  }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {currentStep > step.number ? (
                  <motion.svg 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-5 h-5 text-white" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </motion.svg>
                ) : (
                  <span className="flex items-center justify-center">
                    {currentStep === step.number ? (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        {step.icon}
                      </motion.span>
                    ) : step.number}
                  </span>  
                )}
              </motion.div>
              
              <motion.div
                className={`absolute -bottom-8 text-sm font-medium text-center
                  ${currentStep >= step.number ? 'text-blue-900 font-semibold' : 'text-gray-600'}`}
                style={{ left: '-24px', width: '60px' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {step.name}
              </motion.div>
            </motion.div>
            
            {/* Ligne de connexion */}
            {index < steps.length - 1 && (
              <div className="relative w-20 mx-1">
                <motion.div
                  className="w-full h-1 absolute top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full"
                  style={{ zIndex: 1 }}
                ></motion.div>
                
                <motion.div
                  className="h-1 absolute top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                  style={{ zIndex: 2 }}
                  initial={{ width: currentStep > step.number ? "100%" : "0%" }}
                  animate={{ width: currentStep > step.number ? "100%" : "0%" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {currentStep > step.number && (
                    <motion.span 
                      className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1] }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut" as const,
                        type: "tween" as const
                      }}
                    >
                      <span className="h-3 w-3 bg-blue-600 rounded-full block shadow-md"></span>
                    </motion.span>
                  )}
                </motion.div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      
      {/* Affichage mobile */}
      <motion.div 
        className="sm:hidden px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div 
          className="flex justify-between items-center mb-3"
          initial={{ x: direction * 40 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm shadow-lg">
              {steps[currentStep - 1].icon}
            </div>
            <p className="ml-3 text-sm font-medium">
              Étape <span className="text-blue-800 font-bold">{currentStep}/{steps.length}</span>
            </p>
          </div>
          <p className="text-base font-semibold text-blue-900">
            {steps[currentStep - 1].name}
          </p>
        </motion.div>
        
        <div className="mt-2 h-2 w-full bg-gray-200 rounded-full overflow-hidden shadow-inner relative">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"
            initial={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.div
              className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-blue-400 opacity-75"
              animate={{ x: [0, 10] }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse" as const,
                duration: 1,
                ease: "easeInOut" as const,
                type: "tween" as const
              }}

            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );

};

export default DevisProgress;
