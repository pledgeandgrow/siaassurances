'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from '@/components/motion';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-lg w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Code d'erreur stylisé */}
          <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-900">
            404
          </h1>
          
          {/* Message principal */}
          <h2 className="mt-6 text-3xl font-semibold text-gray-900">
            Page introuvable
          </h2>
          
          {/* Message secondaire */}
          <p className="mt-4 text-lg text-gray-600">
            Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
          </p>
        </motion.div>
        
        {/* Illustration */}
        <motion.div 
          className="my-10 flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="w-64 h-64 relative">
            <div className="absolute inset-0 bg-blue-100 rounded-full opacity-30"></div>
            <div className="absolute transform rotate-45 w-40 h-40 border-8 border-blue-600 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <svg 
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 text-blue-800" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
          </div>
        </motion.div>
        
        {/* Options de navigation */}
        <motion.div 
          className="mt-6 flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link 
            href="/" 
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Retour à l&apos;accueil
          </Link>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center px-4 py-2 border border-blue-600 text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 shadow-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Nous contacter
          </Link>
        </motion.div>

        {/* Suggestions */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <h3 className="text-lg font-medium text-gray-900">Vous pourriez être intéressé par</h3>
          <motion.ul 
            className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            animate="show"
          >
            {[
              { title: "Demander un devis", href: "/devis", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
              { title: "Découvrir nos services", href: "/services", icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" },
              { title: "À propos de nous", href: "/about", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "Nous contacter", href: "/contact", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }
            ].map((link, index) => (
              <motion.li 
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 }
                }}
              >
                <Link 
                  href={link.href}
                  className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                >
                  <span className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
                    </svg>
                  </span>
                  <span className="ml-3 font-medium text-gray-700">{link.title}</span>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </main>
  );
}
