import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get started | FlowChain",
  description: "Steps to launch a FlowChain pilot and links to sign up or book a demo.",
};

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
