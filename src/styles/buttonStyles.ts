// buttonStyles.ts - Système unifié de styles pour les boutons

// Types de boutons disponibles
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text' | 'cta';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

// Classe de base pour tous les boutons - style identique aux boutons du Hero
const baseButtonStyles = `
  inline-flex items-center justify-center rounded-lg font-medium
  transition-all duration-300
  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
  disabled:opacity-60 disabled:cursor-not-allowed
  transform hover:scale-105 active:scale-[0.98]
  shadow-md relative overflow-hidden
`;

// Classes spécifiques pour les différentes variantes
export const getButtonStyles = (variant: ButtonVariant = 'primary', size: ButtonSize = 'md', isFullWidth = false): string => {
  // Styles de variante
  const variantStyles = {
    primary: `
      bg-gradient-to-r from-blue-700 to-blue-800
      hover:from-blue-800 hover:to-blue-900
      text-white shadow-md hover:shadow-lg
      active:from-blue-900 active:to-blue-950
    `,
    secondary: `
      bg-blue-50 text-blue-800
      hover:bg-blue-100 hover:text-blue-900
      border border-blue-200 hover:border-blue-300
      active:bg-blue-200
    `,
    outline: `
      bg-transparent text-blue-700
      border-2 border-blue-600
      hover:bg-blue-50 hover:text-blue-800
      active:bg-blue-100
    `,
    text: `
      bg-transparent text-blue-700
      hover:bg-blue-50 hover:text-blue-800
      active:bg-blue-100
    `,
    cta: `
      bg-gradient-to-r from-blue-600 to-blue-800
      hover:from-blue-700 hover:to-blue-900
      text-white shadow-lg hover:shadow-xl
      active:from-blue-800 active:to-blue-950
      ring-1 ring-blue-400
    `
  };

  // Styles de taille
  const sizeStyles = {
    xs: 'px-2.5 py-1.5 text-xs',
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  // Largeur du bouton
  const widthStyle = isFullWidth ? 'w-full' : '';

  return `${baseButtonStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle}`.replace(/\s+/g, ' ').trim();
};

// Animation globale pour les boutons
export const buttonAnimation = {
  tap: {
    scale: 0.98
  },
  hover: {
    scale: 1.02
  }
};

// Animation de chargement pour les boutons
export const buttonLoadingStyles = `
  relative !text-transparent
  after:content-[''] after:absolute after:w-5 after:h-5
  after:border-2 after:border-t-transparent
  after:border-white after:rounded-full
  after:animate-spin
`;
