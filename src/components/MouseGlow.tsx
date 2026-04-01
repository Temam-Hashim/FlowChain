"use client";

import { useEffect, useRef } from "react";
import { gsap, initGsap } from "@/lib/gsap-client";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function MouseGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    initGsap();
    const dot = dotRef.current;
    if (!dot) return;

    const move = (e: PointerEvent) => {
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.55,
        ease: "power3.out",
      });
    };

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [reduced]);

  if (reduced) return null;

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-[5] -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
      aria-hidden
    >
      <div className="h-[420px] w-[420px] rounded-full bg-gradient-to-br from-cyan-500/12 via-transparent to-violet-500/10 blur-3xl" />
    </div>
  );
}
