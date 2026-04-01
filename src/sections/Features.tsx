"use client";

import { useEffect, useRef } from "react";
import { gsap, initGsap } from "@/lib/gsap-client";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const features = [
  {
    title: "Role-based dashboards",
    body: "Merchants, banks, and ops each get curated KPIs and workflows—no noisy clutter.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <path
          fill="currentColor"
          d="M4 4h7v7H4V4zm9 0h7v4h-7V4zM4 13h7v7H4v-7zm9 3h7v4h-7v-4z"
        />
      </svg>
    ),
  },
  {
    title: "Virtual card purchases",
    body: "Issue scoped cards for inventory runs with merchant-level controls and velocity checks.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <path
          fill="currentColor"
          d="M4 6h16v12H4V6zm2 2v2h12V8H6zm0 6v2h5v-2H6zm8 0v2h4v-2h-4z"
        />
      </svg>
    ),
  },
  {
    title: "Credit lifecycle tracking",
    body: "From origination to closure—every touchpoint is timestamped and exportable for audits.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <path
          fill="currentColor"
          d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 5v5l4 2-1 2-5-2.5V7h2z"
        />
      </svg>
    ),
  },
  {
    title: "Repayment automation",
    body: "Rules engine coordinates payroll splits, direct debits, and partial settlements.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <path
          fill="currentColor"
          d="M13 3L4 9v12h16V9l-9-6zm0 2.2L18 10v10H6V10l7-4.8zM9 14h6v2H9v-2z"
        />
      </svg>
    ),
  },
  {
    title: "Inventory distribution visibility",
    body: "Lot-level tracking from warehouse release to retail shelf with exception alerts.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <path
          fill="currentColor"
          d="M4 8l8-4 8 4v8l-8 4-8-4V8zm2 1.5v5.5l6 3 6-3V9.5l-6-3-6 3z"
        />
      </svg>
    ),
  },
  {
    title: "Institution salary deduction",
    body: "Native HRIS connectors and policy templates for compliant payroll recovery.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <path
          fill="currentColor"
          d="M16 11c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm-8 0c1.7 0 3-1.3 3-3S9.7 5 8 5 5 6.3 5 8s1.3 3 3 3zm0 2c-2.3 0-7 1.2-7 3.5V19h14v-2.5C15 14.2 10.3 13 8 13zm8 0c-.3 0-.6 0-1 .1 1.2.8 2 2 2 3.5V19h6v-2.5c0-2.3-4.7-3.5-7-3.5z"
        />
      </svg>
    ),
  },
];

export function Features() {
  const rootRef = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    initGsap();
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.from(".feat-head", {
        y: 20,
        opacity: reduced ? 1 : 0,
        duration: reduced ? 0 : 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".feat-card", {
        y: 40,
        opacity: reduced ? 1 : 0,
        stagger: reduced ? 0 : 0.09,
        duration: reduced ? 0 : 0.55,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root,
          start: "top 65%",
          toggleActions: "play none none reverse",
        },
      });
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      id="features"
      ref={rootRef}
      className="relative scroll-mt-24 border-t border-white/5 py-24 sm:py-28"
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="feat-head max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-cyan-300/80">
            Platform
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Built for operators, not slide decks
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Ship faster with modules that mirror how emerging-market supply chains
            actually run—cash-first, mobile-heavy, and always in motion.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="feat-card group relative overflow-hidden rounded-2xl border border-white/10 bg-fc-surface/70 p-6 shadow-lg backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-500/25 hover:shadow-[0_20px_60px_-24px_rgba(34,211,238,0.35)]"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-500/10 blur-2xl transition group-hover:bg-cyan-400/20" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/25 to-violet-600/20 text-cyan-200 ring-1 ring-white/10 transition group-hover:scale-105 group-hover:text-cyan-100">
                {f.icon}
              </div>
              <h3 className="relative mt-5 text-lg font-semibold text-white">
                {f.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-slate-400">
                {f.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
