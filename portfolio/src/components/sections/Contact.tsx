"use client";

import { Mail, Phone, MapPin, Github, Linkedin, ArrowRight } from "lucide-react";
import { personalInfo } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionReveal from "@/components/ui/SectionReveal";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Get In Touch"
          title="Let's"
          highlight="Connect"
          description="Reach out using the details below — no form needed."
        />

        <div className="space-y-8">
          <SectionReveal direction="left">
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-2xl font-semibold text-slate-100 mb-3">
                  Contact details
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Use the email, phone, or location below, and connect with me on GitHub or LinkedIn.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                  { icon: MapPin, label: "Location", value: personalInfo.location, href: "#" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 p-4 glass rounded-xl border border-white/5 hover:border-neon-blue/20 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-neon-blue/8 border border-neon-blue/20 flex items-center justify-center group-hover:bg-neon-blue/12 transition-colors">
                      <Icon size={16} className="text-neon-blue" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">{label}</p>
                      <p className="text-sm text-slate-200">{value}</p>
                    </div>
                    <ArrowRight size={14} className="text-slate-600 ml-auto group-hover:text-neon-blue group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          </SectionReveal>

          <SectionReveal direction="left" delay={0.1}>
            <div className="space-y-4">
              <p className="text-xs text-slate-500 uppercase tracking-wider font-mono mb-3">
                Find me online
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass border border-white/8 flex items-center justify-center text-slate-400 hover:text-neon-blue hover:border-neon-blue/30 transition-all"
                >
                  <Github size={20} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass border border-white/8 flex items-center justify-center text-slate-400 hover:text-neon-blue hover:border-neon-blue/30 transition-all"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
