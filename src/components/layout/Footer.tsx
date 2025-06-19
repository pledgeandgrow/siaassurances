import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <li className="mb-2">
    <Link 
      href={href} 
      className="text-gray-300 hover:text-white transition-colors duration-300 inline-block relative group"
    >
      <span>{children}</span>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
    </Link>
  </li>
);

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white relative overflow-hidden">
      {/* Formes décoratives */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-600"></div>
      <div className="absolute top-16 left-10 w-32 h-32 rounded-full bg-blue-900 opacity-10 blur-2xl"></div>
      <div className="absolute bottom-16 right-10 w-48 h-48 rounded-full bg-blue-800 opacity-5 blur-3xl"></div>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Colonne 1: À propos */}
          <div className="transform transition-all duration-500 hover:translate-y-[-5px]">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="inline-block w-2 h-6 bg-blue-700 mr-3 rounded-md"></span>
              SIA Assurances
            </h3>
            <div className="h-14 w-48 relative bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center rounded-md mb-4 shadow-lg">
              <span className="text-white font-bold text-xl">SIA Assurances</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Cabinet de courtage spécialisé en assurance construction, 
              SIA Assurances met à votre service toute son expertise 
              acquise dans le domaine des assurances de biens, de personnes 
              et de responsabilités.
            </p>
          </div>
          
          {/* Colonne 2: Nos services */}
          <div className="transform transition-all duration-500 hover:translate-y-[-5px]">
            {/* <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="inline-block w-2 h-6 bg-blue-700 mr-3 rounded-md"></span>
              Nos services
            </h3>
            <ul className="space-y-2">
              <FooterLink href="/services/garantie-decennale">Garantie décennale</FooterLink>
              <FooterLink href="/services/dommages-ouvrage">Dommages ouvrage</FooterLink>
              <FooterLink href="/services/rc-promoteur">RC Promoteur</FooterLink>
              <FooterLink href="/services/garantie-constructeur">Garantie constructeur</FooterLink>
            </ul> */}
          </div>
          
          {/* Colonne 3: Liens utiles */}
          <div className="transform transition-all duration-500 hover:translate-y-[-5px]">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="inline-block w-2 h-6 bg-blue-700 mr-3 rounded-md"></span>
              Liens utiles
            </h3>
            <ul className="space-y-2">
              <FooterLink href="/about">À propos</FooterLink>
              <FooterLink href="/devis">Demande de devis</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/blog">Actualités</FooterLink>
            </ul>
          </div>
          
          {/* Colonne 4: Contact */}
          <div className="transform transition-all duration-500 hover:translate-y-[-5px]">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="inline-block w-2 h-6 bg-blue-700 mr-3 rounded-md"></span>
              Contact
            </h3>
            <address className="not-italic text-gray-300">
              <div className="flex items-center mb-3 group">
                <div className="mr-3 p-2 bg-blue-900 bg-opacity-30 rounded-full group-hover:bg-blue-800 transition-colors duration-300">
                  <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:contact@siaassurances.com" className="hover:text-blue-400 transition-colors duration-300">contact@siaassurances.com</a>
              </div>
              
              <div className="flex items-center group">
                <div className="mr-3 p-2 bg-blue-900 bg-opacity-30 rounded-full group-hover:bg-blue-800 transition-colors duration-300">
                  <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+33100000000" className="hover:text-blue-400 transition-colors duration-300">01 00 00 00 00</a>
              </div>
            </address>
            
            <h4 className="text-sm uppercase tracking-wider text-gray-400 mt-6 mb-3">Suivez-nous</h4>
            <div className="flex space-x-3">
              {/* Icônes réseaux sociaux avec animations */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                 className="p-2 bg-blue-800 bg-opacity-20 rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-110 transform">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                 className="p-2 bg-blue-800 bg-opacity-20 rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-110 transform">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="p-2 bg-blue-800 bg-opacity-20 rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-110 transform">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-1">
            <h3 className="text-lg font-medium text-white mb-2">Restez informé</h3>
            <p className="text-sm text-gray-300">Abonnez-vous à notre newsletter pour recevoir nos dernières actualités et conseils.</p>
          </div>
          <div className="lg:col-span-2">
            <form className="flex flex-wrap sm:flex-nowrap gap-3">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent transition-all duration-300"
                aria-label="Adresse email"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2 bg-blue-800 hover:bg-blue-900 text-white font-medium rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                S&apos;abonner
              </button>
            </form>
          </div>
        </div>

        {/* Barre de bas de page avec mentions légales */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} SIA Assurances. Tous droits réservés.</p>
            <div className="mt-4 md:mt-0 flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-sm text-gray-400">
              <Link href="/mentions-legales" className="hover:text-blue-400 transition-colors duration-300">Mentions légales</Link>
              <Link href="/cgv" className="hover:text-blue-400 transition-colors duration-300">CGV</Link>
              <Link href="/confidentialite" className="hover:text-blue-400 transition-colors duration-300">Politique de confidentialité</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
