import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { AboutProjectSection } from "@/components/sections/AboutProjectSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div className="bg-sp-base flex min-h-screen w-full flex-col">
      <HeroSection />
      <ProblemSection />
      <AboutProjectSection />
      <HowItWorksSection />
      <FeaturesSection />
      <TeamSection />
      <CTASection />
    </div>
  );
}
