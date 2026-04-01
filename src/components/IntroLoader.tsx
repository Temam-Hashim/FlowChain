"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, initGsap } from "@/lib/gsap-client";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function IntroLoader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) {
      setVisible(false);
      return;
    }
    initGsap();
    const el = rootRef.current;
    if (!el) return;

    const tl = gsap.timeline({
      onComplete: () => setVisible(false),
    });

    tl.fromTo(
      el.querySelector(".loader-line"),
      { scaleX: 0, transformOrigin: "left center" },
      { scaleX: 1, duration: 0.9, ease: "power2.inOut" },
    )
      .to(el.querySelector(".loader-brand"), { opacity: 1, y: 0, duration: 0.45 }, "-=0.4")
      .to(el.querySelector(".loader-glow"), { opacity: 0.35, duration: 0.5 }, "<")
      .to(el, { opacity: 0, duration: 0.45, ease: "power2.in" }, "+=0.15")
      .set(el, { pointerEvents: "none" });

    return () => {
      tl.kill();
    };
  }, [reduced]);

  if (!visible) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030712]"
      aria-hidden
    >
      <div className="loader-glow pointer-events-none absolute h-64 w-64 rounded-full bg-cyan-500/20 blur-[100px] opacity-0" />
      <p className="loader-brand translate-y-2 font-mono text-sm tracking-[0.35em] text-cyan-300/90 opacity-0">
        FLOWCHAIN
      </p>
      <div className="mt-6 h-px w-40 overflow-hidden bg-slate-800">
        <div className="loader-line h-full w-full origin-left scale-x-0 bg-gradient-to-r from-cyan-500 to-violet-500" />
      </div>
    </div>
  );
}
