"use client";

import Link from "next/link";
import { useState } from "react";
import { AuthShell } from "@/components/auth/AuthShell";
import { FormSuccess } from "@/components/auth/FormSuccess";

export default function SignupPage() {
  const [done, setDone] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDone(true);
  }

  if (done) {
    return (
      <AuthShell title="Account created" description="Check your inbox to continue.">
        <FormSuccess
          headline="You’re on the list"
          body="We’ve reserved your workspace name. In production, you’d verify email and complete KYC steps."
        />
      </AuthShell>
    );
  }

  return (
    <AuthShell
      title="Create your workspace"
      description="Spin up a sandbox environment and invite your bank and distributor partners."
    >
      <form
        onSubmit={handleSubmit}
        className="glass-card space-y-5 rounded-2xl border border-white/10 p-6 sm:p-8"
      >
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-slate-300">
            Company name
          </label>
          <input
            id="company"
            name="company"
            required
            autoComplete="organization"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:ring-2 focus:ring-cyan-500/40"
            placeholder="Acme Logistics Ltd."
          />
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
          <label htmlFor="password" className="text-sm font-medium text-slate-300">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            minLength={8}
            autoComplete="new-password"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:ring-2 focus:ring-cyan-500/40"
            placeholder="At least 8 characters"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="segment" className="text-sm font-medium text-slate-300">
            Primary segment
          </label>
          <select
            id="segment"
            name="segment"
            required
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-cyan-500/40"
          >
            <option value="">Select…</option>
            <option value="distributor">Distributor / agent network</option>
            <option value="retail">Retail / shop network</option>
            <option value="bank">Bank / FI</option>
            <option value="employer">Employer / institution</option>
          </select>
        </div>

        <label className="flex cursor-pointer items-start gap-3 text-sm text-slate-400">
          <input
            type="checkbox"
            name="terms"
            required
            className="mt-1 rounded border-white/20 bg-black/40 text-cyan-500 focus:ring-cyan-500/40"
          />
          <span>
            I agree to the{" "}
            <button
              type="button"
              className="text-cyan-300 hover:text-cyan-200"
              onClick={() => alert("Terms would open in production.")}
            >
              Terms
            </button>{" "}
            and{" "}
            <button
              type="button"
              className="text-cyan-300 hover:text-cyan-200"
              onClick={() => alert("Privacy policy would open in production.")}
            >
              Privacy Policy
            </button>
            .
          </span>
        </label>

        <button
          type="submit"
          className="w-full rounded-full bg-gradient-to-r from-cyan-400 to-sky-600 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:opacity-95 active:scale-[0.99]"
        >
          Create workspace
        </button>

        <p className="text-center text-sm text-slate-500">
          Already have access?{" "}
          <Link href="/login" className="font-medium text-cyan-300 hover:text-cyan-200">
            Sign in
          </Link>
        </p>
        <p className="text-center text-xs text-slate-600">
          Portfolio demo — form does not persist data.
        </p>
      </form>
    </AuthShell>
  );
}
