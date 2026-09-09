import React, { useState, useEffect } from 'react';
import { X, Save, RotateCcw, Download, Check, User, Sparkles } from 'lucide-react';
import { ProfileData } from '../types';

interface CustomizeProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  onSave: (updated: ProfileData) => void;
  onReset: () => void;
  isDark: boolean;
}

export const CustomizeProfileModal: React.FC<CustomizeProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSave,
  onReset,
  isDark,
}) => {
  const [formData, setFormData] = useState<ProfileData>(profile);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    setFormData(profile);
  }, [profile, isOpen]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 800);
  };

  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(formData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'profile-config.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div
      id="customize-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        id="customize-modal-content"
        className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border p-6 sm:p-8 shadow-2xl ${
          isDark
            ? 'bg-slate-900 border-slate-750 text-slate-100'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="customize-modal-close-btn"
          onClick={onClose}
          className={`absolute top-5 right-5 p-2 rounded-full transition-colors ${
            isDark
              ? 'text-slate-400 hover:text-white hover:bg-slate-800'
              : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
          }`}
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 mb-2">
          <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400">
            <User className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              In-Browser Personalizer
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Customize Your Portfolio
            </h3>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
          Update your personal details below to customize this portfolio immediately. Changes are
          stored in your browser session.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full px-3 py-2 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  isDark
                    ? 'bg-slate-950 border-slate-800 text-white'
                    : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                Professional Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className={`w-full px-3 py-2 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  isDark
                    ? 'bg-slate-950 border-slate-800 text-white'
                    : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
              Hero Tagline
            </label>
            <input
              type="text"
              value={formData.tagline}
              onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              className={`w-full px-3 py-2 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                isDark
                  ? 'bg-slate-950 border-slate-800 text-white'
                  : 'bg-slate-50 border-slate-200 text-slate-900'
              }`}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                Location
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className={`w-full px-3 py-2 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  isDark
                    ? 'bg-slate-950 border-slate-800 text-white'
                    : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                Current Status Badge
              </label>
              <input
                type="text"
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className={`w-full px-3 py-2 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  isDark
                    ? 'bg-slate-950 border-slate-800 text-white'
                    : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={formData.socials.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    socials: { ...formData.socials, email: e.target.value },
                  })
                }
                className={`w-full px-3 py-2 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  isDark
                    ? 'bg-slate-950 border-slate-800 text-white'
                    : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                GitHub Profile URL
              </label>
              <input
                type="url"
                value={formData.socials.github}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    socials: { ...formData.socials, github: e.target.value },
                  })
                }
                className={`w-full px-3 py-2 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  isDark
                    ? 'bg-slate-950 border-slate-800 text-white'
                    : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                LinkedIn URL
              </label>
              <input
                type="url"
                value={formData.socials.linkedin}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    socials: { ...formData.socials, linkedin: e.target.value },
                  })
                }
                className={`w-full px-3 py-2 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  isDark
                    ? 'bg-slate-950 border-slate-800 text-white'
                    : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                Twitter / X URL
              </label>
              <input
                type="url"
                value={formData.socials.twitter || ''}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    socials: { ...formData.socials, twitter: e.target.value },
                  })
                }
                className={`w-full px-3 py-2 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  isDark
                    ? 'bg-slate-950 border-slate-800 text-white'
                    : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
              Short Bio
            </label>
            <textarea
              rows={3}
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              className={`w-full px-3 py-2 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none ${
                isDark
                  ? 'bg-slate-950 border-slate-800 text-white'
                  : 'bg-slate-50 border-slate-200 text-slate-900'
              }`}
            />
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={onReset}
                className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-medium text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to Defaults</span>
              </button>

              <button
                type="button"
                onClick={handleExportJSON}
                className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-medium border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export JSON</span>
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg text-xs font-medium border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="inline-flex items-center space-x-1.5 px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors"
              >
                {savedSuccess ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Saved!</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>Save Changes</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
