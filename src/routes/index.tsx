import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { UrgencyStrip } from "@/components/site/UrgencyStrip";
import { Problem } from "@/components/site/Problem";
import { Solution } from "@/components/site/Solution";
import { Biochar } from "@/components/site/Biochar";
import { WhyB3 } from "@/components/site/WhyB3";
import { HowItWorks } from "@/components/site/HowItWorks";
import { DonationCards } from "@/components/site/DonationCards";
import { Traceability } from "@/components/site/Traceability";
import { ImpactDashboard } from "@/components/site/ImpactDashboard";
import { CorporateCSR } from "@/components/site/CorporateCSR";
import { FarmerStories } from "@/components/site/FarmerStories";
import { CSR } from "@/components/site/CSR";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { SiteFooter } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "B3 — Donate Soil. Restore India." },
      {
        name: "description",
        content:
          "Donate B3 — biochar-enriched soil conditioner — to a real Indian farmer. ₹50 = 1 kg. Traceable, geo-tagged, photo-verified.",
      },
      { property: "og:title", content: "B3 — Donate Soil. Restore India." },
      {
        property: "og:description",
        content:
          "₹50 puts 1 kg of biochar-enriched soil conditioner on a real farmer's field. Traceable, photo-verified, geo-tagged.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <UrgencyStrip />
        <Problem />
        <Solution />
        <Biochar />
        <WhyB3 />
        <HowItWorks />
        <DonationCards />
        <Traceability />
        <ImpactDashboard />
        <CorporateCSR />
        <FarmerStories />
        <CSR />
        <FAQ />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
