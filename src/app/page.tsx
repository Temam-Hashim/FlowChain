import { IntroLoader } from "@/components/IntroLoader";
import { MouseGlow } from "@/components/MouseGlow";
import { GsapScrollRefresh } from "@/components/GsapScrollRefresh";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { HowItWorks } from "@/sections/HowItWorks";
import { FinanceFlow } from "@/sections/FinanceFlow";
import { Features } from "@/sections/Features";
import { DashboardPreview } from "@/sections/DashboardPreview";
import { Metrics } from "@/sections/Metrics";
import { FinalCTA } from "@/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <IntroLoader />
      <GsapScrollRefresh />
      <MouseGlow />
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <FinanceFlow />
        <Features />
        <DashboardPreview />
        <Metrics />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
