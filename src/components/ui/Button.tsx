'use client';

import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import Link from 'next/link';
import { ButtonVariant, ButtonSize, getButtonStyles, buttonLoadingStyles } from '@/styles/buttonStyles';
import { useRippleEffect } from '@/hooks/useRippleEffect';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  href?: string;
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      href,
      isLoading = false,
      icon,
      iconPosition = 'left',
      className = '',
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    // Utilisation du hook pour l'effet ripple
    const { createRipple } = useRippleEffect();
    // Générer les classes CSS basées sur les props
    const baseStyles = getButtonStyles(variant, size, fullWidth);
    const loadingClass = isLoading ? buttonLoadingStyles : '';
    const combinedClasses = `${baseStyles} ${loadingClass} ${className}`.trim();
    
    // Déterminer si le bouton est désactivé
    const isDisabled = disabled || isLoading;
    
    // Contenu du bouton avec icône et gestion du chargement
    const buttonContent = (
      <>
        {isLoading && (
          <span className="absolute inline-flex">
            {/* L'animation de chargement est gérée via CSS dans buttonStyles.ts */}
          </span>
        )}
        
        {icon && iconPosition === 'left' && !isLoading && (
          <span className="mr-2">{icon}</span>
        )}
        
        <span>{children}</span>
        
        {icon && iconPosition === 'right' && !isLoading && (
          <span className="ml-2">{icon}</span>
        )}
      </>
    );

    // Si un href est fourni, rendre un composant Link
    if (href && !isDisabled) {
      return (
        <Link
          href={href}
          className={`${combinedClasses} relative overflow-hidden`}
          onClick={(e) => {
            if (isLoading) {
              e.preventDefault();
              return;
            }
            // Appliquer l'effet ripple
            createRipple(e.nativeEvent as unknown as React.MouseEvent<HTMLElement>);
          }}
        >
          {buttonContent}
        </Link>
      );
    }

    // Sinon, rendre un bouton standard
    return (
      <button
        ref={ref}
        className={`${combinedClasses} relative overflow-hidden`}
        disabled={isDisabled}
        onClick={(e) => {
          if (!isDisabled) {
            createRipple(e);
            props.onClick?.(e);
          }
        }}
        // On supprime onClick car on l&apos;a déjà géré ci-dessus
        {...props}
        // On supprime onClick car on l'a déjà géré ci-dessus
      >
        {buttonContent}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
