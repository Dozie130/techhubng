
import { useState } from "react";
import { Search, ShoppingCart, Menu } from "lucide-react";
import { Button } from "./button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-tech-black/80 backdrop-blur-md border-b border-tech-gray/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="text-tech-accent font-bold text-xl">TechHub</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/categories" className="text-tech-light hover:text-tech-accent transition-colors">Categories</a>
            <a href="/deals" className="text-tech-light hover:text-tech-accent transition-colors">Deals</a>
            <a href="/new" className="text-tech-light hover:text-tech-accent transition-colors">New Arrivals</a>
          </div>

          {/* Search and Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-tech-light hover:text-tech-accent">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-tech-light hover:text-tech-accent relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-tech-accent text-tech-black text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-tech-light"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <a href="/categories" className="text-tech-light hover:text-tech-accent">Categories</a>
              <a href="/deals" className="text-tech-light hover:text-tech-accent">Deals</a>
              <a href="/new" className="text-tech-light hover:text-tech-accent">New Arrivals</a>
              <div className="flex items-center space-x-4 pt-4 border-t border-tech-gray/10">
                <Button variant="ghost" size="icon" className="text-tech-light hover:text-tech-accent">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-tech-light hover:text-tech-accent relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-tech-accent text-tech-black text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    0
                  </span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
