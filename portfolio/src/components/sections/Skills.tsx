"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionReveal from "@/components/ui/SectionReveal";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const colorMap: Record<string, { border: string; bg: string; text: string; bar: string }> = {
  blue: {
    border: "border-neon-blue/20 hover:border-neon-blue/40",
    bg: "bg-neon-blue/5",
    text: "text-neon-blue",
    bar: "from-neon-blue to-neon-purple",
  },
  purple: {
    border: "border-neon-purple/20 hover:border-neon-purple/40",
    bg: "bg-neon-purple/5",
    text: "text-neon-purple",
    bar: "from-neon-purple to-neon-pink",
  },
  cyan: {
    border: "border-neon-cyan/20 hover:border-neon-cyan/40",
    bg: "bg-neon-cyan/5",
    text: "text-neon-cyan",
    bar: "from-neon-cyan to-neon-blue",
  },
  green: {
    border: "border-green-400/20 hover:border-green-400/40",
    bg: "bg-green-400/5",
    text: "text-green-400",
    bar: "from-green-400 to-neon-cyan",
  },
  orange: {
    border: "border-orange-400/20 hover:border-orange-400/40",
    bg: "bg-orange-400/5",
    text: "text-orange-400",
    bar: "from-orange-400 to-yellow-400",
  },
};

function SkillCard({ skill, color, index }: { skill: { name: string; level: number }; color: string; index: number }) {
  const { ref, inView } = useScrollReveal(0.1);
  const c = colorMap[color] || colorMap.blue;

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm text-slate-300 font-medium">{skill.name}</span>
        <span className={`text-xs font-mono ${c.text}`}>{skill.level}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.level}%` : 0 }}
          transition={{ duration: 1.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
          className={`h-full rounded-full bg-gradient-to-r ${c.bar}`}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const active = skillCategories.find((c) => c.id === activeCategory)!;
  const c = colorMap[active.color] || colorMap.blue;

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Technical Arsenal"
          title="Skills &"
          highlight="Expertise"
          description="A curated set of tools, technologies, and frameworks I use to build exceptional digital products."
        />

        {/* Category tabs */}
        <SectionReveal delay={0.3}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {skillCategories.map((category) => {
              const cc = colorMap[category.color] || colorMap.blue;
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 border ${
                    isActive
                      ? `${cc.bg} ${cc.text} ${cc.border} shadow-sm`
                      : "bg-white/3 text-slate-400 border-white/8 hover:border-white/15 hover:text-slate-200"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </SectionReveal>

        {/* Skills grid + bars */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {/* Big card */}
            <div className={`glass rounded-2xl p-8 border ${c.border} transition-colors`}>
              <h3 className="text-lg font-semibold text-slate-100 font-display mb-8">
  {active.label}
</h3>
              <div className="space-y-6">
                {active.skills.map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} color={active.color} index={i} />
                ))}
              </div>
            </div>

            {/* Badge grid */}
            <div className="space-y-4">
              <div className="glass rounded-2xl p-6 border border-white/5">
                <h4 className="text-sm font-mono text-slate-500 mb-4 tracking-wider uppercase">
                  All Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillCategories.flatMap((cat) =>
                    cat.skills.map((s) => ({
                      name: s.name,
                      color: cat.color,
                    }))
                  ).map((item) => {
                    const ic = colorMap[item.color] || colorMap.blue;
                    return (
                      <span
                        key={`${item.name}-${item.color}`}
                        className={`px-3 py-1 rounded-full text-xs font-mono font-medium border transition-all duration-200 ${ic.bg} ${ic.text} ${ic.border} hover:scale-105`}
                      >
                        {item.name}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "15+", label: "Technologies", color: "blue" },
                  { value: "3+", label: "Projects Built", color: "purple" },
                  { value: "2", label: "Internship ", color: "cyan" },
                ].map((stat) => {
                  const sc = colorMap[stat.color] || colorMap.blue;
                  return (
                    <div
                      key={stat.label}
                      className={`glass rounded-xl p-4 border ${sc.border} text-center`}
                    >
                      <div className={`text-2xl font-bold font-display ${sc.text} mb-1`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-slate-500">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
