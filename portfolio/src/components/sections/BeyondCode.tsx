"use client";

import { Car, Circle, Globe2, Languages, Plane, Trophy } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionReveal from "@/components/ui/SectionReveal";

const languages = ["English", "Malayalam", "Hindi", "Tamil"];

const interests = [
  { label: "Football", icon: Trophy },
  { label: "Gaming", icon: Circle },
  { label: "Driving", icon: Car },
  { label: "Traveling", icon: Plane },
];

export default function BeyondCode() {
  return (
    <section id="beyond-code" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          label="The Person Behind the Work"
          title="Beyond"
          highlight="Code"
          description="The languages I speak and the interests that keep me curious outside of technology."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SectionReveal direction="left">
            <article className="glass h-full rounded-2xl p-6 sm:p-8 border border-neon-blue/20 hover:border-neon-blue/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-neon-blue/5 border border-neon-blue/20 flex items-center justify-center mb-6">
                <Languages size={23} className="text-neon-blue" />
              </div>
              <h3 className="font-display text-xl font-semibold text-slate-100 mb-5">
                Languages I speak
              </h3>
              <div className="flex flex-wrap gap-3">
                {languages.map((language) => (
                  <span
                    key={language}
                    className="px-4 py-2 rounded-lg bg-neon-blue/5 border border-neon-blue/20 text-sm text-neon-blue"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </article>
          </SectionReveal>

          <SectionReveal direction="right" delay={0.1}>
            <article className="glass h-full rounded-2xl p-6 sm:p-8 border border-neon-purple/20 hover:border-neon-purple/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-neon-purple/5 border border-neon-purple/20 flex items-center justify-center mb-6">
                <Globe2 size={23} className="text-neon-purple" />
              </div>
              <h3 className="font-display text-xl font-semibold text-slate-100 mb-5">
                Hobbies &amp; Interests
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {interests.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 p-3 rounded-lg bg-neon-purple/5 border border-neon-purple/15 text-sm text-slate-300"
                  >
                    <Icon size={16} className="text-neon-purple flex-shrink-0" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </article>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
