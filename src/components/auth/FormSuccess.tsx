import Link from "next/link";

type FormSuccessProps = {
  headline: string;
  body: string;
};

export function FormSuccess({ headline, body }: FormSuccessProps) {
  return (
    <div className="rounded-2xl border border-emerald-500/25 bg-emerald-950/30 p-8 text-center backdrop-blur-xl">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h2 className="text-lg font-semibold text-white">{headline}</h2>
      <p className="mt-2 text-sm text-slate-400">{body}</p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-medium text-slate-100 transition hover:border-cyan-500/40 hover:bg-cyan-500/10"
      >
        Back to homepage
      </Link>
    </div>
  );
}
