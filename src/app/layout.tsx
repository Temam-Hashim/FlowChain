import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FlowChain — Supply Chain Financing for Emerging Markets",
  description:
    "Embedded finance platform connecting suppliers, distributors, merchants, institutions, and banks with real-time credit and settlement.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "FlowChain",
    description: "Modern supply chain financing for emerging markets.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
