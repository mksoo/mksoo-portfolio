"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [particles, setParticles] = useState<Array<{left: number, delay: number, duration: number}>>([]);

  const roles = ['창업가', '데이터 사이언티스트', '풀스택 개발자'];

  // 파티클 데이터를 클라이언트에서만 생성
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 50 }).map(() => ({
        left: Math.random() * 100,
        delay: Math.random() * 20,
        duration: 15 + Math.random() * 10
      }));
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  useEffect(() => {
    const typeEffect = () => {
      const current = roles[currentRole];
      
      if (!isDeleting) {
        if (displayText.length < current.length) {
          setDisplayText(current.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(current.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(typeEffect, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole, roles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Particles Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gray-400 rounded-full opacity-30 particle-float"
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 max-w-4xl px-8">
        {/* Profile Image */}
        <div className="relative mb-8">
          <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-gray-700 to-gray-500 p-1 animate-pulse">
            <Image
              src="/profile.jpeg"
              alt="문광수 프로필"
              width={160}
              height={160}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent">
          문광수
        </h1>

        {/* Role Text with Typing Effect */}
        <div className="text-2xl md:text-3xl font-semibold mb-6 h-12 flex items-center justify-center">
          <span className="border-r-2 border-gray-700 animate-pulse">
            {displayText}
          </span>
        </div>

        {/* Description */}
        <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
          세상의 문제를 찾아 코드로 해결하는 개발자<br />
          모바일과 웹을 넘나들며, 사용성과 완성도를 함께 고민합니다
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <a 
            href="#career" 
            className="px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            View Career
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 border-2 border-gray-700 text-gray-700 rounded-full font-semibold hover:bg-gray-700 hover:text-white transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
} 