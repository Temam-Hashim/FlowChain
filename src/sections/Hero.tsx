"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap, initGsap } from "@/lib/gsap-client";
import { AnimatedGrid } from "@/components/AnimatedGrid";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const floatCards = [
  { title: "Settlement", value: "$482K", sub: "MTD net", delay: 0 },
  { title: "Credit lines", value: "1,240", sub: "Active", delay: 0.08 },
  { title: "On-time repay", value: "97.2%", sub: "Rolling 90d", delay: 0.16 },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    initGsap();
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set(
          [
            ".hero-line",
            ".hero-sub",
            ".hero-cta",
            ".hero-float",
            ".hero-glow",
          ],
          { clearProps: "all" },
        );
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-glow", { opacity: 0, scale: 0.92, duration: 1.2 })
        .from(
          ".hero-line",
          { y: 48, opacity: 0, stagger: 0.12, duration: 0.75 },
          "-=0.5",
        )
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.6 }, "-=0.35")
        .from(
          ".hero-cta",
          { y: 16, opacity: 0, stagger: 0.08, duration: 0.5 },
          "-=0.4",
        )
        .from(
          ".hero-float",
          { y: 40, opacity: 0, rotation: -2, stagger: 0.1, duration: 0.65 },
          "-=0.45",
        );

      gsap.to(".hero-parallax", {
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(".hero-bg-shift", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] overflow-hidden pt-28 pb-20 sm:pt-32"
    >
      <div className="hero-bg-shift pointer-events-none absolute inset-0 -z-10">
        <div className="hero-glow absolute -left-1/4 top-1/4 h-[520px] w-[520px] rounded-full bg-cyan-500/15 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-violet-600/10 blur-[100px]" />
        <AnimatedGrid />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-14 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-10">
        <div className="max-w-xl flex-1">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cyan-200/90">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Embedded finance · Supply chain
          </p>
          <h1 className="font-sans text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            <span className="hero-line block overflow-hidden">
              <span className="inline-block">Modern Supply Chain</span>
            </span>
            <span className="hero-line mt-1 block overflow-hidden">
              <span className="text-gradient inline-block">
                Financing for Emerging Markets
              </span>
            </span>
          </h1>
          <p className="hero-sub mt-6 max-w-lg text-base leading-relaxed text-slate-400 sm:text-lg">
            FlowChain unifies inventory, distribution, and credit on one rail—so
            suppliers get paid faster, shops stock smarter, and banks settle with
            confidence across every tier of the network.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/demo"
              className="hero-cta group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-cyan-400 to-sky-600 px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_40px_-8px_rgba(34,211,238,0.55)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative z-10">Request demo</span>
              <span className="absolute inset-0 translate-y-full bg-white/30 transition-transform duration-300 group-hover:translate-y-0" />
            </Link>
            <Link
              href="/#how-it-works"
              className="hero-cta inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-medium text-slate-100 backdrop-blur transition hover:border-cyan-500/40 hover:bg-cyan-500/10"
            >
              See how it works
            </Link>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-widest text-slate-500">
                Network uptime
              </dt>
              <dd className="mt-1 font-mono text-lg text-white">99.98%</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-slate-500">
                Avg. disbursement
              </dt>
              <dd className="mt-1 font-mono text-lg text-white">&lt; 4 hrs</dd>
            </div>
            <div className="hidden sm:block">
              <dt className="text-xs uppercase tracking-widest text-slate-500">
                Markets live
              </dt>
              <dd className="mt-1 font-mono text-lg text-white">14</dd>
            </div>
          </dl>
        </div>

        <div className="hero-parallax relative mx-auto w-full max-w-md flex-1 lg:max-w-none">
          <div className="relative aspect-[4/5] w-full max-w-md sm:mx-auto lg:ml-auto">
            <div className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-br from-fc-elevated/90 to-fc-bg/80 p-1 shadow-2xl backdrop-blur-xl">
              <div className="flex h-full flex-col rounded-[1.35rem] bg-fc-surface/80 p-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-400">
                    Live operations
                  </span>
                  <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-300">
                    Healthy
                  </span>
                </div>
                <div className="grid flex-1 grid-cols-2 gap-3">
                  {floatCards.map((c) => (
                    <div
                      key={c.title}
                      className="hero-float glass-card glass-card-hover flex flex-col justify-between rounded-xl p-4"
                      style={{ animationDelay: `${c.delay}s` }}
                    >
                      <span className="text-[11px] text-slate-500">
                        {c.title}
                      </span>
                      <span className="mt-2 font-mono text-xl text-white">
                        {c.value}
                      </span>
                      <span className="text-[10px] text-slate-500">{c.sub}</span>
                    </div>
                  ))}
                  <div className="hero-float glass-card col-span-2 flex items-center gap-3 rounded-xl p-4">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-500/40 to-violet-600/30" />
                    <div>
                      <p className="text-xs text-slate-400">Route optimization</p>
                      <p className="text-sm font-medium text-white">
                        Lagos → Accra corridor
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-cyan-400/20 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-violet-500/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
