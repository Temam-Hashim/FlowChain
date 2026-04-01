import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in | FlowChain",
  description: "Sign in to the FlowChain console.",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
