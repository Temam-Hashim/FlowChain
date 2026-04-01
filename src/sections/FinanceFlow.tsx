"use client";

import { useEffect, useRef } from "react";
import { gsap, initGsap } from "@/lib/gsap-client";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const stages = [
  {
    title: "Supplier inventory financing",
    detail: "Stock-secured facilities unlock working capital before goods leave the warehouse.",
    stat: "Avg. facility",
    value: "$120K",
  },
  {
    title: "Agent & distributor credit",
    detail: "Revolving lines scale with verified throughput and distributor performance.",
    stat: "Drawdown speed",
    value: "< 2 hrs",
  },
  {
    title: "Employee purchase on credit",
    detail: "Virtual cards and limits tied to employer programs and payroll schedules.",
    stat: "Approval rate",
    value: "94%",
  },
  {
    title: "Salary deduction repayment",
    detail: "Automated splits route recoveries before net pay hits employee accounts.",
    stat: "Recovery SLA",
    value: "T+0",
  },
  {
    title: "Bank settlement",
    detail: "Multi-party netting with audit trails for regulators and treasury teams.",
    stat: "Settlement window",
    value: "Daily",
  },
];

export function FinanceFlow() {
  const rootRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    initGsap();
    const root = rootRef.current;
    const progress = progressRef.current;
    if (!root || !progress) return;

    const ctx = gsap.context(() => {
      gsap.from(".ff-head", {
        y: 24,
        opacity: reduced ? 1 : 0,
        duration: reduced ? 0 : 0.65,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      if (!reduced) {
        gsap.fromTo(
          progress,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            transformOrigin: "left center",
            scrollTrigger: {
              trigger: root,
              start: "top 60%",
              end: "bottom 40%",
              scrub: 0.6,
            },
          },
        );

        gsap.from(".ff-node", {
          opacity: 0,
          y: 20,
          stagger: 0.08,
          duration: 0.55,
          ease: "power2.out",
          scrollTrigger: {
            trigger: root,
            start: "top 55%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.to(".ff-pulse", {
          opacity: 0.9,
          duration: 1.4,
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
      id="finance-flow"
      ref={rootRef}
      className="relative scroll-mt-24 border-t border-white/5 py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="ff-head max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-violet-300/90">
            Credit orchestration
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Financing that moves with the shipment
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Every stage emits signals—FlowChain turns them into credit events,
            repayment schedules, and settlement batches without manual
            reconciliation.
          </p>
        </div>

        <div className="relative mt-16">
          <div
            ref={progressRef}
            className="absolute left-0 top-[22px] hidden h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-cyan-500 via-sky-400 to-violet-500 md:block"
            aria-hidden
          />
          <div className="ff-pulse pointer-events-none absolute -left-4 top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl md:top-4" />

          <div className="grid gap-8 md:grid-cols-5 md:gap-4">
            {stages.map((s, i) => (
              <article
                key={s.title}
                className="ff-node group relative flex flex-col rounded-2xl border border-white/10 bg-fc-elevated/80 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] backdrop-blur-md transition hover:border-cyan-500/30 hover:shadow-[0_0_48px_-12px_rgba(34,211,238,0.35)]"
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                  Stage {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-sm font-semibold leading-snug text-white">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-400">
                  {s.detail}
                </p>
                <div className="mt-5 rounded-xl border border-white/5 bg-black/30 px-3 py-2">
                  <p className="text-[10px] uppercase tracking-wide text-slate-500">
                    {s.stat}
                  </p>
                  <p className="font-mono text-lg text-cyan-200">{s.value}</p>
                </div>
                {i < stages.length - 1 && (
                  <div
                    className="absolute -right-2 top-1/2 hidden h-px w-4 -translate-y-1/2 bg-gradient-to-r from-cyan-500/50 to-transparent md:block"
                    aria-hidden
                  />
                )}
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
            ISO 27001-ready controls
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
            Open banking hooks
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
            Real-time risk scoring
          </span>
        </div>
      </div>
    </section>
  );
}
