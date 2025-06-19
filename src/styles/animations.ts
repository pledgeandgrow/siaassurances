// animations.ts - Système d'animations globales pour l'ensemble du site

// Animation de fade in
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.4 }
  }
};

// Animation de slide in depuis le bas
export const slideInBottom = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { 
      type: "spring", 
      damping: 25, 
      stiffness: 500,
      duration: 0.3
    }
  }
};

// Animation de slide in depuis la gauche
export const slideInLeft = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { 
      type: "spring", 
      damping: 25, 
      stiffness: 200,
      duration: 0.4
    }
  }
};

// Animation de slide in depuis la droite
export const slideInRight = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { 
      type: "spring", 
      damping: 25, 
      stiffness: 200,
      duration: 0.4
    }
  }
};

// Animation de pulse pour attirer l'attention
export const pulse = {
  initial: { scale: 1 },
  animate: { 
    scale: [1, 1.03, 1],
    transition: { 
      duration: 1.5, 
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse"
    } 
  }
};

// Animation de hover pour les boutons et éléments interactifs
export const hoverScale = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.02,
    transition: { duration: 0.2 }
  },
  tap: { 
    scale: 0.98,
    transition: { duration: 0.1 }
  }
};

// Animation avec shadow pour les cartes et boutons
export const hoverElevate = {
  initial: { 
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    transition: { duration: 0.3 }
  },
  hover: { 
    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    y: -3,
    transition: { duration: 0.3 }
  }
};

// Classes CSS pour les animations de base sans React Framer Motion
export const cssAnimations = {
  fadeIn: 'animate-fadeIn',
  slideUp: 'animate-slideUp',
  pulse: 'animate-pulse',
  bounce: 'animate-bounce',
  spin: 'animate-spin'
};

// Animation de ripple effect pour les clics
export const rippleEffect = `
  relative
  overflow-hidden
  after:content-['']
  after:absolute
  after:bg-white/30
  after:rounded-full
  after:scale-0
  after:opacity-75
  active:after:scale-[10]
  active:after:opacity-0
  after:transition-all
  after:duration-1000
  after:left-[var(--x)]
  after:top-[var(--y)]
  after:h-1
  after:w-1
  after:transform
  after:origin-center
`;
