import React, { useState } from 'react';
import {
  ExternalLink,
  BookOpen,
  ChevronRight,
  Filter,
  Sparkles,
  Layers,
  Cpu,
  Eye,
} from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  projects: Project[];
  isDark: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, isDark }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories: { label: string; value: ProjectCategory }[] = [
    { label: 'all research', value: 'all' },
    { label: 'operando synchrotron', value: 'operando' },
    { label: 'materials & interfaces', value: 'materials' },
    { label: 'machine learning', value: 'ml' },
    { label: '3d scientific visualization', value: 'visualization' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="research" className="py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-6 gap-3">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              research
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
              Core research thrusts spanning multimodal synchrotron imaging, electrocatalysis, and predictive safety models.
            </p>
          </div>

          {/* Category Filter Pills (al-folio style) */}
          <div className="flex flex-wrap gap-1.5 text-xs">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-2.5 py-1 rounded transition-colors text-xs font-medium ${
                  selectedCategory === cat.value
                    ? isDark
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-600 text-white'
                    : isDark
                    ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid (al-folio style cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`rounded-lg border p-5 flex flex-col justify-between transition-all duration-150 hover:shadow-sm ${
                isDark
                  ? 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                {/* Header with Project Index and Category */}
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                  <span className="font-mono font-medium">[{idx + 1}]</span>
                  <span className="capitalize px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[11px] font-medium">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug mb-2">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-600 dark:text-slate-200 mb-4">
                    {project.highlights.slice(0, 2).map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer Action Buttons */}
                <div className="flex items-center space-x-2 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="al-folio-btn"
                  >
                    <span>details</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="al-folio-btn"
                    >
                      <BookOpen className="w-3 h-3 text-blue-500" />
                      <span>paper / doi</span>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="al-folio-btn"
                    >
                      <span>code</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep-dive Project Modal */}
      <ProjectModal
        isOpen={!!activeProject}
        onClose={() => setActiveProject(null)}
        project={activeProject}
        isDark={isDark}
      />
    </section>
  );
};
