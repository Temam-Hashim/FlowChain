import Link from "next/link";

const footerLinks = [
  { href: "/get-started", label: "Get started" },
  { href: "/demo", label: "Request demo" },
  { href: "/signup", label: "Sign up" },
  { href: "/login", label: "Sign in" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-4 sm:flex-row sm:px-6">
        <div className="flex flex-col items-center gap-4 sm:items-start">
          <div className="flex items-center gap-2 font-mono text-slate-400">
            <span className="h-2 w-2 rounded-full bg-cyan-500/80" />
            FlowChain
          </div>
          <nav
            className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-slate-500 sm:justify-start"
            aria-label="Footer"
          >
            {footerLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="transition hover:text-cyan-300"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="max-w-sm text-center text-sm text-slate-500 sm:text-right">
          © {new Date().getFullYear()} FlowChain Labs. Fictional product for
          portfolio demonstration.
        </p>
      </div>
    </footer>
  );
}
