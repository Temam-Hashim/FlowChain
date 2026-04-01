"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap, initGsap } from "@/lib/gsap-client";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function FinalCTA() {
  const rootRef = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    initGsap();
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.from(".cta-inner", {
        y: 32,
        opacity: reduced ? 1 : 0,
        duration: reduced ? 0 : 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root,
          start: "top 72%",
          toggleActions: "play none none reverse",
        },
      });

      if (!reduced) {
        gsap.to(".cta-glow", {
          opacity: 0.55,
          scale: 1.05,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      id="cta"
      ref={rootRef}
      className="relative scroll-mt-24 border-t border-white/5 py-24 sm:py-32"
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="cta-inner relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-fc-elevated/90 via-fc-bg/95 to-violet-950/40 p-10 text-center shadow-[0_0_80px_-20px_rgba(34,211,238,0.35)] sm:p-14">
          <div className="cta-glow pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-cyan-400/25 blur-[100px] opacity-40" />
          <div className="pointer-events-none absolute -bottom-16 -right-10 h-56 w-56 rounded-full bg-violet-600/25 blur-[90px] opacity-50" />

          <p className="relative text-sm font-medium uppercase tracking-[0.2em] text-cyan-200/90">
            Ready when you are
          </p>
          <h2 className="relative mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Put your supply chain on{" "}
            <span className="text-gradient">a programmable rail</span>
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-base text-slate-300 sm:text-lg">
            Meet with our solutions team to map your corridor, risk stack, and
            integration path—most pilots go live in under eight weeks.
          </p>
          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/demo?intent=strategy"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-cyan-400 to-sky-600 px-10 py-3.5 text-sm font-semibold text-slate-950 shadow-xl shadow-cyan-500/25"
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:scale-[1.02]">
                Book a strategy session
              </span>
              <span className="absolute inset-0 translate-y-full bg-white/25 transition-transform duration-300 group-hover:translate-y-0" />
            </Link>
            <Link
              href="/#how-it-works"
              className="rounded-full border border-white/15 px-8 py-3.5 text-sm font-medium text-slate-200 transition hover:border-white/30 hover:bg-white/5"
            >
              Review the flow
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
