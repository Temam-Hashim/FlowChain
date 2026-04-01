"use client";

import { useEffect, useRef } from "react";
import { gsap, initGsap } from "@/lib/gsap-client";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const steps = [
  {
    id: "supplier",
    label: "Supplier",
    desc: "Inventory & PO financing tied to verified stock.",
    icon: (
      <path d="M4 7h16v10H4V7zm2 2v6h12V9H6zm2-5h8v2H8V4z" />
    ),
  },
  {
    id: "agent",
    label: "Agent / Distributor",
    desc: "Working capital lines for last-mile fulfillment.",
    icon: <path d="M12 2L4 7v10h16V7l-8-5zm0 2.2L17 8v8H7V8l5-3.8z" />,
  },
  {
    id: "shop",
    label: "Shop owner",
    desc: "Stock on credit with repayment aligned to sales.",
    icon: (
      <path d="M4 10h16l-1 8H5l-1-8zm2-4h12l1 4H5l1-4z M9 14h2v2H9v-2z" />
    ),
  },
  {
    id: "institution",
    label: "Institution / Employee",
    desc: "Payroll-linked purchases & salary deduction rails.",
    icon: <path d="M12 3L2 9h3v9h6v-6h2v6h6V9h3L12 3z" />,
  },
  {
    id: "bank",
    label: "Bank",
    desc: "Settlement, reconciliation, and risk monitoring.",
    icon: (
      <path d="M4 10h16v2H4v-2zm2-6h12v4H6V4zm0 10h12v4H6v-4z M9 8h2v2H9V8z" />
    ),
  },
];

export function HowItWorks() {
  const rootRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    initGsap();
    const root = rootRef.current;
    const path = pathRef.current;
    if (!root || !path) return;

    const ctx = gsap.context(() => {
      const length = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: reduced ? 0 : length,
      });

      if (!reduced) {
        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top 70%",
            end: "center center",
            scrub: 0.8,
          },
        });

        gsap.from(".hiw-card", {
          y: 36,
          opacity: 0,
          stagger: 0.12,
          duration: 0.65,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root,
            start: "top 72%",
            toggleActions: "play none none reverse",
          },
        });
      }

      gsap.from(".hiw-title", {
        y: 28,
        opacity: reduced ? 1 : 0,
        duration: reduced ? 0 : 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      id="how-it-works"
      ref={rootRef}
      className="relative scroll-mt-24 border-t border-white/5 py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="hiw-title max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-cyan-300/80">
            Network topology
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            From supplier shelf to bank ledger
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            A single orchestration layer routes goods, data, and money—so every
            participant sees the same truth in real time.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Desktop / tablet: horizontal flow with SVG */}
          <div className="hidden lg:block">
            <svg
              className="absolute left-0 right-0 top-[52px] h-[120px] w-full text-cyan-500/40"
              viewBox="0 0 1100 120"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                ref={pathRef}
                d="M 40 60 C 180 20, 220 100, 360 60 S 520 20, 660 60 S 820 100, 960 60 S 1020 40, 1060 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <div className="relative z-10 grid grid-cols-5 gap-4">
              {steps.map((s) => (
                <article
                  key={s.id}
                  className="hiw-card group glass-card glass-card-hover flex flex-col rounded-2xl p-5 transition-transform hover:-translate-y-1"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-600/15 ring-1 ring-white/10">
                    <svg
                      className="h-5 w-5 fill-current text-cyan-200"
                      viewBox="0 0 24 24"
                    >
                      {s.icon}
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-white">
                    {s.label}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">
                    {s.desc}
                  </p>
                  <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </article>
              ))}
            </div>
          </div>

          {/* Mobile: vertical stack */}
          <div className="flex flex-col gap-4 lg:hidden">
            {steps.map((s, i) => (
              <article
                key={s.id}
                className="hiw-card glass-card glass-card-hover relative flex gap-4 rounded-2xl p-4"
              >
                {i < steps.length - 1 && (
                  <div
                    className="absolute bottom-[-18px] left-8 top-full z-0 w-px bg-gradient-to-b from-cyan-500/50 to-transparent"
                    aria-hidden
                  />
                )}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-600/15 ring-1 ring-white/10">
                  <svg
                    className="h-5 w-5 fill-current text-cyan-200"
                    viewBox="0 0 24 24"
                  >
                    {s.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    {s.label}
                  </h3>
                  <p className="mt-1 text-xs text-slate-400">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
