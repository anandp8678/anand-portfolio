"use client";

import { Award, BadgeCheck } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionReveal from "@/components/ui/SectionReveal";

const certifications = [
  {
    title: "Programming in Java NPTEL",
    issuer: "IIT Kharagpur",
    color: "text-neon-blue",
    background: "bg-neon-blue/5",
    border: "border-neon-blue/20 hover:border-neon-blue/40",
  },
  {
    title: "Programming in Python",
    issuer: "Udemy",
    color: "text-neon-purple",
    background: "bg-neon-purple/5",
    border: "border-neon-purple/20 hover:border-neon-purple/40",
  },
  {
    title: "Front End Application Development using Angular",
    issuer: "NeST Digital Academy",
    color: "text-neon-cyan",
    background: "bg-neon-cyan/5",
    border: "border-neon-cyan/20 hover:border-neon-cyan/40",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          label="Continuous Learning"
          title="Certifications"
          highlight="& Courses"
          description="Recognitions and courses that support my ongoing technical development."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((certification, index) => (
            <SectionReveal key={certification.title} delay={index * 0.1}>
              <article
                className={`glass h-full rounded-2xl p-6 border ${certification.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover`}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${certification.background} border ${certification.border} flex items-center justify-center mb-6`}
                >
                  <Award size={23} className={certification.color} />
                </div>
                <h3 className="font-display text-lg font-semibold text-slate-100 leading-snug mb-4">
                  {certification.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <BadgeCheck size={16} className={certification.color} />
                  <span>{certification.issuer}</span>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
