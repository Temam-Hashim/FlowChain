import Link from "next/link";

type AuthShellProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function AuthShell({ title, description, children }: AuthShellProps) {
  return (
    <div className="relative min-h-[100svh] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(34,211,238,0.12),transparent)]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[100px]" />

      <header className="relative z-10 border-b border-white/5 bg-fc-bg/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-lg items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link
            href="/"
            className="group flex items-center gap-2 font-mono text-sm font-semibold text-white"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/30 to-violet-600/30 ring-1 ring-white/10 transition-transform group-hover:scale-105">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
            </span>
            FlowChain
          </Link>
          <Link
            href="/"
            className="text-sm text-slate-400 transition hover:text-cyan-200"
          >
            ← Home
          </Link>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-lg px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight text-white">
            {title}
          </h1>
          {description ? (
            <p className="mt-3 text-base leading-relaxed text-slate-400">
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </main>
    </div>
  );
}
