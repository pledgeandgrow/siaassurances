import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Fonction pour vérifier le token reCAPTCHA
async function verifyRecaptcha(token: string) {
  try {
    // Clé secrète reCAPTCHA - à remplacer par votre clé secrète réelle
    const secretKey = process.env.RECAPTCHA_SECRET_KEY || '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe'; // Clé de test Google
    
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });
    
    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('Erreur lors de la vérification du reCAPTCHA:', error);
    return false;
  }
}

// Configuration du transporteur d'email (à remplacer par vos propres informations)
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.example.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER || 'user@example.com',
    pass: process.env.EMAIL_PASSWORD || 'password',
  },
});

// Fonction pour vérifier si une chaîne est un email valide
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
};

// Fonction pour vérifier si une chaîne est un numéro de téléphone valide
const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{9,10}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

// Fonction pour vérifier si le formulaire contient un honeypot (protection anti-spam)
const isSpam = (formData: Record<string, unknown>): boolean => {
  // Si le champ honeypot est rempli, c'est probablement un bot
  return !!(formData.website as string);
};

export async function POST(request: NextRequest) {
  try {
    // Récupérer les données du formulaire
    const formData = await request.json();
    
    // Vérification du champ honeypot (protection anti-spam)
    if (isSpam(formData)) {
      // Simuler une réponse réussie pour ne pas alerter les bots
      return NextResponse.json({ success: true });
    }
    
    // Vérification du token reCAPTCHA
    if (!formData.recaptchaToken) {
      return NextResponse.json(
        { error: 'Veuillez confirmer que vous n\'êtes pas un robot' },
        { status: 400 }
      );
    }
    
    // Vérification du token reCAPTCHA avec l'API Google
    const isRecaptchaValid = await verifyRecaptcha(formData.recaptchaToken);
    if (!isRecaptchaValid) {
      return NextResponse.json(
        { error: 'Échec de la vérification reCAPTCHA. Veuillez réessayer.' },
        { status: 400 }
      );
    }
    
    // Validation des données de base (présentes dans toutes les étapes)
    const { 
      firstName, lastName, email, phone, 
      companyName, siret, address, postalCode, city,
      insuranceType, consent
    } = formData;
    
    // Validation des champs obligatoires communs à tous les types de devis
    if (!firstName || !lastName || !email || !phone || !insuranceType || !consent) {
      return NextResponse.json(
        { error: 'Informations personnelles incomplètes' },
        { status: 400 }
      );
    }
    
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide' },
        { status: 400 }
      );
    }
    
    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { error: 'Numéro de téléphone invalide' },
        { status: 400 }
      );
    }
    
    // Validation spécifique selon le type d'assurance
    if (insuranceType === 'decennale' || insuranceType === 'rc-pro') {
      if (!companyName || !siret || !address || !postalCode || !city) {
        return NextResponse.json(
          { error: 'Informations entreprise incomplètes' },
          { status: 400 }
        );
      }
    }
    
    // Préparer l'email
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'devis@siaassurances.fr',
      to: process.env.EMAIL_TO || 'destinataire@siaassurances.fr',
      replyTo: email,
      subject: `Nouvelle demande de devis: ${insuranceType}`,
      text: formatDevisEmailText(formData),
      html: formatDevisEmailHtml(formData),
    };
    
    // Envoyer l'email
    await transporter.sendMail(mailOptions);
    
    // Répondre avec succès
    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('Erreur lors de l\'envoi de la demande de devis:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de l\'envoi de la demande de devis' },
      { status: 500 }
    );
  }
}

