import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Github,
  Linkedin,
  BookOpen,
  Building,
} from 'lucide-react';
import { ProfileData } from '../types';

interface ContactProps {
  profile: ProfileData;
  isDark: boolean;
}

export const Contact: React.FC<ContactProps> = ({ profile, isDark }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [taipeiTime, setTaipeiTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Taipei',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTaipeiTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 600);
  };

  return (
    <section id="contact" className="py-12 border-t border-rule dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold tracking-tight text-ink dark:text-white mb-2">
          contact
        </h2>
        <p className="text-xs text-ink-soft dark:text-slate-400 mb-8">
          Feel free to reach out for research collaborations, synchrotron beamtime partnerships, or academic inquiries.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Office & Laboratory Information (al-folio academic address) */}
          <div className="space-y-4 text-sm">
            <div className="space-y-1">
              <h3 className="font-bold text-base text-ink dark:text-white">
                Office & Laboratory
              </h3>
              <p className="text-xs text-terracotta dark:text-blue-400 font-medium">
                Sustainable Energy Development (SEED) Center
              </p>
              <p className="text-xs text-ink-soft dark:text-slate-300">
                Department of Chemical Engineering
              </p>
              <p className="text-xs text-ink-soft dark:text-slate-300">
                National Taiwan University of Science and Technology (Taiwan Tech)
              </p>
              <p className="text-xs text-ink-soft dark:text-slate-300">
                No. 43, Sec. 4, Keelung Rd., Da'an District, Taipei 10607, Taiwan
              </p>
            </div>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center space-x-2 text-slate-700 dark:text-slate-200">
                <Mail className="w-4 h-4 text-terracotta shrink-0" />
                <span>
                  Email:{' '}
                  <a
                    href={`mailto:${profile.socials.email}`}
                    className="academic-link font-medium"
                  >
                    {profile.socials.email}
                  </a>
                </span>
              </div>

              <div className="flex items-center space-x-2 text-slate-700 dark:text-slate-200">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>
                  Phone:{' '}
                  <a
                    href={`tel:${profile.phone}`}
                    className="hover:underline font-mono"
                  >
                    {profile.phone}
                  </a>
                </span>
              </div>

              <div className="flex items-center space-x-2 text-slate-700 dark:text-slate-200">
                <BookOpen className="w-4 h-4 text-terracotta shrink-0" />
                <span>
                  Google Scholar:{' '}
                  <a
                    href="https://scholar.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="academic-link font-medium"
                  >
                    scholar.google.com
                  </a>
                </span>
              </div>

              <div className="flex items-center space-x-2 text-slate-700 dark:text-slate-200">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>
                  Local Time (Taipei):{' '}
                  <strong className="font-mono text-ink dark:text-white">
                    {taipeiTime || 'UTC+8'}
                  </strong>
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="pt-4 flex items-center space-x-2">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="al-folio-btn"
              >
                <Github className="w-3.5 h-3.5" />
                <span>github</span>
              </a>

              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="al-folio-btn"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>linkedin</span>
              </a>
            </div>
          </div>

          {/* Simple Contact Form */}
          <div
            className={`p-5 rounded-lg border ${
              isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-surface border-rule'
            }`}
          >
            <h3 className="font-bold text-sm text-ink dark:text-white mb-4">
              Send a Direct Message
            </h3>

            {status === 'success' ? (
              <div className="p-4 rounded bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>Your message has been sent successfully. Thank you!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-medium mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-3 py-1.5 rounded border transition-colors ${
                      isDark
                        ? 'bg-slate-950 border-slate-700 text-slate-200 focus:border-blue-400'
                        : 'bg-surface border-slate-300 text-ink focus:border-blue-600'
                    }`}
                    placeholder="Prof. Jane Doe"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-medium mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-3 py-1.5 rounded border transition-colors ${
                      isDark
                        ? 'bg-slate-950 border-slate-700 text-slate-200 focus:border-blue-400'
                        : 'bg-surface border-slate-300 text-ink focus:border-blue-600'
                    }`}
                    placeholder="jane@university.edu"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-medium mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-3 py-1.5 rounded border transition-colors ${
                      isDark
                        ? 'bg-slate-950 border-slate-700 text-slate-200 focus:border-blue-400'
                        : 'bg-surface border-slate-300 text-ink focus:border-blue-600'
                    }`}
                    placeholder="Beamtime inquiry / Research discussion"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-3 py-1.5 rounded border transition-colors ${
                      isDark
                        ? 'bg-slate-950 border-slate-700 text-slate-200 focus:border-blue-400'
                        : 'bg-surface border-slate-300 text-ink focus:border-blue-600'
                    }`}
                    placeholder="Your inquiry details..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded bg-terracotta hover:bg-orange-500 text-white font-semibold transition-colors disabled:opacity-50"
                >
                  <Send className="w-3 h-3" />
                  <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
