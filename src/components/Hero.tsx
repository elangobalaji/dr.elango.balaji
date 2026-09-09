import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  BookOpen,
  Award,
  Flame,
  FileText,
  ExternalLink,
} from 'lucide-react';
import { ProfileData } from '../types';
import avatarImg from '../assets/images/academic_avatar_1788944034448.jpg';

interface HeroProps {
  profile: ProfileData;
  isDark: boolean;
  onOpenDeployGuide: () => void;
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  isDark,
  onOpenDeployGuide,
  onOpenResume,
}) => {
  const [imgSrc, setImgSrc] = useState<string>('./avatar.jpg');
  const [hasImgError, setHasImgError] = useState(false);

  return (
    <section id="about" className="pt-24 pb-12 sm:pt-28 sm:pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Card & Bio in al-folio layout */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          {/* Profile Sidebar / Card (al-folio style) */}
          <div className="w-full md:w-64 shrink-0 flex flex-col items-center md:items-start text-center md:text-left">
            {/* Scholar Avatar / Profile Picture */}
            <div className="relative group mb-4">
              <div
                className={`w-40 h-40 sm:w-48 sm:h-48 rounded-2xl p-1 shadow-md border transition-all duration-200 overflow-hidden ${
                  isDark
                    ? 'bg-slate-800 border-slate-700 shadow-slate-950/50'
                    : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                {!hasImgError ? (
                  <img
                    src={imgSrc}
                    alt="Elango Balaji T - Battery Research Scientist"
                    className="w-full h-full object-contain rounded-xl"
                    referrerPolicy="no-referrer"
                    onError={() => {
                      if (imgSrc !== avatarImg) {
                        setImgSrc(avatarImg);
                      } else {
                        setHasImgError(true);
                      }
                    }}
                  />
                ) : (
                  <div
                    className={`w-full h-full rounded-xl flex flex-col items-center justify-center relative overflow-hidden ${
                      isDark
                        ? 'bg-gradient-to-br from-slate-900 to-slate-800 text-slate-200'
                        : 'bg-gradient-to-br from-slate-100 to-slate-200 text-slate-800'
                    }`}
                  >
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight font-mono text-blue-600 dark:text-blue-400 z-10">
                      EB
                    </span>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 dark:text-slate-400 mt-1 z-10">
                      SEED · NTUST
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Name & Academic Rank */}
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              {profile.name}
            </h1>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-0.5">
              {profile.title}
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
              Ph.D. Candidate (Expected July 2026)
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              SEED Center, Taiwan Tech
            </p>

            {/* Contact & Social Links (al-folio icon bar) */}
            <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-1.5 w-full">
              <a
                href={`mailto:${profile.socials.email}`}
                className="al-folio-btn"
                title="Email"
                aria-label="Email"
              >
                <Mail className="w-3 h-3 text-slate-500 dark:text-slate-300" />
                <span>email</span>
              </a>

              <a
                href="https://scholar.google.com"
                target="_blank"
                rel="noreferrer"
                className="al-folio-btn"
                title="Google Scholar"
                aria-label="Google Scholar"
              >
                <BookOpen className="w-3 h-3 text-blue-500 dark:text-blue-400" />
                <span>scholar</span>
              </a>

              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="al-folio-btn"
                title="GitHub"
                aria-label="GitHub"
              >
                <Github className="w-3 h-3 text-slate-700 dark:text-slate-300" />
                <span>github</span>
              </a>

              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="al-folio-btn"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                <span>linkedin</span>
              </a>

              <a
                href={`tel:${profile.phone}`}
                className="al-folio-btn"
                title="Phone"
                aria-label="Phone"
              >
                <Phone className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                <span>phone</span>
              </a>
            </div>

            {/* Location */}
            <div className="mt-3 flex items-center space-x-1.5 text-xs text-slate-500 dark:text-slate-400">
              <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
              <span>Taipei, Taiwan (UTC+8)</span>
            </div>
          </div>

          {/* Bio & Academic Mission (al-folio main column) */}
          <div className="flex-1 space-y-4 text-slate-800 dark:text-slate-100">
            <div className="space-y-3 text-base leading-relaxed">
              <p>
                I am a <strong className="text-slate-900 dark:text-white font-semibold">Battery Research Scientist</strong> and doctoral candidate at the{' '}
                <a
                  href="https://seed.ntust.edu.tw"
                  target="_blank"
                  rel="noreferrer"
                  className="academic-link font-medium"
                >
                  Sustainable Energy Development (SEED) Center
                </a>
                , Department of Chemical Engineering,{' '}
                <strong className="text-slate-900 dark:text-white font-semibold">National Taiwan University of Science and Technology (Taiwan Tech)</strong>,
                under the supervision of <strong className="text-slate-900 dark:text-white font-semibold">Prof. Bing Joe Hwang</strong> (National Chair Professor).
              </p>

              <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
                My research centers on diagnosing degradation pathways and investigating catalytic
                interactions within <strong className="text-slate-900 dark:text-white font-semibold">Li₂S composite cathodes</strong> in Lithium–Sulfur (Li-S)
                batteries via multimodal <em>in-situ</em> and <em>operando</em> imaging and spectroscopy.
                I utilize synchrotron-based <strong className="text-slate-900 dark:text-white font-semibold">Transmission X-ray Microscopy (TXM)</strong>,{' '}
                <strong className="text-slate-900 dark:text-white font-semibold">High-Resolution X-ray Diffraction (HR-XRD)</strong>, and{' '}
                <strong className="text-slate-900 dark:text-white font-semibold">X-ray Absorption Spectroscopy (XAS)</strong> at the National Synchrotron Radiation
                Research Center (NSRRC) beamlines TLS-16A and TPS-32A, coupled with Confocal Optical
                Microscopy/Raman and isothermal calorimetry.
              </p>

              <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
                To date, I have authored and co-authored <strong className="text-slate-900 dark:text-white font-semibold">20 publications (950+ citations)</strong> in
                high-impact journals, including <em>ACS Energy Letters</em>, <em>Nature Reviews Clean Technology</em>,{' '}
                <em>Advanced Functional Materials</em>, and a manuscript under revision at the{' '}
                <em>Journal of the American Chemical Society (JACS)</em>. I have also contributed strategically to
                securing over <strong className="text-slate-900 dark:text-white font-semibold">NT$ 150M (~€4M)</strong> in national and bilateral research grants.
              </p>

              <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
                In addition to laboratory and synchrotron diagnostics, I formulate{' '}
                <strong className="text-slate-900 dark:text-white font-semibold">machine learning frameworks for battery safety</strong> and thermal runaway
                prediction, and craft publication-grade <strong className="text-slate-900 dark:text-white font-semibold">3D scientific visualizations and animations in Blender</strong>.
              </p>
            </div>

            {/* Academic Mentorship Banner */}
            <div
              className={`p-3.5 rounded-lg border text-xs leading-relaxed ${
                isDark
                  ? 'bg-slate-800/80 border-slate-700 text-slate-200'
                  : 'bg-slate-50 border-slate-200 text-slate-700'
              }`}
            >
              <span className="font-semibold text-slate-900 dark:text-white">
                International Advisory & Collaboration:{' '}
              </span>
              Internationally advised and mentored through collaborative projects by{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">Prof. Martin Winter</strong> (MEET Battery Research Center, University of Münster, Germany),{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">Prof. A. Manthiram</strong> (University of Texas at Austin), and{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">Prof. Hongjie Dai</strong> (Stanford University).
            </div>

            {/* Quick Metrics Bar (al-folio academic badges) */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full font-medium bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                <BookOpen className="w-3.5 h-3.5" />
                <span>20 Publications · 950+ Citations</span>
              </span>

              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full font-medium bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                <Award className="w-3.5 h-3.5" />
                <span>NT$ 150M+ Grant Contributions</span>
              </span>

              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full font-medium bg-purple-50 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                <Flame className="w-3.5 h-3.5" />
                <span>NSRRC Beamlines (TLS-16A & TPS-32A)</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
