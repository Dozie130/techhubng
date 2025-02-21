
import { Navbar } from "@/components/ui/navbar";
import { HeroSection } from "@/components/hero-section";
import { FeaturedProducts } from "@/components/featured-products";

const Index = () => {
  return (
    <div className="min-h-screen bg-tech-dark text-tech-light">
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
    </div>
  );
};

export default Index;
