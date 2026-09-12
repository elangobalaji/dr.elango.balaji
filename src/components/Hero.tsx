import React, { useState, useEffect, useRef } from 'react';
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
  Camera,
  Upload,
  Info,
  Check,
  RotateCcw,
  X,
  Folder,
} from 'lucide-react';
import { ProfileData } from '../types';

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
  const [imgSrc, setImgSrc] = useState<string>(() => {
    return localStorage.getItem('academic_profile_photo') || './avatar-1.jpg';
  });
  const [triedFallback, setTriedFallback] = useState(false);
  const [hasImgError, setHasImgError] = useState(false);
  const [showPhotoGuide, setShowPhotoGuide] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('academic_profile_photo');
    if (saved) {
      setImgSrc(saved);
      setHasImgError(false);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setImgSrc(result);
          setHasImgError(false);
          try {
            localStorage.setItem('academic_profile_photo', result);
          } catch (err) {
            console.warn('Unable to store image in localStorage', err);
          }
          setUploadSuccess(true);
          setTimeout(() => setUploadSuccess(false), 4000);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = () => {
    localStorage.removeItem('academic_profile_photo');
    setImgSrc('./avatar.jpg');
    setTriedFallback(false);
    setHasImgError(false);
  };

  return (
    <section id="about" className="pt-24 pb-12 sm:pt-28 sm:pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Card & Bio in al-folio layout */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          {/* Profile Sidebar / Card (al-folio style) */}
          <div className="w-full md:w-64 shrink-0 flex flex-col items-center md:items-start text-center md:text-left">
            {/* Scholar Avatar / Profile Picture */}
            <div className="relative group mb-3">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
                id="avatar-upload-input"
              />

              <div
                className={`w-44 h-56 sm:w-48 sm:h-64 rounded-2xl p-1 shadow-md border transition-all duration-200 overflow-hidden relative ${
                  isDark
                    ? 'bg-slate-800 border-slate-700 shadow-slate-950/50'
                    : 'bg-surface border-rule shadow-sm'
                }`}
              >
                {!hasImgError ? (
                  <img
                    src={imgSrc}
                    alt="Elango Balaji T - Battery Research Scientist"
                    className="w-full h-full object-cover object-top rounded-xl"
                    referrerPolicy="no-referrer"
                    onError={() => {
                      if (!triedFallback && imgSrc !== './avatar.jpg') {
                        setTriedFallback(true);
                        setImgSrc('./avatar.jpg');
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
                        : 'bg-gradient-to-br from-slate-100 to-slate-200 text-ink'
                    }`}
                  >
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight font-mono text-terracotta dark:text-blue-400 z-10">
                      EB
                    </span>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-muted dark:text-slate-400 mt-1 z-10">
                      SEED · NTUST
                    </span>
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="mt-3 inline-flex items-center space-x-1 px-2.5 py-1 text-xs rounded bg-terracotta text-white hover:bg-terracotta-hover transition-colors z-10 shadow-sm"
                    >
                      <Camera className="w-3.5 h-3.5" />
                      <span>Select Photo</span>
                    </button>
                  </div>
                )}

                {/* Upload Overlay Button on Hover */}
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl flex flex-col items-center justify-center cursor-pointer text-white p-2"
                  title="Click to select or change your photo"
                >
                  <Camera className="w-6 h-6 mb-1 text-blue-400" />
                  <span className="text-xs font-medium">Change Photo</span>
                  <span className="text-[10px] text-slate-300 mt-0.5">Click to choose file</span>
                </div>
              </div>

              {/* Upload Success Indicator */}
              {uploadSuccess && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[11px] px-2.5 py-0.5 rounded-full shadow-lg flex items-center space-x-1 whitespace-nowrap z-20 animate-fade-in">
                  <Check className="w-3 h-3" />
                  <span>Photo applied!</span>
                </div>
              )}
            </div>

            {/* Photo Action / Instruction Buttons */}
            <div className="flex items-center space-x-2 mb-3">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center space-x-1 text-[11px] text-terracotta dark:text-blue-400 hover:underline font-medium"
              >
                <Upload className="w-3 h-3" />
                <span>Upload Image</span>
              </button>

              <span className="text-slate-300 dark:text-slate-700">·</span>

              <button
                type="button"
                onClick={() => setShowPhotoGuide(true)}
                className="inline-flex items-center space-x-1 text-[11px] text-muted hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                title="View how to add photo to codebase permanently"
              >
                <Info className="w-3 h-3" />
                <span>File Guide</span>
              </button>

              {localStorage.getItem('academic_profile_photo') && (
                <>
                  <span className="text-slate-300 dark:text-slate-700">·</span>
                  <button
                    type="button"
                    onClick={handleResetPhoto}
                    className="inline-flex items-center space-x-1 text-[11px] text-slate-400 hover:text-red-500"
                    title="Reset to default"
                  >
                    <RotateCcw className="w-2.5 h-2.5" />
                    <span>Reset</span>
                  </button>
                </>
              )}
            </div>

            {/* Name & Academic Rank */}
            <h1 className="text-2xl font-bold tracking-tight text-ink dark:text-white">
              {profile.name}
            </h1>
            <p className="text-sm font-medium text-terracotta dark:text-blue-400 mt-0.5">
              {profile.title}
            </p>
            <p className="text-xs text-ink-soft dark:text-slate-300 mt-1">
              Ph.D. Candidate (Expected July 2026)
            </p>
            <p className="text-xs text-muted dark:text-slate-400">
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
                <Mail className="w-3 h-3 text-muted dark:text-slate-300" />
                <span>Email</span>
              </a>

              <a
                href="https://scholar.google.com"
                target="_blank"
                rel="noreferrer"
                className="al-folio-btn"
                title="Google Scholar"
                aria-label="Google Scholar"
              >
                <BookOpen className="w-3 h-3 text-terracotta dark:text-blue-400" />
                <span>Google Scholar</span>
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
                <span>GitHub</span>
              </a>

              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="al-folio-btn"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3 h-3 text-terracotta dark:text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`tel:${profile.phone}`}
                className="al-folio-btn"
                title="Phone"
                aria-label="Phone"
              >
                <Phone className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                <span>Phone</span>
              </a>
            </div>

            {/* Location */}
            <div className="mt-3 flex items-center space-x-1.5 text-xs text-muted dark:text-slate-400">
              <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
              <span>Taipei, Taiwan (UTC+8)</span>
            </div>
          </div>

          {/* Bio & Academic Mission (al-folio main column) */}
          <div className="flex-1 space-y-4 text-ink dark:text-slate-100">
            <div className="space-y-3 text-base leading-relaxed">
              <p>
                I am a <strong className="text-ink dark:text-white font-semibold">Battery Research Scientist</strong> and doctoral candidate at the{' '}
                <a
                  href="https://seed.ntust.edu.tw"
                  target="_blank"
                  rel="noreferrer"
                  className="academic-link font-medium"
                >
                  Sustainable Energy Development (SEED) Center
                </a>
                , Department of Chemical Engineering,{' '}
                <strong className="text-ink dark:text-white font-semibold">National Taiwan University of Science and Technology (Taiwan Tech)</strong>,
                under the supervision of <strong className="text-ink dark:text-white font-semibold">Prof. Bing Joe Hwang</strong> (National Chair Professor).
              </p>

              <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
                My research centers on diagnosing degradation pathways and investigating catalytic
                interactions within <strong className="text-ink dark:text-white font-semibold">Li₂S composite cathodes</strong> in Lithium–Sulfur (Li-S)
                batteries via multimodal <em>in-situ</em> and <em>operando</em> imaging and spectroscopy.
                I utilize synchrotron-based <strong className="text-ink dark:text-white font-semibold">Transmission X-ray Microscopy (TXM)</strong>,{' '}
                <strong className="text-ink dark:text-white font-semibold">High-Resolution X-ray Diffraction (HR-XRD)</strong>, and{' '}
                <strong className="text-ink dark:text-white font-semibold">X-ray Absorption Spectroscopy (XAS)</strong> at the National Synchrotron Radiation
                Research Center (NSRRC) beamlines TLS-16A and TPS-32A, coupled with Confocal Optical
                Microscopy/Raman and isothermal calorimetry.
              </p>

              <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
                To date, I have authored and co-authored <strong className="text-ink dark:text-white font-semibold">20 publications (950+ citations)</strong> in
                high-impact journals, including <em>ACS Energy Letters</em>, <em>Nature Reviews Clean Technology</em>,{' '}
                <em>Advanced Functional Materials</em>, and a manuscript under revision at the{' '}
                <em>Journal of the American Chemical Society (JACS)</em>.
              </p>

              <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
                In addition to laboratory and synchrotron diagnostics, I formulate{' '}
                <strong className="text-ink dark:text-white font-semibold">machine learning frameworks for battery safety</strong> and thermal runaway
                prediction, and craft publication-grade <strong className="text-ink dark:text-white font-semibold">3D scientific visualizations and animations in Blender</strong>.
              </p>
            </div>

            {/* Academic Mentorship Banner */}
            <div
              className={`p-3.5 rounded-lg border text-xs leading-relaxed ${
                isDark
                  ? 'bg-slate-800/80 border-slate-700 text-slate-200'
                  : 'bg-slate-50 border-rule text-slate-700'
              }`}
            >
              <span className="font-semibold text-ink dark:text-white">
                International Advisory & Collaboration:{' '}
              </span>
              The SEED Center is supported by an international advisory board including{' '}
              <strong className="text-ink dark:text-white font-semibold">Prof. Martin Winter</strong> (MEET Battery Research Center, University of Münster, Germany),{' '}
              <strong className="text-ink dark:text-white font-semibold">Prof. A. Manthiram</strong> (University of Texas at Austin), and{' '}
              <strong className="text-ink dark:text-white font-semibold">Prof. Hongjie Dai</strong> (Stanford University).
            </div>

            {/* Quick Metrics Bar (al-folio academic badges) */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full font-medium bg-orange-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-orange-200 dark:border-blue-800">
                <BookOpen className="w-3.5 h-3.5" />
                <span>20 Publications · 950+ Citations</span>
              </span>

              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full font-medium bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                <Award className="w-3.5 h-3.5" />
                <span>Li-S Battery Interfaces</span>
              </span>

              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full font-medium bg-purple-50 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                <Flame className="w-3.5 h-3.5" />
                <span>NSRRC Beamlines (TLS-16A & TPS-32A)</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Guide Modal */}
      {showPhotoGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div
            className={`w-full max-w-lg rounded-xl border p-6 shadow-2xl relative ${
              isDark
                ? 'bg-slate-900 border-slate-700 text-slate-100'
                : 'bg-surface border-rule text-ink'
            }`}
          >
            <button
              type="button"
              onClick={() => setShowPhotoGuide(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-ink-soft dark:hover:text-slate-200 p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-2.5 mb-4">
              <div className="p-2 rounded-lg bg-orange-50 dark:bg-blue-950/60 text-terracotta dark:text-blue-400">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-ink dark:text-white">
                  Profile Photo Guide
                </h3>
                <p className="text-xs text-muted dark:text-slate-400">
                  Two easy ways to use your exact photo
                </p>
              </div>
            </div>

            <div className="space-y-4 text-xs leading-relaxed">
              <div className="p-3 rounded-lg border border-orange-200 dark:border-blue-900/60 bg-orange-50/50 dark:bg-blue-950/30">
                <span className="font-semibold text-blue-700 dark:text-blue-300 block mb-1">
                  Method 1: Instant In-Browser Upload (Active Now)
                </span>
                <p className="text-slate-700 dark:text-slate-300">
                  Click the <strong>"Upload Image"</strong> button or click directly on your photo avatar frame. Select your original photo (<code className="font-mono text-[11px] bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded">avatar-1.jpg</code> or any image file). It displays immediately at original quality and persists in your browser storage.
                </p>
              </div>

              <div className="p-3 rounded-lg border border-rule dark:border-slate-800 bg-slate-50 dark:bg-slate-850">
                <span className="font-semibold text-ink dark:text-white block mb-1">
                  Method 2: Permanent Codebase / GitHub Deployment
                </span>
                <p className="text-slate-700 dark:text-slate-300 mb-2">
                  To ensure your photo is permanently stored in your Git repository and live for all visitors:
                </p>
                <ol className="list-decimal list-outside ml-4 space-y-1 text-ink-soft dark:text-slate-300">
                  <li>
                    Rename your image file to <code className="font-mono text-[11px] text-terracotta dark:text-blue-400">avatar.jpg</code> (or <code className="font-mono text-[11px] text-terracotta dark:text-blue-400">avatar-1.jpg</code>).
                  </li>
                  <li>
                    Place it inside the <code className="font-mono text-[11px] font-semibold text-ink dark:text-white">public/</code> directory of your project folder.
                  </li>
                  <li>
                    Commit and push to GitHub:
                    <pre className="font-mono text-[10px] bg-slate-900 text-slate-200 p-2 rounded mt-1 overflow-x-auto">
git add public/avatar.jpg{"\n"}git commit -m "Add official profile photo"{"\n"}git push origin main
                    </pre>
                  </li>
                </ol>
              </div>
            </div>

            <div className="mt-5 flex justify-end">
              <button
                type="button"
                onClick={() => setShowPhotoGuide(false)}
                className="px-4 py-1.5 text-xs font-medium rounded-md bg-terracotta text-white hover:bg-terracotta-hover transition-colors"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
