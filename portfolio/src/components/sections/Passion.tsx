"use client";

import { Code2, Palette, ShieldCheck, Smartphone } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionReveal from "@/components/ui/SectionReveal";

const passions = [
  {
    title: "Web Development",
    description: "Building responsive, accessible, and reliable web experiences.",
    icon: Code2,
    color: "text-neon-blue",
    border: "border-neon-blue/20 hover:border-neon-blue/40",
    background: "bg-neon-blue/5",
  },
  {
    title: "App Development",
    description: "Creating practical applications that make everyday tasks simpler.",
    icon: Smartphone,
    color: "text-neon-cyan",
    border: "border-neon-cyan/20 hover:border-neon-cyan/40",
    background: "bg-neon-cyan/5",
  },
  {
    title: "Cybersecurity",
    description: "Learning how to protect systems, data, and digital experiences.",
    icon: ShieldCheck,
    color: "text-green-400",
    border: "border-green-400/20 hover:border-green-400/40",
    background: "bg-green-400/5",
  },
  {
    title: "UI & UX",
    description: "Designing clear, intuitive interfaces around real user needs.",
    icon: Palette,
    color: "text-neon-purple",
    border: "border-neon-purple/20 hover:border-neon-purple/40",
    background: "bg-neon-purple/5",
  },
];

export default function Passion() {
  return (
    <section id="passion" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="What Drives Me"
          title="Passion for"
          highlight="Building"
          description="The areas of technology I enjoy exploring, creating, and continuously improving."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {passions.map((passion, index) => {
            const Icon = passion.icon;
            return (
              <SectionReveal key={passion.title} delay={index * 0.1}>
                <article
                  className={`glass h-full rounded-2xl p-6 border ${passion.border} transition-all duration-300 hover:-translate-y-1`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${passion.background} border ${passion.border} flex items-center justify-center mb-6`}
                  >
                    <Icon size={24} className={passion.color} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-slate-100 mb-3">
                    {passion.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {passion.description}
                  </p>
                </article>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
