import React from 'react';
import Link from 'next/link';

const ContactCTA = () => {
  return (
    <section className="bg-blue-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Prêt à optimiser vos assurances&nbsp;?</span>
          <span className="block text-blue-200">Contactez nos experts dès aujourd'hui.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50">
              Demander un devis
            </Link>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Link href="/services" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500">
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
