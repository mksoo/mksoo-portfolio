"use client";

import { useTypewriter, useParticles } from '@/hooks';
import { HERO_ROLES } from '@/constants';
import ParticleBackground from './ParticleBackground';
import ProfileImage from './ProfileImage';
import TypingText from './TypingText';
import HeroButtons from './HeroButtons';

export default function Hero() {
  const displayText = useTypewriter({ texts: HERO_ROLES });
  const particles = useParticles(50);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-white"
    >
      <ParticleBackground particles={particles} />

      <div className="text-center z-10 max-w-4xl px-8">
        <ProfileImage />

        <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent">
          문광수
        </h1>

        <TypingText text={displayText} />

        <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
          세상의 문제를 찾아 코드로 해결하는 개발자<br />
          모바일과 웹을 넘나들며, 사용성과 완성도를 함께 고민합니다
        </p>

        <HeroButtons />
      </div>
    </section>
  );
}
