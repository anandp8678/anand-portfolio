"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, Trophy, Users, GitFork } from "lucide-react";
import { experiences } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionReveal from "@/components/ui/SectionReveal";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const typeIconMap: Record<string, React.ElementType> = {
  internship: Briefcase,
  freelance: Code2,
  leadership: Users,
  hackathon: Trophy,
  opensource: GitFork,
};

const colorMap: Record<string, { border: string; bg: string; text: string; dot: string }> = {
  blue: { border: "border-neon-blue/20", bg: "bg-neon-blue/5", text: "text-neon-blue", dot: "#00D4FF" },
  purple: { border: "border-neon-purple/20", bg: "bg-neon-purple/5", text: "text-neon-purple", dot: "#8B5CF6" },
  cyan: { border: "border-neon-cyan/20", bg: "bg-neon-cyan/5", text: "text-neon-cyan", dot: "#06FFC8" },
  green: { border: "border-green-400/20", bg: "bg-green-400/5", text: "text-green-400", dot: "#4ade80" },
  pink: { border: "border-pink-400/20", bg: "bg-pink-400/5", text: "text-pink-400", dot: "#f472b6" },
};

function TimelineItem({ exp, index }: { exp: (typeof experiences)[0]; index: number }) {
  const { ref, inView } = useScrollReveal(0.2);
  const c = colorMap[exp.color] || colorMap.blue;
  const Icon = typeIconMap[exp.type] || Briefcase;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex gap-6 group"
    >
      {/* Timeline dot */}
      <div className="flex flex-col items-center">
        <div
          className="w-4 h-4 rounded-full mt-1 flex-shrink-0 z-10 transition-transform group-hover:scale-125"
          style={{
            background: c.dot,
            boxShadow: `0 0 16px ${c.dot}80`,
          }}
        />
        {index < experiences.length - 1 && (
          <div className="w-px flex-1 mt-2 bg-gradient-to-b from-white/10 to-transparent" />
        )}
      </div>

      {/* Card */}
      <div
        className={`flex-1 glass rounded-2xl p-6 mb-8 border ${c.border} transition-all duration-300 group-hover:shadow-card-hover group-hover:-translate-y-0.5`}
      >
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-lg ${c.bg} border ${c.border} flex items-center justify-center`}>
              <Icon size={16} className={c.text} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-100 font-display">{exp.title}</h3>
              <p className={`text-sm ${c.text}`}>{exp.company}</p>
            </div>
          </div>
          <span className="text-xs font-mono text-slate-500 bg-white/3 border border-white/8 px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
            {exp.duration}
          </span>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>
        <div className="flex flex-wrap gap-2">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs font-mono px-2.5 py-1 rounded-md ${c.bg} ${c.text} border ${c.border} transition-all duration-200 hover:bg-white/10 hover:border-white/20 hover:text-white`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader
          label="Journey"
          title="Work"
          highlight="Experience"
          description="From internships and freelance projects to hackathon victories and community leadership."
        />

        <SectionReveal delay={0.2}>
          <div className="relative">
            {experiences.map((exp, i) => (
              <TimelineItem key={exp.id} exp={exp} index={i} />
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
