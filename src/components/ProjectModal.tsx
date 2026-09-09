import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Star, CheckCircle, ArrowRight, Tag } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  isDark: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, isDark }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        id="project-modal-content"
        className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border p-6 sm:p-8 shadow-2xl transition-all ${
          isDark
            ? 'bg-slate-900 border-slate-700 text-slate-100'
            : 'bg-surface border-rule text-ink'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Close Button */}
        <button
          id="project-modal-close-btn"
          onClick={onClose}
          className={`absolute top-5 right-5 p-2 rounded-full transition-colors ${
            isDark
              ? 'text-slate-400 hover:text-white hover:bg-slate-800'
              : 'text-muted hover:text-ink hover:bg-slate-100'
          }`}
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Status */}
        <div className="flex items-center space-x-2.5 mb-3">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-100 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300">
            {project.category}
          </span>
          {project.stars && (
            <span className="inline-flex items-center space-x-1 text-xs text-amber-500 font-medium">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{project.stars} stars</span>
            </span>
          )}
        </div>

        {/* Title & Tagline */}
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink dark:text-white">
          {project.title}
        </h3>
        <p className="text-base text-indigo-600 dark:text-indigo-400 font-medium mt-1">
          {project.tagline}
        </p>

        {/* Key Impact Metric Box */}
        {project.metrics && (
          <div
            className={`mt-4 p-3.5 rounded-xl border text-sm flex items-center space-x-3 ${
              isDark
                ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300'
                : 'bg-emerald-50/80 border-emerald-200 text-emerald-900'
            }`}
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
            <span className="font-semibold">{project.metrics}</span>
          </div>
        )}

        {/* Deep Description */}
        <div className="mt-5 space-y-3 text-sm sm:text-base text-ink-soft dark:text-slate-200 leading-relaxed">
          <p>{project.description}</p>
          <p>{project.longDescription}</p>
        </div>

        {/* Architecture & Engineering Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mt-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted dark:text-slate-300 mb-3">
              Engineering Highlights
            </h4>
            <div className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 text-sm">
                  <CheckCircle className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-200">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Tags */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted dark:text-slate-300 mb-2.5">
            Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`px-2.5 py-1 rounded-md text-xs font-mono font-medium ${
                  isDark
                    ? 'bg-slate-800 text-slate-200 border border-slate-700'
                    : 'bg-slate-100 text-slate-700 border border-rule'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Actions Bottom Bar */}
        <div className="mt-8 pt-5 border-t border-rule dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-slate-900 text-white dark:bg-surface dark:text-ink text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Github className="w-4 h-4" />
              <span>GitHub / Project Resources</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                isDark
                  ? 'border-indigo-700 text-indigo-300 bg-indigo-950/40 hover:bg-indigo-900/50'
                  : 'border-indigo-200 text-indigo-700 bg-indigo-50 hover:bg-indigo-100'
              }`}
            >
              <span>Journal Paper / Reference</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
