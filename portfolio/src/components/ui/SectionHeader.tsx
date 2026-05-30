"use client";

import SectionReveal from "./SectionReveal";

interface SectionHeaderProps {
  label: string;
  title: string;
  highlight: string;
  description?: string;
}

export default function SectionHeader({
  label,
  title,
  highlight,
  description,
}: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <SectionReveal>
        <span className="inline-block font-mono text-xs text-neon-blue/80 border border-neon-blue/20 bg-neon-blue/5 px-4 py-1.5 rounded-full tracking-widest uppercase mb-4">
          {label}
        </span>
      </SectionReveal>
      <SectionReveal delay={0.1}>
        <h2 className="section-title text-slate-100 mb-4">
          {title}{" "}
          <span className="gradient-text">{highlight}</span>
        </h2>
      </SectionReveal>
      {description && (
        <SectionReveal delay={0.2}>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </SectionReveal>
      )}
    </div>
  );
}
