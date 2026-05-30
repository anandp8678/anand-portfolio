"use client";

import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative pt-12 pb-8 border-t border-white/5">
      {/* Glowing top border */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.4), rgba(139,92,246,0.4), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="font-display text-xl font-bold gradient-text mb-1">
              Anand P<span className="text-slate-600">.</span>
            </div>
            <p className="text-xs text-slate-600 font-mono">
              Full Stack Developer · CSE Student
            </p>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-6 text-sm text-slate-500">
            {["Skills", "Projects", "Experience", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  document
                    .getElementById(item.toLowerCase())
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-slate-300 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Socials + scroll top */}
          <div className="flex items-center gap-3">
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
                className="w-9 h-9 rounded-lg bg-white/3 border border-white/8 flex items-center justify-center text-slate-500 hover:text-neon-blue hover:border-neon-blue/30 transition-all"
              >
                <Icon size={15} />
              </a>
            ))}
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-lg bg-neon-blue/5 border border-neon-blue/20 flex items-center justify-center text-neon-blue hover:bg-neon-blue/10 transition-colors ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>
            © {new Date().getFullYear()} Anand P. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
