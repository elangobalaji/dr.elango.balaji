import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, BookOpen, Rocket } from 'lucide-react';
import { ProfileData } from '../types';

interface FooterProps {
  profile: ProfileData;
  isDark: boolean;
  onOpenDeployGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, isDark, onOpenDeployGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`border-t py-8 text-xs transition-colors ${
        isDark ? 'bg-slate-900 border-slate-800 text-slate-400' : 'bg-surface border-rule text-muted'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* al-folio classic copyright line */}
        <div className="text-center sm:text-left">
          <p>
            © Copyright {new Date().getFullYear()}{' '}
            <strong className="text-ink dark:text-slate-200 font-semibold">
              {profile.name}
            </strong>
            . Powered by Jekyll &{' '}
            <a
              href="https://github.com/alshedivat/al-folio"
              target="_blank"
              rel="noreferrer"
              className="academic-link"
            >
              al-folio
            </a>{' '}
            theme.
          </p>
          <p className="text-[11px] text-slate-400 dark:text-muted mt-0.5">
            Sustainable Energy Development (SEED) Center · Taiwan Tech
          </p>
        </div>

        {/* Action links */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onOpenDeployGuide}
            className="inline-flex items-center space-x-1 text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
          >
            <Rocket className="w-3 h-3" />
            <span>GitHub Pages Guide</span>
          </button>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-1 hover:text-ink dark:hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
