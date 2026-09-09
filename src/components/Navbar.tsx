import React, { useState, useEffect } from 'react';
import {
  Sun,
  Moon,
  FileText,
  Github,
  Menu,
  X,
  ExternalLink,
  BookOpen,
} from 'lucide-react';
import { ProfileData } from '../types';

interface NavbarProps {
  profile: ProfileData;
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenDeployGuide: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  isDark,
  onToggleTheme,
  onOpenDeployGuide,
  onOpenResume,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      const sections = ['about', 'news', 'research', 'publications', 'experience', 'skills', 'contact'];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'about', href: '#about' },
    { name: 'news', href: '#news' },
    { name: 'research', href: '#research' },
    { name: 'publications', href: '#publications' },
    { name: 'experience', href: '#experience' },
    { name: 'skills', href: '#skills' },
    { name: 'contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? isDark
            ? 'bg-slate-900/95 border-b border-slate-800 shadow-sm backdrop-blur-md'
            : 'bg-white/95 border-b border-slate-200 shadow-xs backdrop-blur-md'
          : isDark
          ? 'bg-slate-900/80 border-b border-transparent'
          : 'bg-white/80 border-b border-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand / Name on Left (al-folio style) */}
          <a
            href="#about"
            className="flex items-baseline space-x-2 text-slate-900 dark:text-white group"
          >
            <span className="font-bold text-lg tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {profile.name}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-normal hidden sm:inline">
              / SEED Center, Taiwan Tech
            </span>
          </a>

          {/* Desktop Navigation Links (lowercase al-folio style) */}
          <nav className="hidden md:flex items-center space-x-1 sm:space-x-2 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-2.5 py-1.5 rounded-md transition-colors ${
                    isActive
                      ? isDark
                        ? 'text-blue-400 font-semibold border-b-2 border-blue-400 rounded-b-none'
                        : 'text-blue-600 font-semibold border-b-2 border-blue-600 rounded-b-none'
                      : isDark
                      ? 'text-slate-300 hover:text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            {/* CV / Resume Button */}
            <button
              id="navbar-cv-btn"
              onClick={onOpenResume}
              className={`ml-2 inline-flex items-center space-x-1 px-2.5 py-1 rounded text-xs font-semibold border transition-all ${
                isDark
                  ? 'border-slate-700 bg-slate-800 text-slate-200 hover:border-blue-400 hover:text-blue-400'
                  : 'border-slate-300 bg-slate-50 text-slate-700 hover:border-blue-600 hover:text-blue-600'
              }`}
              title="Curriculum Vitae"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>cv</span>
            </button>

            {/* GitHub Deploy Guide Button */}
            <button
              id="navbar-deploy-btn"
              onClick={onOpenDeployGuide}
              className={`inline-flex items-center space-x-1 px-2.5 py-1 rounded text-xs font-semibold border transition-all ${
                isDark
                  ? 'border-slate-700 text-slate-300 hover:text-emerald-400 hover:border-emerald-500'
                  : 'border-slate-300 text-slate-600 hover:text-emerald-600 hover:border-emerald-500'
              }`}
              title="GitHub Hosting Instructions"
            >
              <Github className="w-3.5 h-3.5" />
              <span>github</span>
            </button>

            {/* Theme Toggle Button (al-folio iconic moon/sun) */}
            <button
              id="navbar-theme-toggle"
              onClick={onToggleTheme}
              className={`p-1.5 rounded-md text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors ml-1`}
              aria-label="Toggle dark/light mode"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden space-x-2">
            <button
              onClick={onToggleTheme}
              className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              id="navbar-mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-b px-4 pt-2 pb-4 space-y-1 shadow-lg ${
            isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex items-center space-x-2 border-t border-slate-200 dark:border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 text-center py-2 rounded border text-xs font-semibold text-blue-600 dark:text-blue-400"
            >
              Curriculum Vitae (PDF)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDeployGuide();
              }}
              className="flex-1 text-center py-2 rounded border text-xs font-semibold text-emerald-600 dark:text-emerald-400"
            >
              GitHub Pages Guide
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
