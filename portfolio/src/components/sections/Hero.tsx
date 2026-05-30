"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail, ArrowDown, Download, ChevronRight } from "lucide-react";
import Image from "next/image";
import { personalInfo, typingRoles } from "@/lib/data";

const typingSequence = typingRoles.flatMap((role) => [role, 2500]);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden grid-pattern"
    >
      {/* Decorative radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0,212,255,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-neon-blue/5 border border-neon-blue/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
              <span className="text-sm text-slate-400 font-mono">
                {personalInfo.availability}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-neon-blue/80 font-mono text-sm tracking-widest mb-3"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl sm:text-6xl xl:text-7xl font-bold text-slate-50 leading-[1.05] mb-4"
            >
              {personalInfo.firstName}{" "}
              <span className="gradient-text">{personalInfo.lastName}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="text-xl sm:text-2xl font-semibold text-neon-blue mb-6"
            >
              Computer science student
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg"
            >
              {personalInfo.tagline} Turning ideas into{" "}
              <span className="text-slate-200">scalable products</span> with{" "}
              <span className="text-neon-purple">modern web technologies</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary flex items-center gap-2"
              >
                View Projects <ChevronRight size={16} />
              </a>
              <a href="/Anand_P_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center gap-2">
                <Download size={16} /> Download CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex items-center gap-4"
            >
              <span className="text-slate-600 text-sm">Find me on</span>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: personalInfo.github, label: "GitHub" },
                  { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
                  { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-lg bg-white/3 border border-white/8 flex items-center justify-center text-slate-400 hover:text-neon-blue hover:border-neon-blue/30 hover:bg-neon-blue/5 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — avatar area */}
          <div className="order-1 lg:order-2 flex justify-center items-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Outer rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #00D4FF, #8B5CF6, #06FFC8, transparent, #00D4FF)",
                  padding: "2px",
                }}
              >
                <div className="w-full h-full rounded-full bg-bg-primary" />
              </motion.div>

              {/* Middle ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-dashed border-neon-blue/15"
              />

              {/* Profile image container */}
              <div className="absolute inset-6 rounded-full overflow-hidden bg-gradient-to-br from-bg-card via-bg-secondary to-bg-tertiary border border-neon-blue/20">
                {/* Gradient orb behind */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse at 60% 40%, rgba(139,92,246,0.3) 0%, rgba(0,212,255,0.1) 50%, transparent 70%)",
                  }}
                />
                {/* Profile image (place ZuiiD.jpg at public/images/) */}
                <div className="absolute inset-0">
                  <Image
                    src="/images/Zuid.jpg"
                    alt="Anand P"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Glow underneath */}
              <div
                className="absolute inset-6 rounded-full animate-pulse-glow"
                style={{ filter: "blur(20px)", background: "rgba(0,212,255,0.12)", zIndex: -1 }}
              />

            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-slate-600 text-xs font-mono tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} className="text-slate-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
