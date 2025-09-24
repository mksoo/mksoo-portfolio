"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-black bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent">
          MKSOO
        </Link>
        
        <ul className="hidden md:flex gap-8">
          <li>
            <Link href="#home" className="text-gray-700 font-medium hover:text-gray-900 transition-colors duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="#skills" className="text-gray-700 font-medium hover:text-gray-900 transition-colors duration-300">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#career" className="text-gray-700 font-medium hover:text-gray-900 transition-colors duration-300">
              Career
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-gray-700 font-medium hover:text-gray-900 transition-colors duration-300">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-gray-700 font-medium hover:text-gray-900 transition-colors duration-300">
              Contact
            </Link>
          </li>
        </ul>

        <div className="md:hidden">
          <button className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}