import React, { useEffect } from 'react';
import {
  X,
  Printer,
  ExternalLink,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Phone,
  BookOpen,
  Award,
} from 'lucide-react';
import {
  ProfileData,
  ExperienceItem,
  SkillItem,
  EducationItem,
  PublicationItem,
} from '../types';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  experiences: ExperienceItem[];
  skills: SkillItem[];
  education: EducationItem[];
  publications?: PublicationItem[];
  isDark: boolean;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
  experiences,
  skills,
  education,
  publications = [],
  isDark,
}) => {
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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/75 backdrop-blur-sm animate-fade-in print:p-0 print:bg-surface"
      onClick={onClose}
    >
      <div
        id="resume-modal-content"
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-surface text-ink p-8 sm:p-12 shadow-2xl border border-rule print:max-h-none print:shadow-none print:border-none print:p-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Actions Bar (hidden when printing) */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-rule print:hidden">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
              Curriculum Vitae / Academic Resume
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-500 transition-colors shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document */}
        <div className="space-y-6 text-ink">
          {/* Header */}
          <div className="border-b border-slate-300 pb-5 text-center sm:text-left">
            <h1 className="text-3xl font-extrabold text-ink tracking-tight">
              {profile.name}
            </h1>
            <p className="text-base font-semibold text-indigo-600 mt-0.5">
              {profile.title} · SEED Center, Taiwan Tech
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-soft mt-2.5 font-medium justify-center sm:justify-start">
              <span className="flex items-center space-x-1">
                <Phone className="w-3 h-3 text-slate-400" />
                <span>{profile.phone}</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Mail className="w-3 h-3 text-slate-400" />
                <span>{profile.socials.email}</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <MapPin className="w-3 h-3 text-slate-400" />
                <span>{profile.location}</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Github className="w-3 h-3 text-slate-400" />
                <span>github.com/elangobalaji</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Linkedin className="w-3 h-3 text-slate-400" />
                <span>linkedin.com/in/elangobalaji</span>
              </span>
            </div>
          </div>

          {/* Performance Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-ink border-b border-slate-300 pb-1 mb-2">
              Performance Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
              Battery Research Scientist with expertise in diagnosing degradation pathways and
              investigating catalytic interactions within Li₂S composite cathodes in Li-S
              batteries via state-of-the-art in situ and operando imaging and spectroscopic tools,
              including synchrotron-based TXM, HR-XRD, XAS, Confocal OM/Raman, as well as
              electrochemical and calorimetric studies. Proven track record with 20 publications
              (950+ citations) in high-impact journals (ACS Energy Letters, Nature Reviews, Advanced
              Functional Materials, and a manuscript under revision at JACS). Adept at developing machine learning
              frameworks for battery safety predictions, and creating 3D scientific visualizations
              and animations in Blender. Supervised by Prof. Bing Joe Hwang. The SEED Center is advised
              by an international board including Prof. Martin Winter, Prof. A. Manthiram, and Prof. Hongjie Dai.
            </p>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-ink border-b border-slate-300 pb-1 mb-3">
              Professional Experience
            </h2>
            <div className="space-y-4">
              {experiences.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm font-bold text-ink">{exp.role}</span>
                    <span className="text-xs text-muted font-medium">{exp.period}</span>
                  </div>
                  <div className="text-xs text-indigo-700 font-semibold mb-1">
                    {exp.company} · {exp.location}
                  </div>
                  <p className="text-xs text-ink-soft mb-1.5 leading-normal">{exp.description}</p>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-700">
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx} className="leading-snug">
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-ink border-b border-slate-300 pb-1 mb-2">
              Education
            </h2>
            <div className="space-y-2">
              {education.map((edu) => (
                <div key={edu.id} className="text-xs">
                  <div className="flex justify-between items-baseline font-bold text-ink">
                    <span>{edu.degree}</span>
                    <span className="text-muted font-normal">{edu.period}</span>
                  </div>
                  <div className="text-indigo-700 font-medium">{edu.institution} · {edu.location}</div>
                  {edu.details && <p className="text-ink-soft mt-0.5">{edu.details}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills & Expertise (6 Pillars from Resume) */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-ink border-b border-slate-300 pb-1 mb-2">
              Technical Skills & Expertise
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs">
              <div>
                <span className="font-semibold text-ink">Electrochemical Diagnostics:</span>{' '}
                <span className="text-ink-soft">
                  CC/CV Testing, EIS, GITT, Voltammetry, Isothermal Calorimetry
                </span>
              </div>
              <div>
                <span className="font-semibold text-ink">In-situ / Operando Characterization:</span>{' '}
                <span className="text-ink-soft">
                  Synchrotron-XAS, TXM, HR-XRD, Raman Spectroscopy, Confocal Optical Microscope (OM)
                </span>
              </div>
              <div>
                <span className="font-semibold text-ink">Electrode Synthesis & Fabrication:</span>{' '}
                <span className="text-ink-soft">
                  Doctor blade coating, hydrothermal, wet chemical synthesis, slurry optimization
                </span>
              </div>
              <div>
                <span className="font-semibold text-ink">Cell Assembly & Custom Fixtures:</span>{' '}
                <span className="text-ink-soft">
                  Operando coin cells, specialized operando optical/X-ray cells, KP cells (solid-state)
                </span>
              </div>
              <div>
                <span className="font-semibold text-ink">Computation & Visualization:</span>{' '}
                <span className="text-ink-soft">
                  Machine learning for battery safety, Blender 3D (modelling, geometry nodes, animations), Python data analysis
                </span>
              </div>
              <div>
                <span className="font-semibold text-ink">Core Domains:</span>{' '}
                <span className="text-ink-soft">
                  Li-S batteries, anode-free batteries, electrocatalysis, synchrotron beamtime execution
                </span>
              </div>
            </div>
          </div>

          {/* Selected Peer-Reviewed Publications */}
          {publications.length > 0 && (
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-ink border-b border-slate-300 pb-1 mb-2">
                Selected Peer-Reviewed Publications (Total 20 Publications · 950+ Citations)
              </h2>
              <div className="space-y-2 text-xs">
                {publications.slice(0, 8).map((pub, idx) => (
                  <div key={pub.id} className="leading-snug">
                    <span className="font-semibold text-ink">[{idx + 1}]</span>{' '}
                    <span className="font-medium text-ink">{pub.title}</span> —{' '}
                    <span className="text-ink-soft">{pub.authors}</span>.{' '}
                    <em className="text-indigo-700 font-medium">{pub.journal}</em> ({pub.year})
                    {pub.citations && ` [${pub.citations} Citations]`}.
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