// Fonction pour formater le contenu texte de l'email
function formatDevisEmailText(formData: Record<string, unknown>): string {
  const {
    firstName, lastName, email, phone,
    companyName, siret, address, postalCode, city,
    insuranceType, revenue, employeeCount,
    currentInsurer, currentPremium, claimHistory, specificNeeds
  } = formData;

  let emailContent = `
    Nouvelle demande de devis via le site web:
    
    Type d'assurance: ${insuranceType}
    
    INFORMATIONS PERSONNELLES:
    Nom: ${firstName} ${lastName}
    Email: ${email}
    Téléphone: ${phone}
    
  `;

  if (companyName) {
    emailContent += `
    INFORMATIONS ENTREPRISE:
    Nom de l'entreprise: ${companyName}
    SIRET: ${siret || 'Non renseigné'}
    Adresse: ${address || 'Non renseignée'}
    Code postal: ${postalCode || 'Non renseigné'}
    Ville: ${city || 'Non renseignée'}
    Chiffre d'affaires: ${revenue || 'Non renseigné'}
    Nombre d'employés: ${employeeCount || 'Non renseigné'}
    
    `;
  }

  emailContent += `
    INFORMATIONS SUR L'ASSURANCE:
    Type d'assurance: ${insuranceType}
    Détails de l'activité: ${formData.activityDetails ? String(formData.activityDetails) : 'Non spécifié'}
    Chiffre d'affaires: ${revenue ? String(revenue) : 'Non spécifié'}
    Nombre d'employés: ${employeeCount ? String(employeeCount) : 'Non spécifié'}

    DÉTAILS DE LA DEMANDE:
    Assureur actuel: ${currentInsurer || 'Non renseigné'}
    Prime actuelle: ${currentPremium || 'Non renseignée'}
    Historique des sinistres: ${claimHistory || 'Non renseigné'}
    Besoins spécifiques: ${specificNeeds || 'Non renseignés'}
    
    Le contact a accepté la politique de confidentialité.
  `;

  return emailContent;
}

// Fonction pour formater le contenu HTML de l'email
function formatDevisEmailHtml(formData: Record<string, unknown>): string {
  const {
    firstName, lastName, email, phone,
    companyName, siret, address, postalCode, city,
    insuranceType, revenue, employeeCount,
    currentInsurer, currentPremium, claimHistory, specificNeeds
  } = formData;

  let emailContent = `
    <h2>Nouvelle demande de devis via le site web</h2>
    <p><strong>Type d'assurance:</strong> ${insuranceType}</p>
    
    <h3>INFORMATIONS PERSONNELLES</h3>
    <p><strong>Nom:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Téléphone:</strong> ${phone}</p>
  `;

  if (companyName) {
    emailContent += `
    <h3>INFORMATIONS ENTREPRISE</h3>
    <p><strong>Nom de l'entreprise:</strong> ${companyName}</p>
    <p><strong>SIRET:</strong> ${siret || 'Non renseigné'}</p>
    <p><strong>Adresse:</strong> ${address || 'Non renseignée'}</p>
    <p><strong>Code postal:</strong> ${postalCode || 'Non renseigné'}</p>
    <p><strong>Ville:</strong> ${city || 'Non renseignée'}</p>
    <p><strong>Chiffre d'affaires:</strong> ${revenue || 'Non renseigné'}</p>
    <p><strong>Nombre d'employés:</strong> ${employeeCount || 'Non renseigné'}</p>
    `;
  }

  emailContent += `
    <h3>DÉTAILS DE LA DEMANDE</h3>
    <p><strong>Activité détaillée:</strong> ${formData.activityDetails ? String(formData.activityDetails) : 'Non renseignée'}</p>
    <p><strong>Assureur actuel:</strong> ${currentInsurer ? String(currentInsurer) : 'Non renseigné'}</p>
    <p><strong>Prime actuelle:</strong> ${currentPremium ? String(currentPremium) : 'Non renseignée'}</p>
    <p><strong>Historique des sinistres:</strong> ${claimHistory ? String(claimHistory).replace(/\n/g, '<br>') : 'Non renseigné'}</p>
    <p><strong>Besoins spécifiques:</strong> ${specificNeeds ? String(specificNeeds).replace(/\n/g, '<br>') : 'Non renseignés'}</p>
    
    <p><em>Le contact a accepté la politique de confidentialité.</em></p>
  `;

  return emailContent;
}
