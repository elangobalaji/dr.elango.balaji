import React from 'react';
import { Activity, Microscope, Layers, Box, Cpu, Compass } from 'lucide-react';
import { SkillItem } from '../types';

interface SkillsProps {
  skills: SkillItem[];
  isDark: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ skills, isDark }) => {
  const skillCategories = [
    {
      id: 'diagnostics',
      title: 'Electrochemical Diagnostics',
      icon: Activity,
      description: 'Galvanostatic cycling, rate capability, EIS, GITT, Voltammetry, Isothermal micro-calorimetry',
    },
    {
      id: 'characterization',
      title: 'In-Situ & Operando Synchrotron Characterization',
      icon: Microscope,
      description: 'Transmission X-ray Microscopy (TXM), XAS (XANES/EXAFS), HR-XRD, Confocal Optical Microscopy/Raman',
    },
    {
      id: 'synthesis',
      title: 'Electrode Synthesis & Slurry Processing',
      icon: Layers,
      description: 'Doctor blade slurry coating, hydrothermal synthesis, precipitation, solid-state reactions',
    },
    {
      id: 'assembly',
      title: 'Cell Assembly & Custom Operando Fixtures',
      icon: Box,
      description: 'Operando coin cells, specialized X-ray transparent and optical windows, KP solid-state cells',
    },
    {
      id: 'computation',
      title: 'Computation, Machine Learning & 3D Visualization',
      icon: Cpu,
      description: 'Machine learning for battery safety, Blender 3D (Geometry Nodes, mechanism animations), Python analysis',
    },
    {
      id: 'domains',
      title: 'Core Domains & Competencies',
      icon: Compass,
      description: 'Lithium–Sulfur batteries, anode-free batteries, electrocatalysis, synchrotron beamtime execution',
    },
  ];

  return (
    <section id="skills" className="py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
          skills & diagnostics
        </h2>
        <p className="text-xs text-slate-600 dark:text-slate-400 mb-8">
          Experimental capabilities across synchrotron beamline campaigns, electrochemistry, and computational modeling.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            const categorySkills = skills.filter((s) => s.category === cat.id);

            return (
              <div
                key={cat.id}
                className={`p-4 rounded-lg border flex flex-col justify-between transition-colors ${
                  isDark
                    ? 'bg-slate-900/60 border-slate-800'
                    : 'bg-white border-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 mb-2">
                    <Icon className="w-4 h-4 shrink-0" />
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                      {cat.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {cat.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-100 dark:border-slate-800">
                  {categorySkills.map((s) => (
                    <span
                      key={s.name}
                      className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium"
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
