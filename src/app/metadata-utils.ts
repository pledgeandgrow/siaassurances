import { Metadata } from 'next';

/**
 * Fonction utilitaire pour générer des métadonnées Open Graph et Twitter pour chaque page
 * @param title - Titre de la page
 * @param description - Description de la page
 * @param imagePath - Chemin de l'image (relatif au dossier public)
 * @param url - URL relative de la page (sans le domaine)
 */
export function generateMetadata({
  title,
  description,
  imagePath = '/og-image.jpg',
  url = '/',
}: {
  title: string;
  description: string;
  imagePath?: string;
  url?: string;
}): Metadata {
  // URL complète pour les métadonnées
  const fullUrl = `https://siaassurances.com${url}`;
  
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: 'SIA Assurances',
      locale: 'fr_FR',
      type: 'website',
      images: [
        {
          url: imagePath,
          width: 1200,
          height: 630,
          alt: `${title} - SIA Assurances`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imagePath],
      creator: '@SIAAssurances',
    },
  };
}

/**
 * Métadonnées pour la page d'accueil
 */
export const homeMetadata = generateMetadata({
  title: 'SIA Assurances | Courtage, Audit et Conseil en Assurance Construction',
  description: 'Cabinet de courtage spécialisé en assurance construction, garantie décennale, dommages ouvrage et protection des professionnels.',
  imagePath: '/og-home.jpg',
  url: '/',
});

/**
 * Métadonnées pour la page Services
 */
export const servicesMetadata = generateMetadata({
  title: 'Nos Services | SIA Assurances',
  description: 'Découvrez nos services de courtage en assurance construction, audit de contrats, conseil personnalisé et accompagnement en cas de sinistre.',
  imagePath: '/og-services.jpg',
  url: '/services',
});

/**
 * Métadonnées pour la page À propos
 */
export const aboutMetadata = generateMetadata({
  title: 'À Propos | SIA Assurances',
  description: 'Découvrez l\'histoire de SIA Assurances, notre expertise en assurance construction et notre engagement envers nos clients professionnels.',
  imagePath: '/og-about.jpg',
  url: '/about',
});

/**
 * Métadonnées pour la page Contact
 */
export const contactMetadata = generateMetadata({
  title: 'Contact | SIA Assurances',
  description: 'Contactez SIA Assurances pour toute question concernant vos besoins en assurance construction et protection professionnelle.',
  imagePath: '/og-contact.jpg',
  url: '/contact',
});

/**
 * Métadonnées pour la page Devis
 */
export const devisMetadata = generateMetadata({
  title: 'Demande de Devis | SIA Assurances',
  description: 'Obtenez un devis personnalisé pour votre assurance construction, garantie décennale ou RC professionnelle avec SIA Assurances.',
  imagePath: '/og-devis.jpg',
  url: '/devis',
});
