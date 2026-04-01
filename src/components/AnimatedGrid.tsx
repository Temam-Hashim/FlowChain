"use client";

import { useEffect, useRef } from "react";
import { gsap, initGsap } from "@/lib/gsap-client";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function AnimatedGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    initGsap();
    const el = ref.current;
    if (!el) return;

    const anim = gsap.to(el, {
      backgroundPosition: "48px 48px",
      duration: 20,
      ease: "none",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      anim.kill();
    };
  }, [reduced]);

  return (
    <div
      ref={ref}
      className="fc-grid-bg pointer-events-none absolute inset-0 opacity-[0.65]"
      style={{ backgroundPosition: "0 0" }}
      aria-hidden
    />
  );
}
