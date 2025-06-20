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
    
    // Vérifier si c'est du spam
    if (isSpam(formData)) {
      // Simuler une réponse réussie pour ne pas alerter les bots
      return NextResponse.json({ success: true });
    }
    
    // Extraction des données du formulaire
    const { firstName, lastName, email, phone, subject, message, consent, recaptchaToken } = formData;
    
    // Vérification du token reCAPTCHA
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: 'Veuillez confirmer que vous n\'êtes pas un robot' },
        { status: 400 }
      );
    }
    
    // Vérification du token reCAPTCHA avec l'API Google
    const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
    if (!isRecaptchaValid) {
      return NextResponse.json(
        { error: 'Échec de la vérification reCAPTCHA. Veuillez réessayer.' },
        { status: 400 }
      );
    }
    
    // Validation des données
    if (!firstName || !lastName || !email || !phone || !subject || !message || !consent) {
      return NextResponse.json(
        { error: 'Tous les champs sont obligatoires' },
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
    
    // Préparer l'email
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'contact@siaassurances.fr',
      to: process.env.EMAIL_TO || 'destinataire@siaassurances.fr',
      replyTo: email,
      subject: `Nouveau message de contact: ${subject}`,
      text: `
        Nouveau message de contact via le site web:
        
        Nom: ${firstName} ${lastName}
        Email: ${email}
        Téléphone: ${phone}
        Sujet: ${subject}
        
        Message:
        ${message}
        
        Le contact a accepté la politique de confidentialité.
      `,
      html: `
        <h2>Nouveau message de contact via le site web</h2>
        <p><strong>Nom:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <p><em>Le contact a accepté la politique de confidentialité.</em></p>
      `,
    };
    
    // Envoyer l'email
    await transporter.sendMail(mailOptions);
    
    // Répondre avec succès
    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de l\'envoi du message' },
      { status: 500 }
    );
  }
}
