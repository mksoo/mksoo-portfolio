import Image from "next/image";
import Badge from "@/components/ui/Badge";
import { Career } from "@/types";

interface CareerCardProps {
  career: Career;
  index: number;
}

export default function CareerCard({ career, index }: CareerCardProps) {
  return (
    <div
      className={`flex ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-col items-center relative`}
    >
      <div className="w-full md:w-1/2 px-8">
        <div className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center">
              <Image
                src={career.logo}
                alt={`${career.company} logo`}
                width={120}
                height={120}
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">{career.company}</h3>
              <span className="text-gray-500 text-sm">{career.period}</span>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
            {career.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {career.tech.map((tech, techIndex) => (
              <Badge key={techIndex}>{tech}</Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white border-4 border-gray-700 rounded-full z-10 hidden md:block"></div>
    </div>
  );
}
