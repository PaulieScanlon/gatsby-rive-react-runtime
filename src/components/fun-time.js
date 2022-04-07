import React, { useEffect } from 'react';
import { useRive } from 'rive-react';

import animation from './fun-time.riv';

import usePrefersReducedMotion from '../hooks/use-prefers-reduced-motion';

const FunTime = ({ className }) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { rive, RiveComponent } = useRive({
    src: animation
  });

  useEffect(() => {
    if (rive) {
      if (prefersReducedMotion) {
        rive.pause();
      } else {
        rive.play();
      }
    }
  }, [rive, prefersReducedMotion]);

  return <RiveComponent className={className} />;
};

export default FunTime;
