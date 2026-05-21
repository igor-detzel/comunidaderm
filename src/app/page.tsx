import { Hero } from "@/components/sections/Hero";
import { WhyDifferent } from "@/components/sections/WhyDifferent";
import { Trails } from "@/components/sections/Trails";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <WhyDifferent />
      <Trails />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
