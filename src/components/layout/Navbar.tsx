'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '@/components/ui/Button';
import { useRippleEffect } from '@/hooks/useRippleEffect';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Gestion du scroll pour l'effet sticky avec ombre et transparence
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    // Initialisation au chargement
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Fermer le menu au changement de page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);
  
  const isActive = (path: string) => {
    return pathname === path;
  };

  // Classes pour la navbar en fonction de l'état de défilement et de la page
  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${scrolled ? 'shadow-md py-2' : 'py-2.5'}`;

  // Hook pour l'effet ripple sur les liens de navigation
  const { createRipple } = useRippleEffect();
  
  return (
    <>
      {/* Div fantôme pour empêcher le contenu d'être caché par la navbar fixe */}
      <div className="h-16"></div>
      
      <nav 
        className={navbarClasses}
        aria-label="Navigation principale"
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="flex-shrink-0 flex items-center group" 
              aria-label="Accueil SIA Assurances"
            >
              {/* Logo avec effet hover - style adaptatif selon la transparence */}
              <div className="flex items-center p-1">
                <Image 
                  src="/logo.png" 
                  alt="SIA Assurances" 
                  width={160}
                  height={40}
                  className="h-10 w-auto max-w-[160px]"
                />
                <span className="ml-2 text-lg font-semibold text-blue-700">SIA Assurances</span>
              </div>
            </Link>
          </div>
          
          {/* Menu desktop avec états actifs améliorés */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" 
                  className={`px-3 py-1.5 rounded-md font-medium transition-all duration-300 relative 
                    ${isActive('/') 
                      ? 'text-blue-800 bg-blue-50/80 backdrop-blur-sm' 
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-800'}`}
                  aria-current={isActive('/') ? 'page' : undefined}
            >
              <span>Accueil</span>
              {isActive('/') && <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-blue-800 rounded-full"></span>}
            </Link>
            <Link href="/services" 
                  className={`px-3 py-1 rounded-md font-medium transition-all duration-300 relative 
                    ${isActive('/services') 
                      ? 'text-blue-800 bg-blue-50/80 backdrop-blur-sm' 
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-800'}`}
                  aria-current={isActive('/services') ? 'page' : undefined}
            >
              <span>Nos services</span>
              {isActive('/services') && <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-blue-800 rounded-full"></span>}
            </Link>
            <Link href="/about" 
                  className={`px-3 py-1 rounded-md font-medium transition-all duration-300 relative 
                    ${isActive('/about') 
                      ? 'text-blue-800 bg-blue-50/80 backdrop-blur-sm' 
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-800'}`}
                  aria-current={isActive('/about') ? 'page' : undefined}
            >
              <span>À propos</span>
              {isActive('/about') && <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-blue-800 rounded-full"></span>}
            </Link>
            <Button 
              href="/contact" 
              variant="text"
              className={`px-3 py-1.5 rounded-md font-medium transition-all duration-300 relative ml-4
                ${isActive('/contact') 
                  ? 'text-blue-800 bg-blue-50/80 backdrop-blur-sm' 
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-800'}`}
              aria-current={isActive('/contact') ? 'page' : undefined}
              onClick={createRipple}
            >
              Contact
            </Button>
            
            <Button 
              href="/devis" 
              variant="primary" 
              size="sm"
              className="ml-2 bg-blue-600 hover:bg-blue-700"
              aria-current={isActive('/devis') ? 'page' : undefined}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              }
              onClick={createRipple}
            >
              Devis
            </Button>
          </div>

          {/* Bouton mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 text-gray-700 hover:text-black hover:bg-gray-100`}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Ouvrir le menu principal</span>
              {/* Icon menu fermé */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon menu ouvert */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile avec animation */}
      <div 
        id="mobile-menu"
        className={`transform transition-all duration-300 ease-in-out md:hidden overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        style={{backdropFilter: 'blur(8px)'}}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 shadow-inner">
          <Link href="/" 
                className={`block px-3 py-3 rounded-md font-medium transition-all duration-300 ${isActive('/') ? 'bg-blue-50 text-blue-800 border-l-4 border-blue-800' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-800'}`}
                aria-current={isActive('/') ? 'page' : undefined}
          >
            Accueil
          </Link>
          <Link href="/services" 
                className={`block px-3 py-3 rounded-md font-medium transition-all duration-300 ${isActive('/services') ? 'bg-blue-50 text-blue-800 border-l-4 border-blue-800' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-800'}`}
                aria-current={isActive('/services') ? 'page' : undefined}
          >
            Nos services
          </Link>
          <Link href="/about" 
                className={`block px-3 py-3 rounded-md font-medium transition-all duration-300 ${isActive('/about') ? 'bg-blue-50 text-blue-800 border-l-4 border-blue-800' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-800'}`}
                aria-current={isActive('/about') ? 'page' : undefined}
          >
            À propos
          </Link>
          <Link href="/contact" 
                className={`block px-3 py-3 rounded-md font-medium transition-all duration-300 ${isActive('/contact') ? 'bg-blue-50 text-blue-800 border-l-4 border-blue-800' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-800'}`}
                aria-current={isActive('/contact') ? 'page' : undefined}
          >
            Contact
          </Link>
          <Link href="/devis" 
                className={`block px-3 py-3 rounded-md font-medium transition-all duration-300 mt-2 text-center ${isActive('/devis') ? 'bg-blue-100 text-blue-800 border border-blue-800' : 'bg-blue-50 text-blue-800 border border-blue-200 hover:bg-blue-100 hover:border-blue-600'}`}
                aria-current={isActive('/devis') ? 'page' : undefined}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Demander un devis
          </Link>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
