"use client";

import { useEffect, useRef } from "react";
import { gsap, initGsap } from "@/lib/gsap-client";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const stats = [
  { label: "Transactions processed", value: 12500, suffix: "+", prefix: "" },
  { label: "Verified suppliers", value: 320, suffix: "+", prefix: "" },
  { label: "Active retail shops", value: 1800, suffix: "+", prefix: "" },
  {
    label: "Credit facilitated",
    value: 2.4,
    suffix: "M",
    prefix: "$",
    decimals: 1,
  },
];

function formatStat(s: (typeof stats)[number]) {
  if (s.decimals !== undefined) {
    return `${s.prefix}${s.value.toFixed(s.decimals)}${s.suffix}`;
  }
  return `${s.prefix}${Math.round(s.value).toLocaleString("en-US")}${s.suffix}`;
}

export function Metrics() {
  const rootRef = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    initGsap();
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.from(".met-head", {
        y: 20,
        opacity: reduced ? 1 : 0,
        duration: reduced ? 0 : 0.6,
        scrollTrigger: {
          trigger: root,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".met-card", {
        scale: reduced ? 1 : 0.94,
        opacity: reduced ? 1 : 0,
        stagger: reduced ? 0 : 0.1,
        duration: reduced ? 0 : 0.55,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root,
          start: "top 65%",
          toggleActions: "play none none reverse",
        },
      });

      if (reduced) return;

      stats.forEach((s, i) => {
        const el = root.querySelector(`[data-count="${i}"]`);
        if (!el) return;
        const target =
          s.decimals !== undefined
            ? s.value
            : Math.round(s.value);
        const obj = { n: 0 };
        gsap.to(obj, {
          n: target,
          duration: 2.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            const v = obj.n;
            if (s.decimals !== undefined) {
              el.textContent = `${s.prefix}${v.toFixed(s.decimals)}${s.suffix}`;
            } else {
              el.textContent = `${s.prefix}${Math.round(v).toLocaleString("en-US")}${s.suffix}`;
            }
          },
        });
      });

      gsap.to(".met-bg", {
        backgroundPosition: "100% 50%",
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      id="metrics"
      ref={rootRef}
      className="relative scroll-mt-24 border-t border-white/5 py-24 sm:py-28"
    >
      <div
        className="met-bg pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(120deg, transparent 0%, rgba(34,211,238,0.08) 45%, transparent 90%)",
          backgroundSize: "200% 100%",
          backgroundPosition: "0% 50%",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="met-head max-w-2xl text-center sm:mx-auto">
          <p className="text-sm font-medium uppercase tracking-widest text-cyan-300/80">
            Traction
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Network effects you can measure
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            FlowChain is live with banks and distributors across multiple corridors—
            processing real volume, not demos.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="met-card rounded-2xl border border-white/10 bg-fc-surface/70 p-6 text-center backdrop-blur-xl transition hover:border-cyan-500/20"
            >
              <p
                className="font-mono text-3xl font-semibold tabular-nums text-white sm:text-4xl"
                data-count={i}
              >
                {reduced
                  ? formatStat(s)
                  : s.decimals !== undefined
                    ? `${s.prefix}0.0${s.suffix}`
                    : `${s.prefix}0${s.suffix}`}
              </p>
              <p className="mt-3 text-sm text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
