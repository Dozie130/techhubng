
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Badge } from "./ui/badge";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-tech-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(74,222,128,0.05)_50%,transparent_75%)] bg-[length:500px_500px] animate-[pulse_8s_ease-in-out_infinite]"></div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-4">
          <div className="animate-fadeIn [--animation-delay:200ms]">
            <Badge className="bg-tech-accent/10 text-tech-accent mb-6 backdrop-blur-sm">
              Welcome to the Future
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-tech-light mb-6 animate-fadeIn [--animation-delay:400ms]">
            The Ultimate Tech Shopping Experience
          </h1>
          
          <p className="text-tech-gray text-lg md:text-xl max-w-2xl mb-8 animate-fadeIn [--animation-delay:600ms]">
            Discover cutting-edge technology, premium gadgets, and innovative solutions for the modern tech enthusiast.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn [--animation-delay:800ms]">
            <Button size="lg" className="bg-tech-accent text-tech-black hover:bg-tech-accent/90">
              Shop Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-tech-gray/20 text-tech-light hover:bg-tech-gray/10">
              View Deals
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-tech-black to-transparent"></div>
    </section>
  );
};
