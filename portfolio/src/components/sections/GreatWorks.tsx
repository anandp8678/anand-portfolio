"use client";

import { CheckCircle2, CircleDashed, ShieldCheck } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionReveal from "@/components/ui/SectionReveal";

const works = [
  {
    title: "ShieldDesk SOC",
    status: "In Development",
    description: "A Security Operations Center dashboard focused on real-time threat monitoring and response.",
    features: [
      "Security Operations Center dashboard",
      "Real-time threat monitoring & response",
      "Currently under active development",
    ],
    icon: CircleDashed,
    color: "text-neon-blue",
    bullet: "bg-neon-blue",
    background: "bg-neon-blue/5",
    border: "border-neon-blue/20 hover:border-neon-blue/40",
  },
  {
    title: "MINTS ERP System",
    status: "Deployed",
    description: "A business operations platform built to support structured task management and team collaboration.",
    features: [
      "Team Task Assignment — individual/team, subtasks, Leader/Co-Leader",
      "Task review flows: Approve/Recheck, deletion with notifications",
      "Focus Mode, Kanban views, permissions & form handling",
      "Priority display, bug fixes, manager progress monitoring",
    ],
    icon: CheckCircle2,
    color: "text-green-400",
    bullet: "bg-green-400",
    background: "bg-green-400/5",
    border: "border-green-400/20 hover:border-green-400/40",
  },
];

export default function GreatWorks() {
  return (
    <section id="great-works" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          label="Current Work"
          title="The Great"
          highlight="Works"
          description="A closer look at the products I am building and helping bring to life."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {works.map((work, index) => {
            const Icon = work.icon;
            return (
              <SectionReveal key={work.title} delay={index * 0.1}>
                <article className={`glass h-full rounded-2xl p-6 sm:p-8 border ${work.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover`}>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl ${work.background} border ${work.border} flex items-center justify-center flex-shrink-0`}>
                      <Icon size={24} className={work.color} />
                    </div>
                    <span className={`inline-flex items-center gap-2 rounded-full border ${work.border} ${work.background} ${work.color} px-3 py-1.5 text-xs font-mono whitespace-nowrap`}>
                      <ShieldCheck size={13} />
                      {work.status}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-slate-100 mb-3">
                    {work.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {work.description}
                  </p>

                  <ul className="space-y-3 border-t border-white/8 pt-5">
                    {work.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                        <span className={`mt-2 w-1.5 h-1.5 rounded-full ${work.bullet} flex-shrink-0`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
