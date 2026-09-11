"use client";

import { Briefcase, GraduationCap } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionReveal from "@/components/ui/SectionReveal";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          label="Get to Know Me"
          title="About"
          highlight="Me"
          description="A little about my background, interests, and the way I approach building with technology."
        />

        <SectionReveal delay={0.2}>
          <article className="glass rounded-2xl p-6 sm:p-8 lg:p-10 border border-neon-blue/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-neon-blue/5 border border-neon-blue/20 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={21} className="text-neon-blue" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-1">
                    Background
                  </p>
                  <p className="text-slate-200 leading-relaxed">
                    Hi, I&apos;m <strong className="text-neon-blue">Anand P</strong>, a Computer Science graduate from <strong className="text-neon-blue">Ilahia College of Engineering and Technology</strong>, Kerala, India.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-neon-purple/5 border border-neon-purple/20 flex items-center justify-center flex-shrink-0">
                  <Briefcase size={21} className="text-neon-purple" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-1">
                    Current Focus
                  </p>
                  <p className="text-slate-200 leading-relaxed">
                    Currently, I&apos;m working as a <strong className="text-neon-purple">Software Engineer Intern at Mints Global</strong>, where I&apos;m gaining industry experience and working on real-world projects.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-5 border-t border-white/8 pt-8 text-slate-400 leading-relaxed">
              <p>
                I&apos;m a passionate developer who enjoys building <strong className="text-slate-200">full-stack web applications</strong> and using technology to solve real-world problems. I like creating solutions that are not only efficient and reliable but also simple and enjoyable to use.
              </p>
              <p>
                My interests extend beyond web development to <strong className="text-slate-200">app development, cybersecurity, and UI/UX design</strong>. I enjoy exploring new technologies, experimenting with ideas, and continuously improving my skills through hands-on projects and practical experience.
              </p>
              <p>
                Along with my technical skills, I&apos;ve developed strong <strong className="text-slate-200">communication, leadership, teamwork, and problem-solving abilities</strong> through working on projects and collaborating with peers. I believe good products are built through both strong technical skills and effective teamwork.
              </p>
              <p>
                I&apos;m always open to <strong className="text-neon-cyan">learning, building, collaborating, and taking on new challenges</strong>.
              </p>
            </div>
          </article>
        </SectionReveal>
      </div>
    </section>
  );
}
