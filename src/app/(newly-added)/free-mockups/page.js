import BenefitsSection from "@/app/components/FreeMockups/BenefitsSection";
import "../../styles/free-mockup-style.scss";
import FreeMockUpHeroSection from "@/app/components/FreeMockups/FreeMockUpHeroSection";
import React from "react";
import AuthoritySection from "@/app/components/FreeMockups/AuthoritySection";
import LeadFormSection from "@/app/components/FreeMockups/LeadFormSection";
import ExamplesOfFreeMockup from "@/app/components/FreeMockups/ExamplesOfFreeMockup";
import FAQSection from "@/app/components/MVPIn48Hours/FAQSection";

export const metadata = {
  title:
    "Free App Mockups - Turn Your Idea Into Clickable Design in Minutes | Brilworks",
  description:
    "Have an app idea? Get free, professional clickable mockups in 24-48 hours. No designer needed. No cost. No catch. Make your vision shareable with Brilworks.",
  openGraph: {
    title:
      "Free App Mockups - Turn Your Idea Into Clickable Design in Minutes | Brilworks",
    description:
      "Have an app idea? Get free, professional clickable mockups in 24-48 hours. No designer needed. No cost. No catch. Make your vision shareable with Brilworks.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}free-mockups/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}free-mockups/`,
  },
};
const page = () => {
  return (
    <div className="free-mockup bg-[#0d0f11] text-[#f8fafc]">
      <FreeMockUpHeroSection />
      <BenefitsSection />
      <AuthoritySection />
      <LeadFormSection />
      <ExamplesOfFreeMockup />
      <FAQSection />
    </div>
  );
};

export default page;
