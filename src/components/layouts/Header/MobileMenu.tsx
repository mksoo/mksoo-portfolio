"use client";

import { useEffect } from 'react';
import NavLinks from './NavLinks';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 md:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu */}
      <div className="fixed top-0 right-0 bottom-0 w-64 bg-white z-50 shadow-2xl md:hidden transform transition-transform duration-300">
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-gray-700 hover:text-gray-900 transition-colors"
            aria-label="메뉴 닫기"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav>
          <ul className="flex flex-col gap-6 px-8 py-4">
            <NavLinks onItemClick={onClose} />
          </ul>
        </nav>
      </div>
    </>
  );
}
