
import { Navbar } from "@/components/ui/navbar";
import { HeroSection } from "@/components/hero-section";
import { FeaturedProducts } from "@/components/featured-products";

const Index = () => {
  return (
    <main 
      className="min-h-screen bg-tech-dark text-tech-light"
      role="main"
    >
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
    </main>
  );
};

export default Index;
