import React from 'react';

type TestimonialProps = {
  content: string;
  author: string;
  role: string;
  imageUrl?: string;
};

const TestimonialCard = ({ content, author, role, imageUrl }: TestimonialProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 relative">
      <svg className="h-12 w-12 text-gray-200 absolute top-6 left-6" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
      </svg>
      <p className="text-gray-500 mt-8 mb-4">{content}</p>
      <div className="flex items-center">
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
          <span className="text-blue-600 font-bold text-lg">{author.charAt(0)}</span>
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">{author}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Ce que nos clients disent
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Découvrez les témoignages de ceux qui nous font confiance
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard
            content="SIA Assurances a su m&apos;accompagner dans la recherche de la meilleure assurance pour ma nouvelle entreprise. Leur expertise et leur réactivité ont été déterminantes."
            author="Marie Dupont"
            role="Dirigeante, MD Consulting"
          />
          <TestimonialCard
            content="Après un sinistre important, l&apos;équipe de SIA a géré mon dossier avec professionnalisme et efficacité. Je recommande vivement leurs services."
            author="Thomas Laurent"
            role="Propriétaire immobilier"
          />
          <TestimonialCard
            content="Grâce à l&apos;audit de mes contrats réalisé par SIA Assurances, j&apos;ai pu optimiser mes couvertures tout en réduisant mes cotisations. Un service vraiment précieux."
            author="Sophie Martin"
            role="Directrice financière, SME Solutions"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
