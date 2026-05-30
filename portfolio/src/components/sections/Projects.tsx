"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Github, Star } from "lucide-react";
import { projects } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionReveal from "@/components/ui/SectionReveal";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const colorMap: Record<string, { border: string; bg: string; text: string; gradient: string }> = {
  blue: { border: "border-neon-blue/30", bg: "bg-neon-blue/5", text: "text-neon-blue", gradient: "from-neon-blue/20 to-transparent" },
  green: { border: "border-green-400/30", bg: "bg-green-400/5", text: "text-green-400", gradient: "from-green-400/20 to-transparent" },
  purple: { border: "border-neon-purple/30", bg: "bg-neon-purple/5", text: "text-neon-purple", gradient: "from-neon-purple/20 to-transparent" },
  cyan: { border: "border-neon-cyan/30", bg: "bg-neon-cyan/5", text: "text-neon-cyan", gradient: "from-neon-cyan/20 to-transparent" },
  orange: { border: "border-orange-400/30", bg: "bg-orange-400/5", text: "text-orange-400", gradient: "from-orange-400/20 to-transparent" },
  pink: { border: "border-pink-400/30", bg: "bg-pink-400/5", text: "text-pink-400", gradient: "from-pink-400/20 to-transparent" },
};

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const { ref, inView } = useScrollReveal(0.1);
  const c = colorMap[project.color] || colorMap.blue;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group glass rounded-2xl overflow-hidden border ${c.border} transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover flex flex-col`}
    >
      {/* Image / thumbnail area */}
      <div className="relative h-44 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority={index < 3}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-br ${c.gradient} via-bg-card to-bg-secondary opacity-80`}
        />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={18} />
          </a>
        </div>
        {project.featured && (
          <div className="absolute top-3 right-3">
            <span className="flex items-center gap-1 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-mono px-2 py-1 rounded-full">
              <Star size={10} fill="currentColor" /> Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-lg text-slate-100 mb-2 group-hover:text-white transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className={`text-xs font-mono px-2.5 py-1 rounded-md ${c.bg} ${c.text} border ${c.border}`}>
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/3 text-slate-500 border border-white/8">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
        <div className="flex gap-3 pt-4 border-t border-white/5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors"
          >
            <Github size={14} /> Source
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const displayed = projects;

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Portfolio"
          title="Featured"
          highlight="Projects"
          description="A selection of projects I've built — from production-grade applications to award-winning hackathon solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {displayed.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* All projects displayed */}
      </div>
    </section>
  );
}
