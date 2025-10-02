import { Particle } from '@/types';

interface ParticleBackgroundProps {
  particles: Particle[];
}

export default function ParticleBackground({ particles }: ParticleBackgroundProps) {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {particles.map((particle, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-gray-400 rounded-full opacity-30 particle-float"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
