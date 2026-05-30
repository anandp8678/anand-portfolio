"use client";

import { GraduationCap, Award } from "lucide-react";
import { education } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionReveal from "@/components/ui/SectionReveal";

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          label="Academic Background"
          title="Education"
          highlight="Background"
          description="Building a strong foundation through academic excellence and continuous learning."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {education.map((edu) => (
            <SectionReveal key={edu.id} direction="left">
              <div
                className="glass rounded-2xl p-8 border border-neon-blue/20 hover:border-neon-blue/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover h-full"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-neon-blue/8 border border-neon-blue/20 flex items-center justify-center">
                    <GraduationCap size={22} className="text-neon-blue" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">
                      Qualification
                    </p>
                    <p className="text-sm text-neon-blue">{edu.period}</p>
                  </div>
                </div>

                <h3 className="font-display font-semibold text-xl text-slate-100 mb-2">
                  {edu.degree}
                </h3>
                <p className="text-neon-purple text-sm font-medium mb-4">
                  {edu.institution}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {edu.description}
                </p>

                {/* CGPA */}
                <div className="flex items-center gap-4 p-4 bg-white/2 border border-white/5 rounded-xl mb-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold font-display gradient-text">{edu.cgpa}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{edu.scoreLabel ?? "CGPA"}</p>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <div className="flex-1">
                    <div className="skill-bar-track">
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${(parseFloat(edu.cgpa ?? "0") / 10) * 100}%` }}
                      />
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Academic Performance</p>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-2">
                  {edu.achievements?.map((achievement: string) => (
                    <div key={achievement} className="flex items-center gap-2">
                      <Award size={14} className="text-yellow-400 flex-shrink-0" />
                      <span className="text-sm text-slate-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
