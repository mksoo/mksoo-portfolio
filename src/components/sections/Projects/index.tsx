"use client";

import { useState, useMemo } from "react";
import { PROJECTS } from '@/constants';
import { FilterType } from '@/types';
import SectionTitle from '@/components/ui/SectionTitle';
import FilterTabs from './FilterTabs';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(
      (project) => activeFilter === 'all' || project.category === activeFilter
    );
  }, [activeFilter]);

  return (
    <section id="projects" className="py-20 px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>PROJECTS</SectionTitle>

        <FilterTabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
