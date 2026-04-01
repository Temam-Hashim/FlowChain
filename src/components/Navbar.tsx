"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap, initGsap } from "@/lib/gsap-client";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const links = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#finance-flow", label: "Finance" },
  { href: "#features", label: "Features" },
  { href: "#dashboard", label: "Product" },
  { href: "#metrics", label: "Impact" },
];

export function Navbar() {
  const barRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (reduced) return;
    initGsap();
    const bar = barRef.current;
    if (!bar) return;
    gsap.fromTo(
      bar,
      { y: -24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: 0.2 },
    );
  }, [reduced]);

  return (
    <header
      ref={barRef}
      className={`fixed left-0 right-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-[#030712]/75 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="group flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/30 to-violet-600/30 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
          </span>
          FlowChain
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-sm text-slate-400 transition-colors hover:text-cyan-200"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
          <Link
            href="/login"
            className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-500/30 hover:bg-cyan-500/10 sm:inline-flex"
          >
            Sign in
          </Link>
          <Link
            href="/get-started"
            className="group relative inline-flex overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-sky-600 px-4 py-2 text-sm font-medium text-slate-950 shadow-lg shadow-cyan-500/20"
          >
            <span className="relative z-10">Get started</span>
            <span className="absolute inset-0 translate-x-[-100%] bg-white/25 transition-transform duration-300 group-hover:translate-x-0" />
          </Link>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`md:hidden ${menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} fixed inset-x-0 top-[72px] z-40 border-b border-white/10 bg-[#030712]/95 backdrop-blur-xl transition-opacity duration-200`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-xl px-3 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-200"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="mt-2 border-t border-white/10 pt-3">
            <Link
              href="/login"
              className="block rounded-xl px-3 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-200"
              onClick={() => setMenuOpen(false)}
            >
              Sign in
            </Link>
            <Link
              href="/get-started"
              className="block rounded-xl px-3 py-3 text-sm font-medium text-cyan-200 transition hover:bg-white/5"
              onClick={() => setMenuOpen(false)}
            >
              Get started
            </Link>
            <Link
              href="/demo"
              className="block rounded-xl px-3 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-200"
              onClick={() => setMenuOpen(false)}
            >
              Request demo
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
