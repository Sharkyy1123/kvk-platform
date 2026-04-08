import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { FeaturedFarmers } from "@/components/home/FeaturedFarmers";
import { TrustSection } from "@/components/home/TrustSection";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <CategoriesSection />
      <FeaturedFarmers />
      <TrustSection />
      <CTASection />
    </>
  );
}
