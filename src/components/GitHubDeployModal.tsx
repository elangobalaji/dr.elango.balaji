import React, { useState, useEffect } from 'react';
import {
  X,
  Github,
  Check,
  Copy,
  Terminal,
  ExternalLink,
  ShieldCheck,
  Zap,
  Globe,
  ArrowRight,
} from 'lucide-react';

interface GitHubDeployModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

export const GitHubDeployModal: React.FC<GitHubDeployModalProps> = ({
  isOpen,
  onClose,
  isDark,
}) => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const gitPushCommands = `# 1. Initialize git and commit all files
git init
git add .
git commit -m "feat: initial commit for personal website"

# 2. Rename branch to main & link your GitHub repository
git branch -M main
git remote add origin https://github.com/elangobalaji/portfolio.git

# 3. Push to GitHub
git push -u origin main`;

  return (
    <div
      id="github-deploy-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        id="github-deploy-modal-content"
        className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border p-6 sm:p-8 shadow-2xl ${
          isDark
            ? 'bg-slate-900 border-slate-750 text-slate-100'
            : 'bg-surface border-rule text-ink'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="github-deploy-modal-close-btn"
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

        {/* Modal Header */}
        <div className="flex items-center space-x-3 mb-2">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500">
            <Github className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Zero-Configuration Hosting Guide
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-ink dark:text-white">
              Deploying Your Website to GitHub Pages
            </h3>
          </div>
        </div>

        <p className="text-sm text-ink-soft dark:text-slate-300 mt-2 leading-relaxed">
          This entire website has been pre-configured specifically for <strong>GitHub Pages</strong>.
          We have configured relative asset bundling (<code className="text-indigo-500 font-mono text-xs">base: './'</code>)
          and added an automated <strong>GitHub Actions CI/CD workflow</strong> in{' '}
          <code className="text-indigo-500 font-mono text-xs">.github/workflows/deploy.yml</code>.
        </p>

        {/* Readiness Checklist */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div
            className={`p-3.5 rounded-xl border text-xs ${
              isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-rule'
            }`}
          >
            <div className="flex items-center space-x-2 text-emerald-500 font-semibold mb-1">
              <Check className="w-4 h-4" />
              <span>Static SPA Ready</span>
            </div>
            <p className="text-muted dark:text-slate-400">
              Builds into purely static HTML, JS, and CSS via Vite with zero runtime server required.
            </p>
          </div>

          <div
            className={`p-3.5 rounded-xl border text-xs ${
              isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-rule'
            }`}
          >
            <div className="flex items-center space-x-2 text-emerald-500 font-semibold mb-1">
              <Check className="w-4 h-4" />
              <span>Relative Base Path</span>
            </div>
            <p className="text-muted dark:text-slate-400">
              Runs seamlessly either at root domain or repository sub-paths (e.g. /portfolio/).
            </p>
          </div>

          <div
            className={`p-3.5 rounded-xl border text-xs ${
              isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-rule'
            }`}
          >
            <div className="flex items-center space-x-2 text-emerald-500 font-semibold mb-1">
              <Check className="w-4 h-4" />
              <span>GitHub Action Ready</span>
            </div>
            <p className="text-muted dark:text-slate-400">
              Automated build & deploy script is included in .github/workflows/deploy.yml.
            </p>
          </div>
        </div>

        {/* Step-by-Step Instructions */}
        <div className="mt-8 space-y-6">
          {/* Step 1 */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2.5">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                1
              </span>
              <h4 className="text-base font-bold text-ink dark:text-white">
                Create a GitHub Repository
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-ink-soft dark:text-slate-300 ml-8 leading-relaxed">
              Log in to your GitHub account (<strong>@elangobalaji</strong>) and create a new repository
              named <strong className="text-indigo-500">portfolio</strong> (or{' '}
              <strong className="text-indigo-500">elangobalaji.github.io</strong> if you want it as your primary user site).
            </p>
          </div>

          {/* Step 2 */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                  2
                </span>
                <h4 className="text-base font-bold text-ink dark:text-white">
                  Push Your Code to GitHub
                </h4>
              </div>

              <button
                onClick={() => copyToClipboard(gitPushCommands, 'git')}
                className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded text-xs font-mono border text-slate-400 hover:text-white transition-colors"
              >
                {copiedSection === 'git' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Commands</span>
                  </>
                )}
              </button>
            </div>

            <div className="ml-8 p-3 rounded-xl bg-slate-950 font-mono text-xs text-slate-300 overflow-x-auto border border-slate-800">
              <pre className="whitespace-pre-wrap">{gitPushCommands}</pre>
            </div>
          </div>

          {/* Step 3 */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2.5">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                3
              </span>
              <h4 className="text-base font-bold text-ink dark:text-white">
                Turn on GitHub Pages (1-Click)
              </h4>
            </div>
            <div className="text-xs sm:text-sm text-ink-soft dark:text-slate-300 ml-8 leading-relaxed space-y-2">
              <p>In your repository on GitHub:</p>
              <ol className="list-decimal list-inside space-y-1 bg-slate-100 dark:bg-slate-950/70 p-3.5 rounded-xl border border-rule dark:border-slate-800">
                <li>
                  Click the <strong>Settings</strong> tab at the top of the repository.
                </li>
                <li>
                  Click <strong>Pages</strong> in the left sidebar under "Code and automation".
                </li>
                <li>
                  Under <strong>Build and deployment &gt; Source</strong>, choose{' '}
                  <span className="px-2 py-0.5 rounded font-mono font-semibold bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300">
                    GitHub Actions
                  </span>
                  .
                </li>
              </ol>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                ✨ That's it! GitHub Actions will immediately trigger and deploy your site to{' '}
                <code className="font-mono underline">https://elangobalaji.github.io/portfolio/</code>
              </p>
            </div>
          </div>

          {/* Optional: Custom Domain Info */}
          <div className="p-4 rounded-xl border border-indigo-200/50 dark:border-indigo-900/50 bg-indigo-50/40 dark:bg-indigo-950/20 text-xs sm:text-sm">
            <div className="flex items-center space-x-2 font-semibold text-indigo-700 dark:text-indigo-300 mb-1">
              <Globe className="w-4 h-4" />
              <span>Have your own domain name (e.g. elangobalaji.com)?</span>
            </div>
            <p className="text-ink-soft dark:text-slate-400 text-xs leading-normal">
              You can easily link your custom domain inside GitHub Pages Settings under "Custom domain".
              GitHub Pages automatically issues free SSL certificates (HTTPS) via Let's Encrypt!
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-5 border-t border-rule dark:border-slate-800 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors"
          >
            I'm Ready to Deploy!
          </button>
        </div>
      </div>
    </div>
  );
};
