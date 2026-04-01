"use client";

import { useEffect, useRef } from "react";
import { gsap, initGsap } from "@/lib/gsap-client";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const roles = [
  { name: "Distributor", color: "from-cyan-400/80 to-sky-600/60" },
  { name: "Merchant", color: "from-violet-400/70 to-fuchsia-600/50" },
  { name: "Bank ops", color: "from-emerald-400/70 to-teal-700/50" },
];

const bars = [42, 68, 55, 80, 63, 90, 74];

export function DashboardPreview() {
  const rootRef = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    initGsap();
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.from(".dash-shell", {
        y: 48,
        opacity: reduced ? 1 : 0,
        duration: reduced ? 0 : 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      if (!reduced) {
        gsap.from(".dash-skel", {
          opacity: 0.4,
          stagger: { each: 0.06, from: "random" },
          duration: 0.4,
          repeat: 1,
          yoyo: true,
          scrollTrigger: {
            trigger: root,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.from(".dash-bar", {
          scaleY: 0,
          transformOrigin: "bottom center",
          stagger: 0.06,
          duration: 0.65,
          ease: "power2.out",
          scrollTrigger: {
            trigger: root,
            start: "top 55%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.from(".dash-row", {
          x: -12,
          opacity: 0,
          stagger: 0.07,
          duration: 0.45,
          ease: "power2.out",
          scrollTrigger: {
            trigger: root,
            start: "top 52%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      id="dashboard"
      ref={rootRef}
      className="relative scroll-mt-24 border-t border-white/5 py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.06),transparent_65%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-slate-400">
            Console preview
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            One pane for liquidity and logistics
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Monitor orders, exposure, and recoveries from a single workspace—with
            drill-downs that respect role permissions out of the box.
          </p>
        </div>

        <div className="dash-shell mt-14 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-fc-elevated/95 to-fc-bg/90 p-1 shadow-2xl backdrop-blur-2xl">
          <div className="rounded-[1.35rem] bg-fc-bg/90 p-4 sm:p-6">
            <div className="flex flex-col gap-4 border-b border-white/5 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
                  FlowChain / Control tower
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  West Africa cluster · Live
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {roles.map((r) => (
                  <span
                    key={r.name}
                    className={`rounded-full bg-gradient-to-r px-3 py-1 text-[11px] font-medium text-white ring-1 ring-white/10 ${r.color}`}
                  >
                    {r.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="dash-skel mb-3 h-4 w-32 rounded bg-slate-700/50" />
                <div className="flex h-48 items-end gap-2 rounded-2xl border border-white/5 bg-black/30 px-4 pb-4 pt-6">
                  {bars.map((h, i) => (
                    <div
                      key={i}
                      className="dash-bar flex-1 rounded-t-md bg-gradient-to-t from-cyan-600/40 to-cyan-300/90"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <p className="mt-2 text-center text-[11px] text-slate-500">
                  Disbursements vs. recoveries (7d)
                </p>
              </div>

              <div className="space-y-3">
                <div className="dash-skel h-4 w-24 rounded bg-slate-700/50" />
                <div className="rounded-2xl border border-white/5 bg-black/25 p-4">
                  <p className="text-[11px] uppercase tracking-wide text-slate-500">
                    Financing summary
                  </p>
                  <p className="mt-2 font-mono text-2xl text-white">$2.42M</p>
                  <p className="text-xs text-emerald-400">+12.4% vs. last month</p>
                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />
                  </div>
                  <p className="mt-2 text-[10px] text-slate-500">
                    Utilization within policy
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/5 bg-black/20 p-4">
                <p className="text-xs font-medium text-slate-400">
                  Order tracking
                </p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li className="dash-row flex justify-between text-slate-300">
                    <span>SKU-204 · Beverages</span>
                    <span className="font-mono text-cyan-200">In transit</span>
                  </li>
                  <li className="dash-row flex justify-between text-slate-300">
                    <span>SKU-118 · Dry goods</span>
                    <span className="font-mono text-emerald-300">Delivered</span>
                  </li>
                  <li className="dash-row flex justify-between text-slate-300">
                    <span>SKU-077 · Cold chain</span>
                    <span className="font-mono text-amber-300">Exception</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-white/5 bg-black/20 p-4">
                <p className="text-xs font-medium text-slate-400">
                  Repayment status
                </p>
                <div className="mt-4 space-y-3">
                  <div>
                    <div className="flex justify-between text-[11px] text-slate-500">
                      <span>On schedule</span>
                      <span>78%</span>
                    </div>
                    <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-800">
                      <div className="h-full w-[78%] rounded-full bg-emerald-500/80" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[11px] text-slate-500">
                      <span>Grace / rework</span>
                      <span>15%</span>
                    </div>
                    <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-800">
                      <div className="h-full w-[15%] rounded-full bg-amber-400/90" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[11px] text-slate-500">
                      <span>At risk</span>
                      <span>7%</span>
                    </div>
                    <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-800">
                      <div className="h-full w-[7%] rounded-full bg-rose-500/90" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
