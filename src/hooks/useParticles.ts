import { useEffect, useState } from 'react';
import { Particle } from '@/types';

export const useParticles = (count: number = 50) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = (): Particle[] => {
      return Array.from({ length: count }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: -(Math.random() * 20),
        duration: 15 + Math.random() * 10,
      }));
    };

    setParticles(generateParticles());
  }, [count]);

  return particles;
};
