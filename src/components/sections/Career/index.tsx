import { CAREER_DATA } from '@/constants';
import SectionTitle from '@/components/ui/SectionTitle';
import CareerCard from './CareerCard';

export default function Career() {
  return (
    <section id="career" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-8">
        <SectionTitle>CAREER</SectionTitle>

        <div id="career-section" className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-gray-700 to-gray-500 hidden md:block"></div>

          <div className="space-y-12">
            {CAREER_DATA.map((career, index) => (
              <CareerCard key={index} career={career} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
