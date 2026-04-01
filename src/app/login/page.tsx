"use client";

import Link from "next/link";
import { useState } from "react";
import { AuthShell } from "@/components/auth/AuthShell";
import { FormSuccess } from "@/components/auth/FormSuccess";

export default function LoginPage() {
  const [done, setDone] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDone(true);
  }

  if (done) {
    return (
      <AuthShell title="Signed in" description="Session established (demo only).">
        <FormSuccess
          headline="Welcome back"
          body="In a real app, you’d land in the FlowChain console. Here, you can explore the marketing site again."
        />
      </AuthShell>
    );
  }

  return (
    <AuthShell
      title="Sign in"
      description="Access your workspace, programs, and settlement runs."
    >
      <form
        onSubmit={handleSubmit}
        className="glass-card space-y-5 rounded-2xl border border-white/10 p-6 sm:p-8"
      >
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-300">
            Email
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
          <div className="flex items-center justify-between gap-2">
            <label htmlFor="password" className="text-sm font-medium text-slate-300">
              Password
            </label>
            <span className="text-xs text-slate-500">Demo — any value works</span>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:ring-2 focus:ring-cyan-500/40"
            placeholder="••••••••"
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
          <label className="flex cursor-pointer items-center gap-2 text-slate-400">
            <input
              type="checkbox"
              name="remember"
              className="rounded border-white/20 bg-black/40 text-cyan-500 focus:ring-cyan-500/40"
            />
            Remember this device
          </label>
          <button
            type="button"
            className="text-cyan-300/90 hover:text-cyan-200"
            onClick={() => alert("Password reset would open here in production.")}
          >
            Forgot password?
          </button>
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-gradient-to-r from-cyan-400 to-sky-600 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:opacity-95 active:scale-[0.99]"
        >
          Continue
        </button>

        <p className="text-center text-sm text-slate-500">
          New to FlowChain?{" "}
          <Link href="/signup" className="font-medium text-cyan-300 hover:text-cyan-200">
            Create an account
          </Link>
        </p>
      </form>
    </AuthShell>
  );
}
