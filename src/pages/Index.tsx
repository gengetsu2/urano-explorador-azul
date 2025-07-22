import HeroSection from "@/components/HeroSection";
import UranusInfo from "@/components/UranusInfo";
import MoonsSection from "@/components/MoonsSection";
import GallerySection from "@/components/GallerySection";
import CuriositySection from "@/components/CuriositySection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <UranusInfo />
      <MoonsSection />
      <GallerySection />
      <CuriositySection />
      <CTASection />
    </main>
  );
};

export default Index;
