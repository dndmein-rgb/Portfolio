import { useEffect, useState } from 'react';

/**
 * Custom hook to detect if user prefers reduced motion
 * Respects the user's accessibility preferences
 * @returns {boolean} true if prefers-reduced-motion is active
 */
export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check initial preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

/**
 * Returns animation props based on motion preference
 * @param {object} animationProps - Framer Motion animation properties
 * @returns {object} Appropriate animation props or static props
 */
export const getMotionProps = (animationProps) => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    return {
      initial: animationProps.initial || {},
      animate: animationProps.initial || {},
      exit: animationProps.initial || {},
    };
  }

  return animationProps;
};
