"use client";

import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const glow = document.getElementById("cursor-glow");
    if (!glow) return;

    const handleMouseMove = (e: MouseEvent) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div id="cursor-glow" />;
}
