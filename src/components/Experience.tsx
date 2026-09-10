import React from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { ExperienceItem, EducationItem, AwardItem } from '../types';

interface ExperienceProps {
  experiences: ExperienceItem[];
  education: EducationItem[];
  awards?: AwardItem[];
  isDark: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({
  experiences,
  education,
  awards = [],
  isDark,
}) => {
  return (
    <section id="experience" className="py-12 border-t border-rule dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold tracking-tight text-ink dark:text-white mb-8 capitalize">
          Experience & Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Column 1: Research Experience */}
          <div className="space-y-6">
            <h3 className="text-base font-bold text-ink dark:text-white flex items-center space-x-2 border-b border-rule dark:border-slate-800 pb-2">
              <Briefcase className="w-4 h-4 text-terracotta dark:text-blue-400" />
              <span>Research Appointments</span>
            </h3>

            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id} className="space-y-2 text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <span className="font-bold text-ink dark:text-white">
                      {exp.role}
                    </span>
                    <span className="font-mono text-xs text-muted">
                      {exp.period}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-terracotta dark:text-blue-400">
                    {exp.company} · {exp.location}
                  </div>

                  <p className="text-xs text-ink-soft dark:text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-700 dark:text-slate-200">
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

          {/* Column 2: Academic Education */}
          <div className="space-y-6">
            <h3 className="text-base font-bold text-ink dark:text-white flex items-center space-x-2 border-b border-rule dark:border-slate-800 pb-2">
              <GraduationCap className="w-4 h-4 text-terracotta dark:text-blue-400" />
              <span>Education</span>
            </h3>

            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id} className="space-y-2 text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <span className="font-bold text-ink dark:text-white">
                      {edu.degree}
                    </span>
                    <span className="font-mono text-xs text-muted dark:text-slate-400">
                      {edu.period}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-terracotta dark:text-blue-400">
                    {edu.institution} · {edu.location}
                  </div>

                  {edu.gpa && (
                    <div className="font-mono text-xs text-muted dark:text-slate-400">
                      GPA / Marks: {edu.gpa}
                    </div>
                  )}

                  {edu.dissertation && (
                    <div className="text-xs text-slate-700 dark:text-slate-200">
                      <span className="font-medium text-ink dark:text-white">
                        Dissertation:{' '}
                      </span>
                      <em>{edu.dissertation}</em>
                    </div>
                  )}

                  {edu.advisors && (
                    <div className="text-xs text-ink-soft dark:text-slate-300">
                      <span className="font-medium text-ink dark:text-white">
                        Supervision & Advisors:{' '}
                      </span>
                      {edu.advisors}
                    </div>
                  )}

                  {edu.details && (
                    <p className="text-xs text-ink-soft dark:text-slate-300 leading-relaxed pt-1">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Awards Section */}
        {awards.length > 0 && (
          <div className="mt-12 pt-8 border-t border-rule dark:border-slate-800">
            <h3 className="text-base font-bold text-ink dark:text-white flex items-center space-x-2 border-b border-rule dark:border-slate-800 pb-2 mb-6">
              <Award className="w-4 h-4 text-terracotta dark:text-blue-400" />
              <span>Honors and Awards</span>
            </h3>

            <div className="space-y-4">
              {awards.map((award) => (
                <div key={award.id} className="text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <span className="font-bold text-ink dark:text-white">
                      {award.title}
                    </span>
                    {award.year && (
                      <span className="font-mono text-xs text-muted dark:text-slate-400 shrink-0">
                        {award.year}
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-semibold text-terracotta dark:text-blue-400 mt-0.5">
                    {award.organization}
                  </div>
                  {award.details && (
                    <p className="text-xs text-ink-soft dark:text-slate-300 pt-1">
                      {award.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
