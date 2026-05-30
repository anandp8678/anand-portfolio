"use client";

import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export function useScrollReveal(threshold = 0.1) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  return { ref, inView };
}

export function useMagneticEffect() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 80) {
        const strength = (80 - distance) / 80;
        el.style.transform = `translate(${dx * strength * 0.3}px, ${dy * strength * 0.3}px)`;
      } else {
        el.style.transform = "";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return ref;
}
