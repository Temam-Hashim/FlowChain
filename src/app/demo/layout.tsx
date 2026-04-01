import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a demo | FlowChain",
  description:
    "Book a product demo or strategy session with the FlowChain solutions team.",
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
