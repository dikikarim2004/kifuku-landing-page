import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Network } from "@/components/Network";
import { CTA } from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Network />
      <CTA />
    </div>
  );
};

export default Index;