import { scrollToSection } from '@/utils/scroll';

export default function HeroButtons() {
  return (
    <div className="flex gap-4 justify-center flex-wrap">
      <button
        onClick={() => scrollToSection('career')}
        className="px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        aria-label="경력 섹션으로 이동"
      >
        View Career
      </button>
      <button
        onClick={() => scrollToSection('contact')}
        className="px-8 py-3 border-2 border-gray-700 text-gray-700 rounded-full font-semibold hover:bg-gray-700 hover:text-white transition-all duration-300"
        aria-label="연락처 섹션으로 이동"
      >
        Contact Me
      </button>
    </div>
  );
}
