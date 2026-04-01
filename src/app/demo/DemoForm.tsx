"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AuthShell } from "@/components/auth/AuthShell";
import { FormSuccess } from "@/components/auth/FormSuccess";

type Intent = "demo" | "strategy" | "both";

export function DemoForm() {
  const searchParams = useSearchParams();
  const [done, setDone] = useState(false);
  const [intent, setIntent] = useState<Intent>("demo");

  useEffect(() => {
    const raw = searchParams.get("intent");
    if (raw === "strategy" || raw === "both" || raw === "demo") {
      setIntent(raw);
    }
  }, [searchParams]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDone(true);
  }

  if (done) {
    return (
      <AuthShell
        title="Request received"
        description="Your session details are on file for the demo team."
      >
        <FormSuccess
          headline="We’ll reach out shortly"
          body="A solutions specialist will email you within one business day to confirm timing and agenda."
        />
      </AuthShell>
    );
  }

  return (
    <AuthShell
      title="Request a demo"
      description="See FlowChain in a live walkthrough—tailored to your corridor, products, and bank partners."
    >
      <form
        onSubmit={handleSubmit}
        className="glass-card space-y-5 rounded-2xl border border-white/10 p-6 sm:p-8"
      >
        <div className="space-y-2">
          <label htmlFor="intent" className="text-sm font-medium text-slate-300">
            What you’re booking
          </label>
          <select
            id="intent"
            name="intent"
            required
            value={intent}
            onChange={(e) => setIntent(e.target.value as Intent)}
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none ring-cyan-500/40 focus:ring-2"
          >
            <option value="demo">Product demo (45 min)</option>
            <option value="strategy">Strategy session with solutions</option>
            <option value="both">Both — demo + scoping call</option>
          </select>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2 sm:col-span-1">
            <label htmlFor="first" className="text-sm font-medium text-slate-300">
              First name
            </label>
            <input
              id="first"
              name="first"
              required
              autoComplete="given-name"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:ring-2 focus:ring-cyan-500/40"
              placeholder="Ada"
            />
          </div>
          <div className="space-y-2 sm:col-span-1">
            <label htmlFor="last" className="text-sm font-medium text-slate-300">
              Last name
            </label>
            <input
              id="last"
              name="last"
              required
              autoComplete="family-name"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:ring-2 focus:ring-cyan-500/40"
              placeholder="Okafor"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-300">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:ring-2 focus:ring-cyan-500/40"
            placeholder="you@company.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-slate-300">
            Company / institution
          </label>
          <input
            id="company"
            name="company"
            required
            autoComplete="organization"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:ring-2 focus:ring-cyan-500/40"
            placeholder="Northwind Distribution"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="role" className="text-sm font-medium text-slate-300">
            Your role
          </label>
          <select
            id="role"
            name="role"
            required
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-cyan-500/40"
          >
            <option value="">Select…</option>
            <option value="ops">Operations / Treasury</option>
            <option value="product">Product / Engineering</option>
            <option value="bank">Bank / FI</option>
            <option value="founder">Founder / Executive</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="notes" className="text-sm font-medium text-slate-300">
            Context (optional)
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            className="w-full resize-y rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:ring-2 focus:ring-cyan-500/40"
            placeholder="Regions, volumes, integrations you care about…"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-gradient-to-r from-cyan-400 to-sky-600 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:opacity-95 active:scale-[0.99]"
        >
          Submit request
        </button>
        <p className="text-center text-xs text-slate-500">
          This is a portfolio demo—no data is sent to a server.
        </p>
      </form>
    </AuthShell>
  );
}
