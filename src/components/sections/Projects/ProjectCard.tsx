import Badge from "@/components/ui/Badge";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
      {/* Project Image Placeholder */}
      <div className="w-full h-48 bg-gradient-to-r from-gray-700 to-gray-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <div className="text-white text-6xl font-bold opacity-50">
            {project.title.charAt(0)}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
          <span className="text-gray-500 text-sm">{project.date}</span>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          {project.achievements.map((achievement, index) => (
            <div key={index} className="flex items-center gap-2 mb-2 last:mb-0">
              <span className="text-gray-700 font-bold">✓</span>
              <span className="text-gray-700 text-sm">{achievement}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <Badge key={index}>{tech}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
