import React from 'react';

const ContactInfo = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Nos coordonnées</h2>
      
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-2">Adresse</h3>
        <p className="text-gray-600">
          123 Avenue des Assurances<br />
          75008 Paris, France
        </p>
      </div>
      
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-2">Téléphone</h3>
        <p className="text-gray-600">
          <a href="tel:+33123456789" className="hover:text-blue-800 transition-colors">
            +33 (0)1 23 45 67 89
          </a>
        </p>
      </div>
      
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
        <p className="text-gray-600">
          <a href="mailto:contact@sia-assurances.fr" className="hover:text-blue-800 transition-colors">
            contact@sia-assurances.fr
          </a>
        </p>
      </div>
      
      <div>
        <h3 className="font-semibold text-gray-900 mb-2">Horaires d&apos;ouverture</h3>
        <p className="text-gray-600">
          Lundi - Vendredi: 9h00 - 18h00<br />
          Samedi: 9h00 - 12h00<br />
          Dimanche: Fermé
        </p>
      </div>
      
      <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
          <svg className="w-5 h-5 mr-2 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          Urgence
        </h3>
        <p className="text-gray-700">
          En cas d&apos;urgence en dehors de nos horaires d&apos;ouverture, veuillez appeler notre numéro d&apos;assistance 24/7 :
          <a href="tel:+33198765432" className="block mt-1 font-medium text-blue-800 hover:text-blue-900">
            +33 (0)1 98 76 54 32
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
