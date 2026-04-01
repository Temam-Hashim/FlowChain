import Link from "next/link";
import { AuthShell } from "@/components/auth/AuthShell";

const steps = [
  {
    n: "01",
    title: "Map your network",
    body: "Define suppliers, corridors, and which bank rails settle your programs.",
  },
  {
    n: "02",
    title: "Configure credit policies",
    body: "Set limits, repayment rules, and institution payroll links in the policy engine.",
  },
  {
    n: "03",
    title: "Go live with monitoring",
    body: "Turn on disbursements with real-time risk signals and settlement dashboards.",
  },
];

export default function GetStartedPage() {
  return (
    <AuthShell
      title="Get started"
      description="Most teams launch a pilot in under eight weeks. Pick how you want to begin."
    >
      <ol className="space-y-4">
        {steps.map((s) => (
          <li
            key={s.n}
            className="glass-card flex gap-4 rounded-2xl border border-white/10 p-5"
          >
            <span className="font-mono text-sm text-cyan-400/90">{s.n}</span>
            <div>
              <h2 className="font-semibold text-white">{s.title}</h2>
              <p className="mt-1 text-sm leading-relaxed text-slate-400">
                {s.body}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Link
          href="/signup"
          className="inline-flex justify-center rounded-full bg-gradient-to-r from-cyan-400 to-sky-600 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:opacity-95"
        >
          Create an account
        </Link>
        <Link
          href="/demo"
          className="inline-flex justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-medium text-slate-100 transition hover:border-cyan-500/40 hover:bg-cyan-500/10"
        >
          Book a demo first
        </Link>
      </div>

      <p className="mt-10 text-center text-sm text-slate-500">
        Prefer to browse?{" "}
        <Link href="/#how-it-works" className="text-cyan-300 hover:text-cyan-200">
          Review how FlowChain works
        </Link>
      </p>
    </AuthShell>
  );
}
