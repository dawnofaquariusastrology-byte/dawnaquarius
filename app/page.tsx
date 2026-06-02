import Nav from "@/components/nav";
import Hero from "@/components/hero";
import ThreeLayers from "@/components/three-layers";
import ArchetypesPreview from "@/components/archetypes-preview";
import HowItWorks from "@/components/how-it-works";
import Employers from "@/components/employers";
import Pricing from "@/components/pricing";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <ThreeLayers />
      <ArchetypesPreview />
      <HowItWorks />
      <Employers />
      <Pricing />
      <Footer />
    </main>
  );
}
