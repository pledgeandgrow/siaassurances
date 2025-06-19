// Types pour le formulaire de devis
export type DevisFormData = {
  // Étape 1: Informations personnelles
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  
  // Étape 2: Type d'assurance
  insuranceType: string;
  specificCoverage: string[];
  
  // Étape 3: Détails spécifiques selon le type d'assurance
  propertyType?: string;
  propertyValue?: string;
  propertySize?: string;      // Taille/superficie du bien (pour assurance habitation)
  propertyOwnership?: string; // Statut propriétaire/locataire (pour assurance habitation)
  activitySector?: string;
  companySize?: string;
  currentInsurer?: string;
  currentPremium?: string;
  
  // Étape 4: Finalisation
  startDate: string;
  message: string;
  contactPreference: string;
  consent: boolean;
};

export type ErrorState = {
  [key: string]: string;
};
