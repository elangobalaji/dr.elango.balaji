/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { News } from './components/News';
import { Projects } from './components/Projects';
import { Publications } from './components/Publications';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { GitHubDeployModal } from './components/GitHubDeployModal';
import { ResumeModal } from './components/ResumeModal';

import {
  initialProfileData,
  defaultProjects,
  defaultSkills,
  defaultExperiences,
  defaultEducation,
  defaultPublications,
  defaultGrants,
  defaultPresentations,
  defaultNews,
} from './data/profileData';
import { ProfileData } from './types';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  // Theme state with localStorage persistence (al-folio default light theme with dark toggle)
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('portfolio_theme');
    if (saved) return saved === 'dark';
    return false; // Clean, high-contrast academic al-folio theme
  });

  const [profile, setProfile] = useState<ProfileData>(() => {
    const saved = localStorage.getItem('portfolio_profile');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return initialProfileData;
      }
    }
    return initialProfileData;
  });

  // Modal open states
  const [deployGuideOpen, setDeployGuideOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  // Sync dark class on <html> root element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio_theme', 'light');
    }
  }, [isDark]);

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <Router>
      <ScrollToTop />
      <div
        className={`min-h-screen transition-colors duration-150 ${
          isDark ? 'bg-slate-900 text-slate-100' : 'bg-paper text-ink'
        }`}
      >
        {/* al-folio Navigation */}
        <Navbar
          profile={profile}
          isDark={isDark}
          onToggleTheme={handleToggleTheme}
          onOpenDeployGuide={() => setDeployGuideOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* Main Content Sections (al-folio layout) */}
        <main id="main-content" className="pt-16 min-h-[calc(100vh-100px)]">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero
                    profile={profile}
                    isDark={isDark}
                    onOpenDeployGuide={() => setDeployGuideOpen(true)}
                    onOpenResume={() => setResumeOpen(true)}
                  />
                  <News news={defaultNews} isDark={isDark} />
                  <Contact profile={profile} isDark={isDark} />
                </>
              }
            />
            <Route
              path="/publications"
              element={
                <div className="py-8">
                  <Publications
                    publications={defaultPublications}
                    grants={defaultGrants}
                    presentations={defaultPresentations}
                    isDark={isDark}
                  />
                </div>
              }
            />
            <Route
              path="/research"
              element={
                <div className="py-8">
                  <Projects projects={defaultProjects} isDark={isDark} />
                </div>
              }
            />
            <Route
              path="/experience"
              element={
                <div className="py-8">
                  <Experience
                    experiences={defaultExperiences}
                    education={defaultEducation}
                    isDark={isDark}
                  />
                </div>
              }
            />
            <Route
              path="/skills"
              element={
                <div className="py-8">
                  <Skills skills={defaultSkills} isDark={isDark} />
                </div>
              }
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer
          profile={profile}
          isDark={isDark}
          onOpenDeployGuide={() => setDeployGuideOpen(true)}
        />

        {/* GitHub Deployment Guide Modal */}
        <GitHubDeployModal
          isOpen={deployGuideOpen}
          onClose={() => setDeployGuideOpen(false)}
          isDark={isDark}
        />

        {/* Academic Curriculum Vitae Modal */}
        <ResumeModal
          isOpen={resumeOpen}
          onClose={() => setResumeOpen(false)}
          profile={profile}
          experiences={defaultExperiences}
          skills={defaultSkills}
          education={defaultEducation}
          publications={defaultPublications}
          grants={defaultGrants}
          isDark={isDark}
        />
      </div>
    </Router>
  );
}
