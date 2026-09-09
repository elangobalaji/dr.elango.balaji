import React from 'react';
import {
  Activity,
  Layers,
  Zap,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Atom,
  Microscope,
  Cpu,
  Palette,
  Award,
} from 'lucide-react';
import { ProfileData } from '../types';

interface AboutProps {
  profile: ProfileData;
  isDark: boolean;
}

export const About: React.FC<AboutProps> = ({ profile, isDark }) => {
  const principleIcons = [Microscope, Layers, Cpu, Palette];

  return (
    <section
      id="about"
      className={`py-20 border-t ${
        isDark ? 'bg-slate-950/60 border-slate-850' : 'bg-slate-50/50 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
            <span className="w-6 h-[1.5px] bg-indigo-600 dark:bg-indigo-400 inline-block" />
            <span>Research Focus & Vision</span>
          </div>
          <h2
            id="about-section-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Pioneering Operando Diagnostics & Interface Chemistry for Next-Gen Batteries
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 mt-2">
            Unraveling complex electrochemical degradation mechanisms, engineering cathode composite
            interfaces, and driving data-driven battery safety.
          </p>
        </div>

        {/* Narrative & Principles Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Research Narrative */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {profile.aboutParagraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            {/* Core Competencies Checklist from Resume */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
                Key Research & Technical Pillars
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'In-Situ / Operando Synchrotron (TXM, XAS, HR-XRD)',
                  'Li-S Battery Chemistry & Li2S Composite Cathodes',
                  'Electrochemical Diagnostics (EIS, GITT, Calorimetry)',
                  'Machine Learning Frameworks for Battery Safety',
                  'Anode-Free Lithium Metal & Gel Polymer Interfaces',
                  'Scientific 3D Illustration & Animations (Blender)',
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mentors & International Collaborations Box */}
            <div
              className={`p-4 rounded-xl border mt-4 text-xs ${
                isDark
                  ? 'bg-slate-900/60 border-slate-800 text-slate-300'
                  : 'bg-indigo-50/50 border-indigo-100 text-indigo-950'
              }`}
            >
              <div className="font-semibold text-slate-900 dark:text-white flex items-center space-x-1.5 mb-1">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Supervision & International Mentorship:</span>
              </div>
              <p className="leading-relaxed">
                Supervised by <strong className="text-indigo-600 dark:text-indigo-400">Prof. Bing Joe Hwang</strong> (National Chair Professor, SEED Center, Taiwan Tech); internationally advised by battery pioneers <strong className="text-slate-900 dark:text-white">Prof. Martin Winter</strong> (MEET, University of Münster), <strong className="text-slate-900 dark:text-white">Prof. A. Manthiram</strong> (UT Austin), and <strong className="text-slate-900 dark:text-white">Prof. Hongjie Dai</strong> (Stanford University).
              </p>
            </div>
          </div>

          {/* Right Column: Research Principles Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Core Methodologies
            </h3>
            <div className="grid grid-cols-1 gap-3.5">
              {profile.principles.map((principle, index) => {
                const IconComponent = principleIcons[index % principleIcons.length];
                return (
                  <div
                    key={index}
                    className={`p-4 rounded-xl border transition-all ${
                      isDark
                        ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                        : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                    }`}
                  >
                    <div className="flex items-start space-x-3.5">
                      <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-slate-900 dark:text-white">
                          {principle.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-normal">
                          {principle.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
