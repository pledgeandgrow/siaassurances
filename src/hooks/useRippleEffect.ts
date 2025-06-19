'use client';

import { useCallback, useRef } from 'react';

// Hook pour ajouter un effet ripple aux éléments cliquables
export const useRippleEffect = () => {
  const rippleRef = useRef<HTMLElement | null>(null);

  const createRipple = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const element = event.currentTarget;
      rippleRef.current = element;

      // Calculer les coordonnées du clic par rapport à l'élément
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Créer l'élément ripple
      const circle = document.createElement('span');
      const diameter = Math.max(element.clientWidth, element.clientHeight);
      const radius = diameter / 2;

      // Définir la position et l'apparence du ripple
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${x - radius}px`;
      circle.style.top = `${y - radius}px`;
      circle.style.position = 'absolute';
      circle.style.borderRadius = '50%';
      circle.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
      circle.style.transform = 'scale(0)';
      circle.style.animation = 'ripple 600ms linear';
      circle.style.pointerEvents = 'none';

      // S'assurer que l'élément parent a une position relative
      const computedStyle = window.getComputedStyle(element);
      if (computedStyle.position !== 'relative') {
        element.style.position = 'relative';
      }
      element.style.overflow = 'hidden';

      // Nettoyer les ripples précédents
      const ripple = element.getElementsByClassName('ripple');
      if (ripple.length > 0) {
        ripple[0].remove();
      }

      // Ajouter le nouveau ripple
      circle.classList.add('ripple');
      element.appendChild(circle);

      // Supprimer le ripple après l'animation
      circle.addEventListener('animationend', () => {
        if (circle.parentElement) {
          circle.parentElement.removeChild(circle);
        }
      });
    },
    []
  );

  return { createRipple, rippleRef };
};

export default useRippleEffect;
