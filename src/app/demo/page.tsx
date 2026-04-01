import { Suspense } from "react";
import { AuthShell } from "@/components/auth/AuthShell";
import { DemoForm } from "./DemoForm";

function DemoLoading() {
  return (
    <AuthShell
      title="Request a demo"
      description="See FlowChain in a live walkthrough—tailored to your corridor, products, and bank partners."
    >
      <div className="glass-card h-[min(520px,70vh)] animate-pulse rounded-2xl border border-white/10 bg-white/[0.03]" />
    </AuthShell>
  );
}

export default function DemoPage() {
  return (
    <Suspense fallback={<DemoLoading />}>
      <DemoForm />
    </Suspense>
  );
}
