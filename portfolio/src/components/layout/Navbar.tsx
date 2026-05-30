"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.slice(1));
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-bg-primary/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_32px_rgba(0,0,0,0.3)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#home")}
            className="font-display text-xl font-bold gradient-text hover:scale-105 transition-transform"
          >
            Anand P<span className="text-slate-500">.</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg group ${
                  activeSection === item.href.slice(1)
                    ? "text-neon-blue"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {activeSection === item.href.slice(1) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 bg-neon-blue/8 border border-neon-blue/20 rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
                {activeSection !== item.href.slice(1) && (
                  <span className="absolute inset-0 bg-white/0 group-hover:bg-white/3 rounded-lg transition-colors duration-200" />
                )}
              </button>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="/Anand_P_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex btn-primary text-sm px-5 py-2.5 rounded-lg items-center gap-2"
            >
              Resume
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-bg-primary/95 backdrop-blur-2xl"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="absolute top-0 right-0 bottom-0 w-72 bg-bg-secondary border-l border-white/5 flex flex-col justify-center p-8"
            >
              <div className="space-y-2">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    onClick={() => scrollTo(item.href)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                      activeSection === item.href.slice(1)
                        ? "text-neon-blue bg-neon-blue/8 border border-neon-blue/20"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="pt-4"
                >
                  <a
                    href="/Anand_P_Resume.pdf"
                    className="btn-primary w-full text-center block text-sm py-3 rounded-lg"
                  >
                    Download Resume
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
